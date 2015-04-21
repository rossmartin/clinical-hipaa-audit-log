Package.describe({
  summary: "HIPAA audit log for ClinicalFramework.",
  version: "1.0.1",
  git: "http://github.com/awatson1978/clinical-hipaa-audit-log.git",
  name: "clinical:hipaa-audit-log"
});

Package.on_use(function (api) {
  api.export('HipaaLogger');
  api.export('Hipaa');

  api.use('standard-app-packages', ['client','server']);
  api.use('iron:router', 'client');
  api.use('mrt:bootstrap-3', 'client');
  api.use('mrt:moment', 'client');
  api.use('less', 'client')
  api.use('mrt:font-awesome-4-less', 'client')

  //api.use('clinical-ui-syntax', 'client')

  api.addFiles('hipaa.audit.html', "client");

  api.addFiles('hipaa.logging.js', ["client","server"]);
  api.addFiles('hipaa.shared.js', ["client","server"]);
  api.addFiles('hipaa.server.js', "server");
  api.addFiles('hipaa.client.js', "client");
  api.addFiles('hipaa.less', "client");
});
