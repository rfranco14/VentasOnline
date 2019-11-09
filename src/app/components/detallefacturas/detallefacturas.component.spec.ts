import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallefacturasComponent } from './detallefacturas.component';

describe('DetallefacturasComponent', () => {
  let component: DetallefacturasComponent;
  let fixture: ComponentFixture<DetallefacturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallefacturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallefacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
