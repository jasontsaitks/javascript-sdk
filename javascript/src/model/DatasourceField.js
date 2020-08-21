/**
 * kent_test_identity_verification
 * To run tests transactions on our trial endpoint in postman: [![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/run-collection/a58f438d101278e2bc62) 
 *
 * The version of the OpenAPI document: 1.0.2-alpha.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DatasourceField model module.
 * @module model/DatasourceField
 * @version 1.0.2-alpha.2
 */
class DatasourceField {
    /**
     * Constructs a new <code>DatasourceField</code>.
     * @alias module:model/DatasourceField
     */
    constructor() { 
        
        DatasourceField.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DatasourceField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DatasourceField} obj Optional instance to populate.
     * @return {module:model/DatasourceField} The populated <code>DatasourceField</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DatasourceField();

            if (data.hasOwnProperty('FieldName')) {
                obj['FieldName'] = ApiClient.convertToType(data['FieldName'], 'String');
            }
            if (data.hasOwnProperty('Status')) {
                obj['Status'] = ApiClient.convertToType(data['Status'], 'String');
            }
            if (data.hasOwnProperty('FieldGroup')) {
                obj['FieldGroup'] = ApiClient.convertToType(data['FieldGroup'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} FieldName
 */
DatasourceField.prototype['FieldName'] = undefined;

/**
 * @member {String} Status
 */
DatasourceField.prototype['Status'] = undefined;

/**
 * @member {String} FieldGroup
 */
DatasourceField.prototype['FieldGroup'] = undefined;






export default DatasourceField;

