import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchContainer } from './match.container';

describe('MatchComponent', () => {
  let component: MatchContainer;
  let fixture: ComponentFixture<MatchContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatchContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(MatchContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
