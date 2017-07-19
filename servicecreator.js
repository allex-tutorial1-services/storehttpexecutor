function createStoreHTTPExecutorService(execlib, ParentService) {
  'use strict';
  

  function factoryCreator(parentFactory) {
    return {
      'user': require('./users/usercreator')(execlib, parentFactory.get('user')),
      'service': require('./users/serviceusercreator')(execlib, parentFactory.get('service')) 
    };
  }

  function StoreHTTPExecutorService(prophash) {
    ParentService.call(this, prophash);
  }
  
  ParentService.inherit(StoreHTTPExecutorService, factoryCreator);
  
  StoreHTTPExecutorService.prototype.__cleanUp = function() {
    ParentService.prototype.__cleanUp.call(this);
  };
  
  return StoreHTTPExecutorService;
}

module.exports = createStoreHTTPExecutorService;
