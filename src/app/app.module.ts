import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Firebase
/*
//import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
*/
import { environment } from '../environments/environment';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import { FileSizePipe } from './services/file-size.pipe';
/*
import { Camera} from '@awesome-cordova-plugins/camera/ngx';
Camera
*/
// add module

@NgModule({
  declarations: [AppComponent, FileSizePipe],
  entryComponents: [],
  imports: [BrowserModule,IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,AngularFireStorageModule,AngularFirestoreModule],
  providers:[{ provide: RouteReuseStrategy,useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
