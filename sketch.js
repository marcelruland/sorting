var arrlen = 50; // number of values in array
var arrobj = new Arrobj(); // initialise Arrayobj instance
var buffer = 5; // space between value bars

function setup() {
  createCanvas(600, 450);
  arrobj.populate(); // fill arrobj with values
  frameRate(15);
}

function draw() {
  noFill();
  arrobj.partialInsertionSort();
}

function Arrobj() {
  this.vals = [];
  this.tracker = 1;
  this.i;

  this.populate = function() {
    // fills the array with values
    for (var i = 0; i < arrlen; i++) {
      this.vals.push(floor(random(height)));
    }
  }

  this.partialInsertionSort = function() {
    j = this.tracker;
    if (j < this.vals.length) {
      if (!(this.i >= 0 && this.vals[this.i] > key)) {
        key = this.vals[j];
        this.i = j - 1;
      }
      if (this.i >= 0 && this.vals[this.i] > key) {
        temp = this.vals[this.i + 1];
        this.vals[this.i + 1] = this.vals[this.i];
        this.vals[this.i] = temp;
        this.i -= 1;
        this.show();
      } else {
        this.tracker++;
        this.vals[this.i + 1] = key;
        this.show();
      }
    }
  }

  this.show = function() {
    w = width / arrlen;

    background(0, 0, 51);
    for (var i = 0; i < arrlen; i++) {
      // draw rectangle for every element in array
      col = map(this.vals[i], 0, height, 0, 255)
      fill(col, 100, 100, 220); // color according to value
      rect(buffer / 2 + w * i, height, w - buffer / 2, -this.vals[i])
    }
  }
}
