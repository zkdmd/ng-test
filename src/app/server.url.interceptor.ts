import { Router } from '@angular/router';
import { Interceptor, InterceptedRequest, InterceptedResponse } from 'ng2-interceptors';
// import { CookieService } from 'angular2-cookie/services/cookies.service';

export class ServerURLInterceptor implements Interceptor {
    // private cookieService = new CookieService();

    public interceptBefore(request: InterceptedRequest): InterceptedRequest {
        // Do whatever with request: get info or edit it'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'

        // request.options.headers.append("Authorization", this.cookieService.get('token'));
        request.options.headers.append("Authorization", 'Bearer%20236dad41-9c39-4737-a1d6-b31feec294cb');
        
        //request.options.headers.append("Content-Type",'application/x-www-form-urlencoded; charset=UTF-8');
        //console.log(request.options.headers.get('Content-Type'));
        //console.log('start');
        
        //上传接口不能放头,放了服务端500错误
        // if(request.options.headers.get('Content-Type')){
        //     request.options.headers.set('Content-Type',request.options.headers.get('Content-Type') + ';charset=UTF-8')
        // }else{
        //     request.options.headers.append("Content-Type",'charset=UTF-8');
        // };

        return request;
    }

    public interceptAfter(response: InterceptedResponse): InterceptedResponse {
        // Do whatever with response: get info or edit it
        //console.log(response);
        //console.log('done');
        
        if(response.response.status === 401){
            //校验失效
            //this.router.navigate(['/login']);
            window.location.href = '#/login';
        }

        return response;
        /*
          You can return:
            - Response: The modified response
            - Nothing: For convenience: It's just like returning the response
        */
    }
}