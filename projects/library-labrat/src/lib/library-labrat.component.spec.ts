import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryLabratComponent } from './library-labrat.component';

describe('LibraryLabratComponent', () => {
  let component: LibraryLabratComponent;
  let fixture: ComponentFixture<LibraryLabratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryLabratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryLabratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
