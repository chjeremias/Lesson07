import { Injectable } from '@angular/core';

@Injectable()
export class falsService {

  constructor() { 
    console.log("ok, now this has been injected");
  }
  falsPoster(qty) {
    console.log(qty, "Alright, all done!");
  }
}
