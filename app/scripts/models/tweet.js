import Backbone from 'backbone';
import settings from '../settings';

const Tweet = Backbone.Model.extend({
  idAttribute: '_id',
  urlRoot: `https://baas.kinvey.com/appdata/${settings.appId}/tweets`,
  defaults: {
    timestamp: new Date()
  }
});

window.Tweet = Tweet;
export default Tweet;
