import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DucaRgComponent } from './duca-rg.component';

describe('DucaRgComponent', () => {
  let component: DucaRgComponent;
  let fixture: ComponentFixture<DucaRgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DucaRgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DucaRgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
