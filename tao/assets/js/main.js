/**
* Template Name: Selecao
* Updated: Jan 29 2024 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/selecao-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
const officers = [
  {
    name: 'Dexter Godenez',
    position: 'Chairman',
    image: 'dex.jpg'
  }, {
    name: 'Ronnie Madelo Dioneda',
    position: 'Vice Chairman',
    image: 'ronnie.jpg'
  }, {
    name: 'Ferdinand Pacis',
    position: 'Secretary',
    image: 'ferdi.jpg'
  }, {
    name: 'Reynaldo Valiao',
    position: 'Director of Membership',
    image: 'boy.jpg'
  }, {
    name: 'Thed Bulado',
    position: 'Asst. Director of Membership',
    image: 'Default-officer.jpg'
  }, {
    name: 'Joel Prudencio',
    position: 'Asst. Director of Membership',
    image: 'thed.jpg'
  }, {
    name: 'Lucila De Ocampo',
    position: 'Treasurer',
    image: 'lucy.jpg'
  }, {
    name: 'Roelle Manangkil',
    position: 'Asst. Treasurer',
    image: 'Default-officer.jpg'
  }, {
    name: 'Ronnie Vital',
    position: 'Auditor',
    image: 'Default-officer.jpg'
  }, {
    name: 'Bing Agana',
    position: 'Fund Raising Coordinator',
    image: 'Default-officer.jpg'
  }, {
    name: 'Macky Julian',
    position: 'Sports & Events Coordinator',
    image: 'Default-officer.jpg'
  }, {
    name: 'Jonathan Simbahan',
    position: 'Asst. Sports & Events Coordinator',
    image: 'Default-officer.jpg'
  }, {
    name: 'Eujen Ayeng',
    position: 'Media & Documentation Coordinator',
    image: 'Default-officer.jpg'
  },
]

function createOfficer(officer) {

  const cardEl = document.createElement("div")
  cardEl.classList.add('card')

  const imgEl = document.createElement("img")
  imgEl.src = "./assets/img/officers/" + officer.image;
  imgEl.classList.add('card-img-top')

  const cardBodyEl = document.createElement("div")
  cardBodyEl.classList.add('card-body')

  const nameEl = document.createElement("h5")
  nameEl.textContent = officer.name

  const positionEl = document.createElement("h6")
  positionEl.textContent = officer.position


  cardBodyEl.appendChild(nameEl)
  cardBodyEl.appendChild(positionEl)
  cardEl.appendChild(imgEl);
  cardEl.appendChild(cardBodyEl)
  const officerEl = document.querySelector(".officer-section")

  officerEl.appendChild(cardEl)
}
(function () {
  "use strict";

  //populate officers
  officers.forEach(createOfficer);
  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function (e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function () {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()