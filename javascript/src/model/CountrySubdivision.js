/**
 * Identity Verification
 * To run tests transactions on our trial endpoint in postman:  [![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/run-collection/a58f438d101278e2bc62) 
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CountrySubdivision model module.
 * @module model/CountrySubdivision
 * @version v1
 */
class CountrySubdivision {
    /**
     * Constructs a new <code>CountrySubdivision</code>.
     * ISO 3166-2 break down of the country
     * @alias module:model/CountrySubdivision
     */
    constructor() { 
        
        CountrySubdivision.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CountrySubdivision</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CountrySubdivision} obj Optional instance to populate.
     * @return {module:model/CountrySubdivision} The populated <code>CountrySubdivision</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CountrySubdivision();

            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Code')) {
                obj['Code'] = ApiClient.convertToType(data['Code'], 'String');
            }
            if (data.hasOwnProperty('ParentCode')) {
                obj['ParentCode'] = ApiClient.convertToType(data['ParentCode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name of the area, in english or one of the languages of the country
 * @member {String} Name
 */
CountrySubdivision.prototype['Name'] = undefined;

/**
 * Code for the area
 * @member {String} Code
 */
CountrySubdivision.prototype['Code'] = undefined;

/**
 * Code of the parent entity
 * @member {String} ParentCode
 */
CountrySubdivision.prototype['ParentCode'] = undefined;






export default CountrySubdivision;

