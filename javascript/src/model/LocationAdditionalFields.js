/**
 * Test Only - Identity Verification
 * To run tests transactions on our trial endpoint in postman:  [![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/run-collection/a58f438d101278e2bc62) 
 *
 * The version of the OpenAPI document: 1.0.0-alpha.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The LocationAdditionalFields model module.
 * @module model/LocationAdditionalFields
 * @version 1.0.0-alpha.1
 */
class LocationAdditionalFields {
    /**
     * Constructs a new <code>LocationAdditionalFields</code>.
     * Additional Fields for Location
     * @alias module:model/LocationAdditionalFields
     */
    constructor() { 
        
        LocationAdditionalFields.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LocationAdditionalFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LocationAdditionalFields} obj Optional instance to populate.
     * @return {module:model/LocationAdditionalFields} The populated <code>LocationAdditionalFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LocationAdditionalFields();

            if (data.hasOwnProperty('Address1')) {
                obj['Address1'] = ApiClient.convertToType(data['Address1'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Address1 is available in certain countries. It can be used to pass a compiled address field instead of sending individual address attributes (such as UnitNumber, BuidlingNumber, BuildingName, StreetName and StreetType).   GlobalGateway will provide a pass through of Address1 directly to connected datasources for the selected country.   Please note: each datasource requires the address fields to be configured in a certain manner, implementing and sending Address1 instead of individual address fields may affect your ability to verify this address.
 * @member {String} Address1
 */
LocationAdditionalFields.prototype['Address1'] = undefined;






export default LocationAdditionalFields;

