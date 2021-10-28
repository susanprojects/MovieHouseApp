import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent {

  @Input() routerLink: string = '';

  @Input() imageSrc: string = '';

  @Input() imageAltText: string = '';

  @Input() linkText: string = '';

  constructor() { }

}
