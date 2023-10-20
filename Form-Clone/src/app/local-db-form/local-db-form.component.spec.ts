import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalDbFormComponent } from './local-db-form.component';

describe('LocalDbFormComponent', () => {
  let component: LocalDbFormComponent;
  let fixture: ComponentFixture<LocalDbFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalDbFormComponent]
    });
    fixture = TestBed.createComponent(LocalDbFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
