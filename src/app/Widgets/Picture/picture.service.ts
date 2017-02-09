import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Http} from '@angular/http';

@Injectable()
export class PictureService {
  
  constructor(private _http:Http){
    
  }
 
  
  getImage(url:string){ 
    console.log(url);
    return Observable.create(observer=>{
      let req = new XMLHttpRequest();
      req.open('get',url);
      req.responseType = "arraybuffer";
      req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {
          observer.next(req.response);
          observer.complete();
        }
      };
      req.send();
    });
  }
}