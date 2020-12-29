import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-ecolo',
  templateUrl: './ecolo.component.html',
  styleUrls: ['./ecolo.component.css']
})
export class EcoloComponent {
  loginbtn: boolean;
  logoutbtn: boolean;
  constructor(private dataService: ApiService) {
    dataService.getLoggedInName.subscribe(name => this.changeName(name));
    if (this.dataService.isloggedIn()) {
      console.log("loggedin");
      this.loginbtn = false;
      this.logoutbtn = true
    }
    else {
      this.loginbtn = true;
      this.logoutbtn = false
    }
     }
  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }
  logout() {
    this.dataService.deleteToken();
    window.location.href = window.location.href;
  }
  

}
