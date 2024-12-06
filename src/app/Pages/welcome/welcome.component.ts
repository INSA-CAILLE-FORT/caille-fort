import { Component } from '@angular/core';
import {HeaderComponent} from "../../Components/header/header.component";

@Component({
  selector: 'app-welcome',
  standalone: true,
    imports: [
        HeaderComponent
    ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

}
