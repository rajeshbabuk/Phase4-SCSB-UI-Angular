import { Injectable, OnInit, Inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { from, Observable } from 'rxjs';
import { urls } from 'src/config/urls';
import { appHeaders } from 'src/config/headers';
import { TreeNode } from 'primeng/api';
import { BulkRequestForm } from 'src/app/model/BulkRequestForm';

@Injectable({
  providedIn: 'root'
})
export class BulkRequestService {


  baseUrl = urls.baseUrl;
  prefix = urls.bulkRequest

  constructor(@Inject(HttpClient) private httpClient: HttpClient) { }

  loadCreateRequest(): Observable<TreeNode[]> {
    return this.httpClient.post<TreeNode[]>(this.baseUrl + this.prefix + "/loadCreateRequest",
      {
        headers: appHeaders.getHeaders()
      });
  } 
  createBulkRequest(postData: BulkRequestForm): Observable<TreeNode[]> {
    return this.httpClient.post<TreeNode[]>(this.baseUrl + this.prefix + "/createBulkRequest", postData,
      {
        headers: appHeaders.getHeaders_formData()
      });
  }  
  populateDeliveryLocations(postData: BulkRequestForm): Observable<TreeNode[]> {
    return this.httpClient.post<TreeNode[]>(this.baseUrl + this.prefix + "/populateDeliveryLocations", postData,
      {
        headers: appHeaders.getHeaders()
      });
  }
  searchRequest(postData: BulkRequestForm): Observable<TreeNode[]> {
    return this.httpClient.post<TreeNode[]>(this.baseUrl + this.prefix + "/searchRequest", postData,
      {
        headers: appHeaders.getHeaders()
      });
  }
}
