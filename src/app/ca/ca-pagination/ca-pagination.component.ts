import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ca-pagination',
  templateUrl: './ca-pagination.component.html',
  styleUrls: ['./ca-pagination.component.scss']
})
export class CaPaginationComponent implements OnInit {

  @Input() totalCount: number;
  @Input() itemsPerPage: number;
  @Output() pageChange = new EventEmitter<number | null>();
  private page: number;

  public firstPage: boolean;
  public lastPage: boolean;
  constructor() {
    this.page = 0;
    this.firstPage = true;
    this.lastPage = false;
  }

  ngOnInit() {
  }

  onNext(): void {
    if (!this.lastPage) {
      const totalPage = Math.floor(this.totalCount / this.itemsPerPage);
      if (this.page >= totalPage - 1) {
        this.lastPage = true;
        this.firstPage = false;
      }
      this.page++;
      this.pageChange.next(this.page);
    }
  }

  onPrev(): void {
    if (!this.firstPage) {
      this.page--;
      if (this.page == 0) {
        this.firstPage = true;
        this.lastPage = false;
      }
      this.pageChange.next(this.page);
    }

  }

  onLast(): void {
    if (!this.lastPage) {
      this.lastPage = true;
      this.firstPage = false;
      let totalPage = Math.floor(this.totalCount / this.itemsPerPage)
      totalPage = this.totalCount % this.itemsPerPage ? totalPage : totalPage - 1;
      this.pageChange.next(totalPage);
    }

  }

  onFirst(): void {
    if (!this.firstPage) {
      this.page = 0;
      this.firstPage = true;
      this.lastPage = false;
      this.pageChange.next(this.page);
    }

  }

}
