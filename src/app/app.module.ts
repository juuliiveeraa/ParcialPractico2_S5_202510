import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientesComponent } from './ingredientes/ingredientes.component';
import { RecetaComponent } from './receta/receta.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientesComponent,
    RecetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
