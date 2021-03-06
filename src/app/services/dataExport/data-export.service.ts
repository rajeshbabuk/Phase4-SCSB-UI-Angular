import { HttpClient, HttpParams } from "@angular/common/http";
import { Inject, Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Observable } from 'rxjs';
import { appHeaders } from '@config/headers';
import { urls } from '@config/urls';

@Injectable({
  providedIn: 'root'
})
export class DataExportService {
  constructor(@Inject(HttpClient) private httpClient: HttpClient) { }
  PREFIX = urls.DATA_EXPORT;
  getRecentDataExportsInfo(): Observable<TreeNode[]> {
    return this.httpClient.get<TreeNode[]>(this.PREFIX + "/getRecentDataExportsInfo",
      {
        headers: appHeaders.getHeaders()
      });
  }
  startDataDump(collectionGroupIds: string, date: string, emailToAddress: string, fetchType: string, imsDepositoryCodes: string, institutionCodes: string, outputFormat: string, requestingInstitutionCode: string, transmissionType: string, userName: string): Observable<TreeNode[]> {
    let headers = appHeaders.getHeaders_formData();
    let parames = new HttpParams()
      .set('collectionGroupIds', collectionGroupIds)
      .set('date', date)
      .set('emailToAddress', emailToAddress)
      .set('fetchType', fetchType)
      .set('imsDepositoryCodes', imsDepositoryCodes)
      .set('institutionCodes', institutionCodes)
      .set('outputFormat', outputFormat)
      .set('requestingInstitutionCode', requestingInstitutionCode)
      .set('transmissionType', transmissionType)
      .set('userName', userName);
    const options = {
      params: parames, headers: headers
    };
    return this.httpClient.get<TreeNode[]>(this.PREFIX + "/exportDataDump", options);
  }
  getDescriptions(): Observable<TreeNode[]> {
    return this.httpClient.get<TreeNode[]>(this.PREFIX + "/getDescriptions",
      {
        headers: appHeaders.getHeaders()
      });
  }
}
