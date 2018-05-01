import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable()
export class InfoService {

  public toutnamentName: String = 'Cargando Nombre...';
  public content: String = 'Loading content...';


  constructor(private _http: HttpClient) { }


  getInfo() {
    this._http.get('https://api.sportradar.us/soccer-xt3/other/es/tournaments/sr:tournament:84/info.json?api_key=wtm44z6e274xu7mva4kwjkry')
                .subscribe(data => {
                       this.toutnamentName = data['tournament'].name;
                      // this.content = data.content;
                       console.log(this.toutnamentName);
               });
 }

}
