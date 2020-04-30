import Errors from './Errors';
import {SnackbarProgrammatic as Snackbar} from 'buefy';
import router from '../routes'

class Form {
    /**
     * Create a new Form instance.
     *
     * @param {object} data
     */
    constructor(fields,entry = null) {
        this.fields = fields;

        if(entry) {

          let datetimepickerFields = fields.filter(field => field.control == 'b-datetimepicker').map(field => field['name']);
          datetimepickerFields.forEach(name => entry[name] = new Date(entry[name]));

          this.data = entry;
          this.originalData = JSON.parse(JSON.stringify(entry));
        }

        this.errors = new Errors();
    }

    reset() {
      this.data = this.originalData;
      this.errors.clear();
      Snackbar.open({
        message: `Changes have been reset`,
        position: 'is-bottom-right',
        type: 'is-success'
      });
    }

    /**
     * Send a POST request to the given URL.
     * .
     * @param {string} url
     */
    post(url) {
        return this.submit('post', url);
    }


    /**
     * Send a PUT request to the given URL.
     * .
     * @param {string} url
     */
    put(url) {
        return this.submit('put', url);
    }


    /**
     * Send a PATCH request to the given URL.
     * .
     * @param {string} url
     */
    patch(url) {
        return this.submit('patch', url);
    }


    /**
     * Send a DELETE request to the given URL.
     * .
     * @param {string} url
     */
    delete(url) {
        return this.submit('delete', url);
    }


    /**
     * Submit the form.
     *
     * @param {string} requestType
     * @param {string} url
     */
    submit(requestType, url) {
        return new Promise((resolve, reject) => {
            axios[requestType](url, this.data)
                .then(response => {
                    this.onSuccess(response.data);
                    this.response = response;

                    resolve(response.data);
                })
                .catch(error => {
                  this.onFail(error.response.data);
                  // reject(error.response.data);
                });
        });
    }


    /**
     * Handle a successful form submission.
     *
     * @param {object} data
     */
    onSuccess(data) {
      Snackbar.open({
        message: data.message.errorInfo ? `<b>Database error:</b> ${data.message.errorInfo[2]}` : data.message,
        position: 'is-bottom-right',
        type: data.type
      });

      if(data.entry_id) {
        router.push(`./${data.entry_id}`)
      }
    }


    /**
     * Handle a failed form submission.
     *
     * @param {object} errors
     */
    onFail(errors) {
        this.errors.message = errors.message;
        this.errors.record(errors.errors);
        Snackbar.open({
          message: errors.message ?? 'An error has occured',
          position: 'is-bottom-right',
          type: 'is-danger'
        });
    }
}

export default Form;
