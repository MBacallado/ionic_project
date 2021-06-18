import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable( {
    providedIn: 'root'
})
export class AffiliateService {

    constructor(private http: HttpClient) {}

    loadAffiliates(): any {
        return this.http.get('https://business-674f0-default-rtdb.europe-west1.firebasedatabase.app/afiliate.json');
    }
}