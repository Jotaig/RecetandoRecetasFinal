import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent  implements OnInit {

  items:any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = this.router.config.filter((route)=>route.path!='');
  }

}
