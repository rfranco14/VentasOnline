import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailclientesComponent } from './emailclientes.component';

describe('EmailclientesComponent', () => {
  let component: EmailclientesComponent;
  let fixture: ComponentFixture<EmailclientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailclientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
