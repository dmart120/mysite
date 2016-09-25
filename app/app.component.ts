import { Component } from '@angular/core';

@Component({
    'selector': 'my-site',
    template: `
    <nav-bar [title]="title" [elements]="elements"></nav-bar>
`
})

export class AppComponent {

    private title = 'Daniel Martinez';
    private elements = ['Home', 'About', 'Contact'];

}