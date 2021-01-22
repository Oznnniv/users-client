import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserService } from '../../services/user.service';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [UserService],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
	public user: Login;
	public menu: boolean;
	public errorMessage: any;

	constructor(
		private _userService:UserService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		console.log(localStorage);
		localStorage.clear();
		this.menu = false;
		this.user = new Login('', '', '');
	}

	ngOnInit() {
	}

	public onSubmit(){
		if(this.user.typeOfUser == ''){
			return alert("Selecciona un tipo de usuario");
		}else if(this.user.email == '' || this.user.password == ''){
			return alert("Rellena todos los campos");
		}
		this._userService.singUp(this.user).subscribe(
			response => {
				//console.log(response.user);
				//this.rootCreation = false;
				//this.menu = true;x
				localStorage.setItem('identity', JSON.stringify(response.user));
				this._router.navigate(['/login/token']);
			},
			error => {
				var errorMessage = <any> error;
				if(errorMessage != null){
					this.errorMessage = error.error.message;
					//console.log(error.error.message);
				}
			}
		)
	}
  ngOnDestroy() {
  }

}
