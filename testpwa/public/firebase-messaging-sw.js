importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyA7x8RDiptuUg5YCJ_nQFJDAyQxK5QaFzk",
    authDomain: "reliable-sight-280818.firebaseapp.com",
    databaseURL: "https://reliable-sight-280818.firebaseio.com",
    projectId: "reliable-sight-280818",
    storageBucket: "reliable-sight-280818.appspot.com",
    messagingSenderId: "946797644194",
    appId: "1:946797644194:web:6f47b27be382c3a0a58afb"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();