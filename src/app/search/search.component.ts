import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {Artist} from '../Artist';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	searchArtist:string;
	searchArtistRes: Artist[];

	constructor(private _spotifyservice:SpotifyService) { 

	}

	ngOnInit() {
	}
	searchMusic(){
		this._spotifyservice.searchMusic(this.searchArtist).subscribe(res => {
			//console.log(res);
			this.searchArtistRes = res.artists.items;
			//console.log(this.searchArtistRes);
		});
	}

}
