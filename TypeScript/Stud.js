var StudentAssignment = /** @class */ (function () {
    function StudentAssignment(i, n, s) {
        this.SID = 15;
        this.SName = "Sravya";
        this.SClass = 3;
        this.SID = i;
        this.SName = n;
        this.SClass = s;
    }
    StudentAssignment.prototype.display = function () {
        console.log(this.SID);
        console.log(this.SName);
        console.log(this.SClass);
    };
    return StudentAssignment;
}());
var s1 = new StudentAssignment(14, "somi", 9);
s1.display();
var s2 = new StudentAssignment(13, "suni", 11);
s2.display();
