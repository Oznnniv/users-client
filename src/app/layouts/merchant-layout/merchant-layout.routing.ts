import { Routes } from '@angular/router';

import { MerchantHomeComponent } from '../../pages/merchant-home/merchant-home.component';
import { MerchantDataComponent } from '../../pages/merchant-data/merchant-data.component';
import { MerchantAboutComponent } from '../../pages/merchant-about/merchant-about.component';
import { MerchantDetailComponent } from '../../pages/merchant-detail/merchant-detail.component';



export const MerchantLayoutRoutes: Routes = [
    //{ path: 'dashboard',      component: DashboardComponent },
    //{ path: '',              component: RootCreationComponent },
    { path: 'merchants-home',		component: MerchantDataComponent },
    { path: 'merchants-data',		component: MerchantDataComponent },
    { path: 'merchants-about',		component: MerchantDataComponent },
    { path: 'merchants-detail',		component: MerchantDataComponent },
];
