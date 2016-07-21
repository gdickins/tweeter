import Backbone from 'backbone';
// import moment from 'moment';

const Tweet = Backbone.View.extend({
  tagName: 'li',
  className: 'tweetList',
  template: function() {
    return `
    <p class="tweetContent">
      ${this.model.get('content')}
    </p>
    <span class="author">by ${this.model.get('author')}</span>

    `;
  },
  render: function() {
    this.$el.html(this.template());
  }
});

export default Tweet;

// <time class="timestamp">${moment(new Date(this.model.get('timestamp'))).fromNow()}</time>
