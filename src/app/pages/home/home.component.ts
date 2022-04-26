import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuInterface } from 'src/app/interface/menu.interface';
import { MenuService } from 'src/app/services/menu.service';
import beneficios from './../../../app/data/json/target.json';
import carousel from './../../../app/data/json/home-carousel.json';
import { HomeService } from './home.service';
import testimoinals from './../../../app/data/json/testimonial.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

    formEmail: any = FormGroup;
    beneficios: any;
    testimoinals: any;
    items: any;
    loadingEmail: boolean = false;
    send: boolean;
    sendedEmail: boolean = false;
    error: boolean
    position: number = 1;

    menu: MenuInterface[];
    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly menuService: MenuService,
        private readonly homeService: HomeService
    ){}

    ngOnInit(){
        this.testimoinals = testimoinals;
        this.items = carousel;
        this.beneficios = beneficios;
        this.menu = this.menuService.MENUITEMS;
        this.formEmail = this.formBuilder.group({
            name: ['', [Validators.required, Validators.email]],
            email: ['', [Validators.required]],
            phone: ['', [Validators.required]],
            business: ['', [Validators.required]],
            message: ['', [Validators.required]],
        });
    }


    sendEmail(){
        this.loadingEmail = true;
        const formData = this.formEmail.getRawValue();
        this.homeService.sendEmail(formData).subscribe((res:any) =>{
            this.loadingEmail = false;
            this.sendedEmail = true;
            this.formEmail.reset();
        }, (err: any) =>{
            this.error = true;
            this.sendedEmail = false;
            this.loadingEmail = false;
        })
    }

    next(){
        const element = document.getElementById('carousel-item-'+this.position);
        element.classList.remove("active");
        this.position = this.position+1;
        if(this.position > 3){
            this.position = 1;
        }
        document.getElementById('carousel-item-'+this.position).classList.add("active");
    }

    previus(){
        document.getElementById('carousel-item-'+this.position).classList.remove("active");
        this.position = this.position-1;
        if(this.position == 0){
            this.position = 3;
        }
        document.getElementById('carousel-item-'+this.position).classList.add("active");
    }
}
