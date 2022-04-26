import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MenuInterface } from 'src/app/interface/menu.interface';
import { MenuService } from 'src/app/services/menu.service';
import preguntas from './../../../app/data/json/preguntas.json';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit{

    form: any = FormGroup;
    preguntas: any;
    menu: MenuInterface[];
    public hideRuleContent:boolean[] = [];
    public buttonName:any = 'Expand';
    panelOpenState = false;

    constructor(
        private readonly menuService: MenuService,
    ){}

    ngOnInit(){
        this.preguntas = preguntas;
        this.menu = this.menuService.MENUITEMS;
    }

    toggle(e: HTMLElement) {
        e.classList.toggle('hidden');
    }

    close(e: HTMLElement) {
        e.remove();
    }
}
