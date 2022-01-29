import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
})
export class CardDetailComponent implements OnInit {
  card: any = [
    {
      images:
        'https://images.pexels.com/photos/2387869/pexels-photo-2387869.jpeg',
      name: 'Priyanka',
      address: '27 Years,5 ft 2 in,Tamil,Nair',
      id: 1,
    },
    {
      images:
        'https://images.pexels.com/photos/2395264/pexels-photo-2395264.jpeg',
      name: 'Preetha',
      address: '27 Years,5 ft 2 in,Tamil,Nair',
      id: 2,
    },
    {
      images:
        'https://images.pexels.com/photos/2474014/pexels-photo-2474014.jpeg',
      name: 'Madhu',
      address: '27 Years,5 ft 2 in,Tamil,Nair',
      id: 3,
    },
    {
      images:
        'https://images.pexels.com/photos/2440296/pexels-photo-2440296.jpeg',
      name: 'Anushka',
      address: '27 Years,5 ft 2 in,Tamil,Nair',
      id: 4,
    },
    {
      images:
        'https://images.pexels.com/photos/2474014/pexels-photo-2474014.jpeg',
      name: 'Amala',
      address: '27 Years,5 ft 2 in,Tamil,Nair',
      id: 5,
    },
  ];
  card_detail: any;
  id: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.card_detail = this.card.filter((el: any) => el.id == this.id)[0];
  }
}
