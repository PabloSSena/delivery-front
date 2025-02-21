import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingupUserComponent } from './signup-user.component';

describe('SingupUserComponent', () => {
  let component: SingupUserComponent;
  let fixture: ComponentFixture<SingupUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingupUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingupUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
