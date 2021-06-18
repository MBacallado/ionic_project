import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable( {
    providedIn: 'root'
})
export class DetailsService {

    constructor(private http: HttpClient) {}

    loadDetails(cod: string) {
        return this.http.get(`https://business-674f0-default-rtdb.europe-west1.firebasedatabase.app/business/${cod}.json`);
    }
}