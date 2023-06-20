import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { UserModel } from "./userlistModel";

@Injectable({
    providedIn: 'root'
})
export class MiniProjectService {

    baseUrl = 'https://devrunner.co.in/machine_test/index.php/web_api/Users/'

    constructor(private http: HttpClient, private route: ActivatedRoute){}

    headers = new HttpHeaders().set('Content-Type', 'application/json')
    // options = {this.headers}

    getAllData():Observable<UserModel>{
        return  this.http.get<UserModel>(this.baseUrl);
    }

    fetchUserForLogin(login_endpoint:string, paramValue1: string, paramValue2:string){

        const loginUrl = this.baseUrl + login_endpoint
        const queryParams = new HttpParams()
                                .set('user_email', paramValue1)
                                .set('user_pwd', paramValue2)

        return this.http.get(loginUrl, { params: queryParams})
    }

    addUser(post_endpoint:string, body:any){
        const postUrl = this.baseUrl + post_endpoint
        return this.http.post(postUrl, body)
    }

    updateUser(put_endpoint:string, body:string){
        const putUrl = this.baseUrl+put_endpoint
        return this.http.put(putUrl, body, {headers: this.headers})
    }

    deleteUser(del_endpoint:string, del_id:any){
        const del_Url = this.baseUrl+del_endpoint;
        // const idAsJson = {
        //     body:{
        //         user_id: del_id
        //     }
        // }

        return this.http.delete(del_Url, del_id)
    }

    singleUserDetails(single_endpoint:string, individual_id:any){
        const queryParam = new HttpParams().set('user_id', individual_id);
        const singleUserUrl = this.baseUrl + single_endpoint

        return this.http.get(singleUserUrl, {params: queryParam})
    }

}