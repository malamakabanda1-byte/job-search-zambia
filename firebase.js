// Firebase core
const firebaseConfig = {
  apiKey: "AIzaSyCZwl2Vg4J4J4WQZBRyTXL6zNhRPtDOWlc",
  authDomain: "zambian-jobs-ce081.firebaseapp.com",
  projectId: "zambian-jobs-ce081",
  storageBucket: "zambian-jobs-ce081.firebasestorage.app",
  messagingSenderId: "1022758849145",
  appId: "1:1022758849145:web:dd571554ab04334f41e2a8",
  measurementId: "G-KB5K9CMW60"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
