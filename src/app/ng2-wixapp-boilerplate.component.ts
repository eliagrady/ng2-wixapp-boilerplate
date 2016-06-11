import { Component } from '@angular/core';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { SettingsComponent } from './settings';
import { WidgetComponent } from './widget';

@Component({
  moduleId: module.id,
  selector: 'ng2-wixapp-boilerplate-app',
  templateUrl: 'ng2-wixapp-boilerplate.component.html',
  styleUrls: ['ng2-wixapp-boilerplate.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/settings', component: SettingsComponent},
  {path: '/settings', component: SettingsComponent},
  {path: '/widget', component: WidgetComponent}
])
export class Ng2WixappBoilerplateAppComponent {
  title = 'ng2-wixapp-boilerplate works!';
}
