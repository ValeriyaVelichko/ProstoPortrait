var admin = require("firebase-admin");

var serviceAccount = require("serviceAccountKey.json");

// Initialize the app with a custom auth variable, limiting the server's access
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://prostoportrait.firebaseio.com",
  databaseAuthVariableOverride: {
    uid: "my-service-worker"
  }
});

var db = admin.database();
var ref = db.ref("News");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});





