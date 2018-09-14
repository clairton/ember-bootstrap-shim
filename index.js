/* eslint-env node */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-bootstrap-shim',

  included() {
    this._super.included.apply(this, arguments);

    // this.import({
    //   development: 'node_modules/bootstrap/bootstrap.js',
    //   production: 'node_modules/bootstrap/bootstrap.min.js'
    // });
    this.import('vendor/bootstrap.js');
    this.import('vendor/shims/bootstrap.js', {
      exports: {
        'bootstrap': [
          'default'
        ]
      }
    });
  },

  treeForVendor(vendorTree) {
    var bootstrapTree = new Funnel(
      path.join(this.project.root, 'node_modules', 'bootstrap', 'dist', 'js'), {
      files: ['bootstrap.js'],
    });

    return new MergeTrees([vendorTree, bootstrapTree]);
  },
};
