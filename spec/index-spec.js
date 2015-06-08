/* jslint node: true */
/* global describe, it, expect */

"use strict";

var testUtil = require("./test-util");

describe("index.js", function () {

    it("- test", function (done) {
        testUtil.onPage(function(window) {
            var $ = require("jquery-detached-2.1.4").getJQuery();            
            var tokenfield = require("../js/index");
            
            tokenfield.addToJQuery($);
            
            expect($.fn.jquery).toBe('2.1.4');

            expect(window.$).not.toBeDefined();
            expect(window.jQuery).not.toBeDefined();

            var divOnPage = $('#divOnPage');
            expect(divOnPage.text()).toBe('Bootstrap Tokenfield is awesome');
            expect(divOnPage.tokenfield).toBeDefined();
   
            done();
        });
    });
});
