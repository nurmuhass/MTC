export const filterData = [{name:"All",image:require('../assets/images/burger.jpg'),id:0},
                    {name:"Burgers",image:require("../assets/images/Bigmac.jpg"),id:1},
                    {name:"Salads",image:require("../assets/images/chinesefood.jpg"),id:2},
                    {name:"Hotdog",image:require("../assets/images/hotdog.jpg"),id:3},
                    {name:"Chinese",image:require("../assets/images/mexican.jpg"),id:4},
                    {name:"Mexican",image:require("../assets/images/mexicanpie.jpeg"),id:5},
                    {name:"Sea food",image:require("../assets/seafood.png"),id:6},
                    {name:"Fast food",image:require('../assets/images/burger.jpg'),id:7},
                ];




export const filterData2 = [{name:"Fast food",images: require("../assets/images/Romanpizza.jpg"), id:"0"},
{name:"Burgers",images: require("../assets/images/burger.jpg"),id:"1"},
{name:"Salads",images: require("../assets/images/salad.jpg"),id:"2"},
{name:"Hotdog",images:  require("../assets/images/hotdog.jpg"),id:"3"},
{name:"Chinese",images: require("../assets/images/chinesefood.jpg"),id:"4"},
{name:"Mexican",images: require("../assets/images/mexican.jpg"),id:"5"},  
{name:"Sea food",images: require("../assets/images/seafood.jpg"),id:"6"},
{name:"Chinese Food",images: require("../assets/images/chinesefood.jpg"),id:"7"},
{name:"Mexican pie",images: require("../assets/images/mexicanpie.jpeg"),id:"8"},  
{name:"Ocean dish",images: require("../assets/images/ocean.jpg"),id:"9"},
];

export const detailsSlider = [
  {
    id: 1,
    img: require('../assets/assets/watch7.jpeg'),
    title: 'Apple Watch Series 7',
    description: 'The future of health is on your wrist',
    price: '$399',

  },
  {
    id: 2,
    img: require('../assets/assets/airpod.jpeg'),
    title: 'AirPods Pro',
    description: 'Active noise cancellation for immersive sound',
    price: '$249',
  },
  {
    id: 3,
    img: require('../assets/assets/airpodmax.jpeg'),
    title: 'AirPods Max',
    description: 'Effortless AirPods experience',
    price: '$549',
  },
  {
    id: 4,
    img: require('../assets/assets/charger.png'),
    title: 'Charger',
    description: "It's not magic, it's just science",
    price: '$49',
  },
  {
    id: 5,
    img: require('../assets/assets/lock.jpeg'),
    title: 'Smart Lock',
    description: 'Unlock your door with your phone',
    price: '$199',
  },
];

const USERS = {
  1: {
    id: 1,
    username: 'Alexia Jane',
    avatar: require('../assets/images/32.jpeg'),
  },
  2: {
    id: 2,
    username: 'Jacky Depp',
    avatar: require('../assets/images/35.jpeg'),
  },
};



const REVIEWS = {
  1: {
    id: 1,
    date: '21 May, 2022',
    author: USERS[1],
    rating: 7,
    text: 'Lorem ipsum dolor sit amet. Iusto nihil et porro soluta ut labore nesciunt sed dolor nihil qui laudantium consequatur',
  },
  2: {
    id: 2,
    date: '14 July, 2021',
    author: USERS[2],
    rating: 9.1,
    text: 'Lorem ipsum dolor sit amet.',
  },
};


 export const restaurantsData = [
                  {restaurantName:"Mc Donalds", farAway:"21.2",
                  businessAddress:"22 Bessie street, Cape Town",images: require("../assets/images/McDonalds.jpg"),
                  averageReview:4.9,numberOfReview:272,coordinates : {lat: -26.1888612, lng: 28.246325} ,discount:10,deliveryTime:15,
                  collectTime:5, foodType:"Burgers, Wraps,Milkshakes..." ,
                  productData:[{name:"Hand cut chips", price:29.30,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"},
                  {name:"Big Mac", price:50.80,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png"},{name:"Chicken Burger",
                   price:70,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"},
                    ],
                  id:0},
                  
                  {restaurantName:"KFC", farAway:"12.7",businessAddress:"22 Bessie street, Cape Town",
                  images: require("../assets/images/kfc.jpg"),
                  averageReview:4.3, numberOfReview:306, coordinates : {lat: -26.1891648, lng: 28.2441808},
                  discount:20,deliveryTime:30,collectTime:10, foodType:"Chicken,Chicken wings... ",
                  productData:[{name:"Hand cut chips", price:29.30,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"},
                  {name:"Big Mac", price:50.80,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png"},
                  {name:"Chicken Burger", price:70,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"},
                      ],
                  id:1},
                  
                  {restaurantName:"Steers", farAway:"5",businessAddress:" 17 Olivia Rd, Johannesburg",
                  images: require("../assets/images/Steers.jpg"),
                   coordinates :{ lat: -26.1886781, lng: 28.244879}, averageReview: 4.9,numberOfReview: 1272,
                    discount:12, deliveryTime:25,collectTime:15,foodType:"Flame grilled beef Burgers",
                   productData:[{name:"Hand cut chips", price:29.30,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"},
                    {name:"Big Mac", price:50.80,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png"},{name:"Chicken Burger",
                     price:70,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"},
                      ],
                   id:2},
                  
                  {restaurantName:"Roman Pizza", farAway:"7",businessAddress:" 15 Atlas Rd, Kempton Park",
                  images:require("../assets/images/Romanpizza.jpg"),
                  averageReview:4.3, numberOfReview:700, coordinates: {lat: -26.1845336, lng: 28.2481691},
                  discount:null,deliveryTime:20,collectTime:10,foodType:"Chicken pizza, Vegetarian pizza...",
                  productData:[{name:"Hand cut chips", price:29.30,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"},
                    {name:"Big Mac", price:50.80,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png"},{name:"Chicken Burger",
                     price:70,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"},
                      ],
                  id:3},

                  {restaurantName:"Mc Donalds", farAway:"21.2",
                  businessAddress:"22 Bessie street, Cape Town",images: require("../assets/images/McDonalds.jpg"),
                  averageReview:4.9,numberOfReview:272,coordinates : {lat: -26.1888612, lng: 28.246325} ,discount:10,deliveryTime:15,
                  collectTime:5, foodType:"Burgers, Wraps,Milkshakes..." ,
                  productData:[{name:"Hand cut chips", price:29.30,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"},
                  {name:"Big Mac", price:50.80,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png"},{name:"Chicken Burger",
                   price:70,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"},
                    ],
                  id:4},
                  
                  {restaurantName:"KFC", farAway:"12.7",businessAddress:"22 Bessie street, Cape Town",
                  images: require("../assets/images/kfc.jpg"),
                  averageReview:4.3, numberOfReview:306, coordinates : {lat: -26.1891648, lng: 28.2441808},
                  discount:20,deliveryTime:30,collectTime:10, foodType:"Chicken,Chicken wings... ",
                  productData:[{name:"Hand cut chips", price:29.30,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"},
                  {name:"Big Mac", price:50.80,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png"},
                  {name:"Chicken Burger", price:70,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"},
                      ],
                  id:5},
                  
                  {restaurantName:"Steers", farAway:"5",businessAddress:" 17 Olivia Rd, Johannesburg",
                  images: require("../assets/images/Steers.jpg"),
                   coordinates :{ lat: -26.1886781, lng: 28.244879}, averageReview: 4.9,numberOfReview: 1272,
                    discount:12, deliveryTime:25,collectTime:15,foodType:"Flame grilled beef Burgers",
                   productData:[{name:"Hand cut chips", price:29.30,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"},
                    {name:"Big Mac", price:50.80,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png"},{name:"Chicken Burger",
                     price:70,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"},
                      ],
                   id:6},
                  
                  {restaurantName:"Roman Pizza", farAway:"7",businessAddress:" 15 Atlas Rd, Kempton Park",
                  images:require("../assets/images/Romanpizza.jpg"),
                  averageReview:4.3, numberOfReview:700, coordinates: {lat: -26.1845336, lng: 28.2481691},
                  discount:null,deliveryTime:20,collectTime:10,foodType:"Chicken pizza, Vegetarian pizza...",
                  productData:[{name:"Hand cut chips", price:29.30,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"},
                    {name:"Big Mac", price:50.80,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png"},{name:"Chicken Burger",
                     price:70,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"},
                      ],
                  id:7},
                  ]
    


              export const productData = [{name:"Hand cut chips", price:29.30,image: require("../assets/images/Hand cut chips.jpg"),
              details:"Two 100% fresh beef burger patties that are hot,deliciously",id:0},
                {name:"Big Mac", price:50.80,image:require("../assets/images/Hand cut chips.jpg"),
                details:"McFeast features two 100% fresh beef burger patties that are hot",id:1},
                {name:"Chicken Burger", price:70,image:require("../assets/images/burger.jpg"),details:"",id:2},
                
                {name:"Hand cut chips", price:29.30,image:require("../assets/images/Hand cut chips.jpg"),
                details:"Two 100% fresh beef burger patties that are hot,deliciously",id:3},
                {name:"Big Mac", price:70.20,image:require("../assets/images/Bigmac.jpg"),
                details:"McFeast features two 100% fresh beef burger patties that are hot",id:4},
                {name:"Chicken Burger", price:70,image:require("../assets/images/burger.jpg"),details:"",id:5},
              
                  ];   
                  
                  
          export const menuData = [
    
            {title:"BEEF",special:false,key:0, },
            {title:"CHICKEN", special:false,key:1},
            {title:"VEGGIE BURGER",special:false ,key:2},
            {title:"FRIES& CORN",special:false ,key:3},
            {title:"SALADS",special:false,key:4},
            {title:"HAPPY MEALS",special:false,key:5},
            {title:"SAHRE BOX",special:false,key:6},
            {title:"MILKSHAKES",special:false,key:7},
            {title:"COLD DRINKS",special:false,key:8},
            {title:"DESSERTS",special:false,key:9},
            {title:"HOT DRINKS",special:false,key:10},
          
            ] ;
          
          export const specialData =[
            {title:"LIMITED OFFER",key:0},
            {title:"GO CHILLI",key:1},
            {title:"GO CHEESE",key:2},
            {title:"MCCHICKEN DELUXE PROMO",key:3},
          ];    
          
          export const menu = [
            { key: 1, title: 'BEEF' },
            { key: 2, title: 'CHICKEN' },
            { key: 3, title: 'VEGGIE BURGER' },
            { key: 4, title: 'SHARE BOX' },
            { key: 5, title: 'Happy Meals' },
            { key: 6, title: 'Fries' },
            { key: 7, title: 'Sides' },
            { key: 8, title: 'Milkshakes' },
          ] 


          export const menuDetailedData =[
            { 
              meal:"Big Mac",
              price:70.20,
              image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate1.png",
              details:"McFeast features two 100% fresh beef burger patties that are hot",
              preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
              preferenceData: [
        
                              [{name:"Jalapeno Dip",price:8.91,checked:false,id:10},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:11},{name:'BBQ Dip',price:11.99 ,checked:false,id:12},
                              ],
        
                              [{name:"Small Coke",price:8.90 ,checked:false,id:13 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:14},{name:'Small Sprite',price:11.90,checked:false ,id:15},
                              {name:'Small Coke Zero',price:3.95 ,checked:false,id:16},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:17},{name:'Small Apple Juice',price:10.95 ,checked:false,id:18},
                              {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:19},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:20},
                              ],
        
                              [{name:"Small Coke",price:8.90,checked:false ,id:21},{name:"Small Fanta Orange",price:8.90,checked:false ,id:22},{name:'Small Sprite',price:11.90,checked:false ,id:23},
                              {name:'Small Coke Zero',price:3.95 ,checked:false,id:24},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:25},{name:'Small Apple Juice',price:10.95,checked:false ,id:26},
                              {name:'Small Strawberry Shake',price:16.95,checked:false ,id:27},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:28},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:29},
                                ],
                                  
                              [{name:"debonairs sauce",price:8.90 ,checked:false,id:30},{name:"BBQ Sauce",price:8.90,checked:false ,id:31},{name:'Tikka Sauce',price:11.90,checked:false ,id:32},
                              ],
        
                              [
                              {name:"Small Coke",price:8.90 ,checked:false,id:33},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:34},{name:'Small Sprite',price:11.90 ,checked:false,id:35},
                              {name:'Small Coke Zero',price:3.95 ,checked:false,id:36},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:37},{name:'Small Apple Juice',price:10.95 ,checked:false,id:38},
                              {name:'Small Strawberry Shake',price:16.95,checked:false ,id:39},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:40},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:41},
                              ],
                              ],
              minimum_quatity:[2,1,1,null,null],
              counter:[0,0,0,0,0],
              required: [true,true,true,false,false],              
              id:0
            },
          
            { 
              meal:"Hand cut chips", 
              price:29.30,
              image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png",
              details:"Two 100% fresh beef burger patties that are hot,deliciously",
              preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
              preferenceData: [
        
                [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
                ],
        
                [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
                {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
                ],
        
                [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
                {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
                  ],
                    
                [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
                ],
        
                [
                {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
                {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
                ],
                ],
                minimum_quatity:[2,1,2,null,null],
                counter:[0,0,0,0,0],
                required: [true,true,true,false,false], 
                id:1
            },
          
            {
              meal:"Chicken Burger",
              price:45.70,
              image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png",
              details:"",
              preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
              preferenceData: [
        
                [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
                ],
        
                [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
                {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
                ],
        
                [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
                {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
                  ],
                    
                [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
                ],
        
                [
                {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
                {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
                ],
                ],
        
                minimum_quatity:[2,1,1,null,null],
                counter:[0,0,0,0,0],
                required: [true,true,true,false,false],   
              id:2
            },
          
            {
              meal:"Big Mac",
              price:50.80,
              image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png",
              details:"McFeast features two 100% fresh beef burger patties that are hot",
              preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
              preferenceData: [
        
                [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
                ],
        
                [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
                {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
                ],
        
                [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
                {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
                  ],
                    
                [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
                ],
        
                [
                {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
                {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
                ],
                ],
              
                minimum_quatity:[2,1,1,null,null],
                counter:[0,0,0,0,0],
                required: [true,true,true,false,false],    
              id:3
            },
          
            
            { 
              
              meal:"Hand cut chips", 
              price:29.30,
              image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png",
              details:"Two 100% fresh beef burger patties that are hot,deliciously",
              
              preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
              
              preferenceData: [
        
                [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
                ],
        
                [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
                {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
                ],
        
                [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
                {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
                  ],
                    
                [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
                ],
        
                [
                {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
                {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
                ],
                ],
        
              minimum_quatity:[2,1,1,null,null],
              counter:[0,0,0,0,0],
              required: [true,true,true,false,false],     
              id:4
            },
        
            { 
              meal:"Big Mac",
              price:70.20,
              image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate1.png",
              details:"McFeast features two 100% fresh beef burger patties that are hot",
              preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
              preferenceData: [
        
                              [{name:"Jalapeno Dip",price:8.91,checked:false,id:10},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:11},{name:'BBQ Dip',price:11.99 ,checked:false,id:12},
                              ],
        
                              [{name:"Small Coke",price:8.90 ,checked:false,id:13 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:14},{name:'Small Sprite',price:11.90,checked:false ,id:15},
                              {name:'Small Coke Zero',price:3.95 ,checked:false,id:16},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:17},{name:'Small Apple Juice',price:10.95 ,checked:false,id:18},
                              {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:19},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:20},
                              ],
        
                              [{name:"Small Coke",price:8.90,checked:false ,id:21},{name:"Small Fanta Orange",price:8.90,checked:false ,id:22},{name:'Small Sprite',price:11.90,checked:false ,id:23},
                              {name:'Small Coke Zero',price:3.95 ,checked:false,id:24},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:25},{name:'Small Apple Juice',price:10.95,checked:false ,id:26},
                              {name:'Small Strawberry Shake',price:16.95,checked:false ,id:27},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:28},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:29},
                                ],
                                  
                              [{name:"debonairs sauce",price:8.90 ,checked:false,id:30},{name:"BBQ Sauce",price:8.90,checked:false ,id:31},{name:'Tikka Sauce',price:11.90,checked:false ,id:32},
                              ],
        
                              [
                              {name:"Small Coke",price:8.90 ,checked:false,id:33},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:34},{name:'Small Sprite',price:11.90 ,checked:false,id:35},
                              {name:'Small Coke Zero',price:3.95 ,checked:false,id:36},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:37},{name:'Small Apple Juice',price:10.95 ,checked:false,id:38},
                              {name:'Small Strawberry Shake',price:16.95,checked:false ,id:39},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:40},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:41},
                              ],
                              ],
              minimum_quatity:[2,1,1,null,null],
              counter:[0,0,0,0,0],
              required: [true,true,true,false,false],              
              id:5
            },
          
          ];
           

          export const chatRoomsData = [{
            id: '1',
            users: [{
              id: 'u1',
              name: 'Elon Musk',
              imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
            }, {
              id: 'u2',
              name: 'Nuradden ',
              imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
            }],
            lastMessage: {
              id: 'm1',
              content: 'btw, SpaceX is interested in buying Mtceey!',
              createdAt: '2020-10-03T14:48:00.000Z',
            },
            newMessages:4,
          }, {
            id: '2',
            users: [{
              id: 'u1',
              name: 'Vadim',
              imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
            }, {
              id: 'u3',
              name: 'Jeff',
              imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg',
            }],
            lastMessage: {
              id: 'm2',
              content: 'Why did you reject our offer?',
              createdAt: '2020-10-02T15:40:00.000Z',
            }
          }, {
            id: '3',
            users: [{
              id: 'u1',
              name: 'Vadim',
              imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
            }, {
              id: 'u4',
              name: 'Zuck',
              imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg',
            }],
            lastMessage: {
              id: 'm3',
              content: 'Is signal really better than my Whatsapp?',
              createdAt: '2020-10-02T14:48:00.000Z',
            }
          }, {
            id: '4',
            users: [{
              id: 'u1',
              name: 'Vadim',
              imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
            }, {
              id: 'u5',
              name: 'Graham',
              imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/graham.jpg',
            }],
            lastMessage: {
              id: 'm4',
              content: 'Destroy the like button!',
              createdAt: '2020-09-29T14:48:00.000Z',
            }
          }, {
            id: '5',
            users: [{
              id: 'u1',
              name: 'Vadim',
              imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
            }, {
              id: 'u6',
              name: 'Biahaze',
              imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/biahaze.jpg',
            }],
            lastMessage: {
              id: 'm5',
              content: 'I would be happy',
              createdAt: '2020-09-30T14:48:00.000Z',
            }
          }, {
            id: '6',
            users: [{
              id: 'u1',
              name: 'Vadim',
              imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
            }, {
              id: 'u7',
              name: 'Sus?',
              imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
            }],
            lastMessage: {
              id: 'm6',
              content: 'Who sus?',
              createdAt: '2020-10-02T15:40:00.000Z',
            }
          }, {
            id: '7',
            users: [{
              id: 'u1',
              name: 'Vadim',
              imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
            }, {
              id: 'u8',
              name: 'Daniel',
              imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
            }],
            lastMessage: {
              id: 'm7',
              content: 'How are you doing?',
              createdAt: '2020-10-02T15:40:00.000Z',
            }
          }, {
            id: '8',
            users: [{
              id: 'u1',
              name: 'Vadim',
              imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
            }, {
              id: 'u9',
              name: 'Carlos',
              imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.jpg',
            }],
            lastMessage: {
              id: 'm8',
              content: 'Hola hola coca cola?',
              createdAt: '2020-09-27T15:40:00.000Z',
            }
          }, {
            id: '9',
            users: [{
              id: 'u1',
              name: 'Vadim',
              imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
            }, {
              id: 'u10',
              name: 'Angelina Jolie',
              imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/4.jpg',
            }],
            lastMessage: {
              id: 'm9',
              content: 'Meet me at the same place',
              createdAt: '2020-09-25T15:40:00.000Z',
            },
          }]
          