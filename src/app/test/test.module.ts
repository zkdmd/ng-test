import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { UiComponent } from './ui/ui.component';
import { TestRoutingModule } from './test.routing.module';

@NgModule({
  imports: [
    CommonModule,
    TestRoutingModule
  ],
  declarations: [TestComponent,
    UiComponent
]
})
export class TestModule { }
