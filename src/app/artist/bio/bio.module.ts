import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsModule } from '../../components/comments/comments.module';
import { SimilarModule } from '../../components/similar/similar.module';
import { BioComponent } from './bio.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpAppService } from '../../http-app.service';

const routes: Routes = [{
  path: '**',
  component: BioComponent,
}];

@NgModule({
  imports: [
    CommonModule,
    CommentsModule,
    SimilarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    BioComponent
  ],
  providers: [
    HttpAppService
  ]
})
export class BioModule { }
