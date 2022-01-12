var Find_in_array = /** @class */ (function () {
    function Find_in_array() {
        this.arrnum = [1, 2, 3, 4];
        this.found = 0;
    }
    Find_in_array.prototype.find = function () {
        for (this.i = 0; this.i < this.arrnum.length; this.i = this.i + 1) {
            if (4 == this.arrnum[this.i]) {
                this.found = 1;
            }
        }
        if (this.found == 1) {
            console.log("Number Found");
        }
        else {
            console.log("Number Not Found");
        }
    };
    return Find_in_array;
}());
var arr = new Find_in_array();
arr.find();
