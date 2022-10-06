import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GionnyComponent } from './gionny.component';

describe('GionnyComponent', () => {
  let component: GionnyComponent;
  let fixture: ComponentFixture<GionnyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GionnyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GionnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
