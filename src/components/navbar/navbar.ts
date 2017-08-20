import {Component, EventEmitter, Input, Output} from '@angular/core';

/**
 * Generated class for the NavbarComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'my-navbar',
  templateUrl: 'navbar.html'
})
export class NavbarComponent {

  @Input('id') id;
  @Input('title') title;
  @Input('imgSrc') imgSrc;
  @Input('buttons') buttons;

  @Output()
  buttonClickedEvent: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  public buttonClicked(clickedButton): void {
    this.buttonClickedEvent.emit(clickedButton.id);
  }

}
