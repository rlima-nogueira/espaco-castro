import { Component } from '@angular/core';
import { faLocationDot, faBrain, faBookAtlas, faPuzzlePiece, faHammer} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'espaco-castro';

  public icons = {faLocationDot, faBrain, faBookAtlas, faPuzzlePiece, faHammer};
}
