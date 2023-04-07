let movies = [
    {
      name: "falcon and the winter soldier",
      des:
        "The Falcon and the Winter Soldier[a] is an American television miniseries created by Malcolm Spellman for the streaming service Disney+, based on Marvel Comics featuring the characters Sam Wilson / Falcon and Bucky Barnes / Winter Soldier.",
      image: "images/slider 2.PNG"
    },
    {
      name: "loki",
      des:
        "Loki is an American television series created by Michael Waldron for the streaming service Disney+, based on Marvel Comics featuring the character of the same name. It is the third television series in the Marvel Cinematic Universe (MCU) produced by Marvel Studios",
      image: "images/slider 1.PNG"
    },
    {
      name: "wanda vision",
      des:
        "WandaVision is an American television miniseries created by Jac Schaeffer for the streaming service Disney+, based on Marvel Comics featuring the characters Wanda Maximoff / Scarlet Witch and Vision",
      image: "images/slider 3.PNG"
    },
    {
      name: "raya and the last dragon",
      des:
        "Raya and the Last Dragon (/ˈraɪ.ə/ RYE-ə) is a 2021 American computer-animated fantasy action-adventure film produced by Walt Disney Animation Studios and distributed by Walt Disney Studios Motion Pictures. The 59th film produced by the studio,",
      image: "images/slider 4.PNG"
    },
    {
      name: "luca",
      des:
        "Luca is a 2021 American computer-animated coming-of-age fantasy film produced by Pixar Animation Studios for Walt Disney Pictures. The film was directed by Enrico Casarosa (in his feature directorial debut), produced by Andrea Warren and written by Jesse Andrews",
      image: "images/slider 5.PNG"
    }
  ];
  const carousel=document.querySelector('.carousel');
  let sliders=[];

  let slideIndex=0; //track the current slide

  const createSlide = () => {  //short form to create function
    if(slideIndex>=movies.length){
        slideIndex=0;
    }
   let slide=document.createElement("div");
   var imgElement=document.createElement("img");
   let content=document.createElement("div");
   let h1=document.createElement("h1");
   let p=document.createElement("p");
  

  //attaching all elemnts

  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des))
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);
  //setting up images
  imgElement.src=movies[slideIndex].image;
  slideIndex++;

  //setting element classnames

  slide.className= "slider";
  content.className= "slide-content";
  h1.className= "movie-title";
  p.className="movie-des";
  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }

  };
 
  for(let i=0; i<3;i++){
    createSlide();
  }

  setInterval(() => {
    createSlide();
  }, 3000);


  //video cards
  //In the below code, the "..." symbol is used as the spread operator, which is a feature in JavaScript that allows an iterable (e.g. an array or string) to be expanded into individual elements.
 const videoCards= [...document.querySelectorAll(".video-card")];

 videoCards.forEach((item) => {
  item.addEventListener("mouseover",() => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave",()=>{
    let video=item.children[1];
    video.pause();
  });
 });


 //card sliders
 //let array1 = ['h', 'e', 'l', 'l', 'o'];
//let array2 = [...array1];
//console.log(array2);
//['h', 'e', 'l', 'l', 'o'] // output

 let cardContainers= [...document.querySelectorAll(".card-container")];
 
 let preBtns= [...document.querySelectorAll(".pre-btn")];
 let nxtBtns= [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item,i)=>{
  let containerDimensions = item.getBoundingClientRect();
  //Return the size of an element and its position relative to the viewport:
 //The getBoundingClientRect() method returns a DOMRect object with eight properties: left, top, right, bottom, x, y, width, height.
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click",()=>{
    item.scrollLeft += containerWidth + 200;
  });
  preBtns[i].addEventListener("click", ()=>{
    item.scrollLeft-= containerWidth + 200;
  });


});




