import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms'

@Component({
  selector: 'app-contact-forms',
  templateUrl: './contact-forms.component.html',
  styleUrl: './contact-forms.component.scss'
})
export class ContactFormsComponent implements OnInit {

  contactForm!: FormGroup;
  formSubmitted = false;
  submittedData: {
    firstName: string;
    lastName: string;
    emailAddress: string;
    confirmEmailAddress: string;
    programOfInterest: string;
  } | null = null;

  constructor(private fb: FormBuilder) {


  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      confirmEmailAddress: ['', [Validators.required, Validators.email]],  // 如果不匹配，应该返回错误，但是实际上没有在前端展示错误
      programOfInterest: ['', Validators.required]
    }, { validator: this.matchEmails });

  }

  matchEmails(group: AbstractControl): { [key: string]: boolean } | null {
    const email = group.get('emailAddress')?.value;
    const confirmEmail = group.get('confirmEmailAddress')?.value;
    return email === confirmEmail ? null : { notMatching: true }; // 如果不匹配，应该返回错误
  }

  onSubmit(): void {
    this.formSubmitted = true;
    if (this.contactForm.valid) {
      this.submittedData = this.contactForm.value;
      alert('Form submitted!')
      console.log('Form submitted:', this.submittedData);
    }
  }

}
