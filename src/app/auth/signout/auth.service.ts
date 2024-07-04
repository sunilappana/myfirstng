import { Injectable } from "@angular/core";
import { Router } from "@angular/router"; 
import * as firebase from  "firebase";

@Injectable()
 export class AuthService{
    isAuthentication() {
        throw new Error("Method not implemented.");
    }
    token: string | undefined;
    constructor(private router: Router){}
    signupuser(email: string, password: string){
        firebase.auth().createUserWithEmailPassword(email,password)
        .catch((error: any)=>console.log(error))
    }
    signinUser(email:string, password:string){
        firebase.auth().createUserWithEmailPassword(email,password)
        .then(
            response => {
                this.router.navigate(['/']);
                firebase.auth().currentUser,getToken()
                .then(
                    (token: string) => this.token = token
                )
            }
        )
        logout() {
            firebase.auth().signOut();
            this.token =null;
        }
        getToken() {
            firebase.auth().currentUser.getToken()
            .then(
                (token: string) => this.token =token
            );
            return this.token;
        }
        isAuthenticated() {
            return  this.token!=null;
        }
        
        

    }
 }

