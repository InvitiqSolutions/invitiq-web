import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonService } from '../../../shared/services/common.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(protected service : CommonService) { }

  contact = {
    name: '',
    phone: '',
    company: '',
    service: '',
    query: ''
  };

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
