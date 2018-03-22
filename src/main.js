// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
require('../static/js/material.min.js')
require('../static/js/promise.js')
require('../static/js/fetch.js')
require('../static/js/idb.js')
require('../static/js/utility.js')
Vue.config.productionTip = false
var firebase = require('firebase');
var $ = require('jquery')
var config = {
   apiKey: "AIzaSyCvkTHRRLN1U1rFRWQ6p23D8G7IWEbI8jw",
    authDomain: "ativador-anubz.firebaseapp.com",
    databaseURL: "https://ativador-anubz.firebaseio.com",
    projectId: "ativador-anubz",
    storageBucket: "ativador-anubz.appspot.com",
    messagingSenderId: "1026783959484"
};

var linksFB;
var jhg = document.getElementById("imgf");
var uio = [];
var dados1 = [];
var furlf;
var defaultApp = firebase.initializeApp(config);

console.log(defaultApp.name); // "[DEFAULT]"
/////////////////PROMISE//////////////////////
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('This is executed once the timer is done!');
        reject({
            code: 500,
            message: 'An error occurred!'
        });
        //console.log('This is executed once the timer is done!');
    }, 3000);
});
if(!window.Promise){
    window.Promise= promise;
}
////// XHR METHOD

/////////////////////////////////////////////////
function createCard(data) {
    $("#imgf").append('<img  src="' + data.image + '" widados1h="100px" height="auto"/>');
    //jhg.innerHTML = furlf;
    //console.log(data.foto + '  <  >');
}
function updateUI(data) {
    for (var i = 0; i < data.length; i++) {
        createCard(data[i]);
    }
}
////////////////////////////////////////
var url = 'https://ativador-anubz.firebaseio.com/posts.json';
var networkDataReceived = false;
fetch(url)
    .then(function (res) {
     console.log(res);
        return res.json();
    })
    .then(function (data) {
        networkDataReceived = true;
        window.furlf = data;
       // console.log(data.foto + '<???>' + jhg);
        console.log('From web FETCH 1 >', data);
        var dataArray = [];
        for (var key in data) {
            dataArray.push(data[key]);
            uio.push(data[key]);
        }
        updateUI(dataArray);
        window.dados1 = uio;
       // console.log(uio.length + '<???>' + jhg);
        return window.dados1, window.furlf;
    }).catch(function (err) {
        console.log(err);
    });

var deferredPrompt;
window.addEventListener('beforeinstallprompt', function(event) {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  deferredPrompt = event;
  return false;
});


/////////////////////////////////////////xxxxxx////////////////
if ('indexedDB' in window) {
  readAllData('posts')
    .then(function(data) {
      if (!networkDataReceived) {
        console.log('From cache', data);
        updateUI(data);
      }
    });
}




new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})
promise.then(function (text) {
    return text;
}).then(function (newText) {
    console.log(newText);
}).catch(function (err) {
    console.log(err.code, err.message);
});
console.log('This is executed right after setTimeout()');
