import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
  standalone: false,
})
export class ConnexionPage implements OnInit {
  connexionForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.connexionForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit() {}

  async envoyer() {
    if (this.connexionForm.valid) {
      await this.authService.connexion(this.connexionForm.value.email);
    }
  }
}
