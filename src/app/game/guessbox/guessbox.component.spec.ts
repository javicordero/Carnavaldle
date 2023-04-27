import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessboxComponent } from './guessbox.component';

describe('GuessboxComponent', () => {
  let component: GuessboxComponent;
  let fixture: ComponentFixture<GuessboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuessboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuessboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
