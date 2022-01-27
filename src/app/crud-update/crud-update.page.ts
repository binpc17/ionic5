import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import {CrudService} from "../services/crud.service";
@Component({
  selector: 'app-crud-update',
  templateUrl: './crud-update.page.html',
  styleUrls: ['./crud-update.page.scss'],
})
export class CrudUpdatePage implements OnInit {
  editForm: FormGroup;
  id: any;
  constructor(private crudService: CrudService,private activatedRoute: ActivatedRoute,private router: Router,public formBuilder: FormBuilder) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.getTask(this.id).subscribe((data) => {
      this.editForm = this.formBuilder.group({
        title: [data['title']],
        description: [data['description']]
      })
    });
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      title: [''],
      description: ['']
    })
  }
  onSubmit() {
    this.crudService.startcLoader();
    this.crudService.update(this.id, this.editForm.value);
    this.crudService.closeLoader();
  }
}
