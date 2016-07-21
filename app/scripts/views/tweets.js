import Backbone from 'backbone';
import Tweet from './tweet';
import tweetsCollection from '../collections/tweets';

const Tweets = Backbone.View.extend({
  initialize: function() {
    var self = this;
    tweetsCollection.on('add', () => {
      this.render();
    });
    tweetsCollection.fetch();
  },
  tagName: 'div',
  className: 'postList',
  template: function() {
    return `
    <h1>Tweeter Feed</h1>
    <ul>
    </ul>
    <input type="text" placeholder="What's Up?" />
    <input type="submit" />
    `;
  },
  render: function() {
    this.$el.html(this.template());
    tweetsCollection.forEach((tweet) => {
      var newTweet = new Tweet({
        model: tweet
      });
      newTweet.render();
      this.$('ul').append(newTweet.$el);
    });
    return this;
  }
});

export default Tweets;
