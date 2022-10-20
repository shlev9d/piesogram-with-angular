import {
  AfterViewChecked,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { DogInfoService } from './../../services/dog-info.service';

@Component({
  selector: 'app-dog-info',
  templateUrl: './dog-info.component.html',
  styleUrls: ['./dog-info.component.scss'],
})
export class DogInfoComponent implements OnInit, OnChanges {
  imageUrl: string = '';
  link: string = 'https://en.wikipedia.org/wiki/';

  @Input() breed: string;

  constructor(private dogInfoService: DogInfoService) {}
  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      this.dogInfoService.getDogInfo(this.breed).subscribe((items) => {
        this.imageUrl = items.message;
      });
    }
  }

  ngOnInit(): void {
    this.link = this.link + this.breed;
  }
}
