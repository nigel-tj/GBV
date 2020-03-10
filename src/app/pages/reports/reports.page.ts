import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})

export class ReportsPage implements OnInit {
  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private navCtrl: NavController,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
  this.validations_form = this.formBuilder.group({
      name: new FormControl(''),
      number: new FormControl(''),
      message: new FormControl('')
    });
  }

  sendReport(value){
    let user = firebase.auth().currentUser;
    let newInfo = firebase.database().ref('reports/').push();
    console.log("TTTTTTTTT"+user);
    newInfo.set(value);
    console.log("TTTTTTTTT 2"+ value);
    this.navCtrl.navigateBack('/home');
    console.log("TTTTTTTTT 3"+ value);
  }

}
