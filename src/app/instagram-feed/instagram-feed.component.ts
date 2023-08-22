import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { InstagramFeedService } from './instagram-feed.service';

@Component({
  selector: 'app-instagram-feed',
  templateUrl: './instagram-feed.component.html',
  styleUrls: ['./instagram-feed.component.scss'],
})
export class InstagramFeedComponent implements OnInit, OnDestroy {
  protected instaData: Array<any> | undefined;
  private instaSubscription!: Subscription;

  constructor(private instagramFeedService: InstagramFeedService) {}

  ngOnInit(): void {
    this.instaSubscription = this.instagramFeedService
      .getHomePageInstaData()
      .subscribe((data) => {
        this.instaData = data.data;
      });
  }

  ngOnDestroy(): void {
    this.instaSubscription.unsubscribe();
  }
}
