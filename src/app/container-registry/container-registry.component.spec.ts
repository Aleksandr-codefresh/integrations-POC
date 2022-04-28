import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerRegistryComponent } from './container-registry.component';

describe('ContainerRegistryComponent', () => {
  let component: ContainerRegistryComponent;
  let fixture: ComponentFixture<ContainerRegistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerRegistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
