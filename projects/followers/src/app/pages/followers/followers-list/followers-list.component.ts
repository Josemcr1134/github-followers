import { Component, NgZone, OnInit } from '@angular/core';
import { FollowersService } from '../../../core/services/followers.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FollowersPipe } from '../../../core/pipes/followers.pipe.';
import { Observable } from 'rxjs';
import { User } from '../../../core/interfacess/user.interface';

@Component({
  selector: 'app-followers-list',
  templateUrl: './followers-list.component.html',
  standalone:true,
  imports:[
    CommonModule,
    FollowersPipe
  ]
})
export class FollowersListComponent implements OnInit {
  followers: any[] = [];
  loading = true;
  errorMessage = '';
  user$!: Observable<User>;
  constructor(private followersService: FollowersService, private activatedRoute:ActivatedRoute, private ngZone: NgZone) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:any) => {
      if (params.username) {
        this.user$ =  this.followersService.getFollowers(params.username)
      }
    });
    console.log('ping')
  };
}
