import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginHeadComponent } from './login-head.component';

describe('LoginHeadComponent', () => {
  let component: LoginHeadComponent;
  let fixture: ComponentFixture<LoginHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
