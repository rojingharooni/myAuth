import { Component } from '@angular/core';
import { httpService } from 'auth-lib';
import { AuthService } from 'projects/auth-lib/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  constructor(private http: httpService) {
    this.http.test();
  }
}
