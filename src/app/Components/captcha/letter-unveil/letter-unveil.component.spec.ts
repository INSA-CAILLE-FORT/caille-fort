import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterUnveilComponent } from './letter-unveil.component';

describe('LetterUnveilComponent', () => {
  let component: LetterUnveilComponent;
  let fixture: ComponentFixture<LetterUnveilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetterUnveilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterUnveilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
