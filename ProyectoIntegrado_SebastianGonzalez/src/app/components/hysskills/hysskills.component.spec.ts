import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HysskillsComponent } from './hysskills.component';

describe('HysskillsComponent', () => {
  let component: HysskillsComponent;
  let fixture: ComponentFixture<HysskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HysskillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HysskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
