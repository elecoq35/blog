import { Component, Input } from '@angular/core';
import { PostModel } from '../modeles/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './postList.component.html'
})
export class PostListComponent {
  @Input()
  posts: Array<PostModel>;
}
