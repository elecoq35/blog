import { Component, OnInit, Input } from '@angular/core';
import { PostModel } from './modeles/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'blog';
  posts: Array<PostModel> = [];

  ngOnInit() {
    this.posts.push(new PostModel('Mon premier post', 'Ceci est le premier post de mon blog !!', 2));
    this.posts.push(new PostModel('Mon deuxième post', 'Ceci est le deuxième super post de mon blog !!', 4));
    // tslint:disable-next-line:max-line-length
    this.posts.push(new PostModel('Encore un post', 'Napoléon Ier, né le 15 août 1769 à Ajaccio et mort le 5 mai 1821 sur l\'île Sainte-Hélène, est le premier empereur des Français', 1));
  }
}
