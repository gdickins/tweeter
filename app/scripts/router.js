import $ from 'jquery';
import Backbone from 'backbone';

import settings from './settings';
import Login from './views/login';
import Tweets from './views/tweets';
import $signup from './views/signup';


const Router = Backbone.Router.extend({
    routes: {
        login: 'loginFunction',
        signup: 'signupFunction',
        logout: 'logoutFunction',
        main: 'mainFunction',
        '/*': 'loginFunction'
    },
    loginFunction: function() {
        let login = new Login();
        login.render();
        $('.container').empty().append(login.$el);
    },
    signupFunction: function() {
        $('.container').empty().append($signup);
    },
    logoutFunction: function() {
        user.save(null, {
            url: `https://baas.kinvey.com/user/${settings.appId}/_logout`,
            success: () => {
                user.clear();
                this.navigate('login', {
                    trigger: true
                });
            }
        });
    },
    mainFunction: function() {
        let tweets = new Tweets();
        $('.container').empty().append(tweets.render().$el);
    }
});

const router = new Router();

export default router;
