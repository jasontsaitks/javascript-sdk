/**
 * Identity Verification
 * To run tests transactions on our trial endpoint in postman:  [![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/run-collection/a58f438d101278e2bc62) 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";

/**
* Connection service.
* @module api/ConnectionApi
* @version 1.0.0
*/
export default class ConnectionApi {

    /**
    * Constructs a new ConnectionApi. 
    * @alias module:api/ConnectionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the testAuthentication operation.
     * @callback module:api/ConnectionApi~testAuthenticationCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Test Authentication
     * This method enables you to check if your credentials are valid. You will need to use ApiKeyAuth authentication to ensure a successful response.
     * @param {module:api/ConnectionApi~testAuthenticationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    testAuthentication(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/connection/v1/testauthentication', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
