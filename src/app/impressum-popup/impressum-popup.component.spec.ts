import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressumPopupComponent } from './impressum-popup.component';

describe('ImpressumPopupComponent', () => {
  let component: ImpressumPopupComponent;
  let fixture: ComponentFixture<ImpressumPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpressumPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImpressumPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
