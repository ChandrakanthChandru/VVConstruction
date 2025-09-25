let head=document.getElementById("name")

head.addEventListener("mouseleave",()=>{
    head.style.transform="scale(1)"
    head.style.transition="ease-in-out 1s"
})

        let home=document.getElementById("home")
        let about=document.getElementById("about")
        let contact=document.getElementById("contact")
        // console.log(home);
        
        let f1=()=>{
            home.style.border="2px solid white"
            home.style.fontSize="15px"
        }
        let f2=()=>{
            home.style.border="none"
            home.style.fontSize="20px"
        }
        home.addEventListener("mouseover",f1)
        home.addEventListener("mouseleave",f2)


         let g1=()=>{
            about.style.border="2px solid white"
            about.style.fontSize="15px"
        }
        let g2=()=>{
            about.style.border="none"
            about.style.fontSize="20px"
        }
        about.addEventListener("mouseover",g1)
        about.addEventListener("mouseleave",g2)


         let h1=()=>{
            contact.style.border="2px solid white"
            contact.style.fontSize="15px"
        }
        let h2=()=>{
            contact.style.border="none"
            contact.style.fontSize="20px"
        }
        contact.addEventListener("mouseover",h1)
        contact.addEventListener("mouseleave",h2)