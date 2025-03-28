import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
  standalone: false,
})
export class ProfilPage implements OnInit {
  email: string = '';
  role: string = '';
  estConnecte: boolean = false;

  constructor(private toastController: ToastController, private router: Router) { }

  ngOnInit() {
    this.UtilisateurInfo();
  }

  async UtilisateurInfo() {
    const utilisateur = await Storage.get({ key: 'utilisateur' });

    if (utilisateur.value) {
      const parsedData = JSON.parse(utilisateur.value);
      this.email = parsedData.email;
      this.role = parsedData.role;
      this.estConnecte = true;
      const toast = await this.toastController.create({
        message: `Vous êtes connecté en tant que ${this.role === 'admin' ? 'Admin' : 'Client'}.`,
        duration: 2000,
        position: 'top',
        color: 'primary',
      });
      toast.present();
    } else {
      this.estConnecte = false;
      const toast = await this.toastController.create({
        message: 'Vous n\'êtes pas connecté. Veuillez vous connecter.',
        duration: 3000,
        position: 'top',
        color: 'danger',
      });
      toast.present();
      this.router.navigate(['/connexion']);
    }
  }

  async deconnexion() {
    await Storage.remove({ key: 'utilisateur' });
    this.estConnecte = false;
    const toast = await this.toastController.create({
      message: 'Déconnexion réussie.',
      duration: 2000,
      position: 'top',
      color: 'success',
    });
    toast.present();
    this.router.navigate(['/connexion']);
  }
}
