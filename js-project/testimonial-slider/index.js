const  testimonials = [
    {
        name: "Bien Beo",
        photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I would recommend apple for anyone trying to get the word out about their business. It has saved me so much time!",
    },
    {
        name: "Emily Johnson",
        photoUrl: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I am extremely impressed with the quality and performance of the iPhone 11 Pro from Apple. It is a reliable device that exceeds expectations in every way. I highly recommend it to anyone looking for a top-notch smartphone experience.",
    },
    {
        name: "Sarah Johnson",
        photoUrl: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I am extremely impressed with the cutting-edge technology and sleek design of the iPhone 11 Pro by Apple. Their attention to detail and commitment to quality make them a reliable choice for all tech enthusiasts. Highly recommend!",
    }
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;
updateTestimonial();
function updateTestimonial() {
    const {name, photoUrl, text} = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;
    if (idx === testimonials.length)
        idx = 0;
    setTimeout(() => {
        updateTestimonial();
    }, 10000);
};