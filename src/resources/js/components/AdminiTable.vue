<template>
  <div>
    <admini-table-filters v-if="resource.filters"
                          :filters="resource.filters"
                          :isSearching="isSearching"
                          :activeFilters="activeFilters"
                          @reset-filters="resetFilters"
                          @update-search="updateSearch">
                          </admini-table-filters>

    <b-table v-if="resource.entries"
            :data="resource.entries.data"
            :key="resource.title"
            paginated
            backend-pagination
            :per-page="resource.entries.per_page"
            :total="resource.entries.total"
            @page-change="onPageChange"
            backend-sorting
            @sort="onSort"
            :loading="dataLoading"
            :checked-rows.sync="checkedRows"
            checkable >
      <template slot-scope="props">
        <b-table-column v-for="column in resource.columns" :label="column.label" :field="column.name" :sortable="column.sortable" :numeric="column.numeric">
          <span v-html="format(props.row[column.name], column.filter)"></span>
        </b-table-column>
        <b-table-column :key="'deleted'">
          <b-tag v-if="props.row.deleted_at" type="is-danger">Deleted</b-tag>
        </b-table-column>
        <b-table-column label="Actions" field="actions" :key="'actions'">
          <b-field>
            <p class="control">
              <router-link :to="'/' + $route.params.model + '/' + props.row.id" class="button is-primary">
                 Edit
              </router-link>
            </p>
            <p class="control">
              <b-dropdown position="is-bottom-left">
                <button class="button is-primary" slot="trigger">
                  <b-icon icon="menu-down"></b-icon>
                </button>
                <b-dropdown-item v-if="props.row.deleted_at" @click="forceDeleteItem(props.row.id)">Permanently delete</b-dropdown-item>
                <b-dropdown-item v-else @click="deleteItem(props.row.id)">Delete</b-dropdown-item>
              </b-dropdown>
            </p>
        </b-field>
        </b-table-column>
      </template>

      <template v-if="!dataLoading" slot="empty">
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>
              <b-icon
                icon="emoticon-sad"
                size="is-large">
              </b-icon>
            </p>
            <p>No results found.</p>
          </div>
        </section>
      </template>

      <template slot="bottom-left">
       <p v-if="checkedRows.length">{{ checkedRows.length }} entries selected</p>
       <p v-else-if="resource.entries.total">Showing {{ resource.entries.from }} to {{resource.entries.to}} of {{resource.entries.total}} entries</p>
      </template>
    </b-table>
  </div>
</template>

<script>
    var debounce = require('debounce');

    import AdminiTableFilters from '../components/AdminiTableFilters.vue'

    export default {

      components: {
        AdminiTableFilters
      },

      props: [ 'model' ],

      data() {
        return {
          resource: [],
          page: 1,
          checkedRows: [],
          sortField: 'id',
          sortOrder: 'asc',
          searchString: '',
          activeFilters: {
          },
          dataLoading: false,
          filtersLoaded: false,
          isSearching: false,
        }
      },

      computed: {
        queryString: function () {
          let string = [
            `?page=${ this.page }`,
            `order_by=${this.sortField }`,
            `order=${this.sortOrder}`,
            `s=${this.searchString}`,
            this.filterString
          ]
          return string.join('&');
        },

        filterString: function() {
          let filterArray = [];
          Object.keys(this.activeFilters).map(e => {
            if(this.activeFilters[e] != '') filterArray.push(`filter[${e}]=${this.activeFilters[e]}`)
          });
          return filterArray.join('&');
        }
      },

      watch: {
        activeFilters: {
          handler() {
            this.fetchData();
          },
          deep: true,
        },

        searchString: function () {
          this.doSearch();
        },

        model: function() {
          this.fetchData();
        }
      },

      created() {
        this.fetchData();
      },

      methods: {

        format(value, filter){
          if(!filter || !Vue.filter(filter)) return value;
          return Vue.filter(filter)(value)
        },

        deleteItem(id) {
          this.$buefy.dialog.confirm({
            title: 'Permanently deleting entry',
            message: 'Are you sure you want to <b>delete</b> this entry?',
            confirmText: 'Delete',
            type: 'is-warning',
            hasIcon: true,
            onConfirm: () => axios.delete('/' + this.model + '/' + id + '/delete')
              .then(({ data }) => this.postDelete(data))
          })
        },

        forceDeleteItem(id) {
          this.$buefy.dialog.confirm({
            title: 'Deleting entry',
            message: 'Are you sure you want to <b>permanently delete</b> this entry?',
            confirmText: 'Permanently delete',
            type: 'is-danger',
            hasIcon: true,
            onConfirm: () => axios.delete('/' + this.model + '/' + id + '/forcedelete')
              .then(({ data }) => this.postDelete(data))
          })
        },

        postDelete(data) {
          this.$buefy.snackbar.open({
                                message: data.message,
                                position: 'is-bottom-right',
                                type: data.type
                              });
          this.fetchData()
        },

        fetchData(model = this.model) {
          this.dataLoading = true;
          axios.get(`/${ model }/index/${ this.queryString }` )
            .then(({data}) => this.populateData(data));
        },

        populateData(data) {
          this.resource = data;
          this.dataLoading = false;
          this.isSearching = false;
          if(!this.filtersLoaded && this.resource.filters) {
            this.resetFilters();
          }
        },

        updateSearch(searchString) {
          this.searchString = searchString;
        },

        doSearch: debounce(function(){
          this.isSearching = true
          this.fetchData();
        }, 500),

        resetFilters() {
          this.resource.filters.forEach(filter => this.$set(this.activeFilters, filter.name, (filter.options.length > 1 ? [] : '')));
          this.filtersLoaded = true;
        },

        onPageChange(page) {
          this.page = page
          this.fetchData()
        },

        onSort(field, order) {
          this.sortField = field
          this.sortOrder = order
          this.fetchData()
        },

      }
    }
</script>
