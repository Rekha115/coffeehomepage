
const fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

document.body.style.margin = "0";
document.body.style.fontFamily = "'Poppins', sans-serif";
document.body.style.backgroundColor = "#fffdfa";
document.body.style.color = "#3e2723";
document.body.style.scrollBehavior = "smooth";

//NAVBAR
const nav = document.createElement("nav");
nav.style.display = "flex";
nav.style.justifyContent = "space-between";
nav.style.alignItems = "center";
nav.style.padding = "15px 80px";
nav.style.backgroundColor = "#2b1810";
nav.style.color = "white";
nav.style.position = "sticky";
nav.style.top = "0";
nav.style.zIndex = "100";
nav.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";

const heading = document.createElement("h2");
heading.textContent = "Coffee House ☕";
heading.style.margin = "0";
heading.style.fontSize = "1.8rem";
heading.style.letterSpacing = "1px";

const ul = document.createElement("ul");
ul.style.display = "flex";
ul.style.gap = "35px";
ul.style.listStyle = "none";
ul.style.margin = "0";
ul.style.padding = "0";

const menuItemsNav = ["Home", "Menu ▼", "About", "Contact"];
const navElements = [];


function styleNavItem(element) {
  element.style.cursor = "pointer";
  element.style.fontWeight = "500";
  element.style.transition = "color 0.3s ease";
  element.addEventListener("mouseenter", () => element.style.color = "#ddb892");
  element.addEventListener("mouseleave", () => element.style.color = "white");
}

const home = document.createElement("li");
home.textContent = "Home";
styleNavItem(home);

const menuLi = document.createElement("li");
menuLi.textContent = "Menu ▼";
menuLi.style.position = "relative";
styleNavItem(menuLi);

const dropdown = document.createElement("ul");
dropdown.style.position = "absolute";
dropdown.style.top = "30px";
dropdown.style.left = "0";
dropdown.style.backgroundColor = "white";
dropdown.style.color = "black";
dropdown.style.listStyle = "none";
dropdown.style.padding = "10px 0";
dropdown.style.display = "none";
dropdown.style.minWidth = "150px";
dropdown.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
dropdown.style.borderRadius = "8px";
dropdown.style.borderTop = "3px solid #6f4e37";

["Cappuccino", "Latte", "Espresso"].forEach(item => {
  const option = document.createElement("li");
  option.textContent = item;
  option.style.padding = "10px 20px";
  option.style.cursor = "pointer";
  option.style.transition = "all 0.3s ease";

  option.addEventListener("mouseenter", () => {
    option.style.color = "#6f4e37";
    option.style.backgroundColor = "#f5ebe0";
    option.style.paddingLeft = "25px";
  });

  option.addEventListener("mouseleave", () => {
    option.style.color = "black";
    option.style.backgroundColor = "transparent";
    option.style.paddingLeft = "20px";
  });

  dropdown.appendChild(option);
});

menuLi.appendChild(dropdown);

menuLi.addEventListener("mouseenter", () => {
  dropdown.style.display = "block";
});

menuLi.addEventListener("mouseleave", () => {
  dropdown.style.display = "none";
});

const aboutLi = document.createElement("li");
aboutLi.textContent = "About";
styleNavItem(aboutLi);

const contactLi = document.createElement("li");
contactLi.textContent = "Contact";
styleNavItem(contactLi);

ul.appendChild(home);
ul.appendChild(menuLi);
ul.appendChild(aboutLi);
ul.appendChild(contactLi);

nav.appendChild(heading);
nav.appendChild(ul);
document.body.appendChild(nav);

// --- SLIDER---
const sliderData = [
  {
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
    title: "Fresh Coffee Every Morning",
    desc: "Start your day with the perfect cup of coffee."
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrrnwS6NaD6QWd2SfMdw9R6EtDOFECEZy3Fwi-lnZ7keLa1gOc86kYoLPQ&s=10",
    title: "Roasted To Perfection",
    desc: "Experience the rich aroma of premium beans."
  },
  {
    img: "https://media.istockphoto.com/id/1859646927/photo/closeup-image-of-a-man-and-a-woman-clinking-white-coffee-mugs-in-cafe.jpg?s=612x612&w=0&k=20&c=ildJ3UpGXCI7Xc-mQD40a4M65JB4rnBPYJSlpFIPBok=",
    title: "Cozy Place, Great Taste",
    desc: "Make your conversations sweeter with our specials."
  }
];

const hero = document.createElement("section");
hero.style.backgroundColor = "#f5ebe0";
hero.style.padding = "100px 80px";
hero.style.minHeight = "400px";
hero.style.display = "flex";
hero.style.alignItems = "center";

const heroContent = document.createElement("div");
heroContent.style.display = "flex";
heroContent.style.alignItems = "center";
heroContent.style.justifyContent = "space-between";
heroContent.style.flexWrap = "wrap";
heroContent.style.width = "100%";
heroContent.style.gap = "50px";

const heroImage = document.createElement("div");
heroImage.style.flex = "1";
heroImage.style.minWidth = "300px";
heroImage.style.display = "flex";
heroImage.style.justifyContent = "center";

const img = document.createElement("img");
img.style.width = "100%";
img.style.maxWidth = "500px";
img.style.height = "350px";
img.style.objectFit = "cover";
img.style.borderRadius = "30px";
img.style.boxShadow = "0 15px 35px rgba(111, 78, 55, 0.2)";
img.style.transition = "all 0.8s ease-in-out";

heroImage.appendChild(img);

const heroText = document.createElement("div");
heroText.style.flex = "1";
heroText.style.minWidth = "300px";

const h1 = document.createElement("h1");
h1.style.fontSize = "3.5rem";
h1.style.fontWeight = "700";
h1.style.color = "#3e2723";
h1.style.margin = "0 0 20px 0";
h1.style.lineHeight = "1.2";
h1.style.transition = "all 0.8s ease-in-out";

const p = document.createElement("p");
p.style.fontSize = "1.2rem";
p.style.color = "#5c4033";
p.style.margin = "0 0 40px 0";
p.style.lineHeight = "1.6";
p.style.transition = "all 0.8s ease-in-out";

const button = document.createElement("button");
button.textContent = "Order Now";
button.style.padding = "15px 40px";
button.style.backgroundColor = "#6f4e37";
button.style.color = "white";
button.style.border = "none";
button.style.borderRadius = "50px";
button.style.cursor = "pointer";
button.style.fontSize = "1.1rem";
button.style.fontWeight = "600";
button.style.boxShadow = "0 8px 20px rgba(111, 78, 55, 0.3)";
button.style.transition = "all 0.3s ease";

button.addEventListener("mouseenter", () => {
  button.style.backgroundColor = "#5c4033";
  button.style.transform = "translateY(-3px)";
  button.style.boxShadow = "0 12px 25px rgba(111, 78, 55, 0.4)";
});
button.addEventListener("mouseleave", () => {
  button.style.backgroundColor = "#6f4e37";
  button.style.transform = "translateY(0)";
  button.style.boxShadow = "0 8px 20px rgba(111, 78, 55, 0.3)";
});

heroText.appendChild(h1);
heroText.appendChild(p);
heroText.appendChild(button);

heroContent.appendChild(heroImage);
heroContent.appendChild(heroText);
hero.appendChild(heroContent);
document.body.appendChild(hero);

// --- SLIDER---
let currentSlide = 0;
function updateSlider() {
  img.style.opacity = "0";
  h1.style.opacity = "0";
  p.style.opacity = "0";
  img.style.transform = "scale(0.95)";
  
  setTimeout(() => {
    img.src = sliderData[currentSlide].img;
    h1.textContent = sliderData[currentSlide].title;
    p.textContent = sliderData[currentSlide].desc;
    
    img.style.opacity = "1";
    h1.style.opacity = "1";
    p.style.opacity = "1";
    img.style.transform = "scale(1)";
    
    currentSlide = (currentSlide + 1) % sliderData.length;
  }, 400);
}
updateSlider();
setInterval(updateSlider, 4000);

// --- MODAL ---
const modalOverlay = document.createElement("div");
modalOverlay.style.position = "fixed";
modalOverlay.style.top = "0";
modalOverlay.style.left = "0";
modalOverlay.style.width = "100%";
modalOverlay.style.height = "100%";
modalOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
modalOverlay.style.backdropFilter = "blur(5px)";
modalOverlay.style.display = "none";
modalOverlay.style.justifyContent = "center";
modalOverlay.style.alignItems = "center";
modalOverlay.style.zIndex = "1000";

const modalBox = document.createElement("div");
modalBox.style.backgroundColor = "white";
modalBox.style.padding = "40px";
modalBox.style.borderRadius = "24px";
modalBox.style.width = "380px";
modalBox.style.position = "relative";
modalBox.style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)";

const closeBtn = document.createElement("span");
closeBtn.innerHTML = "&times;";
closeBtn.style.position = "absolute";
closeBtn.style.top = "15px";
closeBtn.style.right = "20px";
closeBtn.style.fontSize = "32px";
closeBtn.style.cursor = "pointer";
closeBtn.style.color = "#aaa";
closeBtn.style.transition = "color 0.3s";
closeBtn.addEventListener("mouseenter", () => closeBtn.style.color = "#3e2723");
closeBtn.addEventListener("mouseleave", () => closeBtn.style.color = "#aaa");

closeBtn.addEventListener("click", () => modalOverlay.style.display = "none");

const modalTitle = document.createElement("h2");
modalTitle.textContent = "Place Your Order ☕";
modalTitle.style.marginBottom = "25px";
modalTitle.style.color = "#3e2723";
modalTitle.style.textAlign = "center";

const orderForm = document.createElement("form");
orderForm.style.display = "flex";
orderForm.style.flexDirection = "column";
orderForm.style.gap = "20px";

const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.placeholder = "Your Name";
nameInput.required = true;
nameInput.style.padding = "12px 18px";
nameInput.style.border = "1px solid #ddd";
nameInput.style.borderRadius = "10px";
nameInput.style.outline = "none";
nameInput.style.fontFamily = "'Poppins', sans-serif";

const coffeeSelect = document.createElement("select");
coffeeSelect.style.padding = "12px 18px";
coffeeSelect.style.border = "1px solid #ddd";
coffeeSelect.style.borderRadius = "10px";
coffeeSelect.style.outline = "none";
coffeeSelect.style.fontFamily = "'Poppins', sans-serif";
coffeeSelect.style.backgroundColor = "white";

["Cappuccino", "Latte", "Espresso"].forEach(item => {
  const opt = document.createElement("option");
  opt.value = item;
  opt.textContent = item;
  coffeeSelect.appendChild(opt);
});

const submitBtn = document.createElement("button");
submitBtn.textContent = "Confirm Order";
submitBtn.style.padding = "14px";
submitBtn.style.backgroundColor = "#6f4e37";
submitBtn.style.color = "white";
submitBtn.style.border = "none";
submitBtn.style.borderRadius = "10px";
submitBtn.style.cursor = "pointer";
submitBtn.style.fontWeight = "600";
submitBtn.style.fontSize = "1rem";
submitBtn.style.transition = "background-color 0.3s";
submitBtn.addEventListener("mouseenter", () => submitBtn.style.backgroundColor = "#5c4033");
submitBtn.addEventListener("mouseleave", () => submitBtn.style.backgroundColor = "#6f4e37");

orderForm.appendChild(nameInput);
orderForm.appendChild(coffeeSelect);
orderForm.appendChild(submitBtn);
modalBox.appendChild(closeBtn);
modalBox.appendChild(modalTitle);
modalBox.appendChild(orderForm);
modalOverlay.appendChild(modalBox);
document.body.appendChild(modalOverlay);

button.addEventListener("click", () => { modalOverlay.style.display = "flex"; });
modalOverlay.addEventListener("click", (e) => { if (e.target === modalOverlay) modalOverlay.style.display = "none"; });
orderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(`Thank you ${nameInput.value}! Your order for ${coffeeSelect.value} has been placed.`);
  modalOverlay.style.display = "none";
  orderForm.reset();
});

// ---MODAL ---
const detailOverlay = document.createElement("div");
detailOverlay.style.position = "fixed";
detailOverlay.style.top = "0";
detailOverlay.style.left = "0";
detailOverlay.style.width = "100%";
detailOverlay.style.height = "100%";
detailOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
detailOverlay.style.backdropFilter = "blur(5px)";
detailOverlay.style.display = "none";
detailOverlay.style.justifyContent = "center";
detailOverlay.style.alignItems = "center";
detailOverlay.style.zIndex = "1001";

const detailBox = document.createElement("div");
detailBox.style.backgroundColor = "white";
detailBox.style.padding = "40px";
detailBox.style.borderRadius = "24px";
detailBox.style.width = "420px";
detailBox.style.position = "relative";
detailBox.style.textAlign = "center";
detailBox.style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)";

const detailCloseBtn = document.createElement("span");
detailCloseBtn.innerHTML = "&times;";
detailCloseBtn.style.position = "absolute";
detailCloseBtn.style.top = "15px";
detailCloseBtn.style.right = "20px";
detailCloseBtn.style.fontSize = "32px";
detailCloseBtn.style.cursor = "pointer";
detailCloseBtn.style.color = "#aaa";
detailCloseBtn.style.transition = "color 0.3s";
detailCloseBtn.addEventListener("mouseenter", () => detailCloseBtn.style.color = "#3e2723");
detailCloseBtn.addEventListener("mouseleave", () => detailCloseBtn.style.color = "#aaa");
detailCloseBtn.addEventListener("click", () => { detailOverlay.style.display = "none"; });

const detailTitle = document.createElement("h2");
detailTitle.style.color = "#3e2723";
detailTitle.style.margin = "0 0 15px 0";

const detailImg = document.createElement("img");
detailImg.style.width = "100%";
detailImg.style.height = "240px";
detailImg.style.objectFit = "cover";
detailImg.style.borderRadius = "16px";
detailImg.style.margin = "15px 0";
detailImg.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";

const detailText = document.createElement("p");
detailText.style.color = "#666";
detailText.style.lineHeight = "1.6";
detailText.style.fontSize = "1rem";

detailBox.appendChild(detailCloseBtn);
detailBox.appendChild(detailTitle);
detailBox.appendChild(detailImg);
detailBox.appendChild(detailText);
detailOverlay.appendChild(detailBox);
document.body.appendChild(detailOverlay);

detailOverlay.addEventListener("click", (e) => { if (e.target === detailOverlay) detailOverlay.style.display = "none"; });

//menu section
const menu = document.createElement("section");
menu.style.padding = "100px 80px";
menu.style.textAlign = "center";

const menuHeading = document.createElement("h2");
menuHeading.textContent = "Our Menu";
menuHeading.style.fontSize = "2.8rem";
menuHeading.style.color = "#3e2723";
menuHeading.style.marginBottom = "50px";
menuHeading.style.position = "relative";

const cards = document.createElement("div");
cards.style.display = "flex";
cards.style.justifyContent = "center";
cards.style.gap = "40px";
cards.style.flexWrap = "wrap";

const menuItems = [
  {
    name: "Cappuccino",
    price: "₹199",
    img: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=500",
    details: "Our iconic Cappuccino mixes rich espresso with perfectly frothed hot milk, lightly dusted with fine cocoa powder for a bold, velvety flavor profile."
  },
  {
    name: "Latte",
    price: "₹249",
    img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500",
    details: "A classic milk-forward coffee. Formed with an exquisite shot of fresh espresso layered gently beneath a blanket of silky, warm steamed milk."
  },
  {
    name: "Espresso",
    price: "₹179",
    img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500",
    details: "A pure espresso experience extracted under high pressure from premium ground beans. Dark, full-bodied, and topped with a natural, rich crema."
  }
];

menuItems.forEach(item => {
  const card = document.createElement("div");
  card.style.width = "280px";
  card.style.backgroundColor = "white";
  card.style.borderRadius = "20px";
  card.style.overflow = "hidden";
  card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
  card.style.paddingBottom = "25px";
  card.style.transition = "all 0.3s ease";

  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
    card.style.boxShadow = "0 15px 35px rgba(111, 78, 55, 0.15)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
  });

  const cardImg = document.createElement("img");
  cardImg.src = item.img;
  cardImg.style.width = "100%";
  cardImg.style.height = "240px";
  cardImg.style.objectFit = "cover";

  const title = document.createElement("h3");
  title.textContent = item.name;
  title.style.fontSize = "1.4rem";
  title.style.margin = "20px 0 10px 0";
  title.style.color = "#3e2723";

  const price = document.createElement("p");
  price.textContent = item.price;
  price.style.fontWeight = "700";
  price.style.color = "#6f4e37";
  price.style.fontSize = "1.2rem";
  price.style.margin = "0 0 15px 0";

  const detailsBtn = document.createElement("button");
  detailsBtn.textContent = "More Details";
  detailsBtn.style.padding = "10px 25px";
  detailsBtn.style.backgroundColor = "#f5ebe0";
  detailsBtn.style.color = "#3e2723";
  detailsBtn.style.border = "none";
  detailsBtn.style.borderRadius = "50px";
  detailsBtn.style.cursor = "pointer";
  detailsBtn.style.fontWeight = "600";
  detailsBtn.style.fontSize = "0.9rem";
  detailsBtn.style.transition = "all 0.3s ease";

  detailsBtn.addEventListener("mouseenter", () => {
    detailsBtn.style.backgroundColor = "#6f4e37";
    detailsBtn.style.color = "white";
  });
  detailsBtn.addEventListener("mouseleave", () => {
    detailsBtn.style.backgroundColor = "#f5ebe0";
    detailsBtn.style.color = "#3e2723";
  });

  detailsBtn.addEventListener("click", () => {
    detailTitle.textContent = item.name;
    detailImg.src = item.img;
    detailText.textContent = item.details;
    detailOverlay.style.display = "flex";
  });

  card.appendChild(cardImg);
  card.appendChild(title);
  card.appendChild(price);
  card.appendChild(detailsBtn);

  cards.appendChild(card);
});

menu.appendChild(menuHeading);
menu.appendChild(cards);
document.body.appendChild(menu);

//about section
const about = document.createElement("section");
about.style.padding = "100px 80px";
about.style.textAlign = "center";
about.style.backgroundColor = "#f5ebe0";

const aboutHeading = document.createElement("h2");
aboutHeading.textContent = "About Us";
aboutHeading.style.fontSize = "2.8rem";
aboutHeading.style.color = "#3e2723";
aboutHeading.style.marginBottom = "20px";

const aboutText = document.createElement("p");
aboutText.textContent = "We serve premium quality coffee made from freshly roasted beans.";
aboutText.style.fontSize = "1.2rem";
aboutText.style.color = "#5c4033";
aboutText.style.maxWidth = "600px";
aboutText.style.margin = "0 auto";
aboutText.style.lineHeight = "1.6";

about.appendChild(aboutHeading);
about.appendChild(aboutText);
document.body.appendChild(about);

//contact section
const contact = document.createElement("section");
contact.style.padding = "100px 80px";
contact.style.textAlign = "center";

const contactHeading = document.createElement("h2");
contactHeading.textContent = "Contact Us";
contactHeading.style.fontSize = "2.8rem";
contactHeading.style.color = "#3e2723";
contactHeading.style.marginBottom = "20px";

const contactText = document.createElement("p");
contactText.textContent = "Email: coffeehouse@gmail.com";
contactText.style.fontSize = "1.2rem";
contactText.style.color = "#5c4033";

contact.appendChild(contactHeading);
contact.appendChild(contactText);
document.body.appendChild(contact);

const testimonials = document.createElement("section");
testimonials.style.padding = "100px 80px";
testimonials.style.textAlign = "center";
testimonials.style.backgroundColor = "#f5ebe0";

const testimonialHeading = document.createElement("h2");
testimonialHeading.textContent = "What Our Customers Say";
testimonialHeading.style.fontSize = "2.8rem";
testimonialHeading.style.color = "#3e2723";
testimonialHeading.style.marginBottom = "50px";

const testimonialCards = document.createElement("div");
testimonialCards.style.display = "flex";
testimonialCards.style.justifyContent = "center";
testimonialCards.style.gap = "40px";
testimonialCards.style.flexWrap = "wrap";

const reviewData = [
  {
    name: "Aman Sharma",
    role: "Coffee Enthusiast",
    review: "The Espresso here is absolutely brilliant! Perfectly balanced crema and rich aroma. My go-to place every single morning.",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    name: "Riya Verma",
    role: "Regular Visitor",
    review: "Love the cozy ambiance and their Cappuccino is to die for. The staff is incredibly friendly and welcoming.",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    name: "Vikram Malhotra",
    role: "Freelancer",
    review: "A perfect place to work and sip on some premium Latte. Highly recommend their specials if you are looking for top-notch quality.",
    rating: "⭐⭐⭐⭐★"
  }
];

reviewData.forEach(user => {
  const tCard = document.createElement("div");
  tCard.style.width = "280px";
  tCard.style.backgroundColor = "white";
  tCard.style.borderRadius = "20px";
  tCard.style.padding = "30px 25px";
  tCard.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
  tCard.style.transition = "all 0.3s ease";
  tCard.style.display = "flex";
  tCard.style.flexDirection = "column";
  tCard.style.justifyContent = "space-between";

  tCard.addEventListener("mouseenter", () => {
    tCard.style.transform = "translateY(-10px)";
    tCard.style.boxShadow = "0 15px 35px rgba(111, 78, 55, 0.15)";
  });
  tCard.addEventListener("mouseleave", () => {
    tCard.style.transform = "translateY(0)";
    tCard.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
  });

  const stars = document.createElement("div");
  stars.textContent = user.rating;
  stars.style.fontSize = "1.2rem";
  stars.style.marginBottom = "15px";

  const feedback = document.createElement("p");
  feedback.textContent = `"${user.review}"`;
  feedback.style.color = "#5c4033";
  feedback.style.fontStyle = "italic";
  feedback.style.lineHeight = "1.6";
  feedback.style.fontSize = "0.95rem";
  feedback.style.margin = "0 0 20px 0";

  const authorInfo = document.createElement("div");
  
  const authorName = document.createElement("h4");
  authorName.textContent = user.name;
  authorName.style.margin = "0";
  authorName.style.color = "#3e2723";
  authorName.style.fontSize = "1.1rem";

  const authorRole = document.createElement("span");
  authorRole.textContent = user.role;
  authorRole.style.fontSize = "0.85rem";
  authorRole.style.color = "#a68a64";

  authorInfo.appendChild(authorName);
  authorInfo.appendChild(authorRole);

  tCard.appendChild(stars);
  tCard.appendChild(feedback);
  tCard.appendChild(authorInfo);

  testimonialCards.appendChild(tCard);
});

testimonials.appendChild(testimonialHeading);
testimonials.appendChild(testimonialCards);
document.body.appendChild(testimonials);


//features section
const features = document.createElement("section");
features.style.padding = "100px 80px";
features.style.textAlign = "center";
features.style.backgroundColor = "#fffdfa";

const featuresHeading = document.createElement("h2");
featuresHeading.textContent = "Why Choose Us";
featuresHeading.style.fontSize = "2.8rem";
featuresHeading.style.color = "#3e2723";
featuresHeading.style.marginBottom = "50px";

const featuresGrid = document.createElement("div");
featuresGrid.style.display = "flex";
featuresGrid.style.justifyContent = "center";
featuresGrid.style.gap = "40px";
featuresGrid.style.flexWrap = "wrap";

const featuresData = [
  {
    icon: "🌱",
    title: "100% Organic Beans",
    desc: "Sourced directly from sustainable local farms, bringing you nature's finest flavors."
  },
  {
    icon: "🔥",
    title: "In-House Roasting",
    desc: "Our master roasters meticulously roast beans daily to lock in exceptional rich aroma."
  },
  {
    icon: "💻",
    title: "Free High-Speed Wi-Fi",
    desc: "A warm, comfortable space equipped with fast internet to fuel your remote work or study."
  }
];

featuresData.forEach(item => {
  const fCard = document.createElement("div");
  fCard.style.width = "260px";
  fCard.style.padding = "40px 20px";
  fCard.style.borderRadius = "24px";
  fCard.style.backgroundColor = "white";
  fCard.style.boxShadow = "0 8px 24px rgba(0,0,0,0.03)";
  fCard.style.transition = "all 0.3s ease";
  fCard.style.border = "1px solid #f5ebe0";

  fCard.addEventListener("mouseenter", () => {
    fCard.style.transform = "scale(1.03)";
    fCard.style.boxShadow = "0 12px 30px rgba(111, 78, 55, 0.1)";
    fCard.style.borderColor = "#ddb892";
  });
  fCard.addEventListener("mouseleave", () => {
    fCard.style.transform = "scale(1)";
    fCard.style.boxShadow = "0 8px 24px rgba(0,0,0,0.03)";
    fCard.style.borderColor = "#f5ebe0";
  });

  const iconDiv = document.createElement("div");
  iconDiv.textContent = item.icon;
  iconDiv.style.fontSize = "3rem";
  iconDiv.style.marginBottom = "20px";

  const fTitle = document.createElement("h3");
  fTitle.textContent = item.title;
  fTitle.style.fontSize = "1.3rem";
  fTitle.style.color = "#3e2723";
  fTitle.style.margin = "0 0 12px 0";

  const fDesc = document.createElement("p");
  fDesc.textContent = item.desc;
  fDesc.style.color = "#666";
  fDesc.style.fontSize = "0.95rem";
  fDesc.style.lineHeight = "1.6";
  fDesc.style.margin = "0";

  fCard.appendChild(iconDiv);
  fCard.appendChild(fTitle);
  fCard.appendChild(fDesc);

  featuresGrid.appendChild(fCard);
});

features.appendChild(featuresHeading);
features.appendChild(featuresGrid);
document.body.appendChild(features);

//footer section
const footer = document.createElement("footer");
footer.style.backgroundColor = "#2b1810";
footer.style.color = "#ddb892";
footer.style.textAlign = "center";
footer.style.padding = "30px";
footer.style.borderTop = "1px solid #3e2723";

const footerText = document.createElement("p");
footerText.textContent = "© 2026 Coffee House. All Rights Reserved.";
footerText.style.margin = "0";
footerText.style.fontSize = "0.95rem";
footerText.style.letterSpacing = "0.5px";

footer.appendChild(footerText);
document.body.appendChild(footer);