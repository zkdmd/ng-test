
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiComponent } from './ui/ui.component';
import { AuthGuard } from '../auto-guard.service';


const routes: Routes = [
	{
		path: '',
		data: {
			title: '信息查询'
		},
		children: [
			{
				path: 'ui',
				component: UiComponent,
				canActivate: [AuthGuard],
				data: {
					title: '个人电子档案 - 信息查询 - 互联网综合管控系统'
				}
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TestRoutingModule { }

