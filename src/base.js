import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyBIY9vK6luy9ieQD11ASALsAcscv_P7Kg0",
	authDomain: "devchat-aj.firebaseapp.com",
	databaseURL: "https://devchat-aj.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };
export default base;
