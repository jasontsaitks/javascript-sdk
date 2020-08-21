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

/**
 * The AppendedField model module.
 * @module model/AppendedField
 * @version 1.0.2-alpha.4
 */
class AppendedField {
    /**
     * Constructs a new <code>AppendedField</code>.
     * &lt;p&gt;Types of fields you will see here include&lt;/p&gt;  &lt;table class&#x3D;\&quot;help-page-table\&quot;&gt;    &lt;thead&gt;      &lt;tr&gt;        &lt;td&gt;          &lt;b&gt;FieldName&lt;/b&gt;        &lt;/td&gt;        &lt;td&gt;          &lt;b&gt;Data&lt;/b&gt;        &lt;/td&gt;        &lt;td&gt;          &lt;b&gt;Comments&lt;/b&gt;        &lt;/td&gt;      &lt;/tr&gt;    &lt;/thead&gt;    &lt;tbody&gt;      &lt;tr&gt;        &lt;td&gt;WatchlistState&lt;/td&gt;        &lt;td&gt;Clear&lt;/td&gt;        &lt;td&gt;If the submitted individual did not match any watchlist checks, the appended field data will appear as clear&lt;/td&gt;      &lt;/tr&gt;      &lt;tr&gt;        &lt;td&gt;WatchlistState&lt;/td&gt;        &lt;td&gt;Hit&lt;/td&gt;        &lt;td&gt;If the submitted individual triggered a watchlist hit, the watchlistdata field also be included as below:&lt;/td&gt;      &lt;/tr&gt;      &lt;tr&gt;        &lt;td&gt;WatchlistData&lt;/td&gt;        &lt;td&gt;Name|URL\\tName2|URL&lt;/td&gt;        &lt;td&gt; Name of the source a pipe (|) the url of the source each source is separated with a tab (\\t )&lt;/td&gt;      &lt;/tr&gt;      &lt;tr&gt;        &lt;td&gt;CanadaSixMonthResidency&lt;/td&gt;        &lt;td&gt;YES&lt;/td&gt;        &lt;td&gt;The Canadian Credit Agency provides a flag to indicate that an individual has been at the specified              residence for at least six months.The canadasixmonthresidency field is returned with a value of either YES or NO.&lt;/td&gt;      &lt;/tr&gt;      &lt;tr&gt;        &lt;td&gt;IsDeceased&lt;/td&gt;        &lt;td&gt;False&lt;/td&gt;        &lt;td&gt;The IsDeceased field is returned by various datasources to indicate whether the input information was screened against an available death file.              Check with your Trulioo Technical Account Manager to see which datasources support this option.&lt;/td&gt;      &lt;/tr&gt;      &lt;tr&gt;        &lt;td&gt;IsDeceased&lt;/td&gt;        &lt;td&gt;True&lt;/td&gt;        &lt;td&gt;&lt;/td&gt;      &lt;/tr&gt;      &lt;tr&gt;        &lt;td&gt;FraudFlag&lt;/td&gt;        &lt;td&gt;True&lt;/td&gt;        &lt;td&gt;&lt;/td&gt;      &lt;/tr&gt;      &lt;tr&gt;        &lt;td&gt;FraudFlag&lt;/td&gt;        &lt;td&gt;False&lt;/td&gt;        &lt;td&gt;&lt;/td&gt;      &lt;/tr&gt;    &lt;/tbody&gt;  &lt;/table&gt;  &lt;p&gt;If you are retrieving transaction with address corrected values you will also see address fields in appended data&lt;/p&gt;
     * @alias module:model/AppendedField
     */
    constructor() { 
        
        AppendedField.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AppendedField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AppendedField} obj Optional instance to populate.
     * @return {module:model/AppendedField} The populated <code>AppendedField</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppendedField();

            if (data.hasOwnProperty('FieldName')) {
                obj['FieldName'] = ApiClient.convertToType(data['FieldName'], 'String');
            }
            if (data.hasOwnProperty('Data')) {
                obj['Data'] = ApiClient.convertToType(data['Data'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} FieldName
 */
AppendedField.prototype['FieldName'] = undefined;

/**
 * @member {String} Data
 */
AppendedField.prototype['Data'] = undefined;






export default AppendedField;

