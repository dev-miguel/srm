import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
    
  acao1 = ['Ações', 'Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    
  acao2 = ['Ações', 'Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  constructor() { }

  ngOnInit() {
  }

}
