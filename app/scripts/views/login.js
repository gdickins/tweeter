import Backbone from 'backbone';
import session from '../models/session';
import router from '../router';


const Login = Backbone.View.extend({
  tagName: 'form',
  className: 'loginForm',
  events: {
    'submit': 'submitFunction'
  },
  submitFunction: function(evt) {
    let username = this.$('#username').val();
    let password = this.$('#password').val();
    evt.preventDefault();
    session.save({username: username, password: password}, {
      success: function(model, response) {
        model.unset('password');
        router.navigate('main', {trigger: true});
    },
    error: function() {
      console.log('Log in failed');
    }});
  },
  template: function() {
    return `
    <h1>Login</h1>
    <input id="username" type="text" name="username" placeholder="username"/>
    <input id="password" type="password" name="password" placeholder="password"/>
    <input type="submit" name="submit" value="Log In">
    <input type="button" id="signUp" value="Sign Up">
    `;
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

export default Login;
