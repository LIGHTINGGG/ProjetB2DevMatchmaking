var admin = require("firebase-admin");

var serviceAccount = require("./ServiceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://djilalilecarry-default-rtdb.europe-west1.firebasedatabase.app"
});

const db = admin.firestore();

const data = {
    id: 1,
    name: "mikassa"
}

db.collection("Joueur").doc(data.id.toString()).set(data);

