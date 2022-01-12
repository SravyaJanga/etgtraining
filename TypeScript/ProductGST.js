"use strict";
exports.__esModule = true;
exports.ProductGST = void 0;
var ProductGST = /** @class */ (function () {
    function ProductGST() {
    }
    ProductGST.prototype.display = function () {
        console.log(this.Pid);
        console.log(this.Pname);
        console.log(this.Price);
        console.log(this.Price + this.gst);
    };
    return ProductGST;
}());
exports.ProductGST = ProductGST;
var g1 = new ProductGST();
g1.Pid = 123;
g1.Pname = "Harshini";
g1.Price = 12300;
g1.gst = 200;
g1.display();
