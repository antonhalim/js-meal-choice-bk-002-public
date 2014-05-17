'use strict';

describe('mealChoice', function() {

  var mealChoice;
  beforeEach(function() {
    mealChoice = require('../lib/mealChoice');
  });

  describe('mealChoice', function() {

    it('defaults to meat', function() {
      expect(mealChoice()).toEqual('meat');
    });

    it('allows you to set a meal', function(){
      expect(mealChoice('vegan')).toEqual('vegan');
    });

  });

});
