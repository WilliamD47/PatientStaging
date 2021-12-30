// Sample data
var PatientData = [{
        "firstName": "James",
        "lastName": "Blunt",
        "dateOfBirth": "1952-05-11",
        "hospitalNumber": "1234567",
        "referralDate": "2021-05-11",
        "milestones": [
            // {
            //     "milestoneType": {
            //         "referenceName": "Plain chest X-ray (procedure)",
            //         "name": "Chest X-Ray"
            //     },
            //     "addedAt": "2021-05-09",
            //     "updatedAt": "2021-05-10",
            //     "completedOn": "2021-05-10",
            //     "currentState": "COMPLETED"
            // },
            {
                "milestoneType": {
                    "referenceName": "Triage",
                    "name": "Triage"
                },
                "addedAt": "2021-05-15",
                "updatedAt": "2021-05-15",
                "completedOn": "2021-05-15",
                "currentState": "COMPLETED"
            },
            {
                "milestoneType": {
                    "referenceName": "CT of Thorax",
                    "name": " CT thorax "
                },
                "addedAt": "2021-05-21",
                "updatedAt": "2021-05-23",
                "completedOn": "2021-05-23",
                "currentState": "COMPLETED"
            },
            {
                "milestoneType": {
                    "referenceName": "Clinic",
                    "name": "clinic"
                },
                "addedAt": "2021-05-24",
                "updatedAt": "2021-05-25",
                "completedOn": "2021-05-25",
                "currentState": "COMPLETED"
            },
            {
                "milestoneType": {
                    "referenceName": "PET CT of whole body",
                    "name": "PET-CT"
                },
                "addedAt": "25-05-2021",
                "updatedAt": "2021-06-06",
                "completedOn": "2021-06-06",
                "currentState": "COMPLETED"
            },
            {
                "milestoneType": {
                    "referenceName": "Endobronchial ultrasonography guided transbronchial needle aspiration",
                    "name": "EBUS"
                },
                "addedAt": "2021-05-07",
                "updatedAt": "2021-06-09",
                "completedOn": "2021-06-09",
                "currentState": "COMPLETED"
            },
            {
                "milestoneType": {
                    "referenceName": "Specialist multidisciplinary team",
                    "name": "MDT"
                },
                "addedAt": "2021-06-09",
                "updatedAt": "2021-06-11",
                "completedOn": "2021-06-11",
                "currentState": "COMPLETED"
            },
            {
                "milestoneType": {
                    "referenceName": "Thoracic surgery",
                    "name": "Surgery"
                },
                "addedAt": "2021-06-11",
                "updatedAt": "2021-06-30",
                "completedOn": "2021-06-30",
                "currentState": "COMPLETED"
            }
        ]
    },
    {
        "firstName": "Nigel",
        "lastName": "Dodd",
        "dateOfBirth": "1959-08-11",
        "hospitalNumber": "1234567",
        "referralDate": "2020-08-22",
        "milestones": [
            // {
            //     "milestoneType": {
            //         "referenceName": "Plain chest X-ray (procedure)",
            //         "name": "Chest X-Ray"
            //     },
            //     "addedAt": "2021-05-09",
            //     "updatedAt": "2021-05-10",
            //     "completedOn": "2021-05-10",
            //     "currentState": "COMPLETED"
            // },
            {
                "milestoneType": {
                    "referenceName": "Triage",
                    "name": "Triage"
                },
                "addedAt": "2021-05-15",
                "updatedAt": "2021-05-15",
                "completedOn": "2021-05-15",
                "currentState": "COMPLETED"
            },
            {
                "milestoneType": {
                    "referenceName": "CT of Thorax",
                    "name": " CT thorax "
                },
                "addedAt": "2021-05-21",
                "updatedAt": "2021-05-23",
                "completedOn": "2021-05-23",
                "currentState": "COMPLETED"
            },
            {
                "milestoneType": {
                    "referenceName": "Clinic",
                    "name": "clinic"
                },
                "addedAt": "2021-05-24",
                "updatedAt": "2021-05-25",
                "completedOn": "2021-05-25",
                "currentState": "COMPLETED"
            },
            {
                "milestoneType": {
                    "referenceName": "PET CT of whole body",
                    "name": "PET-CT"
                },
                "addedAt": "25-05-2021",
                "updatedAt": "2021-06-06",
                "completedOn": "2021-06-06",
                "currentState": "COMPLETED"
            },
            {
                "milestoneType": {
                    "referenceName": "Endobronchial ultrasonography guided transbronchial needle aspiration",
                    "name": "EBUS"
                },
                "addedAt": "2021-05-07",
                "updatedAt": "2021-06-09",
                "completedOn": "2021-06-09",
                "currentState": "COMPLETED"
            },
            {
                "milestoneType": {
                    "referenceName": "Specialist multidisciplinary team",
                    "name": "MDT"
                },
                "addedAt": "2021-06-09",
                "updatedAt": "2021-06-11",
                "completedOn": "2021-06-11",
                "currentState": "COMPLETED"
            },
            {
                "milestoneType": {
                    "referenceName": "Thoracic surgery",
                    "name": "Surgery"
                },
                "addedAt": "2021-06-11",
                "updatedAt": "2021-06-30",
                "completedOn": "2021-06-30",
                "currentState": "COMPLETED"
            }
        ]
    }];
// Starts the main function which is run for each patient.
function AddToHTML(personData) {
    // Parses the JSON data into a better format for Typescript
    const patient = {
        firstName: personData["firstName"],
        lastName: personData["lastName"],
        birthDate: new Date(personData["dateOfBirth"]),
        referralDate: new Date(personData["referralDate"]),
        hospitalNumber: personData["hospitalNumber"],
        milestones: personData["milestones"]
    };
    // Creates the full name by stitching the first and last names together
    const fullName = patient.firstName + " " + patient.lastName;
    // Gets the table body so we know where to insert the created data.
    const tableBody = document.getElementById("tbody");
    // Creates a row for the Name, Birthday and Milestones
    var row = tableBody.insertRow(0);
    const nameCell = row.insertCell(0);
    // Sets the first cell to be the full name
    nameCell.innerHTML = fullName;
    // Initializes the second cell for the graph/diagram to be inserted
    var middleCell = row.insertCell(1);
    const dateCell = row.insertCell(2);
    // Sets the last cell to be the birthDate
    dateCell.innerHTML = patient.birthDate.toLocaleDateString();
    // Initializes the fullTable so we can append each segment to it.
    var fullTable = '';
    // Make lengths variable so we can calculate the full length of each element to change the length depending on the size
    var lengths = [];
    // elementProgress is made and incremented each time so that we know not to try and get the previous data for the first element.
    var elementProgress = 0;
    patient.milestones.forEach(element => {
        // Initializes the colourClass variable to hold which colour the segment will be.
        var colourClass = "";
        // We cannot find the previous element if it is the first element so we only find it if it is not the first element
        // Gets the index of the current element and finds what element is one before that in the array
        var previous = null;
        if (elementProgress != 0) {
            var previous = patient.milestones[patient.milestones.indexOf(element) - 1];
        }
        else {
            var previous = {
                milestoneType: {
                    referenceName: "Referral",
                    name: "Referral"
                },
                addedAt: patient.referralDate,
                updatedAt: patient.referralDate,
                completedOn: patient.referralDate,
                currentState: "Referred"
            };
        }
        // Does the same as previous but adds instead of subtracts to find the next element in the array
        var next = patient.milestones[patient.milestones.indexOf(element) + 1];
        // If between referral date and Triage, colour is red
        if (elementProgress == 0) {
            colourClass = "red";
            console.log(next);
        }
        else if (previous.milestoneType.name == "CT thorax" && next.milestoneType.name == "clinic") {
            // If between CT thorax and clinic, colour is red
            colourClass = "red";
        }
        else if (previous.milestoneType.name == "PET-CT" && next.milestoneType.name == "EBUS") {
            // If between PET-CT and EBUS, colour is red
            colourClass = "red";
        }
        else {
            // Otherwise it is green
            colourClass = "grn";
        }
        // Creates the segment that will be added to the stripe
        let segmentToAdd = {
            // Length is calculated by taking the next event's start date and taking away the end date of the previous event then dividing by a big number to make it fit on the screen
            length: (new Date(next.addedAt).getTime() - new Date(previous.completedOn).getTime()) - 1000000,
            // Colour is the colour we calculated before
            colourClass: colourClass,
            // Start date is the added at date turned into a human readable string
            startDate: new Date(element.addedAt).toLocaleDateString(),
            // End date is the completed on date turned into a human readable string
            endDate: new Date(element.completedOn).toLocaleDateString(),
            // Type is not currently used but will be when text is added that says what it is E.G. EBUS
            type: element.milestoneType.name
        };
        console.log(segmentToAdd, elementProgress, lengths);
        lengths.push(segmentToAdd);
        // Increments the element progress so we can find out what the previous element was.
        elementProgress += 1;
    });
    // Next I need to add this to the stripe and make it so that the last element cannot try and get the element after. Also because of the breach reports, I might need to do some try catch wizardry and make sure that it works with whatever is thrown at it.
    // Initializes totalLength so we can change the length of the table depending on the size of the stripe.
    var totalLength = 0;
    // For each length, add to the total length and create the fully fleshed out table element
    lengths.forEach(element => {
        totalLength += element.length;
        fullTable += '<td class=' + element.colourClass + ' style="width: ' + String(element.length) + 'px"></td>';
    });
    // Set the middle cell to be the created table
    middleCell.innerHTML = '<table border="0" summary="" class="jstable"><tr id="tr">' + fullTable + '</tr></table>';
    // Finally change the length of the middle cell.
    middleCell.style.width = String((totalLength / 100000) + 200) + "px";
}
const NigelData = [{
        "name": "James Blunt",
        "referral": "2021-11-10",
        "stripe": [{ "col": "red", "len": 40, "txt": "Triage" },
            { "col": "grn", "len": 80, "txt": "Td" },
            { "col": "red", "len": 10, "txt": "Cr" },
            { "col": "grn", "len": 10, "txt": "Cd" },
            { "col": "grn", "len": 170, "txt": "PET done" },
            { "col": "red", "len": 10, "txt": "Er" },
            { "col": "grn", "len": 10, "txt": "Ed" },
            { "col": "grn", "len": 60, "txt": "MDT done, Surgery requested" },
            { "col": "grn", "len": 160, "txt": "Surgery" },
            { "col": "white", "len": 70, "txt": "" }]
    }
];
function NigelAddToHTML(personData) {
    const patient = {
        name: personData["name"],
        referral: personData["referral"],
        stripe: personData["stripe"]
    };
    const tableBody = document.getElementById("tbody");
    var row = tableBody.insertRow(0);
    var cell0 = row.insertCell();
    cell0.innerHTML = "" + patient.name;
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    cell2.innerHTML = new Date(patient.referral).toLocaleDateString();
    var textTable = "";
    var fullTable = "";
    patient.stripe.forEach(element => {
        textTable += '<td style="width: ' + String(Number(element.len) * 10) + 'px; border: 0;">' + element.txt + '</td>';
        fullTable += '<td class=' + element.col + ' style="width: ' + String(Number(element.len) * 10) + 'px; border: 0;"></td>';
    });
    var stripeElements = '<table border="0" summary="" class="jstable"><tr id="tr">' + fullTable + '</tr><tr></tr></table>';
    console.log(stripeElements, fullTable);
    cell1.innerHTML = stripeElements;
}
window.onload = () => {
    'use strict';
    // For each patient, run the AddToHTML function to add them to the table.
    NigelData.forEach(element => NigelAddToHTML(element));
};
//# sourceMappingURL=main.js.map
