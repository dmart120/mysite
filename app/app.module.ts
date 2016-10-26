import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NavBarComponent } from './components/navbar/navbar.component';
import { NavBarElementComponent } from './components/navbar/navbar-element/navbar-element.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        NavBarComponent,
        NavBarElementComponent,
        CarouselComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}