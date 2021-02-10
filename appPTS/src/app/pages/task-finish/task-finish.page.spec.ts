import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaskFinishPage } from './task-finish.page';

describe('TaskFinishPage', () => {
  let component: TaskFinishPage;
  let fixture: ComponentFixture<TaskFinishPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskFinishPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskFinishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
