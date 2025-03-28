import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {

  constructor(private router: Router) {}

  async canActivate(): Promise<boolean> {
    const utilisateur = await Storage.get({ key: 'utilisateur' });

    if (utilisateur.value) {
      this.router.navigate(['/tabs']); // 🔴 Redirige vers l'accueil si déjà connecté
      return false;
    } else {
      return true; // ✅ Autorise l'accès à connexion/inscription
    }
  }
}
