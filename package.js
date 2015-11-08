Package.describe({
  name: 'markoshust:material-ui',
  version: '0.13.1_4',
  summary: 'Package that contains the React implementation of Google Material Design',
  git: 'https://github.com/markoshust/meteor-material-ui',
  documentation: 'README.md'
});

Npm.depends({
  'externalify': '0.1.0',
  'material-ui': '0.13.1',
  'react-tap-event-plugin': '0.2.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use([
    'ecmascript',
    'jsx',
    'react',
    'cosmos:browserify'
  ]);
  api.addFiles([
    'app.browserify.js',
    'app.browserify.options.json',
    'startup.js'
  ], 'client');
  api.export([
    'mui',
    'injectTapEventPlugin'
  ]);
});

