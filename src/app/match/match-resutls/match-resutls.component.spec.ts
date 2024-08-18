import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchResutlsComponent } from './match-resutls.component';

describe('MatchResutlsComponent', () => {
  let component: MatchResutlsComponent;
  let fixture: ComponentFixture<MatchResutlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchResutlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchResutlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
