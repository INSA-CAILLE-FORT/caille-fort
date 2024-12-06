import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileContentComponent } from './tile-content.component';

describe('TileContentComponent', () => {
  let component: TileContentComponent;
  let fixture: ComponentFixture<TileContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TileContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
