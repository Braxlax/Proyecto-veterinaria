import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuenosList } from './duenos-list';

describe('DuenosList', () => {
  let component: DuenosList;
  let fixture: ComponentFixture<DuenosList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuenosList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuenosList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
