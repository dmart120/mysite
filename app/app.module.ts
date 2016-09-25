import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NavBarComponent } from './components/navbar/navbar.component';
import { NavBarElementComponent } from './components/navbar/navbar-element/navbar-element.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        NavBarComponent,
        NavBarElementComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}