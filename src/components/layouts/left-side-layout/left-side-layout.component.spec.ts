import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideLayoutComponent } from './left-side-layout.component';

describe('LeftSideLayoutComponent', () => {
  let component: LeftSideLayoutComponent;
  let fixture: ComponentFixture<LeftSideLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftSideLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftSideLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
