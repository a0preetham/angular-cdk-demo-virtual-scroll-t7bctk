import { Component, OnInit } from '@angular/core';
import {
         ViewChild,
         AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';


@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css']
})
export class VirtualScrollComponent {

  @ViewChild(CdkVirtualScrollViewport)
  cdkVirtualScrollViewport: CdkVirtualScrollViewport;

  items = [];


  constructor(){
    this.items = new Array(1000).fill(0).map((_,idx)=>idx);
  }

  trackBy(idx, item) {
    console.log(idx)
    return item.id;
  }
}

