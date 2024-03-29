import { Component, OnInit, Input, ViewChild } from '@angular/core';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {

  @Input() cordenadas: string;
  @ViewChild('mapa') mapa;

  constructor() { }

  ngOnInit() {
    console.log(
     this.cordenadas);

    const latLng =  this.cordenadas.split(',');
    const lat =  Number(latLng[0]);
    console.log(lat);
    const lng =  Number(latLng[1]);
    console.log(lng);

    mapboxgl.accessToken = 'pk.eyJ1IjoibWFya3V6bG9wZXoiLCJhIjoiY2p3dG5mMGptMDA4MDN5bHBja3BjaGc4biJ9.8e-tCUz7nDLFLAE7LRRJsg';
    const map = new mapboxgl.Map({
      container: this.mapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 15
    });

    const marker = new mapboxgl.Marker()
          .setLngLat( [lng, lat])
          .addTo(map);
  }


}
