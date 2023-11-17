import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliArmiComponent } from './dettagli-armi.component';

describe('DettagliArmiComponent', () => {
  let component: DettagliArmiComponent;
  let fixture: ComponentFixture<DettagliArmiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DettagliArmiComponent]
    });
    fixture = TestBed.createComponent(DettagliArmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
