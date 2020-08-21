/**
 * kent_test_identity_verification
 * To run tests transactions on our trial endpoint in postman: [![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/run-collection/a58f438d101278e2bc62) 
 *
 * The version of the OpenAPI document: 1.0.2-alpha.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DatasourceResult from './DatasourceResult';
import RecordRule from './RecordRule';
import ServiceError from './ServiceError';

/**
 * The Record model module.
 * @module model/Record
 * @version 1.0.2-alpha.5
 */
class Record {
    /**
     * Constructs a new <code>Record</code>.
     * @alias module:model/Record
     */
    constructor() { 
        
        Record.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Record</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Record} obj Optional instance to populate.
     * @return {module:model/Record} The populated <code>Record</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Record();

            if (data.hasOwnProperty('TransactionRecordID')) {
                obj['TransactionRecordID'] = ApiClient.convertToType(data['TransactionRecordID'], 'String');
            }
            if (data.hasOwnProperty('RecordStatus')) {
                obj['RecordStatus'] = ApiClient.convertToType(data['RecordStatus'], 'String');
            }
            if (data.hasOwnProperty('DatasourceResults')) {
                obj['DatasourceResults'] = ApiClient.convertToType(data['DatasourceResults'], [DatasourceResult]);
            }
            if (data.hasOwnProperty('Errors')) {
                obj['Errors'] = ApiClient.convertToType(data['Errors'], [ServiceError]);
            }
            if (data.hasOwnProperty('Rule')) {
                obj['Rule'] = RecordRule.constructFromObject(data['Rule']);
            }
        }
        return obj;
    }


}

/**
 * The TransactionRecordID, this is the ID you will use to fetch the transaction again.
 * @member {String} TransactionRecordID
 */
Record.prototype['TransactionRecordID'] = undefined;

/**
 * 'match' or 'nomatch' if the verification passed the rules configured on your account this will be 'match'.
 * @member {String} RecordStatus
 */
Record.prototype['RecordStatus'] = undefined;

/**
 * Results for each datasource that was queried.
 * @member {Array.<module:model/DatasourceResult>} DatasourceResults
 */
Record.prototype['DatasourceResults'] = undefined;

/**
 * @member {Array.<module:model/ServiceError>} Errors
 */
Record.prototype['Errors'] = undefined;

/**
 * @member {module:model/RecordRule} Rule
 */
Record.prototype['Rule'] = undefined;






export default Record;

