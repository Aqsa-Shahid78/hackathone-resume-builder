"use strict";
let myName = document.getElementById("name");
let jobTittle = document.getElementById("job");
let myPhone = document.getElementById("phone");
let myEmail = document.getElementById("email");
let address = document.getElementById("add");
let passingYear1 = document.getElementById("pass1");
let degree = document.getElementById("deg");
let institute = document.getElementById("uni");
let pass2 = document.getElementById("pass2");
let deg2 = document.getElementById("deg2");
let uni2 = document.getElementById("uni2");
let lang1 = document.getElementById("lang1");
let lang2 = document.getElementById("lang2");
let lang3 = document.getElementById("lang3");
let skill1 = document.getElementById("skill1");
let skill2 = document.getElementById("skill2");
let skill3 = document.getElementById("skill3");
let skill4 = document.getElementById("skill4");
let job = document.getElementById("jobTitle");
let year = document.getElementById("year");
let company = document.getElementById("company");
let companyLoc = document.getElementById("comlocation");
let achievement1 = document.getElementById("achv1");
let achievement2 = document.getElementById("achv2");
let achievement3 = document.getElementById("achv3");
let job01 = document.getElementById("jobTitle");
let year01 = document.getElementById("year01");
let company01 = document.getElementById("company01");
let companyLoc01 = document.getElementById("comlocation01");
let achievement01 = document.getElementById("achv01");
let achievement02 = document.getElementById("achv02");
let achievement03 = document.getElementById("achv03");
let pic = document.getElementById("pic");
let submitButton = document.getElementById("submitBtn");
let form = document.getElementById("form");
form?.addEventListener('submit', (event) => {
    event.preventDefault();
    localStorage.setItem("name", myName.value);
    localStorage.setItem("jobTittle", jobTittle.value);
    localStorage.setItem("myPhone", myPhone.value);
    localStorage.setItem("myEmail", myEmail.value);
    localStorage.setItem("address", address.value);
    localStorage.setItem("passingYear1", passingYear1.value);
    localStorage.setItem("degree", degree.value);
    localStorage.setItem("institute", institute.value);
    localStorage.setItem("pass2", pass2.value);
    localStorage.setItem("deg2", deg2.value);
    localStorage.setItem(" uni2", uni2.value);
    localStorage.setItem("lang1", lang1.value);
    localStorage.setItem(" lang2", lang2.value);
    localStorage.setItem("lang3", lang3.value);
    localStorage.setItem("skill1", skill1.value);
    localStorage.setItem("skill2", skill2.value);
    localStorage.setItem("skill3", skill3.value);
    localStorage.setItem("skill4", skill4.value);
    localStorage.setItem("job", job.value);
    localStorage.setItem("year", year.value);
    localStorage.setItem("company", company.value);
    localStorage.setItem("companyLoc", companyLoc.value);
    localStorage.setItem("achievement1", achievement1.value);
    localStorage.setItem("achievement2", achievement2.value);
    localStorage.setItem("achievement3", achievement3.value);
    localStorage.setItem("job01", job01.value);
    localStorage.setItem("year01", year01.value);
    localStorage.setItem("company01", company01.value);
    localStorage.setItem("companyLoc01", companyLoc01.value);
    localStorage.setItem("achievement01", achievement01.value);
    localStorage.setItem("achievement02", achievement02.value);
    localStorage.setItem("achievement03", achievement03.value);
    if (pic.files && pic.files[0]) {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            let textImg = reader.result;
            localStorage.setItem("profile_pic", textImg);
        });
        reader.readAsDataURL(pic.files[0]);
    }
    window.location.href = "./resume/index.html";
});
