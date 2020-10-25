import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  @ViewChild( CdkVirtualScrollViewport ) vieport: CdkVirtualScrollViewport;

  public personas = Array(500).fill(0);

  constructor() { }

  ngOnInit(): void {
  }

  irFinal() {
    this.vieport.scrollToIndex(this.personas.length);
  }


  irInicio() {
    this.vieport.scrollToIndex(0);
  }


  irMedio() {
    this.vieport.scrollToIndex(this.personas.length /2 );
  }
}
