import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './HomeComponents/home/home.component';
import { HomeFooterComponent } from './HomeComponents/home-footer/home-footer.component';
import { Footer2Component } from './footer2/footer2.component';
import { ForfaitsComponent } from './forfaits/forfaits.component';
import { PacksforfaitsContainerComponent } from './packsforfaits-container/packsforfaits-container.component';
import { PackforfaitItemComponent } from './packforfait-item/packforfait-item.component';
import { PacksMarieesComponent } from './packs-mariees/packs-mariees.component';
import { AccessoiresComponent } from './nos mariees/accessoires/accessoires.component';
import { SoinVisageComponent } from './soin-produit/soin-visage/soin-visage.component';
import { SoinCheveuxComponent } from './soin-produit/soin-cheveux/soin-cheveux.component';
import { OnglerieComponent } from './nos services/onglerie/onglerie.component';
import { OnglerieVideosComponent } from './onglerie-videos/onglerie-videos.component';
import { ABComponent } from './ab/ab.component';
import { Slider2Component } from './slider2/slider2.component';
import { Post1Component } from './HomeComponents/post1/post1.component';
import { Post2Component } from './HomeComponents/post2/post2.component';
import { Post3Component } from './HomeComponents/post3/post3.component';
import { Post4Component } from './HomeComponents/post4/post4.component';
import { BrideByRimComponent } from './nos mariees/bride-by-rim/bride-by-rim.component';
import { BrideByAhlemComponent } from './nos mariees/bride-by-ahlem/bride-by-ahlem.component';
import { BrideByMirouComponent } from './nos mariees/bride-by-mirou/bride-by-mirou.component';
import { BrideByInesComponent } from './nos mariees/bride-by-ines/bride-by-ines.component';
import { BeforeAfterComponent } from './nos mariees/before-after/before-after.component';
import { MaquillageComponent } from './nos services/maquillage/maquillage.component';
import { ColorationComponent } from './nos services/coloration/coloration.component';
import { ExtensionDesCilsComponent } from './nos services/extension-des-cils/extension-des-cils.component';
import { CoiffureComponent } from './nos services/coiffure/coiffure.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    Post1Component,
    Post2Component,
    Post3Component,
    Post4Component,
    HomeFooterComponent,
    Footer2Component,
    BrideByRimComponent,
    ForfaitsComponent,
    PacksforfaitsContainerComponent,
    PackforfaitItemComponent,
    PacksMarieesComponent,
    BrideByAhlemComponent,
    BrideByMirouComponent,
    BrideByInesComponent,
    BeforeAfterComponent,
    AccessoiresComponent,
    SoinVisageComponent,
    SoinCheveuxComponent,
    MaquillageComponent,
    OnglerieComponent,
    ColorationComponent,
    ExtensionDesCilsComponent,
    CoiffureComponent,
    OnglerieVideosComponent,
    ABComponent,
    Slider2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
