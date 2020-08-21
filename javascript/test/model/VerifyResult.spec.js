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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KentTestIdentityVerification);
  }
}(this, function(expect, KentTestIdentityVerification) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KentTestIdentityVerification.VerifyResult();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('VerifyResult', function() {
    it('should create an instance of VerifyResult', function() {
      // uncomment below and update the code to test VerifyResult
      //var instane = new KentTestIdentityVerification.VerifyResult();
      //expect(instance).to.be.a(KentTestIdentityVerification.VerifyResult);
    });

    it('should have the property transactionID (base name: "TransactionID")', function() {
      // uncomment below and update the code to test the property transactionID
      //var instane = new KentTestIdentityVerification.VerifyResult();
      //expect(instance).to.be();
    });

    it('should have the property uploadedDt (base name: "UploadedDt")', function() {
      // uncomment below and update the code to test the property uploadedDt
      //var instane = new KentTestIdentityVerification.VerifyResult();
      //expect(instance).to.be();
    });

    it('should have the property countryCode (base name: "CountryCode")', function() {
      // uncomment below and update the code to test the property countryCode
      //var instane = new KentTestIdentityVerification.VerifyResult();
      //expect(instance).to.be();
    });

    it('should have the property productName (base name: "ProductName")', function() {
      // uncomment below and update the code to test the property productName
      //var instane = new KentTestIdentityVerification.VerifyResult();
      //expect(instance).to.be();
    });

    it('should have the property record (base name: "Record")', function() {
      // uncomment below and update the code to test the property record
      //var instane = new KentTestIdentityVerification.VerifyResult();
      //expect(instance).to.be();
    });

    it('should have the property customerReferenceID (base name: "CustomerReferenceID")', function() {
      // uncomment below and update the code to test the property customerReferenceID
      //var instane = new KentTestIdentityVerification.VerifyResult();
      //expect(instance).to.be();
    });

    it('should have the property errors (base name: "Errors")', function() {
      // uncomment below and update the code to test the property errors
      //var instane = new KentTestIdentityVerification.VerifyResult();
      //expect(instance).to.be();
    });

  });

}));
