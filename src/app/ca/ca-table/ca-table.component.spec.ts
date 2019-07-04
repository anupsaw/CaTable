import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaTableComponent } from './ca-table.component';

describe('CaTableComponent', () => {
  let component: CaTableComponent;
  let fixture: ComponentFixture<CaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
