import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeighborhoodSearch } from './neighborhood-search';

describe('NeighborhoodSearch', () => {
  let component: NeighborhoodSearch;
  let fixture: ComponentFixture<NeighborhoodSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeighborhoodSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeighborhoodSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
