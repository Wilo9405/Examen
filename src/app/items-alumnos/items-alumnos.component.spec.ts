import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsAlumnosComponent } from './items-alumnos.component';

describe('ItemsAlumnosComponent', () => {
  let component: ItemsAlumnosComponent;
  let fixture: ComponentFixture<ItemsAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsAlumnosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemsAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
