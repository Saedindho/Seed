import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenttableComponent } from './contenttable.component';

describe('ContenttableComponent', () => {
  let component: ContenttableComponent;
  let fixture: ComponentFixture<ContenttableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenttableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
