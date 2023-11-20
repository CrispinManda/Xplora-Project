import { Component } from '@angular/core';
import { Modal, Ripple, initTE, Tab, Input } from 'tw-elements';
//import { LogoutModule } '../services/logout.service'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  ngOnInit() {
    initTE({ Tab, Input ,Modal ,Ripple});
  }
}
