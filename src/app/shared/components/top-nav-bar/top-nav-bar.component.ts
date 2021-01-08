import {Component} from '@angular/core';
import {RoutingPath} from '../../models/routing.models';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent {
  public routingPath = RoutingPath;
}
