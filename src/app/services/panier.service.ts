import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  panier: any[] = [];

  constructor( private toastController: ToastController) {
    this.chargerPanier();
  }

  private async chargerPanier() {
    const { value } = await Storage.get({ key: 'panier' });
    if (value) {
      this.panier = JSON.parse(value);
    }
  }
 
  private async stockagePanier() {
    await Storage.set({
      key: 'panier',
      value: JSON.stringify(this.panier)
    });
  }
 
  async ajouterAuPanier(produit: any) {
    this.panier.push(produit);
    await this.stockagePanier();
  }
 
  async supprimerDuPanier(id: number) {
    this.panier = this.panier.filter(item => item.id !== id);
    await this.stockagePanier();
  }
 
  getPanier(): any[] {
    return this.panier;
  }
 
  isProduitDansPanier(id: number): boolean {
    return this.panier.some(item => item.id === id);
  }
}
