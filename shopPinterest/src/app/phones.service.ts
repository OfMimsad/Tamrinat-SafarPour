import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhonesService
{
  selectedPhones: any[] = [];
  constructor() {}

  phones: any[] =
    [
      {
        id: 0,
        name: "Iphone 15",
        imgSrc: "https://www.optus.com.au/content/dam/optus/images/shop/mobile/phones/apple/iphone-15-pro/carousel/SD-PDP-01-iphone-15-pro-natural-titanium-front-back.jpg",
        price: 1500,
      },
      {
        id: 1,
        name: "Redmi note 9 opro",
        imgSrc: "https://zhiyunkala.com/wp-content/uploads/2020/12/1-7.jpg",
        price: 300,
      },
      {
        id: 2,
        name: "s21 fe 4g",
        imgSrc: "https://cdn.kalatik.com/media/0/21/05/22/167172388168_t5.webp",
        price: 600,
      },
      {
        id: 3,
        name: "phone 14",
        imgSrc: "https://www.jbhifi.com.au/cdn/shop/products/596671-Product-0-I-637982213840849162.jpg?v=1697490693",
        price: 1000,
      },
      {
        id: 4,
        name: "nokia 1100",
        imgSrc: "https://4.imimg.com/data4/GY/RX/ANDROID-40083844/product.jpeg",
        price: 2000,
      },
      {
        id: 5,
        name: "samsung z flip",
        imgSrc: "https://cubeonline.pk/cdn/shop/products/BoraPurple_800x.jpg?v=1695897465",
        price: 990,
      },
      {
        id: 6,
        name: "samsung galaxy s21",
        imgSrc: "https://m.media-amazon.com/images/I/61uhL-Bb4xL._AC_UF894,1000_QL80_.jpg",
        price: 1200,
      },
      {
        id: 7,
        name: "iphone 12",
        imgSrc: "https://dkstatics-public.digikala.com/digikala-products/4eaa6e9bf0b31368632b8aa911c944e49d85f32f_1673246263.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        price: 700,
      }
    ];

  getPhones()
  {
    return this.phones;
  }

  pushToSelected(ary: any[])
  {
    this.selectedPhones.push(ary);
  }
  getSelectedPhones()
  {
    return this.selectedPhones;
  }
}
