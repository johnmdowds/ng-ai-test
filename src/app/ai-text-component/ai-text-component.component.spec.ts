import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiTextComponentComponent } from './ai-text-component.component';

describe('AiTextComponentComponent', () => {
  let component: AiTextComponentComponent;
  let fixture: ComponentFixture<AiTextComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiTextComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiTextComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
