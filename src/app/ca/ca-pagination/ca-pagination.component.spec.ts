import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaPaginationComponent } from './ca-pagination.component';

describe('CaPaginationComponent', () => {
  let component: CaPaginationComponent;
  let fixture: ComponentFixture<CaPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
