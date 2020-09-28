import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignewsComponent } from './foreignews.component';

describe('ForeignewsComponent', () => {
  let component: ForeignewsComponent;
  let fixture: ComponentFixture<ForeignewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForeignewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeignewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
