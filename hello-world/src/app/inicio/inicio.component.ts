import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { InfoService } from '../services/info.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [InfoService]
})
export class InicioComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  }

}
