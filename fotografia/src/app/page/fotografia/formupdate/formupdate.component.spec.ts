import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormupdateComponent } from './formupdate.component';

describe('FormupdateComponent', () => {
  let component: FormupdateComponent;
  let fixture: ComponentFixture<FormupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
