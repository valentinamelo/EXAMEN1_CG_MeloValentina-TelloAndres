import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageApp } from './image.component';

describe('ImageApp', () => {
  let component: ImageApp;
  let fixture: ComponentFixture<ImageApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
