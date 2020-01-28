import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  today: Date;
  currlocale: string = 'en';
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.currlocale = this.translate.currentLang;
    this.translate.onLangChange.subscribe((res) => {
      console.log(res.lang);
    });
  }

}
