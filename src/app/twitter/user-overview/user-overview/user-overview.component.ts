import { Component, OnInit } from '@angular/core';
import { UserOverviewService } from '../../../services/user-overview/user-overview.service';
import { Observable } from 'rxjs';
import { TweetService } from '../../../services/tweet/tweet.service';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.css']
})
export class UserOverviewComponent implements OnInit {

  numberOfTweets: Observable<number>
  numberOfFollowers: Observable<number>
  numberOfFollowing: Observable<number>

  constructor(
    private userOverviewService: UserOverviewService,
    private tweetService: TweetService
  ) { }

  ngOnInit() {
    this.numberOfTweets = this.tweetService.fetchNumberOfTweets();
    this.numberOfFollowers = this.userOverviewService.fetchNumberOfFollowers();
    this.numberOfFollowing = this.userOverviewService.fetchNumberOfFollowing();
  }

}
