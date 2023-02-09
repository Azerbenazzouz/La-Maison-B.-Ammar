import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoiresComponent } from './accessoires/accessoires.component';
import { BeforeAfterComponent } from './before-after/before-after.component';
import { BrideByAhlemComponent } from './bride-by-ahlem/bride-by-ahlem.component';
import { BrideByInesComponent } from './bride-by-ines/bride-by-ines.component';
import { BrideByMirouComponent } from './bride-by-mirou/bride-by-mirou.component';
import { BrideByRimComponent } from './bride-by-rim/bride-by-rim.component';
import { CoiffureComponent } from './coiffure/coiffure.component';
import { ColorationComponent } from './coloration/coloration.component';
import { ExtensionDesCilsComponent } from './extension-des-cils/extension-des-cils.component';
import { ForfaitsComponent } from './forfaits/forfaits.component';
import { HomeComponent } from './HomeComponents/home/home.component';
import { MaquillageComponent } from './maquillage/maquillage.component';
import { OnglerieComponent } from './onglerie/onglerie.component';
import { PacksMarieesComponent } from './packs-mariees/packs-mariees.component';
import { SoinCheveuxComponent } from './soin-produit/soin-cheveux/soin-cheveux.component';
import { SoinVisageComponent } from './soin-produit/soin-visage/soin-visage.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bride-by-rim', component: BrideByRimComponent },
  { path: 'bride-by-ahlem', component: BrideByAhlemComponent },
  { path: 'bride-by-mirou', component: BrideByMirouComponent },
  { path: 'bride-by-ines', component: BrideByInesComponent },
  { path: 'before-after', component: BeforeAfterComponent },
  { path: 'accessoires', component: AccessoiresComponent },
  { path: 'forfaits', component: ForfaitsComponent },
  { path: 'packs-mariees', component: PacksMarieesComponent },
  { path: 'soins-visages' , component: SoinVisageComponent},
  { path: 'soins-cheveux' , component: SoinCheveuxComponent},
  { path: 'maquillage', component: MaquillageComponent},
  { path: 'onglerie' , component: OnglerieComponent},
  { path: 'coloration' , component: ColorationComponent},
  { path: 'extension-des-cils' , component: ExtensionDesCilsComponent},
  { path: 'coiffure' , component: CoiffureComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
