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
    instance = new KentTestIdentityVerification.Consent();
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

  describe('Consent', function() {
    it('should create an instance of Consent', function() {
      // uncomment below and update the code to test Consent
      //var instane = new KentTestIdentityVerification.Consent();
      //expect(instance).to.be.a(KentTestIdentityVerification.Consent);
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new KentTestIdentityVerification.Consent();
      //expect(instance).to.be();
    });

    it('should have the property text (base name: "Text")', function() {
      // uncomment below and update the code to test the property text
      //var instane = new KentTestIdentityVerification.Consent();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "Url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new KentTestIdentityVerification.Consent();
      //expect(instance).to.be();
    });

  });

}));
