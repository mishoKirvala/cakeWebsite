import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCakesComponent } from './other-cakes.component';

describe('OtherCakesComponent', () => {
  let component: OtherCakesComponent;
  let fixture: ComponentFixture<OtherCakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherCakesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtherCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
