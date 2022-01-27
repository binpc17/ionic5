import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import {CrudService} from "../services/crud.service";
import {Route, Router} from "@angular/router";
@Component({
  selector: 'app-crud-create',
  templateUrl: './crud-create.page.html',
  styleUrls: ['./crud-create.page.scss'],
})
export class CrudCreatePage implements OnInit {
  todoForm: FormGroup;
  constructor(private crudService: CrudService, public formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      title: [''],
      description: ['']
    })
  }
  onSubmit() {
    if (!this.todoForm.valid) {
      return false;
    } else {
      this.crudService.startcLoader();
      this.crudService.create(this.todoForm.value)
        .then(() => {
          this.todoForm.reset();
          this.crudService.closeLoader();
          this.router.navigate(['/crud-list']);
        }).catch((err) => {
        console.log(err)
      });
    }
  }
}
