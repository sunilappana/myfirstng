import { RouterModule, Routes } from "@angular/router";
import { Signincomponent } from "../signin/signin.component";
// import { Signupcomponent } from "../signup/signupƒ.component";
import { NgModule } from "@angular/core";


const authRoutes: Routes= [{path: 'signup', component:Signincomponent},
    {path : 'signin', component:Signincomponent}];
@NgModule({
    imports:[
        RouterModule.forChild(authRoutes)
    ],
    exports:[RouterModule]
})
export class AuthRoutingMpdule{}