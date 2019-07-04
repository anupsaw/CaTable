import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ca-table',
  templateUrl: './ca-table.component.html',
  styleUrls: ['./ca-table.component.scss']
})
export class CaTableComponent implements OnInit, OnChanges {


  @Input() public columns: Array<any>;
  //public columns: Array<any>;
  @Input() public rows: Array<any>
  constructor() {
    this.columns = [];
    this.rows = [];
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {

    console.log(changes)
  }

 

}
