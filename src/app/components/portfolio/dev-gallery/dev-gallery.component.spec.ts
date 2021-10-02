import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevGalleryComponent } from './dev-gallery.component';

describe('DevGalleryComponent', () => {
  let component: DevGalleryComponent;
  let fixture: ComponentFixture<DevGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
