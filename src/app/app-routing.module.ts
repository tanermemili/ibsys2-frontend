import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./auth/AuthGuard";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExportXmlComponent } from './export-xml/export-xml.component';
import { FutureInwardStockMovementsComponent } from './future-inward-stock-movements/future-inward-stock-movements.component';
import { ImportXmlComponent } from './import-xml/import-xml.component';
import { LoginComponent } from './login/login.component';
import { DispositionEigenfertigungComponent } from './planning/disposition-eigenfertigung/disposition-eigenfertigung.component';
import { PlanendComponent } from './planning/planend/planend.component';
import { PlanningComponent } from './planning/planning.component';
import { ProdprogComponent } from './planning/prodprog-prod/prodprog-prod.component';
import { PurchasePartDispositionComponent } from './planning/purchase-part-disposition/purchase-part-disposition.component';
import { ProfileComponent } from './profile/profile.component';
import { StockOverviewComponent } from './stock-overview/stock-overview.component';
import { WarehouseStockComponent } from './warehouse-stock/warehouse-stock.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'import_xml', component: ImportXmlComponent, canActivate: [AuthGuard] },
  { path: 'stock_overview', component: StockOverviewComponent, canActivate: [AuthGuard] },
  { path: 'planning', component: PlanningComponent, canActivate: [AuthGuard] },
  { path: 'export_xml', component: ExportXmlComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'warehouse_stock', component: WarehouseStockComponent, canActivate: [AuthGuard] },
  { path: 'future_inward_stock_movements', component: FutureInwardStockMovementsComponent, canActivate: [AuthGuard] },
  { path: 'purchase_part_disposition', component: PurchasePartDispositionComponent, canActivate: [AuthGuard] },
  { path: 'prodprog', component: ProdprogComponent, canActivate: [AuthGuard] },
  { path: 'disposition-eigenfertigung', component: DispositionEigenfertigungComponent, canActivate: [AuthGuard] },
  { path: 'planend', component: PlanendComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
