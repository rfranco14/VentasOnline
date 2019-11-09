import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoempaquesComponent } from './tipoempaques.component';

describe('TipoempaquesComponent', () => {
  let component: TipoempaquesComponent;
  let fixture: ComponentFixture<TipoempaquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoempaquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoempaquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
