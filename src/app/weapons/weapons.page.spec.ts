import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeaponsPage } from './weapons.page';

describe('WeaponsPage', () => {
  let component: WeaponsPage;
  let fixture: ComponentFixture<WeaponsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeaponsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
