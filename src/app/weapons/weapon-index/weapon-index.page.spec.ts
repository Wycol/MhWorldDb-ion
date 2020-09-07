import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeaponIndexPage } from './weapon-index.page';

describe('WeaponIndexPage', () => {
  let component: WeaponIndexPage;
  let fixture: ComponentFixture<WeaponIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponIndexPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeaponIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
