import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoformComponent } from './fotoform.component';

describe('FotoformComponent', () => {
  let component: FotoformComponent;
  let fixture: ComponentFixture<FotoformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
