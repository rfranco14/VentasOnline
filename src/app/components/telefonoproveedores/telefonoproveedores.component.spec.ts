import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonoproveedoresComponent } from './telefonoproveedores.component';

describe('TelefonoproveedoresComponent', () => {
  let component: TelefonoproveedoresComponent;
  let fixture: ComponentFixture<TelefonoproveedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelefonoproveedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefonoproveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
