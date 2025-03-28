import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@capacitor/storage'; 

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(
    private router: Router,
    private menuCtrl: MenuController,  
  ) {}

  async deconnexion() {
    await Storage.remove({ key: 'utilisateur' }); 
    this.router.navigate(['/connexion']);
  }
}
