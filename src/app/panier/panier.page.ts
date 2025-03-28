import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
  standalone: false,
})
export class PanierPage implements OnInit {
  panier: any[] = [];

  constructor(private toastController : ToastController) {}

  ngOnInit() {
    this.chargerPanier();
  }

  async chargerPanier() {
    const panierData = await Storage.get({ key: 'panier' });
    if (panierData.value) {
      this.panier = JSON.parse(panierData.value);
    }
  }

  async supprimerProduitPanier(itemId: number) {
    const toast = await this.toastController.create({
      message: 'le produit a bien été supprimé',
      duration: 2000,
      color: 'primary',
      position: 'top',
    });
    toast.present();
    this.panier = this.panier.filter((item) => item.id !== itemId);
    await Storage.set({ key: 'panier', value: JSON.stringify(this.panier) });
  }

  getTotal(): number {
    return this.panier.reduce((total, item) => total + item.prix, 0); //reduce permet de calculer le total en partant de 0
  }
}
