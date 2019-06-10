import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {
    
  menu = [
      { name:'Painel de Gestão', link: 'link1', icon: 'globe' },
      { name:'Conta Digital', link: 'link2', icon: 'at' },
      { name:'Ant. de Recebíveis', link: 'link3', icon: 'chart-bar' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
