import { NgModule } from "@angular/core";
import { Signincomponent } from "../signin/signin.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[
        Signincomponent,
        Signincomponent
    ],
    imports: [
        FormsModule,
        // AuthRoutingModule
    ]
    
})
export class AuthModule{}