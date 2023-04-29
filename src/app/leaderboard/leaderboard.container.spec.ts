import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardContainer } from './leaderboard.container';

describe('LeaderboardContainer', () => {
  let component: LeaderboardContainer;
  let fixture: ComponentFixture<LeaderboardContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeaderboardContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(LeaderboardContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
