import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplyeeComponent } from './emplyee.component';

describe('EmplyeeComponent', () => {
  let component: EmplyeeComponent;
  let fixture: ComponentFixture<EmplyeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmplyeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmplyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
