Package.describe({
  name: 'theduke:bootstrap-modal-prompt',
  summary: "Show prompts in a bootstrap modal.",
  version: "0.0.2",
  git: "https://github.com/theduke/meteor-bootstrap-modal-prompt"
});

Package.onUse(function (api) {
  var both = ['client', 'server'];

  api.versionsFrom('METEOR@1.0');

  api.use('underscore', 'client');
  api.use('templating', 'client');

  api.export('BootstrapModalPrompt', 'client');

  // Common client and server files.
  api.addFiles([
   
  ], both);

  // Server only files.
  api.addFiles([
  ], 'server'); 

  // Templates.
  api.addFiles([
    'prompt.js'
  ], 'client');

  // Client only files.
  api.addFiles([
  ], 'client');
});
