import {serviceData} from "./servicesData.js"

function renderServices () {
    const DOM=document.querySelector(".services")
    let HTML="";
   
    for ( let i=0;i<serviceData.length;i++) {
        if (!serviceData[i].active) {
            console.error(`Service number ${i} is not active at the moment it wont be shown`);
           serviceData[i]="";
        }
        else if ( typeof(serviceData[i].name)!='string' || typeof(serviceData[i].description)!='string' || serviceData[i].name.length > 100 || serviceData[i].description.length > 550) {
            console.error("Service number "+i+ " name and description must be text and lo longer than 100 and 550 symbols");
            serviceData[i]="";
        }
        else {
        HTML+=` <div class="single-service">
        <div class="service-name">
          <div class="service-number">0${i+1}</div>
          <span> <strong>${serviceData[i].name}</strong> </span>
        </div>
        <div class="service-description text-box">
          <p>${serviceData[i].description}</p>
        </div>
      </div>`
    } 
  }
    DOM.innerHTML=HTML;
} 
export {renderServices};



