import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludorxComponent } from './saludorx.component';

describe('SaludorxComponent', () => {
  let component: SaludorxComponent;
  let fixture: ComponentFixture<SaludorxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaludorxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludorxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
