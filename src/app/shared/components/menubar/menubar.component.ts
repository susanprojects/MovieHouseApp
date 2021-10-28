import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent {

  @Input() routerLink = '';

  @Input() imageSrc = '';

  @Input() imageAltText = '';

  @Input() linkText = '';

  constructor() { }

}
