import { Component, Input } from '@angular/core';
import { PostModel } from '../modeles/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './postListItem.component.html'
})

export class PostListItemComponent {
  @Input()
  post: PostModel;

  addPost() {
    this.post.loveIts += 1;
  }

  suppPost() {
    this.post.loveIts -= 1;
  }
}
