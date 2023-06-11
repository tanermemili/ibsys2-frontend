import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { PurchasePartDispositionComponent } from './purchase-part-disposition/purchase-part-disposition.component';

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
    ProfileComponent,
    PurchasePartDispositionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
