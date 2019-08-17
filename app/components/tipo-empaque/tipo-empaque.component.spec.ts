import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEmpaqueComponent } from './tipo-empaque.component';

describe('TipoEmpaqueComponent', () => {
  let component: TipoEmpaqueComponent;
  let fixture: ComponentFixture<TipoEmpaqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoEmpaqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoEmpaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
