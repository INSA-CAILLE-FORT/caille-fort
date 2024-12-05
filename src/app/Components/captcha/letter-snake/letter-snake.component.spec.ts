import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterSnakeComponent } from './letter-snake.component';

describe('LetterSnakeComponent', () => {
  let component: LetterSnakeComponent;
  let fixture: ComponentFixture<LetterSnakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetterSnakeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterSnakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
