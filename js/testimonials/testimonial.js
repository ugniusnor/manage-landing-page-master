import {testimonialData} from "./testimonialData.js"
function testimonials () {
 if (typeof(testimonialData)!='object') {
   return;
 }

    let HTML="";
      for (let item of testimonialData ){
          HTML+=`<figure>
               <div class="avatar">
                   <img src="./images/avatar-${item.avatar}.png" alt="user-avatar-img">
               </div>
               <div class="name">
                   <h3>${item.name}</h3>
               </div>
               <div class="text">${item.text}</div>
           </figure>`
      }

      const selector = document.querySelector(".glider")
      selector.innerHTML=HTML;
}
export {testimonials}



