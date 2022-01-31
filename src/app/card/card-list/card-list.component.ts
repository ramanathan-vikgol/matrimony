import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SwiperOptions } from 'swiper';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { SwiperComponent } from 'ngx-useful-swiper';
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  @ViewChild('usefulSwiper', { static: false }) usefulSwiper:
    | SwiperComponent
    | any;
  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    on: {
      slideNextTransitionStart: () => {
        // console.log(
        //   'slideChange Event: Active Slide Index = ',
        //   this.usefulSwiper.swiper.activeIndex
        // );
        this._snackBar.open('Interested', 'Dismiss', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 2000,
        });
        // this.router.navigate([
        //   '/card-detail',
        //   this.card[this.usefulSwiper.swiper.activeIndex - 1].id,
        // ]);
      },
      slidePrevTransitionStart: () => {
        this._snackBar.open('Not Interested', 'Dismiss', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 2000,
        });
        this.card.splice(this.usefulSwiper.swiper.activeIndex - 1, 1);
      },
      slideChangeTransitionEnd: () => {
        console.log('slideChange Event');
      },
    },
  };

  card: any = [
    {
      images:
        'https://images.pexels.com/photos/2387869/pexels-photo-2387869.jpeg',
      name: 'Priyanka',
      address:
        '27 Years,5 ft 2 in,Tamil,Nair 27 Years,5 ft 2 in,Tamil,Nair 27 Years,5 ft 2 in,Tamil,Nair 27 Years,5 ft 2 in,Tamil,Nair',
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

  constructor(private router: Router, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  alertMessage() {
    return this._snackBar.open('Interested', 'Dismiss', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 2000,
    });
  }

  refresh() {
    this.router.navigate(['']).then(() => {
      window.location.reload();
    });
  }

  nextPage(id: any, i?: any) {
    if (id) {
      this._snackBar.open('Interested', 'Dismiss', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 2000,
      });
      this.router.navigate(['/card-detail', id]);
    } else {
      this._snackBar.open('Not Interested', 'Dismiss', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 2000,
      });
      this.card.splice(i, 1);
    }
  }

  nextSlide() {
    this.usefulSwiper.swiper.slideNext();
  }

  previousSlide() {
    this.usefulSwiper.swiper.slidePrev();
  }
}
