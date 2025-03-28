import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
  standalone: false,
})
export class InscriptionPage implements OnInit {
  inscriptionForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.inscriptionForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit() {}

  async envoyer() {
    if (this.inscriptionForm.valid) {
      await this.authService.connexion(this.inscriptionForm.value.email);
    }
  }
}
