"use strict";
exports.__esModule = true;
var School = /** @class */ (function () {
    function School(name, location, major) {
        this.name = name;
        this.location = location;
        this.major = major;
    }
    School.prototype.printSchoolDetails = function () {
        console.log("School name: " + this.name);
        console.log("location: " + this.location);
        console.log("major: " + this.major);
    };
    return School;
}());
var KIT = new School("Kirirom institute of technology", "Kompong spue", 3);
KIT.printSchoolDetails()
var Aupp = new School("American University of Phnom Penh", "Phnom Penh", 8);
Aupp.printSchoolDetails()
var CamED = new School("CamEd Business School", "Phnom Penh", 6);
CamED.printSchoolDetails()