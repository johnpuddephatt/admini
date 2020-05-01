<template>
  <div>
    <fieldset v-for="fieldsetName in fieldsetNames" class="card">
      <div v-if="fieldsetName" class="card-header">
        <p class="card-header-title">
          {{fieldsetName}}
        </p>
      </div>
      <div class="card-content">
        <admini-fields :fields="getFieldsByFieldset(fieldsetName)" :data="data" :errors="errors"></admini-fields>
      </div>
    </fieldset>
  </div>
</template>

<script>
    import AdminiFields from '../components/AdminiFields.vue'

    export default {

      props: ['fields','data', 'errors'],

      components: {
        AdminiFields
      },

      computed: {
        fieldsetNames: function() {
          return [...new Set(this.fields.map(field => field.fieldset))]
        },
      },

      methods: {
        getFieldsByFieldset: function(fieldsetName) {
          return this.fields.filter(field => field.fieldset === fieldsetName)
        }
      }
    }
</script>
