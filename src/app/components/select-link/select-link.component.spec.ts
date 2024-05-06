import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLinkComponent } from './select-link.component';

describe('SelectLinkComponent', () => {
  let component: SelectLinkComponent;
  let fixture: ComponentFixture<SelectLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
