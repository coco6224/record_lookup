import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  my_record = true;
  collection = false;
  search = false;

  constructor() { }

  ngOnInit() {
  }

}
