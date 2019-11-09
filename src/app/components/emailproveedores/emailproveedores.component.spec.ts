import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailproveedoresComponent } from './emailproveedores.component';

describe('EmailproveedoresComponent', () => {
  let component: EmailproveedoresComponent;
  let fixture: ComponentFixture<EmailproveedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailproveedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailproveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
