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


import ApiClient from './ApiClient';
import Address from './model/Address';
import AppendedField from './model/AppendedField';
import Communication from './model/Communication';
import Consent from './model/Consent';
import CountrySubdivision from './model/CountrySubdivision';
import DataField from './model/DataField';
import DataFields from './model/DataFields';
import DataFieldsKYC from './model/DataFieldsKYC';
import DatasourceField from './model/DatasourceField';
import DatasourceResult from './model/DatasourceResult';
import DriverLicence from './model/DriverLicence';
import Location from './model/Location';
import LocationAdditionalFields from './model/LocationAdditionalFields';
import NationalId from './model/NationalId';
import NormalizedDatasourceField from './model/NormalizedDatasourceField';
import NormalizedDatasourceGroupCountry from './model/NormalizedDatasourceGroupCountry';
import Passport from './model/Passport';
import PersonInfo from './model/PersonInfo';
import PersonInfoAdditionalFields from './model/PersonInfoAdditionalFields';
import Record from './model/Record';
import RecordRule from './model/RecordRule';
import ServiceError from './model/ServiceError';
import TransactionRecordResult from './model/TransactionRecordResult';
import TransactionRecordResultAllOf from './model/TransactionRecordResultAllOf';
import TransactionStatus from './model/TransactionStatus';
import VerifyRequest from './model/VerifyRequest';
import VerifyResult from './model/VerifyResult';
import ConfigurationApi from './api/ConfigurationApi';
import ConnectionApi from './api/ConnectionApi';
import VerificationsApi from './api/VerificationsApi';


/**
* To_run_tests_transactions_on_our_trial_endpoint_in_postman__Run_in_Postman_https__run_pstmn_io_button_svg_https__www_getpostman_com_run_collection_a58f438d101278e2bc62.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var TestOnlyIdentityVerification = require('index'); // See note below*.
* var xxxSvc = new TestOnlyIdentityVerification.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new TestOnlyIdentityVerification.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new TestOnlyIdentityVerification.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new TestOnlyIdentityVerification.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0-alpha.1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Address model constructor.
     * @property {module:model/Address}
     */
    Address,

    /**
     * The AppendedField model constructor.
     * @property {module:model/AppendedField}
     */
    AppendedField,

    /**
     * The Communication model constructor.
     * @property {module:model/Communication}
     */
    Communication,

    /**
     * The Consent model constructor.
     * @property {module:model/Consent}
     */
    Consent,

    /**
     * The CountrySubdivision model constructor.
     * @property {module:model/CountrySubdivision}
     */
    CountrySubdivision,

    /**
     * The DataField model constructor.
     * @property {module:model/DataField}
     */
    DataField,

    /**
     * The DataFields model constructor.
     * @property {module:model/DataFields}
     */
    DataFields,

    /**
     * The DataFieldsKYC model constructor.
     * @property {module:model/DataFieldsKYC}
     */
    DataFieldsKYC,

    /**
     * The DatasourceField model constructor.
     * @property {module:model/DatasourceField}
     */
    DatasourceField,

    /**
     * The DatasourceResult model constructor.
     * @property {module:model/DatasourceResult}
     */
    DatasourceResult,

    /**
     * The DriverLicence model constructor.
     * @property {module:model/DriverLicence}
     */
    DriverLicence,

    /**
     * The Location model constructor.
     * @property {module:model/Location}
     */
    Location,

    /**
     * The LocationAdditionalFields model constructor.
     * @property {module:model/LocationAdditionalFields}
     */
    LocationAdditionalFields,

    /**
     * The NationalId model constructor.
     * @property {module:model/NationalId}
     */
    NationalId,

    /**
     * The NormalizedDatasourceField model constructor.
     * @property {module:model/NormalizedDatasourceField}
     */
    NormalizedDatasourceField,

    /**
     * The NormalizedDatasourceGroupCountry model constructor.
     * @property {module:model/NormalizedDatasourceGroupCountry}
     */
    NormalizedDatasourceGroupCountry,

    /**
     * The Passport model constructor.
     * @property {module:model/Passport}
     */
    Passport,

    /**
     * The PersonInfo model constructor.
     * @property {module:model/PersonInfo}
     */
    PersonInfo,

    /**
     * The PersonInfoAdditionalFields model constructor.
     * @property {module:model/PersonInfoAdditionalFields}
     */
    PersonInfoAdditionalFields,

    /**
     * The Record model constructor.
     * @property {module:model/Record}
     */
    Record,

    /**
     * The RecordRule model constructor.
     * @property {module:model/RecordRule}
     */
    RecordRule,

    /**
     * The ServiceError model constructor.
     * @property {module:model/ServiceError}
     */
    ServiceError,

    /**
     * The TransactionRecordResult model constructor.
     * @property {module:model/TransactionRecordResult}
     */
    TransactionRecordResult,

    /**
     * The TransactionRecordResultAllOf model constructor.
     * @property {module:model/TransactionRecordResultAllOf}
     */
    TransactionRecordResultAllOf,

    /**
     * The TransactionStatus model constructor.
     * @property {module:model/TransactionStatus}
     */
    TransactionStatus,

    /**
     * The VerifyRequest model constructor.
     * @property {module:model/VerifyRequest}
     */
    VerifyRequest,

    /**
     * The VerifyResult model constructor.
     * @property {module:model/VerifyResult}
     */
    VerifyResult,

    /**
    * The ConfigurationApi service constructor.
    * @property {module:api/ConfigurationApi}
    */
    ConfigurationApi,

    /**
    * The ConnectionApi service constructor.
    * @property {module:api/ConnectionApi}
    */
    ConnectionApi,

    /**
    * The VerificationsApi service constructor.
    * @property {module:api/VerificationsApi}
    */
    VerificationsApi
};
