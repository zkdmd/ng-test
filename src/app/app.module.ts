import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileUploadModule } from 'ng2-file-upload';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UiComponent } from './ui/ui.component';
import { AppService } from './app.service';

import { InterceptorService } from 'ng2-interceptors';
import { XHRBackend, RequestOptions } from '@angular/http';
import { ServerURLInterceptor } from './server.url.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing';
import { AuthGuard } from './auto-guard.service';

export function interceptorFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, serverURLInterceptor: ServerURLInterceptor) { // Add it here
	let service = new InterceptorService(xhrBackend, requestOptions);
	service.addInterceptor(serverURLInterceptor); // Add it here
	return service;
}

@NgModule({
	declarations: [
		AppComponent,
		UiComponent
	],
	imports: [
		BrowserModule,
		FileUploadModule,
		HttpModule,
		BrowserAnimationsModule,
		AppRoutingModule
	],
	providers: [
		AppService,
		AuthGuard,
		{
			provide: InterceptorService,
			useFactory: interceptorFactory,
			deps: [XHRBackend, RequestOptions, ServerURLInterceptor] // Add it here, in the same order as the signature of interceptorFactory
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
