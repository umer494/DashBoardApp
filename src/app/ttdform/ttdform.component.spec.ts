import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TTDFormComponent } from './ttdform.component';

describe('TTDFormComponent', () => {
  let component: TTDFormComponent;
  let fixture: ComponentFixture<TTDFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TTDFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TTDFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
