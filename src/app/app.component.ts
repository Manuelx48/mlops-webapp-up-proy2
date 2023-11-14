import { Component } from '@angular/core';

import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mlops-webapp-up';

  constructor(private _http: HttpService) { }

  obtener() {
    let req = {
      "data": [[2, 180, 74, 24, 21, 23.9091702, 1.488172308, 22],
      [0, 148, 58, 11, 179, 39.19207553, 0.160829008, 45]]
    };

    this._http.post(req).subscribe(res => {
      console.log(res)
    }, error => {
      console.log(error)
    });
  }
}



