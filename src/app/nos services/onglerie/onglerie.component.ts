import { Component } from '@angular/core';

@Component({
  selector: 'app-onglerie',
  templateUrl: './onglerie.component.html',
  styleUrls: ['./onglerie.component.css']
})
export class OnglerieComponent {
// NavbarComponent
src = '../../assets/videos/2.mp4';
path = 3;
// NavbarComponent
data =  [
          [
            {img1:"/assets/img/Onglerie/onglerie-avant-gel-vernis-permanent-la-maison-lobna-ben-ammar.jpg",img2:"/assets/img/Onglerie/onglerie-apres-gel-vernis-permanent-la-maison-lobna-ben-ammar.jpg"},
            {img1:"/assets/img/Onglerie/onglerie-avant-gel-vernis-permanent-la-maison-lobna-ben-ammar-2.jpg",img2:"/assets/img/Onglerie/onglerie-apres-gel-vernis-permanent-la-maison-lobna-ben-ammar-2.jpg"},
            {img1:"/assets/img/Onglerie/onglerie-avant-gel-vernis-permanent-la-maison-lobna-ben-ammar-3.jpg",img2:"/assets/img/Onglerie/onglerie-apres-gel-vernis-permanent-la-maison-lobna-ben-ammar-3.jpg"}
          ],
          [
            {img1:"/assets/img/Onglerie/onglerie-avant-gel-vernis-permanent-la-maison-lobna-ben-ammar-5.jpg",img2:"/assets/img/Onglerie/onglerie-apres-gel-vernis-permanent-la-maison-lobna-ben-ammar-5.jpg"},
            {img1:"/assets/img/Onglerie/onglerie-avant-gel-vernis-permanent-la-maison-lobna-ben-ammar-6.jpg",img2:"/assets/img/Onglerie/onglerie-apres-gel-vernis-permanent-la-maison-lobna-ben-ammar-6.jpg"},
            {img1:"/assets/img/Onglerie/onglerie-avant-gel-vernis-permanent-la-maison-lobna-ben-ammar-7.jpg",img2:"/assets/img/Onglerie/onglerie-apres-gel-vernis-permanent-la-maison-lobna-ben-ammar-7.jpg"},
          ]
        ];
}
