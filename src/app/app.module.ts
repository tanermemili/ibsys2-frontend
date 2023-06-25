import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExportXmlComponent } from './export-xml/export-xml.component';
import { FutureInwardStockMovementsComponent } from './future-inward-stock-movements/future-inward-stock-movements.component';
import { ImportXmlComponent } from './import-xml/import-xml.component';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { DispositionEigenfertigungComponent } from './planning/disposition-eigenfertigung/disposition-eigenfertigung.component';
import { ForecastComponent } from './planning/forecast/forecast.component';
import { PlanningComponent } from './planning/planning.component';
import { ProdprogComponent } from './planning/prodprog-prod/prodprog-prod.component';
import { PlanendComponent } from './planning/planend/planend.component';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { PurchasePartDispositionComponent } from './planning/purchase-part-disposition/purchase-part-disposition.component';
import { ProfileComponent } from './profile/profile.component';
import { StockOverviewComponent } from './stock-overview/stock-overview.component';
import { WarehouseStockComponent } from './warehouse-stock/warehouse-stock.component';
import { CapacityPlanningComponent } from './planning/capacity-planning/capacity-planning.component';
import {AuthGuard} from "./auth/AuthGuard";
import {MatSelectModule} from '@angular/material/select';

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
    MessagesComponent,
    ForecastComponent,
    PlanendComponent
  ],
  imports: [
    MatSelectModule,
    DispositionEigenfertigungComponent,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatStepperModule,
    HttpClientModule,
    MatTableModule,
    MatNativeDateModule,
    MatPaginatorModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatTabsModule,
    ProdprogComponent,
    CapacityPlanningComponent,
    ProdprogComponent,
    CdkDropList,
    CdkDrag
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
