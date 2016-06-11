import { Injectable } from '@angular/core';
import { Location } from  '@angular/router';

@Injectable()
export class WixService {

  constructor(location: Location) {
    this.url = location.pathname;
  }

  getInstance() {
    var instanceRegexp = /.*instance=([\[\]a-zA-Z0-9\.\-_]*?)(&|$|#).*/g;
    var instance = instanceRegexp.exec(this.url);
    if (instance && instance[1]) {
      return instance[1];
    } else {
      return undefined;
    }
  }

}
