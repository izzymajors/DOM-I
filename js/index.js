const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const header = document.querySelector("header")
const nav = document.querySelector("nav")
nav.style 
 const cta = document.querySelector("cta")
const mainContent = document.querySelector("main-content")
const contact = document.querySelector ("contact")
 const footer = document.querySelector ("footer")

// nav

const navItem1 = document.querySelector('nav a');
const navItem2 = navItem1.nextSibling;
const navItem3 = navItem2.nextSibling;
const navItem4 = navItem3.nextSibling;
const navItem5 = navItem4.nextSibling;
const navItem6 = navItem5.nextSibling;
navItem1.textContent = "Servivces";
navItem2.textContent = "Product";
navItem3.textContent = "Vision";
navItem4.textContent = "Features";
navItem5.textContent = "About";
navItem6.textContent = "Contact";





// top section
const firstSection = document.querySelector('.cta-text'); 
const largeText = firstSection.querySelector('h1');
const firstButton = firstSection.querySelector('button');
largeText.textContent = "DOM IS AWESOME";
firstButton.textContent = 'Get Started';

let ctaImage = document.getElementById("cta-img")
ctaImage.setAttribute('src',siteContent["cta"]["img-src"])

//section 2

 const mainH4 = document.querySelectorAll('h4')
  mainH4[0].textContent = siteContent["main-content"]["features-h4"]
  //const mainP = document.querySelector('p')


mainH4[1].textContent = siteContent["main-content"]["about-h4"]

let middleImage = document.getElementById("middle-img")
middleImage.setAttribute('src',siteContent["main-content"]["middle-img-src"])

mainH4[2].textContent = siteContent["main-content"]["services-h4"]
mainH4[3].textContent = siteContent["main-content"]["product-h4"]
mainH4[4].textContent = siteContent["main-content"]["vision-h4"]

const mainP = document.querySelectorAll('p')

mainP[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

mainP[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

mainP[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

mainP[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

mainP[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."