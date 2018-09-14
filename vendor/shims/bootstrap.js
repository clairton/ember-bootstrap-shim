(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['bootstrap'],
      __esModule: true,
    };
  }

  define('bootstrap', [], vendorModule);
})();
