
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

constructor(private httpClient:HttpClient) { }

register(data){
  return this.httpClient.post(`${environment.API_URL}/api/Authentication/Register`,data);
}


userAuthentication(data)
{
  var reqHeader = new HttpHeaders({'Content-Type':'application/json'});
  return this.httpClient.post(`${environment.API_URL}/api/Authentication/Login`,data)
  //return this.httpClient.post(`http://localhost:64998/api/Login`,data)

}
login(Token,id,role)
{
  localStorage.setItem('Userid',id);
  localStorage.setItem('usertoken',Token);
  localStorage.setItem('Role',role);

}
logout()
{

  localStorage.removeItem('Userid');
  localStorage.removeItem('usertoken');
  localStorage.removeItem('Role');
}
isloggedAdmin():boolean
{
  if(localStorage.getItem('usertoken') && localStorage.getItem('Role')== "Admin")
  {
    return true;
  }
  else
  {
    return false;
  }
}
}
