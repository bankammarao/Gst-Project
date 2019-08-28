import { observable } from 'rxjs';
import { Injectable,Output,EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders, HttpResponse, HttpEvent, HttpInterceptor, HttpHandler } from '@angular/common/http';

import swal from 'sweetalert';


@Injectable({
  providedIn: "root"
})
export class AuthService {

  userdata:any;

  host_url="http://192.168.2.167:8080/gst/rest/user/gspSignIn";

  @Output() logindata: EventEmitter<boolean> = new EventEmitter();

  url: any = this.host_url;

  constructor(private http: HttpClient) { }

  public isAuthenticate(): boolean {
    //method return true or false based on login credential
    const userData = sessionStorage.getItem('userData');

    if (userData && userData.length > 0) {
      return true;
    }
    else {
      return false;
    }
    
  }

  public loginAction(postData){
    const body = new HttpParams()
      .set('userName', postData.userName)
      .set('password', postData.password);
    this.http
      .post(this.url,postData
        // , body.toString(),
        // {
        //   headers: new HttpHeaders() 
        //     .set('Content-Type', 'application/json')
        // }
      )
      .subscribe(
        (res) => {
          {

            if (res['statusCode'] == 200) {
            swal("login Successfully!", "Thank you", "success");
            
            }
            else if (res['statusCode'] == null) {
            swal("invalid credentials");
            
            }
            }
          console.log(res);
           this.userdata=res['responseData']['user'];
           localStorage.setItem('userinformation',JSON.stringify(this.userdata))
           sessionStorage.setItem('userData', res['responseData'].token);
           sessionStorage.setItem('userId', res['responseData']['user'].id);
           sessionStorage.setItem('username', res['responseData']['user'].username);
           sessionStorage.setItem('role', res['responseData']['user'].role);

    // if((res['user'].roles[0]=="ADMIN")){
    //       }
    //       if(res['user'].roles[0]=="SUPPERADMIN"){
    //       }
    //       if(res['user'].roles[0]=="USER"){
    //       } -->
          this.logindata.emit();
        });
      return true;
  }
  public SignUp(postData) { 
    //registraion api
  }
  public async logOutAction() {
    //session/local storage clear
    await sessionStorage.removeItem('userData');
    await sessionStorage.clear();
    return true;
  }

  public async getUserdata() {
    const userData = sessionStorage.getItem('userData');
    return JSON.parse(userData)
  }

}
