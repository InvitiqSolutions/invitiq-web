import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonService } from '../../../shared/models/services/common.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-contact',
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(protected service : CommonService) { }
  contact = {
    name: '',
    phone: '',
    company: '',
    service: '',
    query: ''
  };

  serviceList = [
    "Website Development",
    "E-Commerce Development",
    "Website Redesign",
    "SEO",
    "Digital Marketing",
    "Social Media Management",
    "Google Ads",
    "Meta Ads",
    "Lead Generation",
    "Brand Development",
    "Website Maintenance",
    "Other"
  ]

  submitContact() {

    const formData = new URLSearchParams();

    formData.set('form-name', 'enquiry');
    formData.set('name', this.contact.name);
    formData.set('phone', this.contact.phone);
    formData.set('company', this.contact.company);
    formData.set('service', this.contact.service);
    formData.set('query', this.contact.query);

    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData.toString()
    })
    .then(() => {

      alert('Thank you! Your enquiry has been sent successfully.');

      this.contact = {
        name: '',
        phone: '',
        company: '',
        service: '',
        query: ''
      };

    })
    .catch(error => {

      console.error(error);

      alert('Unable to send your enquiry. Please try again.');

    });
  
  }
}
