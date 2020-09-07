import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArmorsPage } from './armors.page';

describe('ArmorsPage', () => {
  let component: ArmorsPage;
  let fixture: ComponentFixture<ArmorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmorsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArmorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
