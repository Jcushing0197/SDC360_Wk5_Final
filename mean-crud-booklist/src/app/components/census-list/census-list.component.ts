import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-census-list',
  templateUrl: './census-list.component.html',
  styleUrls: ['./census-list.component.css']
})
export class CensusListComponent implements OnInit {

  Census: any = [];
  editCensus: any = {}; // Declare editCensus object
  showEditForm: boolean = false;

  constructor(private crudService: CrudService, public fb: FormBuilder) {}

  ngOnInit(): void {
    this.getCensus();
  }

  getCensus() {
    this.crudService.GetCensus().subscribe(res => {
      this.Census = res;
    });
  }

  onDelete(id: any): void {
    this.crudService.DeleteCensus(id).subscribe(res => {
      this.getCensus(); // Refresh the list
    });
  }

  onEdit(census: any): void {
    this.showEditForm = true;
    this.editCensus = { ...census }; // Make a copy of the Census object
  }

  onUpdate(): void {
    const { num_people, add_street, add_city, add_state, add_zip, census_year, census_taker } = this.editCensus;
    const updatedCensus = { num_people, add_street, add_city, add_state, add_zip, census_year, census_taker };
    this.crudService.UpdateCensus(this.editCensus._id, updatedCensus).subscribe(res => {
      this.showEditForm = false;
      this.getCensus(); // Refresh the list
    });
  }

  cancelUpdate(): void {
    this.showEditForm = false;
    this.editCensus = {}; // Clear the editCensus object
  }
}








