/**
 * Identity Verification
 * To run tests transactions on our trial endpoint in postman:  [![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/run-collection/a58f438d101278e2bc62) 
 *
 * The version of the OpenAPI document: v1
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
    factory(root.expect, root.IdentityVerification);
  }
}(this, function(expect, IdentityVerification) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new IdentityVerification.PersonInfo();
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

  describe('PersonInfo', function() {
    it('should create an instance of PersonInfo', function() {
      // uncomment below and update the code to test PersonInfo
      //var instane = new IdentityVerification.PersonInfo();
      //expect(instance).to.be.a(IdentityVerification.PersonInfo);
    });

    it('should have the property firstGivenName (base name: "FirstGivenName")', function() {
      // uncomment below and update the code to test the property firstGivenName
      //var instane = new IdentityVerification.PersonInfo();
      //expect(instance).to.be();
    });

    it('should have the property middleName (base name: "MiddleName")', function() {
      // uncomment below and update the code to test the property middleName
      //var instane = new IdentityVerification.PersonInfo();
      //expect(instance).to.be();
    });

    it('should have the property firstSurName (base name: "FirstSurName")', function() {
      // uncomment below and update the code to test the property firstSurName
      //var instane = new IdentityVerification.PersonInfo();
      //expect(instance).to.be();
    });

    it('should have the property secondSurname (base name: "SecondSurname")', function() {
      // uncomment below and update the code to test the property secondSurname
      //var instane = new IdentityVerification.PersonInfo();
      //expect(instance).to.be();
    });

    it('should have the property iSOLatin1Name (base name: "ISOLatin1Name")', function() {
      // uncomment below and update the code to test the property iSOLatin1Name
      //var instane = new IdentityVerification.PersonInfo();
      //expect(instance).to.be();
    });

    it('should have the property dayOfBirth (base name: "DayOfBirth")', function() {
      // uncomment below and update the code to test the property dayOfBirth
      //var instane = new IdentityVerification.PersonInfo();
      //expect(instance).to.be();
    });

    it('should have the property monthOfBirth (base name: "MonthOfBirth")', function() {
      // uncomment below and update the code to test the property monthOfBirth
      //var instane = new IdentityVerification.PersonInfo();
      //expect(instance).to.be();
    });

    it('should have the property yearOfBirth (base name: "YearOfBirth")', function() {
      // uncomment below and update the code to test the property yearOfBirth
      //var instane = new IdentityVerification.PersonInfo();
      //expect(instance).to.be();
    });

    it('should have the property minimumAge (base name: "MinimumAge")', function() {
      // uncomment below and update the code to test the property minimumAge
      //var instane = new IdentityVerification.PersonInfo();
      //expect(instance).to.be();
    });

    it('should have the property gender (base name: "Gender")', function() {
      // uncomment below and update the code to test the property gender
      //var instane = new IdentityVerification.PersonInfo();
      //expect(instance).to.be();
    });

    it('should have the property additionalFields (base name: "AdditionalFields")', function() {
      // uncomment below and update the code to test the property additionalFields
      //var instane = new IdentityVerification.PersonInfo();
      //expect(instance).to.be();
    });

  });

}));
