import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'ca-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss']
})
export class MainTableComponent implements OnInit, OnChanges {

  @Input() public columns: Array<any>;
  @Input() public rows: Array<any>
  @Input() public itemsPerPage: number;

  public currentUserList: Array<any>;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.rows && changes.rows.currentValue) {
      this.currentUserList = this.rows.slice(0, this.itemsPerPage);
    }
  }

  onPageChange(page: number) {
    const perPage = +this.itemsPerPage;
    this.currentUserList = this.rows.slice(page * perPage, (page + 1) * perPage);

  }

}
