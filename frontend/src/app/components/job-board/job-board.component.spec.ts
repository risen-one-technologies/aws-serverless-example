import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobBoardComponent } from './job-board.component';

describe('HomeComponent', () => {
  let component: JobBoardComponent;
  let fixture: ComponentFixture<JobBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
