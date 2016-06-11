import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2WixappBoilerplateAppComponent } from '../app/ng2-wixapp-boilerplate.component';

beforeEachProviders(() => [Ng2WixappBoilerplateAppComponent]);

describe('App: Ng2WixappBoilerplate', () => {
  it('should create the app',
      inject([Ng2WixappBoilerplateAppComponent], (app: Ng2WixappBoilerplateAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-wixapp-boilerplate works!\'',
      inject([Ng2WixappBoilerplateAppComponent], (app: Ng2WixappBoilerplateAppComponent) => {
    expect(app.title).toEqual('ng2-wixapp-boilerplate works!');
  }));
});
