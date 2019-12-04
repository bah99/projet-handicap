import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.scss'],
})
export class ECommerceComponent implements OnInit {
  public date;
  public time;
  constructor(private router: Router) {}

  ngOnInit() {
    this.date = new DatePipe('FR-fr').transform(new Date(), 'dd MMMM yyyy');
    this.time = new DatePipe('FR-fr').transform(new Date(), 'HH:mm');
    setTimeout(() => {
      this.router.navigate(['pages','iot-dashboard']);
      // console.log('routed')
    }, 30000);
  }
}
