import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCCrQklY2JOaLbyriwCcnyW76SBRP_jh94",
    authDomain: "reactnativedatabase-29573.firebaseapp.com",
    databaseURL: "https://reactnativedatabase-29573.firebaseio.com",
    projectId: "reactnativedatabase-29573",
    storageBucket: "",
    messagingSenderId: "1003641028384"
};


export default class Firebase(){
	static auth;

	static init() {
		firebase.initialzeApp(config);
		Firebase.auth = firebase.auth();
	}
}
