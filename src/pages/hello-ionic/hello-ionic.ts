import { Component } from '@angular/core';
import { AppService, AppGlobal } from '../../app/app.service';
// import Mock from 'mockjs';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  tit: number;
  list: Array<{index:number, name:String}>;
  itemCount: 10;
  constructor() {
    this.tit = 0;
  }
  addNum(x:number): number {
    return this.tit + x
  }
  logEvent() {
    this.tit = this.addNum(1)
  }
  getData() :any{
    let res: any = {};
    // AppService.httpGet(AppGlobal.API + '')
    return res;
  }
}
