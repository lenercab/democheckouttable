import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCheckboxComponent } from './tabla-checkbox.component';

describe('TablaCheckboxComponent', () => {
  let component: TablaCheckboxComponent;
  let fixture: ComponentFixture<TablaCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
