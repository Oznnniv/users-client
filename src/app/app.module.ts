import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

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
    AdminLayoutComponent,
    AuthLayoutComponent,
    TokenComponent,
    UsersCreationComponent,
    UsersUpdateComponent,
    UsersDeleteComponent,
    UsersDetailsComponent,
    RootCreationComponent,
    RootWelcomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
