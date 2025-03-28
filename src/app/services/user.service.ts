import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

interface User {
  email: string;
  role: 'admin' | 'client';
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private utilisateur: User | null = null;

  constructor() {}

  async loadUser() {
    const { value } = await Storage.get({ key: 'user' });
    if (value) {
      this.utilisateur = JSON.parse(value);
    }
  }

  async setUser(user: User) {
    this.utilisateur = user;
    await Storage.set({
      key: 'user',
      value: JSON.stringify(user),
    });
  }

  getUser() {
    return this.utilisateur;
  }

  async deconnexion() {
    this.utilisateur = null;
    await Storage.remove({ key: 'user' });
  }
}
