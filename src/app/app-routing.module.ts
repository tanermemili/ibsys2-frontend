import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImportXmlComponent } from './import-xml/import-xml.component';
import { StockOverviewComponent } from './stock-overview/stock-overview.component';
import { PlanningComponent } from './planning/planning.component';
import { ExportXmlComponent } from './export-xml/export-xml.component';
import { ProfileComponent } from './profile/profile.component';
import { WarehouseStockComponent } from './warehouse-stock/warehouse-stock.component';
import { FutureInwardStockMovementsComponent } from './future-inward-stock-movements/future-inward-stock-movements.component';
import { PurchasePartDispositionComponent } from './purchase-part-disposition/purchase-part-disposition.component';
import { ProdprogComponent } from './planning/prodprog-prod/prodprog-prod.component';
import { DispositionEigenfertigungComponent } from './planning/disposition-eigenfertigung/disposition-eigenfertigung.component';
import {CapacityPlanningComponent} from "./planning/capacity-planning/capacity-planning.component";
import {AuthGuard} from "./auth/AuthGuard";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'import_xml', component: ImportXmlComponent, canActivate: [AuthGuard] },
  { path: 'stock_overview', component: StockOverviewComponent, canActivate: [AuthGuard] },
  { path: 'planning', component: PlanningComponent, canActivate: [AuthGuard] },
  { path: 'export_xml', component: ExportXmlComponent, canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'warehouse_stock', component: WarehouseStockComponent, canActivate: [AuthGuard]},
  { path: 'future_inward_stock_movements', component: FutureInwardStockMovementsComponent, canActivate: [AuthGuard]},
  { path: 'purchase_part_disposition', component: PurchasePartDispositionComponent, canActivate: [AuthGuard]},
  { path: 'prodprog', component: ProdprogComponent, canActivate: [AuthGuard]},
  { path: 'disposition-eigenfertigung', component: DispositionEigenfertigungComponent, canActivate: [AuthGuard]},
  { path: 'capacity-planning', component: CapacityPlanningComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
