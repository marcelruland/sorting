var arrlen = 100; // number of values in array
var arrobj = new Arrobj(); // initialise Arrayobj instance
var buffer = 5; // space between value bars

// BUG: did not sort these values correctly, but does sort them correctly with bugarray as input
var bugarray = [657, 893, 81, 528, 764, 890, 558, 153, 412, 579, 52, 758, 878,
    384, 211, 947, 391, 644, 60, 667, 365, 436, 538, 786, 496, 141, 280, 843,
    378, 33, 577, 259, 332, 154, 601, 86, 81, 209, 804, 793, 309, 287, 329, 419,
    106, 739, 36, 438, 771, 497, 169, 476, 334, 167, 900, 670, 323, 339, 532,
    758, 391, 782, 143, 401, 99, 625, 86, 38, 505, 118, 306, 498, 115, 663, 567,
    518, 340, 355, 483, 760, 3, 669, 445, 372, 822, 893, 253, 396, 269, 581,
    695, 788, 896, 863, 862, 484, 73, 582, 296, 300
  ]
  // NOTE: What the code made of the bugarray:
  //
  // [3, 33, 36, 38, 52, 60, 73, 81, 81, 86, 86, 99, 106, 115, 118, 141, 143, 153,
  //   154, 167, 169, 209, 211, 253, 259, 269, 280, 287, 296, 300, 306, 309, 323,
  //   329, 332, 334, 339, 340, 355, 365, 372, 497, 498, 505, 518, 657, 893, 528,
  //   532, 538, 558, 567, 577, 579, 581, 582, 601, 625, 644, 663, 667, 669, 670,
  //   695, 739, 758, 758, 760, 764, 771, 782, 786, 788, 793, 804, 822, 843, 862,
  //   863, 878, 890, 893, 896, 900, 947
  // ]

function setup() {
  createCanvas(1650, 950);
  arrobj.populate(); // fill arrobj with values
  frameRate(200);
}

function draw() {
  noFill();
  arrobj.partialInsertionSort();
}

function Arrobj() {
  this.vals = [];
  this.tracker = 0;
  this.i;

  this.populate = function() {
    // fills the array with values
    for (var i = 0; i < arrlen; i++) { // BUG: some elements in unknown environment not sorted correctly
      this.vals.push(floor(random(height)));
    }
    // this.vals = bugarray;
    console.log(this.vals);
  }

  this.partialInsertionSort = function() {
    j = this.tracker;
    if (j < this.vals.length + 1) {
      if (this.i >= 0 && this.vals[this.i] > key) {
        temp = this.vals[this.i + 1];
        this.vals[this.i + 1] = this.vals[this.i];
        this.vals[this.i] = temp;
        this.i -= 1;
        this.show();
      } else {
        key = this.vals[j];
        this.i = j - 1;
        this.tracker++;
        this.vals[this.i + 1] = key;
        //this.show(); // NOTE: Apparently this is unnecessary. I'm not sure why because of the change in line 53
      }
    }
  }

  this.show = function() {
    w = width / arrlen;
    background(0, 0, 51);
    for (var i = 0; i < arrlen; i++) {
      // draw rectangle for every element in array
      col = map(this.vals[i], 0, height, 0, 255)
      fill(col, 100, 100, 230); // color according to value
      rect(buffer / 2 + w * i, height, w - buffer / 2, -this.vals[i])
    }
  }
}
