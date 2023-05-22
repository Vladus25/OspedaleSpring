import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPazienteDialogComponent } from './add-paziente-dialog.component';

describe('AddPazienteDialogComponent', () => {
  let component: AddPazienteDialogComponent;
  let fixture: ComponentFixture<AddPazienteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPazienteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPazienteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
