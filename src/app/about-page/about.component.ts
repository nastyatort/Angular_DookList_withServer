import { Component} from '@angular/core';
import { UserService} from '../services/user.service';
import { OnInit} from '@angular/core';

import {NavComponent} from '../nav-page/nav.component';
import { ModalComponent }   from '../modal-page/modal.component';
  
@Component({
    selector: 'about-page',
    styleUrls: ['./about.component.css', '../style.css'],
    templateUrl: './about.component.html'
})
export class AboutComponent { 
    constructor(
        private userService: UserService,
    ){}

    userName: string = '';
    modalIsOpen: boolean = false;

    ngOnInit() {
        this.userName = this.userService.getUserName();
    }

    showModal(){
        this.modalIsOpen = !this.modalIsOpen
    }

}