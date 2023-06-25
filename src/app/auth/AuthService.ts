import { Injectable } from '@angular/core';
import {DialogOverviewComponent} from "../planning/shared/dialog-overview/dialog-overview.component";
import {MatDialog} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticatedd = false;

  constructor(private readonly dialog: MatDialog) { }

  openDialog(text: string): void {
    const dialogRef = this.dialog.open(DialogOverviewComponent,{
      data: text
    })
  }

  login(username: string, password: string): boolean {
    console.log("auth service")
    if (username === 'admin' && password === 'p') {
      console.log("true")
      this.isAuthenticatedd = true;
      return true;
    } else {
      console.log("false")
      this.openDialog('First login')
      this.isAuthenticatedd = false;
      return false;
    }
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedd;
  }
}
