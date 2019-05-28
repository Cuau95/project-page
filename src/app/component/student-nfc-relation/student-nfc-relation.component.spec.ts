import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentNfcRelationComponent } from './student-nfc-relation.component';

describe('StudentNfcRelationComponent', () => {
  let component: StudentNfcRelationComponent;
  let fixture: ComponentFixture<StudentNfcRelationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentNfcRelationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentNfcRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
