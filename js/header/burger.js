//burger transformation on click

function burger () {
    let count=0;
    const burgerIcon=document.querySelector(".burger");
    const mobNav=document.querySelector(".mob-nav")
    burgerIcon.addEventListener('click',()=>{
            burgerIcon.classList.toggle("change");
          if (count==0) {
                mobNav.style.display="flex";
                count=1;
          }
          else  {
              mobNav.style.display="none"; 
            count=0;
            }
    })
}

export {burger};