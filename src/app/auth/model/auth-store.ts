import { makeAutoObservable } from "mobx";
import { browserLocalPersistence, signInWithEmailAndPassword } from "firebase/auth";
import firebase from "@/shared/api/firebase-client"

type UserType = {
    email: string | null
}


class AuthStore {
    isAunteficated: boolean = false;

    user: UserType = {
        email: null
    }

    constructor() {
        makeAutoObservable(this)
    }

    isAuth() {
        return this.isAunteficated
    }

    makeAuth(email: string, password: string) {
        firebase.auth.setPersistence(browserLocalPersistence);
        signInWithEmailAndPassword(firebase.auth, email, password).then((res => {
            console.log(res.user);
            this.user.email = res.user.email;
            this.isAunteficated = true;
        })).catch((err) => console.log(err));
    }
}


export const store = new AuthStore()