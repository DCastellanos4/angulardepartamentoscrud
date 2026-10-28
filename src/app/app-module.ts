import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { FormsModule } from '@angular/forms';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { DepartamentosComponent } from './components/departamentos-component/departamentos-component';
import { ServiceDepartamentos } from './services/departamentos.service';
import { EditDepartamentoComponent } from './components/edit-departamento-component/edit-departamento-component';
import { CreateComponent } from './components/create-component/create-component';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    MenuComponent,
    DepartamentosComponent,
    EditDepartamentoComponent,
    CreateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), ServiceDepartamentos],
  bootstrap: [App],
})
export class AppModule {}
