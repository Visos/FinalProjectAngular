import { Component, signal } from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { merge } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  readonly email = new FormControl('', [Validators.required, Validators.email]);

  errorMessage = signal('');
  hide = signal(true);
  resp: any;
  signinData = {
    mail: '',
    password: ''
  };

  constructor(private router: Router, private auth: AuthService) { }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  onSubmit(form :NgForm){
    console.log("MAIL:" + this.signinData.mail)
    console.log("PASSWORD:" + this.signinData.password)
    this.auth.signIn(form.form.value.mail, form.form.value.password)
      .subscribe(data =>{
        console.log(data)
        this.resp = data
        if (this.resp.rc){
          this.auth.setAuthenticated()
          if (this.resp.dati.role == 'ADMIN'){
            this.auth.setRoleAdmin()
          } else {
            this.auth.setRoleUser()
          }
          this.router.navigate(["/index"])
        }
      })
  }
}
