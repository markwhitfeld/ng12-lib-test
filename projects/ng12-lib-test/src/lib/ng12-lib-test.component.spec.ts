import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng12LibTestComponent } from './ng12-lib-test.component';

describe('Ng12LibTestComponent', () => {
  let component: Ng12LibTestComponent;
  let fixture: ComponentFixture<Ng12LibTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ng12LibTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng12LibTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
