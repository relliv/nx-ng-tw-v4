import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TailwindComponentTest } from './tailwind-component-test';

describe('TailwindComponentTest', () => {
  let component: TailwindComponentTest;
  let fixture: ComponentFixture<TailwindComponentTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TailwindComponentTest],
    }).compileComponents();

    fixture = TestBed.createComponent(TailwindComponentTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
