import { Component, OnInit } from '@angular/core';
import {AngularFireStorage, AngularFireUploadTask} from "@angular/fire/compat/storage";
import {Observable} from "rxjs/index";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import { finalize, tap } from 'rxjs/operators';
import {LoadingController} from "@ionic/angular";
export interface FILE {
  name: string;
  filepath: string;
  size: number;
}
@Component({
  selector: 'app-crud-file',
  templateUrl: './crud-file.page.html',
  styleUrls: ['./crud-file.page.scss'],
})
export class CrudFilePage implements OnInit {
  ngFireUploadTask: AngularFireUploadTask;
  progressNum: Observable<number>;
  progressSnapshot: Observable<any>;
  fileUploadedPath: Observable<string>;
  files: Observable<FILE[]>;
  FileName: string;
  FileSize: number;
  isImgUploading: boolean;
  isImgUploaded: boolean;

  private ngFirestoreCollection: AngularFirestoreCollection<FILE>;
  constructor(private angularFirestore: AngularFirestore,private angularFireStorage: AngularFireStorage, private loadingController: LoadingController) {
    this.isImgUploading = false;
    this.isImgUploaded = false;
    this.ngFirestoreCollection = angularFirestore.collection<FILE>('filesCollection');
    this.files = this.ngFirestoreCollection.valueChanges();
  }

  ngOnInit() {
  }
  fileUpload(event: FileList) {

    const file = event.item(0)

    if (file.type.split('/')[0] !== 'image') {
      console.log('File type is not supported!')
      return;
    }

    this.isImgUploading = true;
    this.isImgUploaded = false;

    this.FileName = file.name;

    const fileStoragePath = `filesStorage/${new Date().getTime()}_${file.name}`;

    const imageRef = this.angularFireStorage.ref(fileStoragePath);

    this.ngFireUploadTask = this.angularFireStorage.upload(fileStoragePath, file);

    this.progressNum = this.ngFireUploadTask.percentageChanges();
    this.progressSnapshot = this.ngFireUploadTask.snapshotChanges().pipe(
      finalize(() => {
        this.fileUploadedPath = imageRef.getDownloadURL();

        this.fileUploadedPath.subscribe(resp=>{
          this.fileStorage({
            name: file.name,
            filepath: resp,
            size: this.FileSize
          });
          this.isImgUploading = false;
          this.isImgUploaded = true;
        },error => {
          console.log(error);
        })
      }),
      tap(snap => {
        this.FileSize = snap.totalBytes;
      })
    )
  }
  fileStorage(image: FILE) {
    const ImgId = this.angularFirestore.createId();
    this.startcLoader();
    this.ngFirestoreCollection.doc(ImgId).set(image).then(data => {
      this.closeLoader();
      console.log(data);
    }).catch(error => {
      this.closeLoader();
      console.log(error);
    });
  }
  startcLoader() {
    this.loadingController.create({
      message: 'Please wait...',
      duration:20000,
      translucent: true
    }).then((res) => {
       res.present();
    });
  }
  closeLoader() {
    this.loadingController.dismiss().then((res) => {
      console.log('Loader hidden', res);
    }).catch((error) => {
      console.log(error);
    });
  }
}
