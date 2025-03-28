import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  async canActivate(): Promise<boolean> {
    const utilisateur = await Storage.get({ key: 'utilisateur' });

    if (utilisateur.value) {
      return true; // ✅ Autorise l'accès
    } else {
      this.router.navigate(['/connexion']); // 🔴 Redirige vers connexion si non connecté
      return false;
    }
  }
}
