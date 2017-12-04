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

  snip($e){
    var x = $e.clientX;
    var y = $e.clientY;
    console.log("Xpos " + x + " | Ypos: " + y);
    var myImage = new Image(200, 200);
    myImage.src = this.imgURL;
    document.body.appendChild(myImage);
  }
}
