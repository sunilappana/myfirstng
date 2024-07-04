import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../signup/auth.service";


@Component({
    selector:'app-signup',
    templateUrl:'./signup.component.html',
    // styleUrl:'./signup.component.css',
})
export class Signupcomponent implements OnInit {
    constructor(private authservice :AuthService) {}
    ngOnInit() {

    }
        onSignup(form: NgForm){
        const email = form.value.email;
        const password = form.value.password; 
        this.authservice["signupuser"](email, password);
}
}

