import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {RouterTestingModule} from '@angular/router/testing';

import {LoginComponent} from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        // RouterTestingModule,
        HttpClientTestingModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        MatSnackBarModule,
        RouterTestingModule
      ],
      declarations: [LoginComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render input for email', async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#email')).toBeDefined()
  }));

  it('should render input for password', async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#password')).toBeDefined()
  }));


  it('should render login button', async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Login');
  }));


  it('should set initiial value', async(() => {
    const loginFormGroup = component.userRegistrationForm;
    const loginFormValues = {
      email: '',
      password: ''
    }
    expect(loginFormGroup.value).toEqual(loginFormValues)
  }));




  it('should valid when validation are fulfileed', () => {
    const componentElement: HTMLElement = fixture.nativeElement;

    fixture.detectChanges()
    fixture.whenStable().then(()=>{
      const  emailElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#email')
      emailElement.value = 'sample@gmail.com';
      emailElement.dispatchEvent(new  Event('input'))
      expect(component.userRegistrationForm.controls['email'].value).toEqual('sample@gmail.com')
    })

  });


});
