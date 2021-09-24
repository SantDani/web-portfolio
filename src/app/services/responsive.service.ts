import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  constructor() { }

  public isMobile(): boolean {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      console.log('log - It is Responsive');
      return true;
    }else{
      return false;
    }
  }
}
