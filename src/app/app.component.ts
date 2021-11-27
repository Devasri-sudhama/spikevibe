import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './models/contact.model';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private contact: ContactService, private http: HttpClient, private fb: FormBuilder) { }
  title = 'spikevine';
  customer_name: String = "";
  customer_email: String = "";
  customer_message: String = "";
  success: boolean = false;
  showEmailError = false;
  userForm = this.fb.group({
    customer_name: ['', Validators.email],
    customer_email: '',
    customer_message: ''
  })


  contactFormData(contact: Contact) {
    var name = contact.customer_name;
    var email = contact.customer_email;
    var message = contact.customer_message;
    var body = {
      "customer_name": name,
      "customer_email": email,
      "customer_message": message

    };
    // console.log(body);
    // var data = JSON.stringify(body)
    if (!this.validateEmail(email)) {
      this.showEmailError = true;
      setTimeout(() => {
        this.showEmailError = false;
      }, 3000);
    } else {
      if (contact.customer_email != '' && contact.customer_name != '' && contact.customer_message != '') {
        this.contact.sendContactForm(body).subscribe(data => {
          if (data['MessageId']) {
            this.success = true;
            this.customer_email = '';
            this.customer_message = ''
            this.customer_name = '';
            setTimeout(() => {
              this.success = false;
            }, 3000);
          }
        })
      } else {
        alert("Internal Server Error");
      }
    }
  }
  validateEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }


}
