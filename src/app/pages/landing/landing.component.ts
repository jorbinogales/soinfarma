import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuInterface } from 'src/app/interface/menu.interface';
import { MenuService } from 'src/app/services/menu.service';
import { LandingService } from './landing.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit{

    form: any = FormGroup;
    loading: boolean = false;
    send: boolean;
    error: boolean

    menu: MenuInterface[];
    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly menuService: MenuService,
        private readonly landingService: LandingService
    ){}

    ngOnInit(){
        this.menu = this.menuService.MENUITEMS;
        this.form = this.formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            state: ['', [Validators.required]],
            phone: ['', [Validators.required]],
            business: ['', [Validators.required]],
        });
    }

    create(){
        this.loading = true;
        const FormData = this.form.getRawValue()
        this.landingService.create(FormData).subscribe((res: any) => {
            this.loading = false;
            this.send = true;
        }, (err: any) =>{
            this.error = true;
            this.send = false;
            this.loading = false;
        })
    }

}
