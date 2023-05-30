import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelUcraniaComponent } from './panel-ucrania.component';

describe('PanelUcraniaComponent', () => {
  let component: PanelUcraniaComponent;
  let fixture: ComponentFixture<PanelUcraniaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelUcraniaComponent]
    });
    fixture = TestBed.createComponent(PanelUcraniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
