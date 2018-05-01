import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiasComponent } from './noticias/noticias.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import {TablaDePosicionesComponent} from './tabla-de-posiciones/tabla-de-posiciones.component';

import {CarmelitaComponent} from './carmelita/carmelita.component';
import {AlajuelenseComponent} from './alajuelense/alajuelense.component';
import {SaprissaComponent} from './saprissa/saprissa.component';
import {HeredianoComponent} from './herediano/herediano.component';
import {CartaginesComponent} from './cartagines/cartagines.component';
import {SantosComponent} from './santos/santos.component';
import {PerezZeledonComponent} from './perez-zeledon/perez-zeledon.component';
import {LimonComponent} from './limon/limon.component';
import {GuadalupeComponent} from './guadalupe/guadalupe.component';
import {LiberiaComponent} from './liberia/liberia.component';
import {GreciaComponent} from './grecia/grecia.component';
import {UcrComponent} from './ucr/ucr.component';
import {InicioComponent} from './inicio/inicio.component';

import {NoEncontradoComponent} from './no-encontrado/no-encontrado.component';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},

  {path: 'noticias', component: NoticiasComponent},
  {path: 'sobre-nosotros', component: SobreNosotrosComponent},
  {path: 'estadisticas', component: EstadisticasComponent},
  {path: 'tabla-de-posiciones', component: TablaDePosicionesComponent},

  {path: 'alajuelense', component: AlajuelenseComponent},
  {path: 'saprissa', component: SaprissaComponent},
  {path: 'herediano', component: HeredianoComponent},
  {path: 'cartagines', component: CartaginesComponent},
  {path: 'santos', component: SantosComponent},
  {path: 'liberia', component: LiberiaComponent},
  {path: 'perez-zeledon', component: PerezZeledonComponent},
  {path: 'grecia', component: GreciaComponent},
  {path: 'guadalupe', component: GuadalupeComponent},
  {path: 'carmelita', component: CarmelitaComponent},
  {path: 'limon', component: LimonComponent},
  {path: 'ucr', component: UcrComponent},
  {path: 'inicio', component: InicioComponent},

  {path: '**', component: NoEncontradoComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =
  [NoticiasComponent, SobreNosotrosComponent, EstadisticasComponent, TablaDePosicionesComponent,
   AlajuelenseComponent, SaprissaComponent, HeredianoComponent, CartaginesComponent, SantosComponent,
   PerezZeledonComponent, LiberiaComponent, LimonComponent, GuadalupeComponent, CarmelitaComponent,
   GreciaComponent, UcrComponent, InicioComponent,
   NoEncontradoComponent];
