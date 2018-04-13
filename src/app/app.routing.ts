import { AuthGuard } from './auto-guard.service';
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { TestModule } from "./test/test.module";

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'test/ui',
		data: {
			title: '互联网综合管控系统'
		},
		pathMatch: 'full',
	},{
		path: '',
		component: AppComponent,
		data: {
			title: ''
		},
		children: [
			{
				path: 'test',
				canActivate: [AuthGuard],
				// component: TestModule,
				data: {
					title: '系统首页 - 互联网综合管控系统'
				},
				loadChildren: './test/test.module#TestModule'
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { enableTracing: false, useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }

//export const AppRoutes = RouterModule.forChild(routes);
