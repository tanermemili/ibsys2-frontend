import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
