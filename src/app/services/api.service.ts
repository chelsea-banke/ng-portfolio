import { Injectable } from '@angular/core';
import { Octokit } from '@octokit/rest';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  octokit = new Octokit({
    auth: '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'
  })

  constructor(private httpClient: HttpClient) { }
  
  fetchGithub():Promise<any> {
    const promise = new Promise((resolve, reject) => {
      resolve(
        this.octokit.request('GET /users/chelsea-banke', {
          username: 'chelsea-banke'
        })
      )
    })
    return promise;
  }
}
