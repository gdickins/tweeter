import $ from 'jquery';
import settings from '../settings';
import session from '../models/session';
import router from '../router';


let $signup = $(`
  <div class="signup">
    <form class="signupForm">
      <h1>Sign Up</h1>
      <input id="username" type="text" name="username" placeholder="username"/>
      <input id="password" type="password" name="password" placeholder="password"/>
      <input type="submit" name="submit" value="Sign Up">
    </form>
  </div>
`);


$signup.find('input[type="submit"]').on('click', function(evt) {
  evt.preventDefault();
  let username =  $signup.find('#username').val();
  let password =  $signup.find('#password').val();
  var encrypted = btoa(settings.appId + ':' + settings.appSecret);
  $.ajax({
    type: 'POST',
    url: `https://baas.kinvey.com/user/${settings.appId}/login`,
    data: JSON.stringify({
      username: username,
      password: password
    }),
    headers: {
      Authorization: `Basic ${encrypted}`
    },
    contentType: 'application/json',
    success: function(response) {
      session.username = username;
      session.authtoken = response._kmd.authtoken;
      router.navigate('main', {trigger: true});
    },
    error: function() {
      console.log('Sign Up Failed');
    }
  });
});

export default $signup;
