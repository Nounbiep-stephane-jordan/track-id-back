const admin = require("firebase-admin")
const serviceAccount = require("../track-id-2844e-firebase-adminsdk-tk038-ab1fbbd1f1");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
 const db = admin.firestore();
module.exports ={db}