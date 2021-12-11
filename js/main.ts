var PatientData = [
    {
        "firstName": "James",
        "surName": "Blunt",
        "hospitalNumber": "1234567",
        "referralDate": "1/04/2021",
        "testsDates": {
            "chestXray": "04/05/2021 15:01",
            "CTThorax": "29/05/2021 16:02",
            "PET_CT": "02/05/2021 10:55",
            "EBUS": "28/06/2021 09:55"
        }
    },
    {
        "firstName": "Dave",
        "surName": "Blunt",
        "hospitalNumber": "1234567",
        "referralDate": "11/05/2021",
        "testsDates": {
            "chestXray": "10/05/2021 15:01",
            "CTThorax": "21/05/2021 16:02",
            "PET_CT": "30/05/2021 10:55",
            "EBUS": "05/06/2021 09:55"
        }
    },
    {
        "firstName": "Bob",
        "surName": "Blunt",
        "hospitalNumber": "1234567",
        "referralDate": "11/07/2021",
        "testsDates": {
            "chestXray": "10/03/2021 15:01",
            "CTThorax": "21/03/2021 16:02",
            "PET_CT": "30/03/2021 10:55",
            "EBUS": "05/04/2021 09:55"
        }
    },
    {
        "firstName": "Jenny",
        "surName": "Blunt",
        "hospitalNumber": "1234567",
        "referralDate": "11/03/2021",
        "testsDates": {
            "chestXray": "4/05/2021 15:01",
            "CTThorax": "8/05/2021 16:02",
            "PET_CT": "23/05/2021 10:55",
            "EBUS": "12/06/2021 09:55"
        }
    },
    {
        "firstName": "Eric",
        "surName": "Smith",
        "hospitalNumber": "1234567",
        "referralDate": "11/04/2021",
        "testsDates": {
            "chestXray": "9/06/2021 15:01",
            "CTThorax": "20/06/2021 16:02",
            "PET_CT": "29/06/2021 10:55",
            "EBUS": "4/07/2021 09:55"
        }
    }
]

interface Patient {
    firstName: String,
    lastName: String,
    referralDate: Date
}

function AddToHTML(personData) {
    const patient: Patient = {
        firstName: personData["firstName"],
        lastName: personData["surName"],
        referralDate: new Date(personData["referralDate"])
    }
    const fullName = patient.firstName + " " +  patient.lastName
    const tableBody: HTMLTableElement = <HTMLTableElement> document.getElementById("tbody")

    var row = tableBody.insertRow(0)
    // Making Rows
    const nameCell = row.insertCell(0)
    nameCell.innerHTML = fullName
    const middleCell = row.insertCell(1)
    const dateCell = row.insertCell(2)
    dateCell.innerHTML = patient.referralDate.toLocaleDateString()
    var fullTable = ''
    
    // patient.dates.forEach(element => {
        
    // });
    console.log(fullName)
}

window.onload = () => {
    'use strict';

    PatientData.forEach(element => AddToHTML(element));
}