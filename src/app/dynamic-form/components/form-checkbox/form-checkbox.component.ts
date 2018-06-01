import { FieldConfig } from "../../models/field-config.interface";
import { Field } from "../../models/field.interface";
import { FormGroup } from '@angular/forms';
import { Component } from "@angular/core";

@Component({
  selector: 'form-checkbox',
  styleUrls: ['form-checkbox.component.scss'],
  templateUrl: './form-checkbox.component.html'
})

export class FormCheckboxComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
