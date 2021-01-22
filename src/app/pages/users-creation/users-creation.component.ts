import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';

import { UserService } from '../../services/user.service';
import { Users } from '../../models/users';

@Component({
  selector: 'app-users-creation',
  templateUrl: './users-creation.component.html',
  providers: [UserService],
  styleUrls: ['./users-creation.component.css']
})
export class UsersCreationComponent implements OnInit {
	public token: any;
	public form: any;
	public isHidden: boolean;
	public isTUser: boolean;

	public user: Users;
	public errorMessage: any;
	public registerOk: any;

	constructor(
		private _userService:UserService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.isHidden = true;
		this.isTUser = true;
		this.token = this._userService.getToken();

		this.user = new Users('', '', this.token, 'create', '', '', 'hashX', '', false, false, false, false, false, false, false, false, false, false, false, false);
		//this.user = new Users('email', 'password', 'initialToken', 'typeOfOperation', 'nameOfOperation', 'addressU', 'hashX', 'typeOfUser', 'dp1', 'dp2', 'dp3', 'dp4', 'dp5', 'dp6', 'dp7', 'dp8', 'dp9', 'dp10', 'dp11', 'dp12');
	}

	ngOnInit() {
		//console.log(this.token);
	}

	public onChange(){
		if(this.user.typeOfUser == 'Administrator'){
			this.user.nameOfOperation = 'createAdministrator';
			this.isTUser = true;
		}else if(this.user.typeOfUser == 'TUser'){
			this.user.nameOfOperation = 'createTUser';
			this.user.dp1 = false;
			this.user.dp2 = false;
			this.user.dp4 = false;
			this.user.dp5 = false;
			this.user.dp7 = false;
			this.user.dp8 = false;
			this.user.dp10 = false;
			this.user.dp11 = false;
			this.isTUser = false;
		}else{
			alert("Selecciona un tipo de usuario");
		}
	}
	public onSubmit(){
		var md5 = new Md5();
		if(this.user.email == '' || this.user.password == ''){
			return alert("Rellena los campos");
		}
		var jsonDP = '{ "createAdministrator": '+this.user.dp1+', "createTUser": '+this.user.dp2+', "updateMe": '+this.user.dp3+', "updateAdministrator": '+this.user.dp4+', "updateTUser": '+this.user.dp5+', "deleteMe": '+this.user.dp6+', "deleteAdministrator": '+this.user.dp7+', "deleteTUser": '+this.user.dp8+', "readMe": '+this.user.dp9+', "readAdministrator": '+this.user.dp10+', "readTUser": '+this.user.dp11+', "loginUser": '+this.user.dp12+' }';
		var jsonData = {
			email: this.user.email,
			password: this.user.password,
			typeOfUser: this.user.typeOfUser,
			initialToken: this.user.initialToken,
			typeOfOperation: this.user.typeOfOperation,
			nameOfOperation: this.user.nameOfOperation,
			addressU: this.user.addressU,
			dp: jsonDP
		};
		 //CHECAR EL MD5 PARA DESPUÉS
		var hashX = md5.appendStr(JSON.stringify(jsonData)).end();
		 jsonData.hashX = hashX;

		this._userService.createUsers(jsonData).subscribe(
			response => {
				//console.log(response.message);
				//this.rootCreation = false;
				//this.menu = true;
				this._router.navigate(['/tables']);
			},
			error => {
				var errorMessage = <any> error;
				if(errorMessage != null){
					//console.log("Administrator: "+error.error.message);
					this.errorMessage = error.error.message;
				}
			}
		)
	}
}
