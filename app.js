const wrapper=document.querySelector(".sliderWrapper")
const menuItems=document.querySelectorAll(".menuItem")
const products = [
    {
      id: 1,
      title: "Japanese Maple",
      price: 119,
      colors: [
        {
          code: "option1",
          img:"./img/maple1.jpg",
        },
        {
          code: "option2",
          img: "./img/bonsai-species-maple-R2C-3424of.jpg",
        },
      ],
    },
    {
      id: 2,
      title: "Chinese Elm",
      price: 300,
      colors: [
        {
          code: "Chinese Elm",
          img: "./img/bonsai-species-ulmus-chinese-elm-IMG-4385.jpg",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Fukien Tea",
      price: 499,
      colors: [
        {
          code: "lightgray",
          img: "./img/bonsai-species-carmona.jpg",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Cherry",
      price: 599,
      colors: [
        {
          code: "black",
          img: "./img/bonsai-species-cherry-prunus-subhirtella-bonsai-gakusei.jpg",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Pines",
      price: 399,
      colors: [
        {
          code: "gray",
          img: "./img/bonsai-species-pine-crespi-3784.jpg",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];
  let choosenProduct = products[0] 

  const currentPructImg=document.querySelector(".productImg");
  const currentPructTitle=document.querySelector(".productTitle");
  const currentPructPrice=document.querySelector(".productPrice");
  const currentPructColors=document.querySelectorAll(".color");
  const currentPructSizes=document.querySelectorAll(".size");


menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=> {
        //change the current slide
        wrapper.style.transform=`translateX(${-100*index}vw)`;
        //change the choosenprodduct
        choosenProduct=products[index]

        currentPructTitle.textContent=choosenProduct.title;
        currentPructPrice.textContent= choosenProduct.price;
        currentPructImg.src=choosenProduct.colors[0].img


    });
});

const productButton=document.querySelector(".productbutton");
const payment=document.querySelector(".payment");
const close=document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
})
close.addEventListener("click",()=>{

    payment.style.display="none"
})