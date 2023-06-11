import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImportXmlComponent } from './import-xml/import-xml.component';
import { WarehouseStockComponent } from './warehouse-stock/warehouse-stock.component';
import { FutureInwardStockMovementsComponent } from './future-inward-stock-movements/future-inward-stock-movements.component';
import { StockOverviewComponent } from './stock-overview/stock-overview.component';
import { ExportXmlComponent } from './export-xml/export-xml.component';
import { PlanningComponent } from './planning/planning.component';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ImportXmlComponent,
    WarehouseStockComponent,
    FutureInwardStockMovementsComponent,
    StockOverviewComponent,
    ExportXmlComponent,
    PlanningComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule, 
    MatButtonModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
