window.addEventListener("load", () => {

  let name = localStorage.getItem("name")
  let jobTittle = localStorage.getItem("jobTittle")
  let myPhone = localStorage.getItem("myPhone")
  let myEmail = localStorage.getItem("myEmail")
  let address = localStorage.getItem("address")
  let passingYear1 = localStorage.getItem("passingYear1")
  let degree = localStorage.getItem("degree")
  let institute = localStorage.getItem("institute")
  let pass2 = localStorage.getItem("pass2")
  let deg2 = localStorage.getItem("deg2")
  let uni2 = localStorage.getItem(" uni2")
  let lang1 = localStorage.getItem("lang1")
  let lang2 = localStorage.getItem(" lang2")
  let lang3 = localStorage.getItem("lang3")
  let skill1 = localStorage.getItem("skill1")
  let skill2 = localStorage.getItem("skill2")
  let skill3 = localStorage.getItem("skill3")
  let job = localStorage.getItem("job")
  let year = localStorage.getItem("year")
  let company = localStorage.getItem("company")
  let companyLoc = localStorage.getItem("companyLoc")
  let achievement1 = localStorage.getItem("achievement1")
  let achievement2 = localStorage.getItem("achievement2")
  let achievement3 = localStorage.getItem("achievement3")
  let job01= localStorage.getItem("job01")
  let year01=localStorage.getItem("year01")
  let company01=localStorage.getItem("company01")
  let companyLoc01= localStorage.getItem("companyLoc01")
  let achievement01= localStorage.getItem("achievement01")
  let achievement02= localStorage.getItem("achievement02")
  let achievement03=localStorage.getItem("achievement03")
  let picture= localStorage.getItem("profile_pic")



  let resName:any= document.getElementById("resName")
  resName.textContent= name
  
  let resDesig:any= document.getElementById("resDesig")
  resDesig.textContent=jobTittle

  let resPhone:any= document.getElementById("resPhone")
  resPhone.textContent= myPhone

  let resEmail:any= document.getElementById("resEmail")
  resEmail.textContent=myEmail

  let resAdd:any= document.getElementById("resAdd")
  resAdd.textContent= address
  
  let resYear:any= document.getElementById("resYear")
  resYear.textContent= passingYear1

  let resDeg:any= document.getElementById("resDeg")
  resDeg.textContent= degree

  let resInstitute:any= document.getElementById("resInstitute")
  resInstitute.textContent= institute

  let resYear2:any= document.getElementById("resYear2")
  resYear2.textContent=pass2

  let resDeg2:any= document.getElementById("resDeg2")
  resDeg2.textContent= deg2

  let resInstitute2:any= document.getElementById("resInstitute2")
  resInstitute2.textContent= uni2 

  let resLang1:any= document.getElementById("resLang1")
  resLang1.textContent=lang1

  let resLang2:any= document.getElementById("resLang2")
  resLang2.textContent=lang2

  let resLang3:any= document.getElementById("resLang3")
  resLang3.textContent=lang3

  let resSkil1:any= document.getElementById("resSkil1")
  resSkil1.textContent= skill1

  let resSkil2:any= document.getElementById("resSkil2")
  resSkil2.textContent= skill2

  let resSkil3:any= document.getElementById("resSkil3")
  resSkil3.textContent= skill3

  let resJob:any= document.getElementById("resJob")
  resJob.textContent= job

  let resYear1:any= document.getElementById("resYear1")
  resYear1.textContent= year

  let resCompany:any= document.getElementById("resCompany")
  resCompany.textContent= company 

  let resLoc:any= document.getElementById("resLoc")
  resLoc.textContent= companyLoc

  let resAch1:any= document.getElementById("resAch1")
  resAch1.textContent= achievement1

  let resAch2:any= document.getElementById("resAch2")
  resAch2.textContent= achievement2

  let resAch3:any= document.getElementById("resAch3")
  resAch3.textContent= achievement3

let resJob01:any= document.getElementById("resJob01")
  resJob01.textContent= job01

  let resYear01:any= document.getElementById("resYear01")
  resYear01.textContent= year01

  let resCompany01:any= document.getElementById("resCompany01")
  resCompany01.textContent= company01
  let resLoc01:any= document.getElementById("resLoc01")
  resLoc01.textContent= companyLoc01

  let resAch01:any= document.getElementById("resAch01")
  resAch01.textContent= achievement01

  let resAch02:any= document.getElementById("resAch02")
  resAch02.textContent= achievement02

  let resAch03:any= document.getElementById("resAch03")
  resAch03.textContent= achievement03
 
  let resImage:any= document.getElementById("resImage")
  resImage.src= picture


})



// print button
let print_btn = document.getElementById('print_btn')

print_btn?.addEventListener('click', () => {
  window.print()
})