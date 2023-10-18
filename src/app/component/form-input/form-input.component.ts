import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent {
  @Input() controlName!: string;
  @Input() label!: string;
  @Input() class!: string;
  @Input() type!: string;
  @Input() helpText!: string;
  @Input() errorText!: string;
  @Input() readOnly!: boolean;

  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit() {
    this.form = this.rootFormGroup.control;
  }
}
