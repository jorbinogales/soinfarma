import { Component, Input, OnInit } from '@angular/core';
import { MenuInterface } from 'src/app/interface/menu.interface';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit{

    @Input() items: any;

    menu: MenuInterface[];
    
    constructor(
        private readonly menuService: MenuService,
    ){}

    ngOnInit(){
        this.menu = this.menuService.MENUITEMS;
    }
}
