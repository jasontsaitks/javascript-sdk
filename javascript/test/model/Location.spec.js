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
    instance = new KentTestIdentityVerification.Location();
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

  describe('Location', function() {
    it('should create an instance of Location', function() {
      // uncomment below and update the code to test Location
      //var instane = new KentTestIdentityVerification.Location();
      //expect(instance).to.be.a(KentTestIdentityVerification.Location);
    });

    it('should have the property buildingNumber (base name: "BuildingNumber")', function() {
      // uncomment below and update the code to test the property buildingNumber
      //var instane = new KentTestIdentityVerification.Location();
      //expect(instance).to.be();
    });

    it('should have the property buildingName (base name: "BuildingName")', function() {
      // uncomment below and update the code to test the property buildingName
      //var instane = new KentTestIdentityVerification.Location();
      //expect(instance).to.be();
    });

    it('should have the property unitNumber (base name: "UnitNumber")', function() {
      // uncomment below and update the code to test the property unitNumber
      //var instane = new KentTestIdentityVerification.Location();
      //expect(instance).to.be();
    });

    it('should have the property streetName (base name: "StreetName")', function() {
      // uncomment below and update the code to test the property streetName
      //var instane = new KentTestIdentityVerification.Location();
      //expect(instance).to.be();
    });

    it('should have the property streetType (base name: "StreetType")', function() {
      // uncomment below and update the code to test the property streetType
      //var instane = new KentTestIdentityVerification.Location();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "City")', function() {
      // uncomment below and update the code to test the property city
      //var instane = new KentTestIdentityVerification.Location();
      //expect(instance).to.be();
    });

    it('should have the property suburb (base name: "Suburb")', function() {
      // uncomment below and update the code to test the property suburb
      //var instane = new KentTestIdentityVerification.Location();
      //expect(instance).to.be();
    });

    it('should have the property county (base name: "County")', function() {
      // uncomment below and update the code to test the property county
      //var instane = new KentTestIdentityVerification.Location();
      //expect(instance).to.be();
    });

    it('should have the property stateProvinceCode (base name: "StateProvinceCode")', function() {
      // uncomment below and update the code to test the property stateProvinceCode
      //var instane = new KentTestIdentityVerification.Location();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "Country")', function() {
      // uncomment below and update the code to test the property country
      //var instane = new KentTestIdentityVerification.Location();
      //expect(instance).to.be();
    });

    it('should have the property postalCode (base name: "PostalCode")', function() {
      // uncomment below and update the code to test the property postalCode
      //var instane = new KentTestIdentityVerification.Location();
      //expect(instance).to.be();
    });

    it('should have the property pOBox (base name: "POBox")', function() {
      // uncomment below and update the code to test the property pOBox
      //var instane = new KentTestIdentityVerification.Location();
      //expect(instance).to.be();
    });

    it('should have the property additionalFields (base name: "AdditionalFields")', function() {
      // uncomment below and update the code to test the property additionalFields
      //var instane = new KentTestIdentityVerification.Location();
      //expect(instance).to.be();
    });

  });

}));
