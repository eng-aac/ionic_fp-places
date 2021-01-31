import { Injectable } from "@angular/core";
import { Place } from "./place.model";

@Injectable({
  providedIn: "root",
})
export class PlacesService {
  private places: Place[] = [
    {
      id: "1",
      title: "Eifell Tower",
      imageURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tour_eiffel_at_sunrise_from_the_trocadero.jpg/275px-Tour_eiffel_at_sunrise_from_the_trocadero.jpg",
      comments: ["Awesome place", "Wonderful experience"],
    },
    {
      id: "2",
      title: "Statue of Liberty",
      imageURL:
        "https://estatuadelalibertad.info/wp-content/uploads/2019/04/foto-estatua-de-la-libertad.jpg",
      comments: ["Awesome place", "Wonderful experience"],
    },
    {
      id: "3",
      title: "Prado Museum",
      imageURL:
        "https://www.hola.com/imagenes/viajes/20190517142257/guia-practica-museo-prado/0-680-930/museo-nacional-del-prado-madrid-t.jpg?filter=w600&filter=ds75",
      comments: ["Awesome place", "Wonderful experience"],
    },
    {
      id: "4",
      title: "Hanging Gardens of Babylon",
      imageURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Hanging_Gardens_of_Babylon.jpg/420px-Hanging_Gardens_of_Babylon.jpg",
      comments: [],
    },
    {
      id: "5",
      title: "Egyptian Piramids",
      imageURL:
        "https://www.nuevatribuna.es/media/nuevatribuna/images/2020/01/14/2020011413023248401.jpg",
      comments: [],
    },
    {
      id: "6",
      title: "Statues of Eater Island",
      imageURL:
        "https://cdnmundo1.img.sputniknews.com/img/107084/37/1070843795_0:268:4272:2579_1000x541_80_0_0_144c4664dd45088baf591707e7423cff.jpg",
      comments: [],
    },
    {
      id: "7",
      title: "Macchu Picchu",
      imageURL:
        "https://peru.travel/Contenido/Atractivo/Imagen/pe/145/1.1/Principal/Machu%20Picchu.jpg",
      comments: [],
    },
    {
      id: "8",
      title: "Roman Coliseum",
      imageURL:
        "https://www.lavanguardia.com/r/GODO/LV/p4/WebSite/2017/05/15/Recortada/img_mbigas_20170515-145025_imagenes_lv_terceros_coliseum-250-krRG-U422602355018esF-992x558@LaVanguardia-Web.jpg",
      comments: [],
    },
    {
      id: "9",
      title: "Christ the Redeemer",
      imageURL:
        "https://images.sipse.com/lMeIOR4Vv0vM92lcas_VR3ih7Eo=/1654x1016/smart/imgs/122016/2112161e4d94bdc.jpg",
      comments: [],
    },
    {
      id: "10",
      title: "Iguazu Falls",
      imageURL: "https://cdn.lavoz.com.ar/sites/default/files/styles/width_2500/public/nota_periodistica/Cataratas_saiko3p_123RF_1587014049.jpg",
      comments: [],
    },
    {
      id: "11",
      title: "Aconcagua",
      imageURL: "https://ruturviajes.com.ar/wp-content/uploads/2018/11/aconcagua1.jpg",
      comments: [],
    }
  ];

  constructor() {}

  getPlaces() {
    return [...this.places];
  }

  getPlace(placeId: string) {
    return {
      ...this.places.find((place) => {
        return place.id === placeId;
      }),
    };
  }

  addPlace(title: string, imageURL: string) {
    this.places.push({
      id: this.places.length + 1 + "",
      title,
      imageURL,
      comments: [],
    });
  }

  deletePlace(placeId: string) {
    this.places = this.places.filter((place) => {
      return place.id !== placeId;
    });
  }
}
