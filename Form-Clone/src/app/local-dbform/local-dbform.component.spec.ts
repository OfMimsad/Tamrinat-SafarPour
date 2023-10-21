import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalDBformComponent } from './local-dbform.component';

describe('LocalDBformComponent', () => {
  let component: LocalDBformComponent;
  let fixture: ComponentFixture<LocalDBformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalDBformComponent]
    });
    fixture = TestBed.createComponent(LocalDBformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
