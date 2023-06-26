import { Injectable } from '@angular/core';
import {DialogOverviewComponent} from "../planning/shared/dialog-overview/dialog-overview.component";
import {MatDialog} from "@angular/material/dialog";
import {DialogData} from "../planning/shared/dialog-overview/dialog-overview.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticatedBool = false;

  constructor(private readonly dialog: MatDialog) { }

  openDialog(header: string, body: string): void {
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      data: new DialogData(header, body)
    })
  }

  logout() {
    this.isAuthenticatedBool = false;
  }

  login(username: string, password: string): boolean {
    console.log("auth service")
    if (username === 'admin' && password === 'p') {
      this.isAuthenticatedBool = true;
      return true;
    } else {
      this.openDialog("Authentication",'Wrong credentials')
      this.isAuthenticatedBool = false;
      return false;
    }
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedBool;
  }
}
