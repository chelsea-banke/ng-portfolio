import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaAccountsComponent } from './media-accounts.component';

describe('MediaAccountsComponent', () => {
  let component: MediaAccountsComponent;
  let fixture: ComponentFixture<MediaAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
