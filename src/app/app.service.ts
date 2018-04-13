import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, URLSearchParams, ResponseContentType } from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { InterceptorService } from 'ng2-interceptors';
import { environment } from '../environments/environment';

@Injectable()
export class AppService {
	redirectUrl: string;
    constructor(
        private http: InterceptorService
	) { }



	//获取Mac轨迹数据
	getMacPlace(postObj:any):Observable<any>{
		let data = new URLSearchParams();
        data.append('mac', postObj.mac);
        data.append('startTime', postObj.startTime);
        data.append('endTime', postObj.endTime);
        data.append('rows', postObj.rows);
        data.append('page', postObj.page);
		return this.http.get(environment.url_custom + '/api/onekey/hotPlace',{
			params: data
		});
    };


    uploadFileNew(formData: FormData,moudle:string):Observable<any>{
        //let headers = new Headers({'enctype': 'multipart/form-data'}); 
        //let headers = new Headers({'Content-Type': 'multipart/form-data'});
        //let headers = new Headers({'Content-Type': undefined}); 
        
        return this.http.post(environment.url + '/api/attachment/upload/'+moudle,formData);
    };
    downloadNew(id:string):Observable<any>{
        return this.http.get(environment.url + '/api/attachment/download/' + id,{
			responseType: ResponseContentType.Blob
		});
	};
}