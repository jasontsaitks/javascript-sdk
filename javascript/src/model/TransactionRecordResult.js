/**
 * kent_test_identity_verification
 * To run tests transactions on our trial endpoint in postman: [![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/run-collection/a58f438d101278e2bc62) 
 *
 * The version of the OpenAPI document: 1.0.2-alpha.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DataField from './DataField';
import Record from './Record';
import ServiceError from './ServiceError';
import TransactionRecordResultAllOf from './TransactionRecordResultAllOf';
import VerifyResult from './VerifyResult';

/**
 * The TransactionRecordResult model module.
 * @module model/TransactionRecordResult
 * @version 1.0.2-alpha.7
 */
class TransactionRecordResult {
    /**
     * Constructs a new <code>TransactionRecordResult</code>.
     * @alias module:model/TransactionRecordResult
     * @implements module:model/VerifyResult
     * @implements module:model/TransactionRecordResultAllOf
     */
    constructor() { 
        VerifyResult.initialize(this);TransactionRecordResultAllOf.initialize(this);
        TransactionRecordResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionRecordResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionRecordResult} obj Optional instance to populate.
     * @return {module:model/TransactionRecordResult} The populated <code>TransactionRecordResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionRecordResult();
            VerifyResult.constructFromObject(data, obj);
            TransactionRecordResultAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('TransactionID')) {
                obj['TransactionID'] = ApiClient.convertToType(data['TransactionID'], 'String');
            }
            if (data.hasOwnProperty('UploadedDt')) {
                obj['UploadedDt'] = ApiClient.convertToType(data['UploadedDt'], 'Date');
            }
            if (data.hasOwnProperty('CountryCode')) {
                obj['CountryCode'] = ApiClient.convertToType(data['CountryCode'], 'String');
            }
            if (data.hasOwnProperty('ProductName')) {
                obj['ProductName'] = ApiClient.convertToType(data['ProductName'], 'String');
            }
            if (data.hasOwnProperty('Record')) {
                obj['Record'] = Record.constructFromObject(data['Record']);
            }
            if (data.hasOwnProperty('CustomerReferenceID')) {
                obj['CustomerReferenceID'] = ApiClient.convertToType(data['CustomerReferenceID'], 'String');
            }
            if (data.hasOwnProperty('Errors')) {
                obj['Errors'] = ApiClient.convertToType(data['Errors'], [ServiceError]);
            }
            if (data.hasOwnProperty('InputFields')) {
                obj['InputFields'] = ApiClient.convertToType(data['InputFields'], [DataField]);
            }
        }
        return obj;
    }


}

/**
 * The id for the transaction it will be a GUID.
 * @member {String} TransactionID
 */
TransactionRecordResult.prototype['TransactionID'] = undefined;

/**
 * Time in UTC.
 * @member {Date} UploadedDt
 */
TransactionRecordResult.prototype['UploadedDt'] = undefined;

/**
 * Country Code
 * @member {String} CountryCode
 */
TransactionRecordResult.prototype['CountryCode'] = undefined;

/**
 * Product Name
 * @member {String} ProductName
 */
TransactionRecordResult.prototype['ProductName'] = undefined;

/**
 * @member {module:model/Record} Record
 */
TransactionRecordResult.prototype['Record'] = undefined;

/**
 * Customer Reference ID
 * @member {String} CustomerReferenceID
 */
TransactionRecordResult.prototype['CustomerReferenceID'] = undefined;

/**
 * See <a class=\"link-to-api\" href=\"#section-service-errors\">Errors</a> for explanation of any error encountered.
 * @member {Array.<module:model/ServiceError>} Errors
 */
TransactionRecordResult.prototype['Errors'] = undefined;

/**
 * @member {Array.<module:model/DataField>} InputFields
 */
TransactionRecordResult.prototype['InputFields'] = undefined;


// Implement VerifyResult interface:
/**
 * The id for the transaction it will be a GUID.
 * @member {String} TransactionID
 */
VerifyResult.prototype['TransactionID'] = undefined;
/**
 * Time in UTC.
 * @member {Date} UploadedDt
 */
VerifyResult.prototype['UploadedDt'] = undefined;
/**
 * Country Code
 * @member {String} CountryCode
 */
VerifyResult.prototype['CountryCode'] = undefined;
/**
 * Product Name
 * @member {String} ProductName
 */
VerifyResult.prototype['ProductName'] = undefined;
/**
 * @member {module:model/Record} Record
 */
VerifyResult.prototype['Record'] = undefined;
/**
 * Customer Reference ID
 * @member {String} CustomerReferenceID
 */
VerifyResult.prototype['CustomerReferenceID'] = undefined;
/**
 * See <a class=\"link-to-api\" href=\"#section-service-errors\">Errors</a> for explanation of any error encountered.
 * @member {Array.<module:model/ServiceError>} Errors
 */
VerifyResult.prototype['Errors'] = undefined;
// Implement TransactionRecordResultAllOf interface:
/**
 * @member {Array.<module:model/DataField>} InputFields
 */
TransactionRecordResultAllOf.prototype['InputFields'] = undefined;




export default TransactionRecordResult;

