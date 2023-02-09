import { Component } from '@angular/core';

@Component({
  selector: 'app-packs-mariees',
  templateUrl: './packs-mariees.component.html',
  styleUrls: ['./packs-mariees.component.css']
})
export class PacksMarieesComponent {
  // NavbarComponent
  src = '../../assets/videos/bride by lobna ben ammar.mp4';
  path = 4;
  // NavbarComponent
  // PacksMarieesContainerComponent
  title = 'Nos Packs';
  packs = [
    {title:"Brides Exclusive",src:"../../assets/img/Pack_brides_exclusive_Maison_Ben_Ammar.jpg"},
    {title:"Coquetteries mariée",src:"../../assets/img/Pack_brides_exclusive2_Maison_Ben_Ammar.jpg"},
  ];
  // PacksMarieesContainerComponent
}
