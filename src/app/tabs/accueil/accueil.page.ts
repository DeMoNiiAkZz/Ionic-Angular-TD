import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
  standalone: false,
})
export class AccueilPage {
  produits: any[] = [];



  constructor(private router: Router, private produitsService: ProduitsService) { }
  ngOnInit() {
    this.produits = this.produitsService.getProduits();
  }
  voirProduit(id: number) {
    this.router.navigate(['/produit-details', id]);
  }
}
