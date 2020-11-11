
//header
import {burger} from "./header/burger.js"
burger();


//services
import {renderServices} from "./services/renderServices.js"
renderServices();

//testimonials
import { testimonials } from "./testimonials/testimonial.js"
import { carousel } from "./testimonials/carousel.js"

testimonials ();
carousel();

//validation
import {emailValidation} from "./validations/emailValidation.js"
emailValidation();