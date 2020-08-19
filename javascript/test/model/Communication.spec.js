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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TestOnlyIdentityVerification);
  }
}(this, function(expect, TestOnlyIdentityVerification) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TestOnlyIdentityVerification.Communication();
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

  describe('Communication', function() {
    it('should create an instance of Communication', function() {
      // uncomment below and update the code to test Communication
      //var instane = new TestOnlyIdentityVerification.Communication();
      //expect(instance).to.be.a(TestOnlyIdentityVerification.Communication);
    });

    it('should have the property mobileNumber (base name: "MobileNumber")', function() {
      // uncomment below and update the code to test the property mobileNumber
      //var instane = new TestOnlyIdentityVerification.Communication();
      //expect(instance).to.be();
    });

    it('should have the property telephone (base name: "Telephone")', function() {
      // uncomment below and update the code to test the property telephone
      //var instane = new TestOnlyIdentityVerification.Communication();
      //expect(instance).to.be();
    });

    it('should have the property telephone2 (base name: "Telephone2")', function() {
      // uncomment below and update the code to test the property telephone2
      //var instane = new TestOnlyIdentityVerification.Communication();
      //expect(instance).to.be();
    });

    it('should have the property emailAddress (base name: "EmailAddress")', function() {
      // uncomment below and update the code to test the property emailAddress
      //var instane = new TestOnlyIdentityVerification.Communication();
      //expect(instance).to.be();
    });

  });

}));
