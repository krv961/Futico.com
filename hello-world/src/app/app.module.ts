import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { TablaDePosicionesComponent } from './tabla-de-posiciones/tabla-de-posiciones.component';
import { AlajuelenseComponent } from './alajuelense/alajuelense.component';
import { SaprissaComponent } from './saprissa/saprissa.component';
import { HeredianoComponent } from './herediano/herediano.component';
import { CartaginesComponent } from './cartagines/cartagines.component';
import { SantosComponent } from './santos/santos.component';
import { PerezZeledonComponent } from './perez-zeledon/perez-zeledon.component';
import { GreciaComponent } from './grecia/grecia.component';
import { GuadalupeComponent } from './guadalupe/guadalupe.component';
import { LimonComponent } from './limon/limon.component';
import { LiberiaComponent } from './liberia/liberia.component';
import { UcrComponent } from './ucr/ucr.component';
import { CarmelitaComponent } from './carmelita/carmelita.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import {FooterComponent} from './layouts/footer/footer.component';
import { NgStickyDirective } from 'ng-sticky';
import { InicioComponent } from './inicio/inicio.component';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import { RestComponent } from './rest/rest.component';
import { HttpClient } from '@angular/common/http';
import {HttpHandler} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    NoticiasComponent,
    EstadisticasComponent,
    SobreNosotrosComponent,
    TablaDePosicionesComponent,
    AlajuelenseComponent,
    SaprissaComponent,
    HeredianoComponent,
    CartaginesComponent,
    SantosComponent,
    PerezZeledonComponent,
    GreciaComponent,
    GuadalupeComponent,
    LimonComponent,
    LiberiaComponent,
    UcrComponent,
    CarmelitaComponent,
    NoEncontradoComponent,
    FooterComponent,
    NgStickyDirective,
    InicioComponent,
    RestComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, HttpClient, HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
