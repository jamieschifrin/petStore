var shop =[
   
    {
        title: "BLUE TANG",
        image: "./assets/images/pet store/StoreImages/1.jpg",
        price: 29.99,
        description: "A wonderful fish looking for a new home! "
    },
    {
        title: "LION FISH",
        image: "./assets/images/pet store/StoreImages/2.jpg",
        price: 119.99,
        description: "A wonderful fish looking for a new home! Take me Home today!"
    },
    {
        title: "BLUE JELLY",
        image: "./assets/images/pet store/StoreImages/3.JPG",
        price: 99.99,
        description: "A wonderful fish looking for a new home! Take me Home today!"
    },
    {
        title: "YELLOW TANG",
        image: "./assets/images/pet store/StoreImages/4.JPG",
        price: 49.99,
        description: "A wonderful fish looking for a new home! Take me Home today!"
    },
    {
        title: "SEA HORSE",
        image: "./assets/images/pet store/StoreImages/5.JPG",
        price: 59.99,
        description: "A wonderful fish looking for a new home! Take me Home today!"
    },
    {
        title: "BETTA",
        image: "./assets/images/pet store/StoreImages/6.jpg",
        price: 11.99,
        description: "A wonderful fish looking for a new home! Take me Home today!"
    },
    {
        title: "'BLUE STEEL'",
        image: "./assets/images/pet store/StoreImages/7.jpg",
        price: 399.99,
        description: "Lock up your daughters ! Lock up your sons ! <br> Adam's comin' to town & lookin' for fun..."
    },
    {
        title: "SEA TURTLE",
        image: "./assets/images/pet store/StoreImages/8.jpg",
        price: 56.99,
        description: "A wonderful bird looking for a new home!"
    },
    {
        title: "BLUE PARROT",
        image: "./assets/images/pet store/StoreImages/9.jpg",
        price: 399.99,
        description: "A wonderful bird looking for a new home!"
    },
    {
        title: "CHINCHILLA",
        image: "./assets/images/pet store/StoreImages/10.jpg",
        price: 149.99,
        description: "A wonderful friend looking for a new home!"
    },
    {
        title: "FENNEC FOX",
        image: "./assets/images/pet store/StoreImages/11.jpg",
        price: 329.99,
        description: "A wonderful Fox looking for a new home!"
    },
    {
        title: "FERRET",
        image: "./assets/images/pet store/StoreImages/12.jpg",
        price: 299.99,
        description: "A wonderful Ferret looking for a new home!"
    },
    {
        title: "BULLFROG",
        image: "./assets/images/pet store/StoreImages/14.jpg",
        price: 79.99,
        description: "A wonderful Frog looking for a new home!"
    },
    {
        title: "BILLY GOAT",
        image: "./assets/images/pet store/StoreImages/15.jpg",
        price: 79.99,
        description: "A wonderful Goat looking for a new home!"
    },
    {
        title: "GREY OWL",
        image: "./assets/images/pet store/StoreImages/16.jpg",
        price: 499.99,
        description: "A wonderful Owl looking for a new home!"
    },
    {
        title: "SPOTTED IGUANA",
        image: "./assets/images/pet store/StoreImages/17.jpg",
        price: 79.99,
        description: "A wonderful Iguana looking for a new home!"
    },
    {
        title: "GECCO",
        image: "./assets/images/pet store/StoreImages/18.jpg",
        price: 79.99,
        description: "A wonderful Gecco looking for a new home!"
    },
    {
        title: "LLAMA",
        image: "./assets/images/pet store/StoreImages/19.jpg",
        price: 379.99,
        description: "A wonderful llama looking for a new home!"
    },
    {
        title: "MASTER IGUANA",
        image: "./assets/images/pet store/StoreImages/20.jpg",
        price: 149.99,
        description: "A wonderful Iguana looking for a new home!"
    },
    {
        title: "PURE SIAMESE",
        image: "./assets/images/pet store/StoreImages/21.jpg",
        price: 499.99,
        description: "A wonderful Cat Frog looking for a new home!"
    },
    {
        title: "Sugar Glider",
        image: "./assets/images/pet store/StoreImages/22.jpg",
        price: 99.99,
        description: "A wonderful Sugar Glider looking for a new home!"
    },
    {
        title: "TARANTULA",
        image: "./assets/images/pet store/StoreImages/23.jpg",
        price: 79.99,
        description: "A wonderful Spider looking for a new home!"
    },
    {
        title: "SILVER SNAKE",
        image: "./assets/images/pet store/StoreImages/24.jpg",
        price: 240.99,
        description: "A wonderful Snake looking for a new home!"
    },
    {
        title: "TOOCAN",
        image: "./assets/images/pet store/StoreImages/25.jpg",
        price: 399.99,
        description: "A wonderful Frog looking for a new home!"
    },
    {
        title: "RED TAILED HAWK",
        image: "./assets/images/pet store/StoreImages/26.jpg",
        price: 289.99,
        description: "A wonderful Hawk looking for a new home!"
    },
    {
        title: "FALCON",
        image: "./assets/images/pet store/StoreImages/27.jpg",
        price: 299.99,
        description: "A wonderful Hawk looking for a new home!"
    },
]

var postHTML = " "
for (var i=0; i < shop.length; i++){
    var heading = '<div class="product"><span><h5>' + shop[i].title + '</h5>'
    var image = '<img src="' + shop[i].image + '"/'
    var price = '<p> $' + shop[i].price + '</p></span>'
    var description = '<div class="hoverProduct"><p>'+ shop[i].description + '</p><button type="button" class="btn"> ADD TO CART</button></div></div>'
    var concatThis = heading + image + price + description
    postHTML = postHTML + concatThis
}
document.getElementById('market').innerHTML = postHTML
//<div class="product pet dog" id="puppyOne">
//<span>
  //<h5>Puppy One</h5>
  //<img src="./assets/puppyOne.png"/>
  //<p>$299.99</p>
//</span>
{/* <div class="hoverProduct">
  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, fugiat!</p>
  <button type="button" class="btn btn-warning">add to cart</button>
</div>
</div> */}