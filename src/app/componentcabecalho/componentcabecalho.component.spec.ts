import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentcabecalhoComponent } from './componentcabecalho.component';

describe('ComponentcabecalhoComponent', () => {
  let component: ComponentcabecalhoComponent;
  let fixture: ComponentFixture<ComponentcabecalhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentcabecalhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentcabecalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
