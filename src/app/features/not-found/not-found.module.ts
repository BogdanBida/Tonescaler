import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NotFoundRoutingModule } from './not-found-page-routing.module';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  imports: [CommonModule, NotFoundRoutingModule, TranslateModule.forChild()],
  declarations: [NotFoundComponent],
})
export class NotFoundModule {}
