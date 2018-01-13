import { Component } from '@angular/core';
//  import http to send get request
import { Http, Headers } from '@angular/http';
// important operator to format data
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data:any;
  constructor(private http: Http) {
    this.getJson();
  }
  //  function to send http request to backend
  getJson(){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.get('http://localhost:9000',headers)
      .map(res => res.json())
      // without subscribe you can't get a result
      .subscribe(data => {
        this.data = data;
        console.log(data);
      });

}
}
