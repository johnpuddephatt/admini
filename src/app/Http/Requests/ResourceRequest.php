<?php

namespace Admini\app\Http\Requests;

use Admini\Admini;
use Illuminate\Foundation\Http\FormRequest;

class ResourceRequest extends FormRequest
{

      public function resourceClass($resourceName = null)
      {
        return tap(Admini::resourceForKey($resourceName ?? $this->resource), function ($resource) {
          abort_if(is_null($resource), 404);
        });
      }

      public function newResource() {
        $resourceClass = $this->resourceClass();
        return new $resourceClass;
      }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
      // @todo: check auth
      return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
        ];
    }
}
