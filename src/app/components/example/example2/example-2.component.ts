import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { DynamicFormComponent } from '../../../dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FieldConfig } from '../../../dynamic-form/models/field-config.interface';

@Component({
  selector: 'example-2',
  styleUrls: ['example-2.component.scss'],
  templateUrl: './example-2.component.html'
})
export class Example2Component implements AfterViewInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'select',
      label: 'Favourite color',
      name: 'color',
      options: ['Red', 'Blue', 'Orange', 'Black'],
      placeholder: 'Select an option',
      validation: [Validators.required]
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button'
    }
  ];

  ngAfterViewInit() {
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

    this.form.setDisabled('submit', true);
    this.form.setValue('name', 'Alessio Bianchini');
  }

  submit(value: { [name: string]: any }) {
    console.log(value);
  }
}
