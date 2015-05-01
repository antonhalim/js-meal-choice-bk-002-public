'use strict';

describe('mealChoice', function() {

  it('defaults to meat', function() {
    expect(mealChoice()).toEqual('meat');
  });

  it('allows you to set vegan', function(){
    expect(mealChoice('vegan')).toEqual('vegan');
  });

  it('allows you to set gluten-free', function(){
    expect(mealChoice('gluten-free')).toEqual('gluten-free');
  });

});
