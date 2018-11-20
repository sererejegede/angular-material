import { Component } from '@angular/core';
import { Hymn } from '../interfaces/hymn';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public hymns: Hymn[] = [
    {
      id: '1',
      name: 'On a Hill',
      lyrics: 'tra la la'
    },
    {
      id: '2',
      name: 'Trust and Obey',
      lyrics: 'tra la la'
    },
    {
      id: '3',
      name: 'Holy City',
      lyrics: 'tra la la'
    }
  ];
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];
}
