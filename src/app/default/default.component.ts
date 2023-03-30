import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sidebarOpen: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(evt: any) {
    this.sidebarOpen = !this.sidebarOpen;
  }

}
