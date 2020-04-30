<template>
    <div class="container">

      <h1 class="page-title">Table of {{model}}</h1>
      <router-link class="button is-primary" :to="`/${model}/create`">Create new</router-link>

      <admini-table :model="model">
                    </admini-table>

    </div>
</template>

<script>
  var debounce = require('debounce');

  import AdminiTable from '../components/AdminiTable.vue'

  export default {

    components: {
      AdminiTable
    },

    data() {
      return {
        model: ''
      }
    },

    // computed: {
    //   model: function() {
    //     return this.$route.params.model
    //   }
    // },

    created() {
      this.model =  this.$route.params.model
    },

    beforeRouteUpdate (to, from, next) {
      this.model = to.params.model;
      next();
    },


  }
</script>
