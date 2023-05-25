import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyreqestComponent } from './myreqest.component';

describe('MyreqestComponent', () => {
  let component: MyreqestComponent;
  let fixture: ComponentFixture<MyreqestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyreqestComponent]
    });
    fixture = TestBed.createComponent(MyreqestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
