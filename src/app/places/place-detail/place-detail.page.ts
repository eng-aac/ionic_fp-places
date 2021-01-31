import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { AlertController } from '@ionic/angular';
import { async } from 'rxjs/internal/scheduler/async';


@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private placeService: PlacesService, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      //redirect-validation

      const recipeId = paramMap.get('placeId');
      this.place = this.placeService.getPlace(recipeId);
    })
  }

  async deletePlace() {
    const alertElement = await this.alertCtrl.create({
      cssClass: 'alertElement',
      header: 'Delete Place',
      subHeader: 'Are your sure you want to delete it?',
      message: 'Be careful.',
      buttons: [ 
        {
          text: 'Cancel', 
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: () => {
            this.placeService.deletePlace(this.place.id);
            this.router.navigate(['/places'])
          }
        }
      ]
    });
    await alertElement.present();
  }
  
}
