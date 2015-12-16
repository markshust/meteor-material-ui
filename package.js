Package.describe({
  name: 'dcsan:mui',
  version: '0.14.0',
  summary: 'React + Material Design. using mui 0.14.0-rc2',
  git: 'https://github.com/dcsan/meteor-material-ui',
  documentation: 'README.md'
});

// https://github.com/callemall/material-ui/blob/master/package.json
// https://github.com/callemall/material-ui/blob/master/CHANGELOG.md

Npm.depends({
  'externalify': '0.1.0',
  'material-ui': '0.14.0-rc2',
  'react-tap-event-plugin': '0.2.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use([
    'ecmascript@0.1.6',
    'jsx@0.2.3',
    'react-runtime@0.14.1_1',
    'cosmos:browserify@0.8.1'
  ]);
  api.addFiles([
    'app.browserify.js',
    'app.browserify.options.json',
    'startup.js'
  ], ['client', 'server']);
  api.export([
    'mui',
    'injectTapEventPlugin'
  ], ['client', 'server']);
});
