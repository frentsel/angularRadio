import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

export class CommentsComponent implements OnInit, OnChanges {

  loadComments() {
    const d = document,
      s = d.createElement('script'),
      date: string = Date();
    s.src = 'https://moo-zone.disqus.com/embed.js';
    s.setAttribute('data-timestamp', date);
    (d.head || d.body).appendChild(s);
  }

  ngOnInit() {
    this.loadComments();
  }

  ngOnChanges() {
    this.loadComments();
  }
}
