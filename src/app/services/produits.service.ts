import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProduitsService {
  produits: any[] = [];

  constructor() {
    this.lesProduits();
  }

  private lesProduits() {
    this.produits = [
      { id: 1, nom: 'Gel douche vert', prix: 10, image: '../../../assets/images/shampoing.png' },
      { id: 2, nom: 'Sac en coton Recyclé', prix: 15, image: '../../../assets/images/sac-coton.jpg' },
      { id: 3, nom: 'Savon naturel', prix: 5, image: '../../../assets/images/savon.png' },
    ];
  }

  getProduits(): any[] {
    return this.produits;
  }

  getProduitById(id: number): any {
    return this.produits.find((produit) => produit.id === id);
  }
}
