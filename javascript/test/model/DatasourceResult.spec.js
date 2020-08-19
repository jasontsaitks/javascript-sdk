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
    instance = new TestOnlyIdentityVerification.DatasourceResult();
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

  describe('DatasourceResult', function() {
    it('should create an instance of DatasourceResult', function() {
      // uncomment below and update the code to test DatasourceResult
      //var instane = new TestOnlyIdentityVerification.DatasourceResult();
      //expect(instance).to.be.a(TestOnlyIdentityVerification.DatasourceResult);
    });

    it('should have the property datasourceStatus (base name: "DatasourceStatus")', function() {
      // uncomment below and update the code to test the property datasourceStatus
      //var instane = new TestOnlyIdentityVerification.DatasourceResult();
      //expect(instance).to.be();
    });

    it('should have the property datasourceName (base name: "DatasourceName")', function() {
      // uncomment below and update the code to test the property datasourceName
      //var instane = new TestOnlyIdentityVerification.DatasourceResult();
      //expect(instance).to.be();
    });

    it('should have the property datasourceFields (base name: "DatasourceFields")', function() {
      // uncomment below and update the code to test the property datasourceFields
      //var instane = new TestOnlyIdentityVerification.DatasourceResult();
      //expect(instance).to.be();
    });

    it('should have the property appendedFields (base name: "AppendedFields")', function() {
      // uncomment below and update the code to test the property appendedFields
      //var instane = new TestOnlyIdentityVerification.DatasourceResult();
      //expect(instance).to.be();
    });

    it('should have the property errors (base name: "Errors")', function() {
      // uncomment below and update the code to test the property errors
      //var instane = new TestOnlyIdentityVerification.DatasourceResult();
      //expect(instance).to.be();
    });

    it('should have the property fieldGroups (base name: "FieldGroups")', function() {
      // uncomment below and update the code to test the property fieldGroups
      //var instane = new TestOnlyIdentityVerification.DatasourceResult();
      //expect(instance).to.be();
    });

  });

}));
