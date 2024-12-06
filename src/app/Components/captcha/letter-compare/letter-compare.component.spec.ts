import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterCompareComponent } from './letter-compare.component';

describe('LetterCompareComponent', () => {
  let component: LetterCompareComponent;
  let fixture: ComponentFixture<LetterCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetterCompareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
