import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveIndexComponent } from './reserve-index.component';

describe('ReserveIndexComponent', () => {
  let component: ReserveIndexComponent;
  let fixture: ComponentFixture<ReserveIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
