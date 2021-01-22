import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';

import { UserService } from '../../services/user.service';
import { Users } from '../../models/users';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  providers: [UserService],
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
	public token: any;
	public form: any;
	public isHidden: boolean;
	public isTUser: boolean;
	public identity;
	public users: Users;
	public errorMessage: any;
	public nameOfOperation;
	public response;
	public nextPage;
	public prevPage;
	public items;


	constructor(
		private _userService:UserService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.items = 0;
		this.nextPage = 1;
		this.prevPage = 1;
		this.isHidden = true;
		this.isTUser = true;
		//this.identity = this._userService.getIdentity();
		//this.user = new Users('null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', null, null, null, null, null, null, null, null, null, null, null, null);
		//this.user = new Users('email', 'password', 'initialToken', 'typeOfOperation', 'nameOfOperation', 'addressU', 'hashX', 'typeOfUser', 'dp1', 'dp2', 'dp3', 'dp4', 'dp5', 'dp6', 'dp7', 'dp8', 'dp9', 'dp10', 'dp11', 'dp12');
		//this.users = JSON.parse(this.identity);
		//console.log(this.user);
		this.token = this._userService.getToken();

	}

	ngOnInit() {
		this.getUsers();
	}

	public getUsers(){
			this._route.params.forEach((params: Params) =>{
			let page = params['page'];
			if(!page){
				page = 1;
			}else{
				this.nextPage = page + 1;
				this.prevPage = page - 1;
				if(this.prevPage <= 0){
					this.prevPage = 1;
				}
			}
			this._userService.getUsers(this.token, page).subscribe(
			response => {
				this.items = response.total_items;
				console.log(response.users);
				if(!response.users){
					this._router.navigate(['/']);
				}else{
					this.users = response.users;
				}
			},
			error => {
				var errorMessage = <any> error;
				if(errorMessage != null){
					//console.log("Administrator: "+error.error.message);
					this.errorMessage = error.error.message;
					this.user = new Users('null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', null, null, null, null, null, null, null, null, null, null, null, null);
				}
			}
		)
		});
	}
}
