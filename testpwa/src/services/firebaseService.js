import firebase from 'firebase';

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
  const messaging = firebase.messaging();

export const configNotification = () => {

    Notification.requestPermission().then((Permission) => {
        if(Permission === "granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN => ", currentToken);
                } else {
                  // Show permission request.
                  console.log('No Instance ID token available. Request permission to generate one.');
                  // Show permission UI.
                  
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
                
              });
        }
    })
}