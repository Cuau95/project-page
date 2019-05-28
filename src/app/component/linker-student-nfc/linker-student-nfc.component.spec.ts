import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkerStudentNfcComponent } from './linker-student-nfc.component';

describe('LinkerStudentNfcComponent', () => {
  let component: LinkerStudentNfcComponent;
  let fixture: ComponentFixture<LinkerStudentNfcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkerStudentNfcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkerStudentNfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
