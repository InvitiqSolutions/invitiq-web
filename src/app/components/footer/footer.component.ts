import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonService } from '../../../shared/models/services/common.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(protected service : CommonService) { }

  enquiry = {
  name: '',
  email: '',
  message: ''
};

submitEnquiry() {

  console.log(this.enquiry);

}

}
