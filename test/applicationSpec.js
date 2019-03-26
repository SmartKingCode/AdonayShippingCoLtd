
import Vue from 'vue';
import * as App from '../src/scripts/application';

describe("Verify Vue Object instantiation , variables, and methods", function(){

    var vueInstance = new Vue();
    it("Instantiate Vue Object",function(){
        var test = App.view;
        expect(test).toEqual(jasmine.any(vueInstance));
    });
});