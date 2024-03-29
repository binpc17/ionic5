import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Router} from "@angular/router";
import {LoadingController} from "@ionic/angular";

export class TODO {
  $key: string;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private ngFirestore: AngularFirestore,private router: Router, private loadingController: LoadingController) { }

  create(todo: TODO) {
    return this.ngFirestore.collection('tasks').add(todo);
  }

  getTasks() {
    return this.ngFirestore.collection('tasks').snapshotChanges();
  }

  getTask(id) {
    return this.ngFirestore.collection('tasks').doc(id).valueChanges();
  }

  update(id, todo: TODO) {
    this.ngFirestore.collection('tasks').doc(id).update(todo)
      .then(() => {
        this.router.navigate(['/crud-list']);
      }).catch(error => console.log(error));
  }

  delete(id: string) {
    this.ngFirestore.doc('tasks/' + id).delete();
  }

 startcLoader() {
    this.loadingController.create({
      message: 'Please wait...',
      duration: 8000,
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
