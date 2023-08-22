import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InstagramFeedService {
  constructor(private http: HttpClient) {}

  public getHomePageInstaData(): Observable<any> {
    // const url = `${environment.instagramFeed.homePageUrl}${environment.instagramFeed.authorizationKey}`;
    const token = 'youwish';
    const url = `https://graph.instagram.com/me/media?fields=caption,media_url,media_type,children{media_url, media_type},permalink,timestamp,username&limit=5&access_token=${token}`;
    return this.http.get(url);
  }
}
