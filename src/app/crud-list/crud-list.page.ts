import { Component, OnInit } from '@angular/core';
import {CrudService} from "../services/crud.service";
import {Router} from "@angular/router";
import {LoadingController} from "@ionic/angular";
export class TODO {
  $key: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.page.html',
  styleUrls: ['./crud-list.page.scss'],
})
export class CrudListPage implements OnInit {
  Tasks: TODO[];
  constructor(private crudService: CrudService, private router: Router, private loadingController: LoadingController) { }

  ngOnInit() {
    this.startcLoader();
    this.crudService.getTasks().subscribe((res) => {
      this.Tasks = res.map((t) => {
        this.closeLoader();
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as TODO
        };
      })
    });
  }
  goCRud(){
    this.router.navigateByUrl('crud-create');
  }
  todoList() {
    this.crudService.getTasks()
      .subscribe((data) => {
        console.log(data)
      })
  }
  remove(id) {
    console.log(id)
    if (window.confirm('Are you sure?')) {
      this.crudService.startcLoader();
      this.crudService.delete(id)
      this.crudService.closeLoader();
    }
  }
  startcLoader() {
    this.loadingController.create({
      message: 'Please wait...',
      duration: 18000,
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
