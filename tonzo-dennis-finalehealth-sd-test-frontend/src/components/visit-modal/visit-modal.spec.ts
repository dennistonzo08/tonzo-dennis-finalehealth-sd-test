import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitModal } from './visit-modal';

describe('VisitModal', () => {
  let component: VisitModal;
  let fixture: ComponentFixture<VisitModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
