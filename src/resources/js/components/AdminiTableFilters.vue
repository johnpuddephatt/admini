<template>
  <nav class="navbar navbar__filter" role="navigation">
    <div class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-filter" v-for="filter in filters" >
          <!-- Checkbox and radio group -->
          <b-field v-if="['b-checkbox-button','b-radio-button'].includes(filter.control)">
            <component
              :key="option.value"
              :is="filter.control"
              v-for="option in filter.options"
              v-model="activeFilters[filter.name]"
              :native-value="option.value || true"
              :type="option.type">
              <b-icon v-if="option.icon" :icon="option.icon"></b-icon>
              <span>{{ option.label }}</span>
            </component>
          </b-field>
          <!-- Dropdown -->
          <b-dropdown v-if="filter.control === 'b-dropdown'" v-model="activeFilters[filter.name]" aria-role="list">
            <button class="button" type="button" slot="trigger">
              <b-icon icon="earth"></b-icon>
              <span>{{ activeFilters[filter.name].length  ? filter.options.filter(option => option.value === activeFilters[filter.name] )[0]['label'] : filter.label}}</span>
              <b-icon icon="menu-down"></b-icon>
            </button>
            <b-dropdown-item
              :value="option.value"
              :key="option.value"
              aria-role="listitem"
              v-for="option in filter.options">
              <div class="media">
                <b-icon v-if="option.icon" :icon="option.icon" class="media-left"></b-icon>
                <div class="media-content">
                  <h3>{{option.label}}</h3>
                  <small>{{option.description}}</small>
                </div>
              </div>
            </b-dropdown-item>
          </b-dropdown>
        </div>
        <b-button @click="$emit('reset-filters')" type="is-text">Clear filters</b-button>

      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="control search-control">
            <b-input width="40" rounded placeholder="Search" type="text" v-model="searchString" @input="$emit('update-search', $event)" :loading="isSearching"></b-input>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {

      props: ['filters', 'activeFilters', 'isSearching'],

      data() {
        return {
          searchString: ''
        }
      },

      computed: {
      },

      methods: {

      }
    }
</script>
