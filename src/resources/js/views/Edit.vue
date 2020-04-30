<template>
  <div class="container">
    <h1 class="page-title">Edit</h1>

    <form v-if="form.fields" method="POST" :action="this.$route.params.model + '/' + this.$route.params.id" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">

      <b-tabs :animated="false">
        <b-tab-item v-for="tabName in tabNames" :key="tabName || 'other'" :label="tabName || 'Other'">
          <admini-fieldsets :tabs="getFieldsByTab(tabName)" :data="form.data" :errors="form.errors.errors"></admini-fieldsets>
        </b-tab-item>
      </b-tabs>

      <b-button tag="input" value="Reset" @click="form.reset()" />
      <b-button class="is-primary" tag="input" native-type="submit" value="Save" />

    </form>

    <b-collapse :open="false" position="is-bottom" aria-id="contentIdForA11y1">
      <a slot="trigger" slot-scope="props" aria-controls="contentIdForA11y1">
        <b-icon :icon="!props.open ? 'menu-down' : 'menu-up'"></b-icon>
        {{ !props.open ? 'All options' : 'Fewer options' }}
      </a>
      <pre><code class="JSON">{{form}}</code></pre>
    </b-collapse>

  </div>
</template>


<script>
import Form from '../core/Form'

import AdminiFieldsets from '../components/AdminiFieldsets.vue'

import hljs from 'highlight.js'
import 'highlight.js/styles/github.css';


export default {

  components: {
    AdminiFieldsets,
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

    // fieldsets: function() {
    //   return [...new Set(this.form.fields.map(field => field.tab))]
    // }

  },

  created() {
    axios.get('/' + this.$route.params.model + '/' + this.$route.params.id)
      .then(({data}) => { this.populateData(data.fields, data.entry) });
  },

  methods: {

    onSubmit() {
      this.form.put('/' + this.$route.params.model + '/' + this.$route.params.id)
    },

    populateData(fields, entry) {
      this.form = new Form(fields, entry);
      hljs.initHighlightingOnLoad();
    },

    getFieldsByTab: function(tabName) {
      return this.form.fields.filter(field => field.tab === tabName)
    }
  }
}
</script>
