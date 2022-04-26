import { Component, OnInit } from '@angular/core';
import { MenuInterface } from 'src/app/interface/menu.interface';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{

    menu: MenuInterface[];
    
    constructor(
        private readonly menuService: MenuService,
    ){}

    ngOnInit(){
        this.menu = this.menuService.MENUITEMS;
    }
}
