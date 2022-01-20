export{}

class School {
    name: string;
    location: string;
    major: number;

    constructor(name: string, location: string, major: number) {
        this.name = name;
        this.location = location;
        this.major = major;
    }

    printSchoolDetails() {
        console.log("School name: " + this.name)
        console.log("location: " + this.location)
        console.log("major: " + this.major)
    }
}

let KIT :School = new School("Kirirom institute of technology", "Kompong spue", 3);
KIT.printSchoolDetails()

let Aupp:School = new School("American University of Phnom Penh", "Phnom Penh", 8);
Aupp.printSchoolDetails()

let CamED:School = new School("CamEd Business School", "Phnom Penh", 6);
CamED.printSchoolDetails()
