import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSelectComponent } from './menu-select.component';

describe('MenuSelectComponent', () => {
  let component: MenuSelectComponent;
  let fixture: ComponentFixture<MenuSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
