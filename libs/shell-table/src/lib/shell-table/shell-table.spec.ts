import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShellTable } from './shell-table';

describe('ShellTable', () => {
  let component: ShellTable;
  let fixture: ComponentFixture<ShellTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellTable],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
