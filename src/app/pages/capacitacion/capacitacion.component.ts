import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MenuInterface } from 'src/app/interface/menu.interface';
import { MenuService } from 'src/app/services/menu.service';
import capacitaciones from './../../../app/data/json/capacitacion.json';

@Component({
  selector: 'app-capacitacion',
  templateUrl: './capacitacion.component.html',
  styleUrls: ['./capacitacion.component.scss']
})
export class CapacitacionComponent implements OnInit{

    form: any = FormGroup;
    preguntas: any;
    menu: MenuInterface[];
    public hideRuleContent:boolean[] = [];
    public buttonName:any = 'Expand';
    panelOpenState = false;
    capacitaciones: any;

    constructor(
        private readonly menuService: MenuService,
    ){}

    ngOnInit(){
        this.capacitaciones = capacitaciones
        this.menu = this.menuService.MENUITEMS;
    }

    toggle(e: HTMLElement) {
        e.classList.toggle('hidden');
    }

    close(e: HTMLElement) {
        e.remove();
    }
}
