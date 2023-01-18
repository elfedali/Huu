import { Component, isDevMode, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    if (isDevMode()) {
      console.log('Development mode', 'https://angular.io/api/core/isDevMode');
    }
  }

}
