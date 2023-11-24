import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPageFooterComponent } from './front-page-footer.component';

describe('FrontPageFooterComponent', () => {
  let component: FrontPageFooterComponent;
  let fixture: ComponentFixture<FrontPageFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontPageFooterComponent]
    });
    fixture = TestBed.createComponent(FrontPageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
