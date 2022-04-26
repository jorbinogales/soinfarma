import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { MenuInterface } from '../interface/menu.interface';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }


  MENUITEMS: MenuInterface[] = [
    {
      path: '/home', 
      title: 'Inicio', 
      type: 'link', 
      active: false,
    },
    {
      path: '/faqs', 
      title: 'FAQs', 
      type: 'link',
      active: false,
    },
    {
        path: 'support_btn', 
        title: 'Soporte', 
        type: 'section',
        active: false,
    },
    {
      path: '/capacitacion', 
      title: 'Capacitación', 
      type: 'link', 
      active: false,
    },
    {
        path: 'contact', 
        title: 'Contacto', 
        type: 'section',
        active: false,
    },
  ];
 

  //array
  items = new BehaviorSubject<MenuInterface[]>(this.MENUITEMS);

}