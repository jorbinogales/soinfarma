import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'soinfarmaAngular';
  ip: string;

  constructor(
    private readonly _http: HttpClient,
    private readonly _appService: AppService,
  ){}

  async ngOnInit(){
    await this.captureIp();
    this._appService.sendIp(this.ip);
  }

  async captureIp(): Promise<any>{
    await this._http.get<any>('https://api.ipify.org?format=json').toPromise().then((resp:any)=>{
      this.ip = resp.ip;
    })
  }
}
