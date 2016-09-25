import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'navbar-component',
    template: '<li><a href="#">{{title}}</a></li>',
    inputs: ['options']
})

export abstract class NavBarElementComponent implements OnInit {

    private title: string;
    private options: {
        title: string
    };

    ngOnInit(): void {
        this.title = this.options.title;
    }
}