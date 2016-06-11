import { Injectable } from '@angular/core';
import { Location } from  '@angular/common';

@Injectable()
export class WixService {
  private url;

  constructor(location: Location) {
    this.url = location.path();
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
