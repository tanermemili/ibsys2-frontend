import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthService} from "./AuthService";
import {DialogOverviewComponent} from "../planning/shared/dialog-overview/dialog-overview.component";
import {MatDialog} from "@angular/material/dialog";
import {DialogData} from "../planning/shared/dialog-overview/dialog-overview.model";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService, private readonly dialog: MatDialog) {}

  openDialog(header: string, body: string): void {
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      data: new DialogData(header, body)
    })
  }

  canActivate(): boolean {
    const isAuthenticated = this.authService.isAuthenticated();

    if (isAuthenticated) {
      return true;
    } else {
      this.openDialog("Authentication",'Please login first')
      this.router.navigate(['login']);
      return false;
    }
  }
}
