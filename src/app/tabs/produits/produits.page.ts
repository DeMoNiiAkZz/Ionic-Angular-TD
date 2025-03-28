import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage'; 
import { ToastController } from '@ionic/angular';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
  standalone: false,
})
export class ProduitsPage implements OnInit {
  produits: any[] = [];
  panier: any[] = [];

  constructor(private router: Router, private produitsService: ProduitsService, private toastController: ToastController) {}

  ngOnInit() {
    this.chargerPanier();
    this.produits = this.produitsService.getProduits();
  }

  async chargerPanier() {
    const panierData = await Storage.get({ key: 'panier' });
    if (panierData.value) {
      this.panier = JSON.parse(panierData.value);
    }
  }

  async ajouterAuPanier(produit: any) {

    this.panier.push(produit);
    const toast = await this.toastController.create({
      message: 'le prod a bien été add',
      duration: 2000,
      color: 'success',
      position: 'top',
    });
    toast.present();
    await Storage.set({ key: 'panier', value: JSON.stringify(this.panier) });
  }

  isProduitDansPanier(produitId: number): boolean {
    return this.panier.some((item) => item.id === produitId);
  }

  voirPanier() {
    this.router.navigate(['/panier']);
  }
}
