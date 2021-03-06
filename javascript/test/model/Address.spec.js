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
    instance = new KentTestIdentityVerification.Address();
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

  describe('Address', function() {
    it('should create an instance of Address', function() {
      // uncomment below and update the code to test Address
      //var instane = new KentTestIdentityVerification.Address();
      //expect(instance).to.be.a(KentTestIdentityVerification.Address);
    });

    it('should have the property unitNumber (base name: "UnitNumber")', function() {
      // uncomment below and update the code to test the property unitNumber
      //var instane = new KentTestIdentityVerification.Address();
      //expect(instance).to.be();
    });

    it('should have the property buildingNumber (base name: "BuildingNumber")', function() {
      // uncomment below and update the code to test the property buildingNumber
      //var instane = new KentTestIdentityVerification.Address();
      //expect(instance).to.be();
    });

    it('should have the property buildingName (base name: "BuildingName")', function() {
      // uncomment below and update the code to test the property buildingName
      //var instane = new KentTestIdentityVerification.Address();
      //expect(instance).to.be();
    });

    it('should have the property streetName (base name: "StreetName")', function() {
      // uncomment below and update the code to test the property streetName
      //var instane = new KentTestIdentityVerification.Address();
      //expect(instance).to.be();
    });

    it('should have the property streetType (base name: "StreetType")', function() {
      // uncomment below and update the code to test the property streetType
      //var instane = new KentTestIdentityVerification.Address();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "City")', function() {
      // uncomment below and update the code to test the property city
      //var instane = new KentTestIdentityVerification.Address();
      //expect(instance).to.be();
    });

    it('should have the property suburb (base name: "Suburb")', function() {
      // uncomment below and update the code to test the property suburb
      //var instane = new KentTestIdentityVerification.Address();
      //expect(instance).to.be();
    });

    it('should have the property stateProvinceCode (base name: "StateProvinceCode")', function() {
      // uncomment below and update the code to test the property stateProvinceCode
      //var instane = new KentTestIdentityVerification.Address();
      //expect(instance).to.be();
    });

    it('should have the property postalCode (base name: "PostalCode")', function() {
      // uncomment below and update the code to test the property postalCode
      //var instane = new KentTestIdentityVerification.Address();
      //expect(instance).to.be();
    });

    it('should have the property address1 (base name: "Address1")', function() {
      // uncomment below and update the code to test the property address1
      //var instane = new KentTestIdentityVerification.Address();
      //expect(instance).to.be();
    });

    it('should have the property addressType (base name: "AddressType")', function() {
      // uncomment below and update the code to test the property addressType
      //var instane = new KentTestIdentityVerification.Address();
      //expect(instance).to.be();
    });

    it('should have the property stateProvince (base name: "StateProvince")', function() {
      // uncomment below and update the code to test the property stateProvince
      //var instane = new KentTestIdentityVerification.Address();
      //expect(instance).to.be();
    });

  });

}));
