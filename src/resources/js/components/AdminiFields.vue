<template>
  <div>
    <b-field v-for="field in fields" :label="field.label" :message="errors[field.name] || (field.fieldProps ? field.fieldProps.message: '') || null" v-bind="field.fieldProps" :key="field.name" :type="errors[field.name] ? 'is-danger' : null">

      <!-- Buefy Autocomplete -->
      <div v-if="field.control == 'b-autocomplete'">
        <b-autocomplete v-bind="field.inputProps" @select="selected => data[name=field.name] = selected[field.inputProps.dataKey]"/>
        <input type="hidden" v-model="data[name=field.name]" >
      </div>

      <!-- Buefy datetimepicker -->
      <!-- <component v-else-if="['b-datetimepicker'].includes(field.control)" :is="field.control" v-model="convertStringToDate(data[name=field.name])" v-bind="field.inputProps"></component> -->

      <component v-else-if="['b-select'].includes(field.control)" :is="field.control || 'b-input'" v-model="data[name=field.name]" v-bind="field.inputProps">
          <option v-for="option in field.dataProps.data" :value="field.dataProps.store_as ? option[field.dataProps.store_as] : option">{{ field.dataProps.display_as ? option[field.dataProps.display_as] : option }} </option>
      </component>

      <admini-table v-else-if="field.control == 'b-table'" model="posts">

      </admini-table>


      <!-- All other components -->
      <component v-else :is="field.control || 'b-input'" v-model="data[name=field.name]" v-bind="field.inputProps"></component>
    </b-field>

  </div>
</template>

<script>
    import { VueEditor } from "vue2-editor";
    import AdminiTable from '../components/AdminiTable.vue'

    // import { ImageDrop } from 'quill-image-drop-module'
    // import ImageResize from 'quill-image-resize-module'

    // Quill.register('modules/imageDrop', ImageDrop)
    // Quill.register('modules/imageResize', ImageResize)

    export default {

      props: ['fields','data', 'errors'],

      components: {
        VueEditor,
        AdminiTable
      },

      methods: {
        convertStringToDate(value) {
          return new Date(value);
        }
      },

      data: function() {
        return {
          // customModulesForEditor: [{ alias: "imageDrop", module: ImageDrop }, { alias: "imageResize", module: ImageResize }],
          // editorSettings: {
          //   modules: {
          //     imageDrop: true,
          //     imageResize: {}
          //   }
          // }
        }
      }
    }
</script>
