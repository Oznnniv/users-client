import { Component, OnInit } from '@angular/core';
import { Merchants } from '../../models/merchant';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Users } from '../../models/users';
declare const google: any;


@Component({
  selector: 'app-merchant-data',
  templateUrl: './merchant-data.component.html',
  providers: [UserService],
  styleUrls: ['./merchant-data.component.css']
})
export class MerchantDataComponent implements OnInit {
	public merchant: Merchants;
	public infoMessage: any;
	public identity;
	public users: Users;

	constructor(
		private _userService:UserService,
		private _router: Router
	){
		this.identity = this._userService.getIdentity();
		this.users = JSON.parse(this.identity);
		this.merchant = new Merchants('', '', '', '', '', this.users.typeOfUser, '', '');
	}

	public onSubmit(){
		console.log(this.merchant);
		this._userService.merchantData(this.merchant).subscribe(
			response => {
				console.log(response);
				this.infoMessage = response.message;
			},
			error => {
				var errorMessage = <any> error;
				if(errorMessage != null){
					//console.log("Administrator: "+error.error.message);
					this.infoMessage = error.error.message;
				}
			}
		)
	}
	ngOnInit() {
    	let map = document.getElementById('map-canvas');
    	let lat = map.getAttribute('data-lat');
    	let lng = map.getAttribute('data-lng');

    	var myLatlng = new google.maps.LatLng(lat, lng);
    	var mapOptions = {
	        zoom: 12,
	        scrollwheel: false,
	        center: myLatlng,
	        mapTypeId: google.maps.MapTypeId.ROADMAP,
	        styles: [
	          {"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},
	          {"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},
	          {"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},
	          {"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},
	          {"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},
	          {"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
	          {"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},
	          {"featureType":"water","elementType":"all","stylers":[{"color":'#5e72e4'},{"visibility":"on"}]}]
	    }

	    map = new google.maps.Map(map, mapOptions);

	    var marker = new google.maps.Marker({
	        position: myLatlng,
	        map: map,
	        animation: google.maps.Animation.DROP,
	        title: 'Hello World!'
	    });

	    var contentString = '<div class="info-window-content"><h2>Argon Dashboard</h2>' +
        '<p>A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</p></div>';

        var infowindow = new google.maps.InfoWindow({
        content: contentString
         });

        google.maps.event.addListener(marker, 'click', function() {
        	infowindow.open(map, marker);
        });
    }
}
