import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaPazienteDialogComponent } from './modifica-paziente-dialog.component';

describe('ModificaPazienteDialogComponent', () => {
  let component: ModificaPazienteDialogComponent;
  let fixture: ComponentFixture<ModificaPazienteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificaPazienteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificaPazienteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
