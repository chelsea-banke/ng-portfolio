import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { HttpClient } from '@angular/common/http';
// import { resolve } from 'dns';
// import { rejects } from 'assert';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css']
})
export class SocialsComponent implements OnInit {

  ghData: any;
  constructor(private api: ApiService, private http: HttpClient) { }

  ngOnInit(): void {
    this.api.fetchGithub().then((data) => {
      this.ghData=data.data;
      console.log(data);
    })
  }
}
