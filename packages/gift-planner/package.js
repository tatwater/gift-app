Package.describe({
  name: 'gift-planner',
});

Package.onUse(function (api) {

  api.use([
    'promise',
    'vulcan:core@1.12.8',
    
    'vulcan:forms@1.12.8',
    'vulcan:accounts@1.12.8',
    'vulcan:forms-upload@1.12.8',
  ]);

  api.addFiles('lib/static/normalize.css');
  
  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');

});
