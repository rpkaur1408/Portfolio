const button = document.querySelector(".btn")
const resume = document.querySelector(".resume-btn")

button.addEventListener("click",function(){
    window.open("https://github.com/rpkaur1408","_blank")
})

resume.addEventListener("click",()=>{
    const path = "Pdf/CommonResume.pdf"
    window.open(path,"_blank")
})