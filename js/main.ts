
var PatientData = {
    "firstName": "James",
    "lastName": "Blunt",
    "dateOfBirth": "1952-05-11",
    "hospitalNumber": "1234567",
    "referralDate": "2021-05-11",
    "milestones": [
        {
            "milestoneType": {
                "referenceName": "Plain chest X-ray (procedure)",
                "name": "Chest X-Ray"
            },
            "addedAt": "09-05-2021",
            "updatedAt": "10-05-2021",
            "completedOn": "10-05-2021",
            "currentState": "COMPLETED"
        },
        {
            "milestoneType": {
                "referenceName": "Triage",
                "name": "Triage"
            },
            "addedAt": "15-05-2021",
            "updatedAt": "15-05-2021",
            "completedOn": "15-05-2021",
            "currentState": "COMPLETED"
        },
        {
            "milestoneType": {
                "referenceName": "CT of Thorax",
                "name": " CT thorax "
            },
            "addedAt": "21-05-2021",
            "updatedAt": "23-05-2021",
            "completedOn": "23-05-2021",
            "currentState": "COMPLETED"
        },
        {
            "milestoneType": {
                "referenceName": "Clinic",
                "name": "clinic"
            },
            "addedAt": "24-05-2021",
            "updatedAt": "25-05-2021",
            "completedOn": "25-05-2021",
            "currentState": "COMPLETED"
        },
        {
            "milestoneType": {
                "referenceName": "PET CT of whole body",
                "name": "PET-CT"
            },
            "addedAt": "25-05-2021",
            "updatedAt": "06-06-2021",
            "completedOn": "06-06-2021",
            "currentState": "COMPLETED"
        },
        {
            "milestoneType": {
                "referenceName": "Endobronchial ultrasonography guided transbronchial needle aspiration",
                "name": "EBUS"
            },
            "addedAt": "07-05-2021",
            "updatedAt": "07-06-2021",
            "completedOn": "09-06-2021",
            "currentState": "COMPLETED"
        },
        {
            "milestoneType": {
                "referenceName": "Specialist multidisciplinary team",
                "name": "MDT"
            },
            "addedAt": "09-06-2021",
            "updatedAt": "11-06-2021",
            "completedOn": "11-06-2021",
            "currentState": "COMPLETED"
        },
        {
            "milestoneType": {
                "referenceName": "Thoracic surgery",
                "name": "Surgery"
            },
            "addedAt": "11-06-2021",
            "updatedAt": "31-06-2021",
            "completedOn": "30-06-2021",
            "currentState": "COMPLETED"
        }
    ]
}
interface Milestone {
    milestoneType: {
        referenceName: String,
        name: String
    }
    addedAt: Date,
    updatedAt: Date,
    completedOn: Date,
    currentState: String
}

interface StripeSegment {
    length: Number,
    colourClass: String,
    startDate: String,
    endDate: String,
    type: String
}


interface Patient {
    firstName: String,
    lastName: String,
    birthDate: Date,
    referralDate: Date,
    hospitalNumber: Number,
    milestones: [Milestone]
}

function AddToHTML(personData) {
    personData["milestones"].forEach(element => {
        var part1 = String(element["addedAt"]).slice(0,2)
        var part2 = String(element["addedAt"]).slice(3,5)
        var part3 = String(element["addedAt"]).slice(6,10)
        element["addedAt"] = part3 + "-" + part2 + "-" + part1
        part1 = String(element["updatedAt"]).slice(0,2)
        part2 = String(element["updatedAt"]).slice(3,5)
        part3 = String(element["updatedAt"]).slice(6,10)
        element["updatedAt"] = part3 + "-" + part2 + "-" + part1
        part1 = String(element["completedOn"]).slice(0,2)
        part2 = String(element["completedOn"]).slice(3,5)
        part3 = String(element["completedOn"]).slice(6,10)
        element["completedOn"] = part3 + "-" + part2 + "-" + part1
    });
    const patient: Patient = {
        firstName: personData["firstName"],
        lastName: personData["lastName"],
        birthDate: new Date(personData["dateOfBirth"]),
        referralDate: new Date(personData["referralDate"]),
        hospitalNumber: personData["hospitalNumber"],
        milestones: personData["milestones"]

    }
    const fullName = patient.firstName + " " + patient.lastName
    const tableBody: HTMLTableElement = <HTMLTableElement>document.getElementById("tbody")

    var row = tableBody.insertRow(0)
    // Making Rows
    const nameCell = row.insertCell(0)
    nameCell.innerHTML = fullName
    var middleCell = row.insertCell(1)
    
    const dateCell = row.insertCell(2)
    dateCell.innerHTML = patient.birthDate.toLocaleDateString()
    var fullTable = ''
    var lengths = []
    patient.milestones.forEach(element => {
        // Get difference between dates
        var first = new Date(element.addedAt)
        var last = new Date(element.completedOn)
        var secondsDifference = last.getTime() - first.getTime()
        if (secondsDifference != 0 ){
            var length = (secondsDifference / 200 ) * 2
        } else {
            var length = 0
        }
        const stripeSegment: StripeSegment = {
            length: length,
            colourClass: "grn",
            startDate: first.toLocaleDateString(),
            endDate: last.toLocaleDateString(),
            type: element.milestoneType.name
        }
        lengths.push(stripeSegment)
    })
    lengths.forEach(element => {
        fullTable += '<td class="grn" style="width: '+element+'px"><div class="tooltip">'+element.type+'<span class="tooltiptext">Start:'+String(element.startDate)+'\nEnd:'+element.endDate+'</span></div></td>'
    })
    middleCell.innerHTML = '<table border="0" summary=""><tr id="tr">'+fullTable+'</tr></table>'
}

window.onload = () => {
    'use strict';

    AddToHTML(PatientData);
}
