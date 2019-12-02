import { Component, OnInit, ViewChild } from '@angular/core';

declare var AMap: any;    // 一定要声明AMap，要不然报错找不到AMap

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getMap();
  }

  // 地图要放到函数里。
  getMap() {
    let map = new AMap.Map('container', {
      resizeEnable: true,
      zoom: 11,
      center: [116.397428, 39.90923]
    });
  }

  val1: boolean = true;

  showBox() {
    if (this.val1) {
      document.querySelector<HTMLDivElement>('#div2').style.left = '0px';
      document.querySelector<HTMLDivElement>('#div2').style.transition = 'left 2s';
    }
    else {
      document.querySelector<HTMLDivElement>('#div2').style.left = '-150px';
      document.querySelector<HTMLDivElement>('#div2').style.transition = 'left 2s';
    }

    this.val1 = !this.val1;
  }

  smallMap() {
    this.showBox();

    document.querySelector<HTMLDivElement>('#container').style.width = "calc(100% - 800px)";
    document.querySelector<HTMLDivElement>('#container').style.transition = 'width 2s';
    document.querySelector<HTMLDivElement>('#div3').style.width = '800px';
    document.querySelector<HTMLDivElement>('#div3').style.transition = 'width 2s';

  }

  largeMap() {
    document.querySelector<HTMLDivElement>('#container').style.width = "calc(100% - 50px)";
    document.querySelector<HTMLDivElement>('#container').style.transition = 'width 2s';
    document.querySelector<HTMLDivElement>('#div3').style.width = '0px';
    document.querySelector<HTMLDivElement>('#div3').style.transition = 'width 2s';
  }
}
