import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndicedemassacorporalPage } from './indicedemassacorporal.page';

describe('IndicedemassacorporalPage', () => {
  let component: IndicedemassacorporalPage;
  let fixture: ComponentFixture<IndicedemassacorporalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicedemassacorporalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndicedemassacorporalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
