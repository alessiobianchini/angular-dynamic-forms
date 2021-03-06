import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { DynamicFormComponent } from '../../../dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FieldConfig } from '../../../dynamic-form/models/field-config.interface';

@Component({
  selector: 'example-1',
  styleUrls: ['example-1.component.scss'],
  templateUrl: './example-1.component.html'
})
export class Example1Component implements AfterViewInit {
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
      label: 'Favourite Food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
      validation: [Validators.required]
    },
    {
      type: 'radio',
      label: 'Deliver ?',
      name: 'deliver',
      options: [{ value: 0, label: 'Yes' }, { value: 1, label: 'No' }],
      validation: [Validators.required]
    },
    {
      type: 'checkbox',
      label: 'Favourite Food',
      name: 'foodCheckbox',
      options: [
        { value: 0, label: 'Pizza' },
        { value: 1, label: 'Hot Dogs' },
        { value: 2, label: 'Knakworstje' },
        { value: 3, label: 'Coffee' }
      ],
      placeholder: 'Check options',
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
