import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MiniProjectService {

    baseUrl = 'https://devrunner.co.in/machine_test/index.php/web_api/Users/'

    constructor(private http: HttpClient){}

    fetchUserlist(){
        return this.http.get(this.baseUrl)
    }

}