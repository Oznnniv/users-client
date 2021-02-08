import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RootAdminLayoutComponent } from './layouts/root-admin-layout/root-admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MerchantLayoutComponent } from './layouts/merchant-layout/merchant-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { TokenComponent } from './pages/token/token.component';
import { UsersCreationComponent } from './pages/users-creation/users-creation.component';
import { UsersUpdateComponent } from './pages/users-update/users-update.component';
import { UsersDeleteComponent } from './pages/users-delete/users-delete.component';
import { UsersDetailsComponent } from './pages/users-details/users-details.component';
import { RootCreationComponent } from './pages/root-creation/root-creation.component';
import { RootWelcomeComponent } from './pages/root-welcome/root-welcome.component';
import { MerchantDataComponent } from './pages/merchant-data/merchant-data.component';
import { MerchantHomeComponent } from './pages/merchant-home/merchant-home.component';
import { MerchantAboutComponent } from './pages/merchant-about/merchant-about.component';
import { MerchantDetailComponent } from './pages/merchant-detail/merchant-detail.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    RootAdminLayoutComponent,
    MerchantLayoutComponent,
    AuthLayoutComponent,
    TokenComponent,
    UsersCreationComponent,
    UsersUpdateComponent,
    UsersDeleteComponent,
    UsersDetailsComponent,
    RootCreationComponent,
    RootWelcomeComponent,
    MerchantDataComponent,
    MerchantHomeComponent,
    MerchantAboutComponent,
    MerchantDetailComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
