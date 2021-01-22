import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  providers: [UserService],
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public user;
  public focus;
  public location: Location;
  constructor(location: Location,  private element: ElementRef, private _router: Router, private _userService:UserService,) {
    this.location = location;
    this.user = JSON.parse(this._userService.getIdentity());
  }

  ngOnInit() {
  }

  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }
    return 'Página principal';
  }

  public logout(){
    localStorage.clear();
    this._router.navigate(['/login']);


  }

}
