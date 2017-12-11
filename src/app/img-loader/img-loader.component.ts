import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-img-loader',
  templateUrl: './img-loader.component.html',
  styleUrls: ['./img-loader.component.css']
})
export class ImgLoaderComponent implements AfterViewInit {
  @ViewChild('myFile') myFile: ElementRef;

  imgURL = 'assets/dragon.jpg';

  constructor() { }

  ngAfterViewInit() {
  }

  add() {
    this.imgURL = this.myFile.nativeElement.value; 
  }

  change(){ }

  snip(evt){  
    var crop_canvas,
      myImage = document.getElementById("img-01"),
      height = 400,
      width = 400;
    
    console.log(myImage);

    crop_canvas = document.createElement('canvas');
    crop_canvas.width = width;
    crop_canvas.height = height;

    //myImage.src = this.imgURL;
    crop_canvas.getContext('2d').drawImage(myImage, evt.offsetX, evt.offsetY, 400, 400, 0, 0, 400, 400);

    document.body.appendChild(crop_canvas);
    console.log(evt.offsetX + " | | " + evt.offsetY);
  }
}
