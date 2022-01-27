import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ActionSheetController} from "@ionic/angular";
//import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
//,private camera: Camera
  constructor(private router: Router,public actionSheetController: ActionSheetController) {}

  goLogin(){
    this.router.navigateByUrl('login');
  }
  goCRud(){
    this.router.navigateByUrl('crud-create');
  }
opencam(){
    /*
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
    let base64Image = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
    // Handle error
  });
  */
}
  presentActionSheet() {
 this.actionSheetController.create({
      header: 'Actions Page',
      animated:true,
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Camera',
        icon: 'camera-outline',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'File Upload',
        icon: '<ion-icon name="search-outline"></ion-icon>',
        data: 'Data value',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    }).then(rs=>{
      rs.present();
    }).catch(eee=>{
      console.log("..Error=>"+eee)
 })
  }


}
