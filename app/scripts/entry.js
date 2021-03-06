import $ from 'jquery';
import Backbone from 'backbone';
import settings from './settings';
import router from './router';
import session from './models/session';

$(document).ajaxSend(function(evt, xhrAjax, jqueryAjax) {
  if (session.get('authtoken')) {
    xhrAjax.setRequestHeader('Authorization', 'Kinvey ' + session.get('authtoken'));
  } else {
    xhrAjax.setRequestHeader('Authorization', 'Basic ' + settings.basicAuth);
  }
});

Backbone.history.start();

if (!session.username) {
  router.navigate('login', {trigger: true});
}
