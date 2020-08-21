/**
 * kent_test_identity_verification
 * To run tests transactions on our trial endpoint in postman: [![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/run-collection/a58f438d101278e2bc62) 
 *
 * The version of the OpenAPI document: 1.0.2-alpha.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import LocationAdditionalFields from './LocationAdditionalFields';

/**
 * The Location model module.
 * @module model/Location
 * @version 1.0.2-alpha.4
 */
class Location {
    /**
     * Constructs a new <code>Location</code>.
     * @alias module:model/Location
     */
    constructor() { 
        
        Location.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Location</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Location} obj Optional instance to populate.
     * @return {module:model/Location} The populated <code>Location</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Location();

            if (data.hasOwnProperty('BuildingNumber')) {
                obj['BuildingNumber'] = ApiClient.convertToType(data['BuildingNumber'], 'String');
            }
            if (data.hasOwnProperty('BuildingName')) {
                obj['BuildingName'] = ApiClient.convertToType(data['BuildingName'], 'String');
            }
            if (data.hasOwnProperty('UnitNumber')) {
                obj['UnitNumber'] = ApiClient.convertToType(data['UnitNumber'], 'String');
            }
            if (data.hasOwnProperty('StreetName')) {
                obj['StreetName'] = ApiClient.convertToType(data['StreetName'], 'String');
            }
            if (data.hasOwnProperty('StreetType')) {
                obj['StreetType'] = ApiClient.convertToType(data['StreetType'], 'String');
            }
            if (data.hasOwnProperty('City')) {
                obj['City'] = ApiClient.convertToType(data['City'], 'String');
            }
            if (data.hasOwnProperty('Suburb')) {
                obj['Suburb'] = ApiClient.convertToType(data['Suburb'], 'String');
            }
            if (data.hasOwnProperty('County')) {
                obj['County'] = ApiClient.convertToType(data['County'], 'String');
            }
            if (data.hasOwnProperty('StateProvinceCode')) {
                obj['StateProvinceCode'] = ApiClient.convertToType(data['StateProvinceCode'], 'String');
            }
            if (data.hasOwnProperty('Country')) {
                obj['Country'] = ApiClient.convertToType(data['Country'], 'String');
            }
            if (data.hasOwnProperty('PostalCode')) {
                obj['PostalCode'] = ApiClient.convertToType(data['PostalCode'], 'String');
            }
            if (data.hasOwnProperty('POBox')) {
                obj['POBox'] = ApiClient.convertToType(data['POBox'], 'String');
            }
            if (data.hasOwnProperty('AdditionalFields')) {
                obj['AdditionalFields'] = LocationAdditionalFields.constructFromObject(data['AdditionalFields']);
            }
        }
        return obj;
    }


}

/**
 * House / Civic / Building number of home address.
 * @member {String} BuildingNumber
 */
Location.prototype['BuildingNumber'] = undefined;

/**
 * Name of building of home address.
 * @member {String} BuildingName
 */
Location.prototype['BuildingName'] = undefined;

/**
 * Flat/Unit/Apartment number of home address.
 * @member {String} UnitNumber
 */
Location.prototype['UnitNumber'] = undefined;

/**
 * Street name of home address.
 * @member {String} StreetName
 */
Location.prototype['StreetName'] = undefined;

/**
 * Street type of home address (Typically St, Rd etc).
 * @member {String} StreetType
 */
Location.prototype['StreetType'] = undefined;

/**
 * City of home address.
 * @member {String} City
 */
Location.prototype['City'] = undefined;

/**
 * Suburb / Subdivision / Municipality of home address.
 * @member {String} Suburb
 */
Location.prototype['Suburb'] = undefined;

/**
 * County / District of home address.
 * @member {String} County
 */
Location.prototype['County'] = undefined;

/**
 * State of home address. US sources expect 2 characters. Australian sources expect 2 or 3 characters. Can be gotten using the <a class=\"link-to-api\" href=\"#get-country-subdivisions\">Get Country Subdivisions</a> call.
 * @member {String} StateProvinceCode
 */
Location.prototype['StateProvinceCode'] = undefined;

/**
 * Country of home address (ISO 3166-1 alpha-2 code).
 * @member {String} Country
 */
Location.prototype['Country'] = undefined;

/**
 * ZIP Code or Postal Code of home address.
 * @member {String} PostalCode
 */
Location.prototype['PostalCode'] = undefined;

/**
 * Post Office Box.
 * @member {String} POBox
 */
Location.prototype['POBox'] = undefined;

/**
 * @member {module:model/LocationAdditionalFields} AdditionalFields
 */
Location.prototype['AdditionalFields'] = undefined;






export default Location;

