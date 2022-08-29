// loading kodları
window.addEventListener('load', fg_load)
function fg_load(){
  document.getElementById('loading').style.display = 'none'
}
// loading bitiş

$('.opener').on('click', function(){
  var parent = $(this).parent().closest('.my_service_list');
  $('.my_service_list').not(parent).removeClass('open');
  parent.toggleClass('open');
});

function openExpert(my_expert) {
  var i;
  var x = document.getElementsByClassName("myexpert");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(my_expert).style.display = "block";
}

function toggleMobileMenu(menu){
  menu.classList.toggle('open');
}

function gizleGoster(yeteneklerim) {
  var yeteneklerim = document.getElementById(yeteneklerim);
  if (yeteneklerim.style.display == "none") {
    yeteneklerim.style.display = "";
  } else {
    yeteneklerim.style.display = "none";
  }
}
var swiper = new Swiper(".projects", {

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    500: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    2000: {
      slidesPerView: 4,
      spaceBetween: 30,
    }
  },
});

// scrolltotop butonu kodları başlangıç
window.addEventListener('scroll', function(){
  var scroll = document.querySelector('.scrollTop');
  scroll.classList.toggle("active" , window.scrollY > 200)
})
function scrollTop(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
// scrolltotop butonu kodları bitiş

// Tanıtım yazısı BABEL başlangıç
const resolver = {
  resolve: function resolve(options, callback) {
    // The string to resolve
    const resolveString = options.resolveString || options.element.getAttribute('data-target-resolver');
    const combinedOptions = Object.assign({}, options, {resolveString: resolveString});

    function getRandomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    function randomCharacter(characters) {
      return characters[getRandomInteger(0, characters.length - 1)];
    };

    function doRandomiserEffect(options, callback) {
      const characters = options.characters;
      const timeout = options.timeout;
      const element = options.element;
      const partialString = options.partialString;

      let iterations = options.iterations;

      setTimeout(() => {
        if (iterations >= 0) {
          const nextOptions = Object.assign({}, options, {iterations: iterations - 1});

          // Ensures partialString without the random character as the final state.
          if (iterations === 0) {
            element.textContent = partialString;
          } else {
            // Replaces the last character of partialString with a random character
            element.textContent = partialString.substring(0, partialString.length - 1) + randomCharacter(characters);
          }

          doRandomiserEffect(nextOptions, callback)
        } else if (typeof callback === "function") {
          callback();
        }
      }, options.timeout);
    };

    function doResolverEffect(options, callback) {
      const resolveString = options.resolveString;
      const characters = options.characters;
      const offset = options.offset;
      const partialString = resolveString.substring(0, offset);
      const combinedOptions = Object.assign({}, options, {partialString: partialString});

      doRandomiserEffect(combinedOptions, () => {
        const nextOptions = Object.assign({}, options, {offset: offset + 1});

        if (offset <= resolveString.length) {
          doResolverEffect(nextOptions, callback);
        } else if (typeof callback === "function") {
          callback();
        }
      });
    };

    doResolverEffect(combinedOptions, callback);
  }
}

const strings = [
  '\Merhaba, Ben Muhammet Nur Akıncı.',
  'Yazılım dünyasına girişimi beraber kutlamak için sabırsızlanıyorum!',
  'Projelerimde genelde HTML5, CSS3, JAVASCRIPT ve BOOTSTRAP kullanıyorum.',
  'Her gün yeni birşey öğrenmek için çabalıyorum.',
  'Umarım bu sektörde ve diğer her yerde iz bırakanlardan olabilirim.',
  'Aşağıya kaydırarak Websitemde dolaşın ve daha çok tanıyın.',
  'Teşekkür ederim...'
];

let counter = 0;

const options = {
  // Initial position
  offset: 0,
  // Timeout between each random character
  timeout: 5,
  // Number of random characters to show
  iterations: 10,
  // Random characters to pick from
  characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='],
  // String to resolve
  resolveString: strings[counter],
  // The element
  element: document.querySelector('[data-target-resolver]')
}

// Callback function when resolve completes
function callback() {
  setTimeout(() => {
    counter ++;

    if (counter >= strings.length) {
      counter = 0;
    }

    let nextOptions = Object.assign({}, options, {resolveString: strings[counter]});
    resolver.resolve(nextOptions, callback);
  }, 1000);
}

resolver.resolve(options, callback);
// Tanıtım yazısı BABEL bitiş
