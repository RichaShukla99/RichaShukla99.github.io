const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const userName = document.querySelector('.username');
const role = document.querySelector('.role');
const testimonials = [
    {
        name:'Miyah Miles',
        position:'Marketing',
        photo:'https://randomuser.me/api/portraits/women/46.jpg',
        text:"I've worked with literally hundreds of HTML/CSS developers and I've to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time."
    },
    {
        name:'Miyah Miles2',
        position:'Marketing2',
        photo:'https://randomuser.me/api/portraits/women/47.jpg',
        text:"I've worked with literally hundreds of HTML/CSS developers and I've to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.2"
    },
    {
        name:'Miyah Miles3',
        position:'Marketing3',
        photo:'https://randomuser.me/api/portraits/women/48.jpg',
        text:"I've worked with literally hundreds of HTML/CSS developers and I've to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.3"
    },
    {
        name:'Miyah Miles4',
        position:'Marketing4',
        photo:'https://randomuser.me/api/portraits/women/49.jpg',
        text:"I've worked with literally hundreds of HTML/CSS developers and I've to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ARlT into PIXELS - without a glitch, every time.4"
    },
    {
        name:'Miyah Miles5',
        position:'Marketing5',
        photo:'https://randomuser.me/api/portraits/women/50.jpg',
        text:"I've worked with literally hundreds of HTML/CSS developers and I've to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.5"
    }    
];

let idx=1;
function updateTestimonial(){
    const { name, position, photo, text } = testimonials[idx];
    testimonial.innerHTML =text;
    userImage.src=photo;
    userName.innerHTML=name;
    role.innerHTML=position;
    idx++;
    if(idx>testimonials.length-1){
        idx=0;
    }
}
setInterval(updateTestimonial, 10000);
updateTestimonial();
/*
for (let index = 0; index < testimonials.length; index++) {
    
    if(index==(testimonials.length-1)){
        index=0;
    }
    updateTestimonial(index);
}
*/