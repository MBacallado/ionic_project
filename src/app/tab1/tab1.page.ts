import { Component } from '@angular/core';
import { AffiliateService } from '../services/affiliate.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  affiliates: any[] = [];
  searchCategoria = '';

  constructor(private as: AffiliateService) {
    this.loadAffiliates();
  }

  loadAffiliates() {
    this.as.loadAffiliates().subscribe( (resp: any[]) => {
      this.affiliates = resp;
    })
  }
}
