import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-radio',
  styleUrls: ['form-radio.component.scss'],
  templateUrl: './form-radio.component.html'
})
export class FormRadioComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
