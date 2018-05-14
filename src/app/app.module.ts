import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { HomeComponent } from './components/home/home.component';
import { AppRouting } from './app.routing';
import { Example1Component } from './components/example/example1/example-1.component';
import { Example2Component } from './components/example/example2/example-2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Example1Component,
    Example2Component
  ],
  imports: [
    AppRouting,
    BrowserModule,
    DynamicFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
