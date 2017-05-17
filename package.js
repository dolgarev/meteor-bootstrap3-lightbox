Package.describe({
  name: 'liberation:bootstrap3-lightbox',
  version: '0.0.1',
  summary: 'Bootstrap 3 Lightbox from @ashleydw, packaged for Meteor.js',
  git: 'https://github.com/dolgarev/meteor-bootstrap3-lightbox.git'
});

Package.on_use(function (api, where) {
  api.versionsFrom('1.4.2.7');
  api.use(['ecmascript', 'less']);
  api.use('jquery', 'client');
  api.addFiles('lib/css/ekko-lightbox.less', 'client');
  api.mainModule('lib/js/ekko-lightbox.js', 'client');
});
