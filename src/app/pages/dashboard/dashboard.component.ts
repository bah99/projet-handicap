import {Component, OnDestroy, OnInit} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;
import { Router } from '@angular/router';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {

  private alive = true;
  date: Date;
  
  constructor(private router: Router) {
      }

ngOnInit() {
  this.date = new Date('11/09/2020')
  setTimeout(() => {
    this.router.navigate(['pages','dashboard']);
    console.log('routed')
  }, 500000);
}

  ngOnDestroy() {
    this.alive = false;
  }
}
