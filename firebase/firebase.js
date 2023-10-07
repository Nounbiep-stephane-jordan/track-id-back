const admin = require("firebase-admin")
// const serviceAccount = require("../track-id-2844e-firebase-adminsdk-tk038-ab1fbbd1f1.json");

admin.initializeApp({
  credential: admin.credential.cert({
    "type": "service_account",
    "project_id": "track-id-2844e",
    "private_key_id": "ab1fbbd1f197a1eda589c524365c8af3b8579700",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQC7iKHr8I7o9adw\nYF/9twVfB4KxXE0CajfXi5AqgS2IaCeMPyrS8VtX/oN+7gIDEr5wPWpitLi9sa84\ni1K/CEI/BIFTgTdak4q3QfPN/B5675fEVrPc6VJfuquzXSSOsPeFW1Tj29SARa8n\ngev0boY9F1WVb/A4IaIODQg1PuO4wVqcmXoskn5s0dyo9dnw2rU1SFq0AaLu0+CR\nDs53BB7GqzcgraogZlgx4UB61b6XHx9khd0HzcBZ/1WXJDPnwSRNcPTajYyoPyTS\n0tLme3TnSyLbq2EoskcLGTDA/erjaw406ZQYEzEQAjQVuCCX0gSYdmYY7EYT3c25\nFzmOQGLHAgMBAAECggEACNwGSxQYKq3hGHOAUjpxWmrYUN9Oug4t9i5fNxekM/Br\nuEa+ekZ+hyEvsb4cjtJo+C3gMHdfzoJhVN2fVDjXj4xiCbTHwMbKNyi6YMeIFYAe\nxN7g7DWC0TslFzoPjitffi4K5brboEKEHFMy3cWgIBNR1T37dMNnmWjvM6Jb3FbQ\nmScSpJoyG4t1a2Kbt/htsEhbTjuUsq34XNb0YS1OKiidwv89wBxlbOtmDKJBwQm+\nrCicFjfrRUYbWg3DPJgPVN3BhpIQTP3myi7OotN/+ppBdXA/6ELYvnLhsVQ0KZw5\n3g4xPkoBeeG7WSxichAB4P5mg8RTHjX2L37Klef/RQKBgQDh/4IkJ+BccOEi2uXD\noTm8wcG8n/dTmp0LcY/pECVMlrsFCxYp1AIZb2cY7XBKSVQxsLer1QOdWPBqxMNJ\nsjZ7MCO88Io41t2WBruAl2371XhTnGalrsCihcWhwyaLUXjBukcbTX8GvbVsTbfv\nooBMXywDsUNVGNDrO96Nnu/eewKBgQDUbewEk3S69KiaWRpjrC6e+i6u7ifAWHu9\nCUKmhH1CCaxiXv++/m7AWZ1Oa3IKOElYICHQ0Z47acndfO5ZCPVWl87rErP4Ex1+\nSVE5WhAxXYKZsVkLTrhd16MKNzVNxnPCjeUukznApKtzrInX1jvSQLnCi4q0bYEO\nlqP7OshBJQKBgQDez88aIGp2GSAOAiyHDFxlOc3tTvVD6uqsTqEoka+EbBMkrMKE\nKK6NLyVBEU8lHliwyN68vb3bksUtLqKu9NH78AE8FRbhZQ2ADVEtPZ7Eq7j/DfKx\npLHtSeAIVOOadY+NyD60r1nuZnkItzMCQn8lTKuTVF/i9R183kDT9X/eIwJ/K/qV\n4lykzg/Y2BuaWwhKnp8tCwpDMI8hDwHbyp2jUQivp64DRIdoZmonJxUXhwYgKR59\n4b2EBMjiAfjbX5N7N3I2ZHR6zeEnOf3z0uvSbmXto+QTi0PA56y9FGBZqMBtNtop\nmHrief+df1U5NHYl7GF6E8zP6orBLUQCrwB8dQKBgFVzNyhqAtviv+7cm1DmzEiu\nD1lWNHY5ZKeprpcD+/YMDrJLsNvvbAmKGtfhlvI909lJ+thtYa6LF0519fuHCuud\nkSfMayRWqG/AQN935PwKvg0tm/RinTQHLKcYGg0j3/MC+j43I0GIUxy2r4kOcQiy\nvIxknBeNGaSU3ZT0/VB9\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-tk038@track-id-2844e.iam.gserviceaccount.com",
    "client_id": "100879223951342140254",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-tk038%40track-id-2844e.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  }),
});
 const db = admin.firestore();
module.exports ={db}