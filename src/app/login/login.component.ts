import {Component, EventEmitter, Output} from '@angular/core';
import {AuthService} from "../auth/AuthService";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = ""
  password: string = ""
  @Output() isAuthenticatedEvent = new EventEmitter<boolean>();

  constructor(private readonly authService: AuthService, private router: Router) {
  }

  sendMessage(auth: boolean) {
    this.isAuthenticatedEvent.emit(auth);
  }

  login() {
    console.log("login")
    if (this.authService.login(this.username, this.password)) {
        console.log("YES")
      this.router.navigate(['/dashboard'])
    } else {
      // Zeige eine Fehlermeldung an oder ergreife andere Maßnahmen, wenn der Login fehlschlägt
    }
  }

}
