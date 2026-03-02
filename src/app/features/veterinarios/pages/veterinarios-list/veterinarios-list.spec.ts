import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinariosList } from './veterinarios-list';

describe('VeterinariosList', () => {
  let component: VeterinariosList;
  let fixture: ComponentFixture<VeterinariosList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeterinariosList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeterinariosList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
