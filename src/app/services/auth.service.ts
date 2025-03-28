import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private toastController: ToastController) {}

  async connexion(email: string) {
    const utilisateur = { email, role: 'admin' };

    await Storage.set({
      key: 'utilisateur',
      value: JSON.stringify(utilisateur),
    });

    const toast = await this.toastController.create({
      message: 'Connexion réussie !',
      duration: 2000,
      color: 'success',
      position: 'top',
    });

    toast.present();
    await this.router.navigate(['/tabs/accueil']);
  }
}
