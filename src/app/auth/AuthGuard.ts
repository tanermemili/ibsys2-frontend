import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthService} from "./AuthService";
import {DialogOverviewComponent} from "../planning/shared/dialog-overview/dialog-overview.component";
import {MatDialog} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService, private readonly dialog: MatDialog) {}

  openDialog(text: string): void {
    const dialogRef = this.dialog.open(DialogOverviewComponent,{
      data: text
    })
  }

  canActivate(): boolean {
    const isAuthenticated = this.authService.isAuthenticated();

    if (isAuthenticated) {
      return true;
    } else {
      this.openDialog('first login!')
      this.router.navigate(['login']);
      return false;
    }
  }
}
