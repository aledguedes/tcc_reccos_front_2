import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueInitComponent } from './league-init.component';

describe('LeagueInitComponent', () => {
  let component: LeagueInitComponent;
  let fixture: ComponentFixture<LeagueInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueInitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeagueInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
