import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalizeRouterService } from 'localize-router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'local-router-demo';
  langOptions = ['en', 'fr'];
  defaultLang = 'en';

  constructor(private localize: LocalizeRouterService, private translate: TranslateService) {
    this.translate.addLangs(this.langOptions);
    if(localStorage.getItem('locale'))
      this.defaultLang = localStorage.getItem('locale');
      
    this.localize.changeLanguage(this.defaultLang);
  }

  languageChange(event) {
    let selectedLang = event.target.value;
    if(localStorage.getItem('locale'))
      localStorage.removeItem('locale');

    localStorage.setItem('locale', selectedLang)
    this.localize.changeLanguage(selectedLang);
  }

  toUpperCase(title: string): string {
    if(!title)
      return;

    return title.toUpperCase();
  }
}
