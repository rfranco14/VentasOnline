import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallecomprasComponent } from './detallecompras.component';

describe('DetallecomprasComponent', () => {
  let component: DetallecomprasComponent;
  let fixture: ComponentFixture<DetallecomprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallecomprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallecomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
