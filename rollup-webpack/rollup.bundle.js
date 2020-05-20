'use strict';

goog.provide('util');

function post() {
  console.log('do post');
}

post.prototype.before = function () {
  console.log('before');
};

goog.provide('main');
goog.require('util');
goog.require('menu');

/* import {menu} from './menu.js' */

var baz = function baz() {
  post();
  var x = 1;
  console.log(x);
  return x;
};

baz();
