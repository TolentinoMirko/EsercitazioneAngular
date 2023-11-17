import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliAgenteComponent } from './dettagli-agente.component';

describe('DettagliAgenteComponent', () => {
  let component: DettagliAgenteComponent;
  let fixture: ComponentFixture<DettagliAgenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DettagliAgenteComponent]
    });
    fixture = TestBed.createComponent(DettagliAgenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
