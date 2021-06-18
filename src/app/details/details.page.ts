import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from '../services/details.service';

@Component({
  selector: 'app-details',
  templateUrl: 'details.page.html',
  styleUrls: ['details.page.scss']
})
export class DetailsPage implements OnInit{

  details: any[] = [];
  id: string;

  constructor(private route:ActivatedRoute, private ds: DetailsService) {}

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.ds.loadDetails(params['id']).subscribe( (res: any[]) => {
        this.id = params['id'];
        this.details = res;
      })
    })
  }

}
