import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../signup/auth.service";


@Component({
    selector:'app-signin',
    templateUrl:'./signin.component.html',
    styleUrl:'./signin.component.css',
})
export class Signincomponent implements OnInit {
    constructor(private authservice :AuthService) {}
    ngOnInit() {

    }
        onSignin(form: NgForm){
        const email = form.value.email;
        const password = form.value.password; 
        this.authservice["signinUser"](email, password);
}
}

