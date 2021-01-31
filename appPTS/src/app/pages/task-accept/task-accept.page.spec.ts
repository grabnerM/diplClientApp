import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaskAcceptPage } from './task-accept.page';

describe('TaskAcceptPage', () => {
  let component: TaskAcceptPage;
  let fixture: ComponentFixture<TaskAcceptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskAcceptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskAcceptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
