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

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'import_xml', component: ImportXmlComponent},
  { path: 'stock_overview', component: StockOverviewComponent},
  { path: 'planning', component: PlanningComponent},
  { path: 'export_xml', component: ExportXmlComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'warehouse_stock', component: WarehouseStockComponent},
  { path: 'future_inward_stock_movements', component: FutureInwardStockMovementsComponent},
  { path: 'purchase_part_disposition', component: PurchasePartDispositionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
