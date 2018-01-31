
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

Vue.use(require('vue-chat-scroll'));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('message', require('./components/Message.vue'));

const app = new Vue({
    el: '#app',

    data: {
    	message:'',
    	chat: {
    		message:[],
            user: []
    	}
    },

    methods: {
    	send() {
    		if (this.message.length != 0) {
    			
    			this.chat.message.push(this.message);
                this.chat.user.push('You');
    			// this.message = '';

                axios.post('/send', {
                    message: this.message
                })
                .then(response => {
                    console.log('response ',response);
                    this.message = '';
                })
                .cache(error => {
                    console.log('error', error);
                })
    		}
    	}
    },

    mounted() {
        Echo.private('chat')
            .listen('ChatEvent', (e) => {
                this.chat.message.push(e.message);
                this.chat.user.push(e.user);
            });
    }
});
