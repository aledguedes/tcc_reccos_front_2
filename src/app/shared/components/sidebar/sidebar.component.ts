import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  panelOpenState: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  toHome() {
    this.router.navigate(['/home']);
  }

  toTeams() {
    console.log('teams')
    this.router.navigate(['/teams']);
  }

}
