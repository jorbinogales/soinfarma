import { Component, OnInit } from '@angular/core';
import { MenuInterface } from 'src/app/interface/menu.interface';
import { MenuService } from 'src/app/services/menu.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{

    menu: MenuInterface[];
    url: string;
    
    constructor(
        private readonly menuService: MenuService,
        private readonly location: Location
    ){}

    ngOnInit(){
        this.menu = this.menuService.MENUITEMS;
        this.url = this.location.path();
    }

    changeRoute(route){
        this.url = route;
    }
}
