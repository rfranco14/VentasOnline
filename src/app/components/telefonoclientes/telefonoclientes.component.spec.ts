import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonoclientesComponent } from './telefonoclientes.component';

describe('TelefonoclientesComponent', () => {
  let component: TelefonoclientesComponent;
  let fixture: ComponentFixture<TelefonoclientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelefonoclientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefonoclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
