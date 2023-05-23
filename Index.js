var admin = require("firebase-admin");

var serviceAccount = require("./MatchmakingConnection.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

let joueurRef = db.collection("Joueur");

joueurRef.get().then((querySnapshot)=>{
    querySnapshot.forEach(document => {
        console.log(document.data());
    })
})