import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterRotateComponent } from './letter-rotate.component';

describe('LetterRotateComponent', () => {
  let component: LetterRotateComponent;
  let fixture: ComponentFixture<LetterRotateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetterRotateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterRotateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
