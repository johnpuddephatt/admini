<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-8-tablet is-7-desktop is-6-widescreen">
        <h1 class="page-title">Create</h1>
        <form v-if="form.fields" method="POST" :action="this.$route.params.model + '/store'" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
          <b-tabs v-if="tabNames.length > 1" :animated="false">
            <b-tab-item v-for="tabName in tabNames" :key="tabName || 'other'" :label="tabName || 'Other'">
              <admini-fieldsets :fields="getFieldsByTab(tabName)" :data="form.data" :errors="form.errors.errors"></admini-fieldsets>
            </b-tab-item>
          </b-tabs>
          <admini-fieldsets v-else :fields="form.fields" :data="form.data" :errors="form.errors.errors"></admini-fieldsets>

          <b-button tag="input" value="Reset" @click="form.reset()" />
          <b-button class="is-primary" tag="input" native-type="submit" value="Save" />
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import Form from '../core/Form'

import AdminiFieldsets from '../components/AdminiFieldsets.vue'

// import hljs from 'highlight.js'
// import 'highlight.js/styles/github.css';

export default {

  components: {
    AdminiFieldsets
  },

  data: function() {
    return {
      form: '',
    }
  },

  computed: {
    tabNames: function() {
      return [...new Set(this.form.fields.map(field => field.tab))]
    },
  },

  created() {
    axios.get('/admini/' + this.$route.params.model + '/create')
      .then(({data}) => { this.populateData(data.fields, data.entry) });
  },

  methods: {
    onSubmit() {
      this.form.post('/admini/' + this.$route.params.model + '/store')
    },

    populateData(fields, entry) {
      this.form = new Form(fields, entry);
      // hljs.initHighlightingOnLoad();
    },

    getFieldsByTab: function(tabName) {
      return this.form.fields.filter(field => field.tab === tabName)
    }
  }
}
</script>
