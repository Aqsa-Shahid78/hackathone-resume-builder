

// experience section

let exp_section = document.getElementById('experience')
let exp_btn = document.getElementById('exp_btn')

exp_btn?.addEventListener('click', ()=>{
  exp_section!.classList.toggle('hide')
  
})

// skill section
let skill_section = document.getElementById('skill')
let skill_btn = document.getElementById('skill_btn')

skill_btn?.addEventListener('click', ()=>{
  skill_section!.classList.toggle('hide')

})


// language section
let language_section = document.getElementById('language')
let lang_btn = document.getElementById('lang_btn')

lang_btn?.addEventListener('click', ()=>{
  language_section!.classList.toggle('hide')

})


// education section
let education_section = document.getElementById('edu')
let edu_btn = document.getElementById('edu_btn')

edu_btn?.addEventListener('click', ()=>{
  education_section!.classList.toggle('hide')

})

// contact section
let contact_section = document.getElementById('contact')
let contact_btn = document.getElementById('contact_btn')

contact_btn?.addEventListener('click', ()=>{
contact_section!.classList.toggle('hide')

})

// reference section
let refrence_section = document.getElementById('refrence')
let refrence_btn = document.getElementById('refrence_btn')

refrence_btn?.addEventListener('click', ()=>{
refrence_section!.classList.toggle('hide')

})

// print button
let print_btn = document.getElementById('print_btn')

print_btn?.addEventListener('click', ()=>{
  window.print()
})