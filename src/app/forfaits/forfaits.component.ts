import { Component } from '@angular/core';

@Component({
  selector: 'app-forfaits',
  templateUrl: './forfaits.component.html',
  styleUrls: ['./forfaits.component.css']
})
export class ForfaitsComponent {
    // NavbarComponent
    src = '../../assets/videos/bride by lobna ben ammar.mp4';
    path = 5;
    // NavbarComponent
    // ForfaitsContainerComponent
    title = 'Nos Packs';
  packs = [
    {title:"Hair Therapy",src:"../../assets/img/Pack_hair_therapy_Maison_Ben_Ammar.jpg"},
    {title:"Maquillage et coiffage",src:"../../assets/img/Pack_maquillage_coiffage_Maison_Ben_Ammar.jpg"},
    {title:"Balayage",src:"../../assets/img/Pack_balayage_Maison_Ben_Ammar.jpg"},
  ];
  // ForfaitsContainerComponent
}
