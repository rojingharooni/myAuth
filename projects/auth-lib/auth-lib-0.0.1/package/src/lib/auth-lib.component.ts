import { Component, OnInit } from '@angular/core';
import { httpService } from './http.service';

@Component({
  selector: 'lib-authLib',
  template: `
    <p>
      auth-lib works!
    </p>
  `,
  styles: [
  ]
})
export class AuthLibComponent implements OnInit {

  constructor(private http: httpService) { }

  ngOnInit(): void {
    this.http.test();
  }

}
