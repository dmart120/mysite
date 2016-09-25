import { Component, OnInit } from '@angular/core';

@Component({
    'selector': 'nav-bar',
    templateUrl: 'app/components/navbar/navbar.component.html',
    inputs: ['title', 'elements']
})

export class NavBarComponent implements OnInit {
    private elements: any[];
    private title: string;

    ngOnInit(): void {
        console.log(this.elements);
    }
}