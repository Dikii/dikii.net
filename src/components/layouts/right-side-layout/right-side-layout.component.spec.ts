import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideLayoutComponent } from './right-side-layout.component';

describe('RightSideLayoutComponent', () => {
  let component: RightSideLayoutComponent;
  let fixture: ComponentFixture<RightSideLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightSideLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightSideLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
