import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TnaynetonComponent } from './tnayneton.component';

describe('TnaynetonComponent', () => {
  let component: TnaynetonComponent;
  let fixture: ComponentFixture<TnaynetonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TnaynetonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TnaynetonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
