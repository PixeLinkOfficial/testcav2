import {cart,removeFun,incFun,deccFun ,savetolocals} from "./cart.js";

//2
let dataCart=[
    {
        id:1,
        name: 'Coffee',
        price: 4000
    },
    {
        id:2,
        name:'Espresso',
        price:3000
    },
    {
        id:3,
        name: 'Double Espresso',
        price:4000
    },
    {
        id:4,
        name: 'Americano',
        price:4000
    },
    {
        id:5,
        name: 'Cappuccino',
        price:4000
    },
    {
        id:6,
        name: 'Cafe Latte',
        price:4000
    },
    {
        id:7,
        name: 'Hot Chocolate',
        price:4000
    },
    {
        id:8,
        name: 'Turkish Cafe',
        price:3000
    },
    {
        id:9,
        name: 'Sahleb',
        price:5000
    },
    {
        id:10,
        name: 'Hot Lemonad',
        price:5000
    },
    {
        id:11,
        name: 'Irish Caramel Latte',
        price:5000
        
    },
    {
        id:12,
        name: 'Butterscotch Vanilla Latte',
        price:5000
    },
    {
        id:13,
        name: 'Browne Toffenut Latte',
        price: 5000
    },
    {
        id:14,
        name:'Milk',
        price:2000
    },
    {
        id:15,
        name: 'Matcha coffee',
        price:7000
    },
    {
        id:16,
        name: 'Nescafe',
        price:3000
    },
    {
        id:17,
        name: 'Tea',
        price:1000
    },
    {
        id:18,
        name: 'Nescafe with milk',
        price:4000
    },
    {
        id:19,
        name: 'Coffee Kazan',
        price:4000
    },
    {
        id:20,
        name: 'Hot Chocolate Italian',
        price:5000
    },
    {
        id:21,
        name: 'Hazellnute',
        price:5000
    },
    {
        id:22,
        name: 'Ice Café Latte',
        price:4000
    },
    {
        id:23,
        name: 'Ice Mocha',
        price:5000
    },
    {
        id:24,
        name: 'Ice Irish Caramel Latte',
        price:5000
    },
    {
        id:25,
        name: 'Ice Buitturscotch Vanilla Latte',
        price:5000
    },
    {
        id:26,
        name: 'Ice Brownie Toffenut Cafe',
        price:5000
    },
    {
        id:27,
        name: 'Ice Chocolate Mint Latte',
        price: 5000
    },
    {
        id:28,
        name: 'Matcha Ice',
        price:7000
    },
    {
        id:29,
        name: 'Ice Spanish Latte',
        price:5000
    },
    {
        id:30,
        name: 'Caramel Ice',
        price:5000
    },
    {
        id:31,
        name: 'Ice Brownie Cafe',
        price:5000
    },
    {
        id:32,
        name: 'Brownie espresso shake',
        price:4000
    },
    {
        id:33,
        name: 'Butterscotch espresso shake',
        price:4000
    },
    {
        id:34,
        name: 'Caramel espresso shake',
        price:4000
    },
    {
        id:35,
        name: 'Sahleb espresso shake',
        price:5000
    },
    {
        id:36,
        name: 'Lemonade espresso shake',
        price:5000
    },
    {
        id:37,
        name:'Coffee',
        price:4000
    },
    {
        id:38,
        name:'Caramel Coffee',
        price:6000
    },
    {
        id:39,
        name:'Vanilla Coffee',
        price:5000
    },
    {
        id:40,
        name:'Hazelnut Coffee',
        price:5000
    },
    {
        id:41,
        name:'ButterScotch Coffee',
        price:6000
    },
    {
        id:42,
        name:'Irish Toffenut Coffee',
        price:5000
    },
    {
        id:43,
        name:'Caramel Vanilla Coffee',
        price:6000
    },
    {
        id:44,
        name:'Chocolate Mint Coffee',
        price:6000
    },
    {
        id:45,
        name:'Brownie ButterScotch Coffee',
        price:6000
    },
    {
        id:46,
        name:'Oreo Coffe',
        price:6000
    },
    {
        id:47,
        name:'Frappe Caramel Coffee',
        price:6000
    },
    {
        id:48,
        name:'Strawberry Milkshake',
        price:5000
    },
    {
        id:49,
        name:'Banana Milkshake',
        price:5000
    },
    {
        id:50,
        name:'Caramel Milkshake',
        price:5000
    },
    {
        id:51,
        name:'Vanilla Milkshake',
        price:5000
    },
    {
        id:52,
        name:'Nutella Milkshake',
        price:5000
    },
    {
        id:53,
        name:'Lotus Milkshake',
        price:6000
    },
    {
        id:54,
        name:'Oreo Milkshake',
        price:6000
    },
    {
        id:55,
        name:'Starwberry Banana Milkshake',
        price:6000
    },
    {
        id:56,
        name:'Starwberry smoothie',
        price:5000
    },
    {
        id:57,
        name:'Mango smoothie',
        price:6500
    },
    {
        id:58,
        name:'Pineapple smoothie',
        price:5000
    },
    {
        id:59,
        name:'Berries Pomogranate smoothie',
        price:5000
    },
    {
        id:60,
        name:'Kiwi Greenapple smoothie',
        price:5000
    },
    {
        id:61,
        name:'Arpicot dolers smoothie',
        price:5000
    },
    {
        id:62,
        name:'Gummy Jabuticaba smoothie',
        price:5000
    },
    {
        id:63,
        name:'Raspberry cherr smoothie',
        price:5000
    },
    {
        id:64,
        name:'Tropica smoothie',
        price:5000
    },
    {
        id:65,
        name:'Regular Mohito',
        price:5000
    },
    {
        id:66,
        name:'Strawberry Mohito',
        price:5000
    },
    {
        id:67,
        name:'Blue Pineapple mohito',
        price:5000
    },
    {
        id:68,
        name:'Mango mohito',
        price:6500
    },
    {
        id:69,
        name:'Blue Bubble gum mohito',
        price:5000
    },
    {
        id:70,
        name:'Peach Jabuticaba mohito',
        price:5000
    },
    {
        id:71,
        name:'Arricot Peach mohito',
        price:5000
    },
    {
        id:72,
        name:'Kiwi Greenapple mohito',
        price:5000
    },
    {
        id:73,
        name:'Strawberry Mango mohito',
        price:6500
    },
    {
        id:74,
        name:'Tropica mohito',
        price:5000
    },
    {
        id:75,
        name:'Raspberry cherry mohito',
        price:5000
    },
    {
        id:76,
        name:'Lemon ice tea',
        price:4000
    },
    {
        id:77,
        name:'Peach ice tea',
        price:4000
    },
    {
        id:78,
        name:'Raspberry ice tea',
        price:4000
    },
    {
        id:79,
        name:'Lemon raspberry ice tea',
        price:4000
    },
    {
        id:80,
        name:'Tropica ice tea',
        price:4000
    },
    {
        id:81,
        name:'Peach passion ice tea',
        price:4000
    },
    {
        id:82,
        name:'Raspberry cherry ice tea',
        price:4000
    },
    {
        id:83,
        name:'Strawberry ice tea',
        price:4000
    },
    {
        id:84,
        name:'Mango ice tea',
        price:4000
    },
    {
        id:85,
        name:'Gummy jabuticaba ice tea',
        price:4000
    },
    {
        id:86,
        name:'Strawberry energy',
        price:5000
    },
    {
        id:87,
        name:'Peach curacao energy',
        price:5000
    },
    {
        id:88,
        name:'Bubblegum energy',
        price:5000
    },
    {
        id:89,
        name:'Yozerena energy',
        price:6000
    },
    {
        id:90,
        name:'Mango strawberry energy',
        price:6000
    },
    {
        id:91,
        name:'Blueberry pomogranate energy',
        price:6000
    },
    {
        id:92,
        name:'White tiger energy',
        price:2000
    },
    {
        id:93,
        name:'White tiger Mexican',
        price:3000
    },
    {
        id:94,
        name:'Redbull energy',
        price:3000
    },
    {
        id:95,
        name:'Cheese cake',
        price:6500
    },
    {
        id:96,
        name:'Tiramisu',
        price:6000
    },
    {
        id:97,
        name:'Tralich cake',
        price:6000
    },
    {
        id:98,
        name:'Brownie cake',
        price:6500
    },
    {
        id:99,
        name:'Red veivet cake',
        price:6000
    },
    {
        id:100,
        name:'San sebastian cake',
        price:6500
    },
    {
        id:101,
        name:'Pistacho cake',
        price:6000
    },
    {
        id:102,
        name:'Oreo cake',
        price:6000
    },
    {
        id:103,
        name:'lotus cake',
        price:5000
    },
    {
        id:104,
        name:'Chocolate cake',
        price:5000
    },
    {
        id:105,
        name:'Lotus vuittion cake',
        price:7000
    },
    {
        id:106,
        name:'Cleer cake',
        price:5000
    },
    {
        id:107,
        name:'Ice cream biscuit cps',
        price:6000
    },
    {
        id:108,
        name:'Nutella biscuit cps',
        price:6000
    },
    {
        id:109,
        name:'Fruits biscuit cps',
        price:6000
    },
    {
        id:110,
        name:'Kinder biscuit cps',
        price:6000
    },
    {
        id:111,
        name:'Bounty biscuit cps',
        price:6000
    },
    {
        id:112,
        name:'Kinder buono biscuit cps',
        price:6000
    },
    {
        id:113,
        name:'Lotus biscuit cps',
        price:6000
    },
    {
        id:114,
        name:'Croissant',
        price:4000
    },
    {
        id:115,
        name:'Croissant nutella',
        price:6000
    },
    {
        id:116,
        name:'Croissant oreo',
        price:6000
    },
    {
        id:117,
        name:'Croissant lotus',
        price:6000
    },
    {
        id:118,
        name:'Croissant fruit',
        price:6000
    },
    {
        id:119,
        name:'Croissant caramel',
        price:6000
    },
    {
        id:120,
        name:'Dark chocolate croissant',
        price:6000
    },
    {
        id:121,
        name:'Pistacho croissant',
        price:6000
    },
    {
        id:122,
        name:'Hazelnut croissant',
        price:6000
    },
    {
        id:123,
        name:'Nutella crepe',
        price:5000
    },
    {
        id:124,
        name:'Oreo crepe',
        price:6000
    },
    {
        id:125,
        name:'Lotus crepe',
        price:6000
    },
    {
        id:126,
        name:'Kinder crepe',
        price:6000
    },
    {
        id:127,
        name:'Kinder buono crepe',
        price:6000
    },
    {
        id:128,
        name:'Ferrero rocher crepe',
        price:7000
    },
    {
        id:129,
        name:'Raffaello crepe',
        price:7000
    },
    {
        id:130,
        name:'Pistacho crepe',
        price:7000
    },
    {
        id:131,
        name:'Nutella waffles',
        price:5000
    },
    {
        id:132,
        name:'Lotus waffles',
        price:6000
    },
    {
        id:133,
        name:'Kinder waffles',
        price:6000
    },
    {
        id:134,
        name:'Kinder buonno waffles',
        price:6000
    },
    {
        id:135,
        name:'Ferrero rocher waffles',
        price:7000
    },
    {
        id:136,
        name:'Raffaello waffles',
        price:7000
    },
    {
        id:137,
        name:'Avocado with milk juice',
        price:8000
    },
    {
        id:138,
        name:'Lemon mint juice',
        price:5000
    },
    {
        id:139,
        name:'Orange juice',
        price:4000
    },
    {
        id:140,
        name:'Cocktail fresh juice',
        price:8000
    },
    {
        id:141,
        name:'Banana with milk',
        price:5000
    },
    {
        id:142,
        name:'Pina colada',
        price:6000
    },
    {
        id:143,
        name:'Nutella pancake',
        price:5000
    },
    {
        id:144,
        name:'Lotus pancake',
        price:6000
    },
    {
        id:145,
        name:'Nutella mini pancake',
        price:5000
    },
    {
        id:146,
        name:'Kinder mini pancake',
        price:6000
    },
    {
        id:147,
        name:'Kinder buono mini pancake',
        price:6000
    },
    {
        id:148,
        name:'Ferrero rocher mini pancake',
        price:7000
    },
    {
        id:149,
        name:'Raffaello mini pancake',
        price:7000
    },
    {
        id:150,
        name:'Oreo mini pancake',
        price:6000
    },
    {
        id:151,
        name:'Lotus mini pancake',
        price:6000
    },
    {
        id:152,
        name:'Couple mohito',
        price:5000
    },
    {
        id:153,
        name:'CA coco mjo',
        price:6000
    },
    {
        id:154,
        name:'CA banan espresso',
        price:6000
    },
    {
        id:155,
        name:'CA body mint',
        price:6500
    },
    {
        id:156,
        name:'CA strawberry',
        price:6000
    },
    {
        id:157,
        name:'CA burger mini pancake',
        price:6000
    },
    {
        id:158,
        name:'CA rose mohito',
        price:6000
    },
    {
        id:159,
        name:'Water',
        price:500
    },
    {
        id:160,
        name:'Pling energy',
        price:1500
    },
    {
        id:161,
        name:'Soda with lemon',
        price:1500
    },
    {
        id:162,
        name:'Green tea',
        price:1500
    },
    {
        id:163,
        name:'Vaccine tea',
        price:2500
    },
    {
        id:164,
        name:'Oreo waffle',
        price:6000
    },
    {
        id:165,
        name:'Pistacho waffle',
        price:7000
    },
    {
        id:166,
        name:'Kinder pancake',
        price:6000
    },
    {
        id:167,
        name:'Kinder buono pancake',
        price:6000
    },
    {
        id:168,
        name:'Ferrero rocher pancake',
        price:7000
    },
    {
        id:169,
        name:'Raffaello pancake',
        price:7000
    },
    {
        id:170,
        name:'Oreo pancake',
        price:6000
    },
    {
        id:171,
        name:'Pistacho pancake',
        price:7000
    },
    {
        id:172,
        name:'Pistacho mini pancake',
        price:7000
    }
  ];
  //
  
  let htmlsum=``; // Initialize htmlsum as an empty string
  let totp=0;
  cart.forEach((cartitem) => {
      let matching;
  
      dataCart.forEach((product) => {
          if (product.id == cartitem.productid)
              matching = product;
      });
  
      if (matching) {
          htmlsum +=
          `
              <div class="l${matching.id}" id="xsmdiv"><div class="xsmdiv1"><div class="js-khalaf"><button class="js-max" data-es-id=${matching.id}><img src="img/plusicon.png" class="xsmm3"></button><button class="js-min" ><img src="img/minusicon.png" class="xsmm3"></button></div><p class="xmm1">${cartitem.quantity}</p> <p class="xmm2">${matching.name}</p> </div> <div class="pricet">${(matching.price*cartitem.quantity).toLocaleString()} IQD</div> </div>
          `;
          totp+=matching.price*cartitem.quantity;
          if (!isNaN(totp)) { // Check if 'totp' is a valid number
            document.querySelector('.hiawi').innerHTML = `<div class="hiawi wtf">Total price: </div><div class="khalaf">${totp.toLocaleString()} IQD</div>`;
        } else {
            console.error('Error: Invalid total price value.');
        }
      }
  });
//end of 2

  
  document.querySelector('.checkitems').innerHTML = htmlsum;
  console.log(cart);
  console.log(htmlsum);
//3
  document.querySelector('.checkitems').addEventListener('click', (event) => {
    // Check if the clicked element is a button with the class 'js-del-it'
    if (event.target && event.target.closest('.js-del-it')) {
        let button = event.target.closest('.js-del-it');
        let but = button.dataset.esId;
        let but2 = button.dataset.priSub;
        let but3 = Number(button.dataset.priDell);

        console.log(but);
        removeFun(but); // Assuming this function removes the item from cart array or whatever your data model is.
        document.querySelector(`.l${but}`).remove(); // Remove the item from the display

        totp -= Number(but2); // Subtract the item's price from the total
        document.querySelector('.hiawi').innerHTML = `<div class="hiawi wtf">Total price: ${totp.toLocaleString()} IQD</div>`;

        // Update the cart count in localStorage
        let myVariable = localStorage.getItem('countcart');
        myVariable = parseInt(myVariable) - but3;
        localStorage.setItem('countcart', myVariable);
    }
});



  //end of 3
  

  //
  // Attach event listener for 'click' on the parent element
document.querySelector('.checkitems').addEventListener('click', (event) => {
    // Check if the clicked element is a button with the class 'js-max'
    if (event.target && event.target.closest('.js-max')) {
        let elcon = event.target.closest('.js-max').dataset.esId;
        let htmsummax = '';
        totp = 0; // Reset total price each time to calculate it properly

        // Loop through cart items
        cart.forEach((cartitem) => {
            let matching;
            
            // Find the matching product from the dataCart
            dataCart.forEach((product) => {
                if (product.id == cartitem.productid) {
                    matching = product;
                }
            });

            // If product found, increment quantity and rebuild the HTML for cart item
            if (matching) {
                if (matching.id == elcon) {
                 // Increment the quantity of the clicked item
                    incFun(elcon);
                }

                htmsummax += `
                    <div class="l${matching.id}" id="xsmdiv">
                        <div class="xsmdiv1">
                            <div class="js-khalaf">
                            <button class="js-max" data-es-id=${matching.id}>
                                <img src="img/plusicon.png" class="xsmm3">
                            </button>
                            <button class="js-min">
                                <img src="img/minusicon.png" class="xsmm3">
                            </button>
                            </div>
                            <p class="xmm1">${cartitem.quantity}</p> 
                            <p class="xmm2">${matching.name}</p>
                           
                        </div> 
                        <div class="pricet">${(matching.price * cartitem.quantity).toLocaleString()} IQD</div>
                    </div>
                `;

                // Update total price
                totp += matching.price * cartitem.quantity;
            }
        });

        // Update the cart display with the new content
        document.querySelector('.checkitems').innerHTML = htmsummax;

        // Update the total price display
        if (!isNaN(totp)) {
            document.querySelector('.hiawi').innerHTML = `<div class"hiawi wtf">Total price: </div><div class="khalaf">${totp.toLocaleString()} IQD</div>`;
        } else {
            console.error('Error: Invalid total price value.');
        }
    }
});

  



let isClickedOnce = false;
// Attach event listener for 'click' on the parent element
document.querySelector('.checkitems').addEventListener('click', (event) => {
    // Check if the clicked element is a button with the class 'js-min'
    if (event.target && event.target.closest('.js-min')) {
        let elcon2 = event.target.closest('.js-min').dataset.esId;
        let htmsummin = ''; // Renamed variable
        totp = 0; // Reset total price each time to calculate it properly

        // Loop through cart items
        cart.forEach((cartitem) => {
            let matching;
            
            // Find the matching product from the dataCart
            dataCart.forEach((product) => {
                if (product.id == cartitem.productid) {
                    matching = product;
                }
            });

            // If product found, decrement quantity and rebuild the HTML for cart item
            if (matching) {
                if (matching.id == elcon2) {
                    if (cartitem.quantity == 1) {
                        removeFun(elcon2);
                        window.location.reload(true);
                        document.querySelector(`.l${elcon2}`).remove(); // Remove the item from the DOM
                        removeFun(elcon2);
                        if(cart.length === 0) {
                            const button123 = document.querySelector('.butex2');
                            button123.click();
                        }
                        document.querySelector(`.l${elcon2}`).remove();
                        removeFun(elcon2);
                        document.querySelector(`.l${elcon2}`).remove();
                        
                    } else if (cartitem.quantity > 1) {
                        // Decrement the quantity if greater than 1
                        deccFun(elcon2); // Decrement the quantity
                    }
                }
                totp += matching.price * cartitem.quantity;

                htmsummin += `
                    <div class="l${matching.id}" id="xsmdiv">
                        <div class="xsmdiv1">
                            <div class="js-khalaf">
                                <button class="js-max" data-es-id=${matching.id}>
                                    <img src="img/plusicon.png" class="xsmm3">
                                </button>
                                <button class="js-min" data-es-id=${matching.id}>
                                    <img src="img/minusicon.png" class="xsmm3">
                                </button>
                            </div>
                            <p class="xmm1">${cartitem.quantity}</p> 
                            <p class="xmm2">${matching.name}</p>
                        </div> 
                        <div class="pricet">${(matching.price * cartitem.quantity).toLocaleString()} IQD</div>
                    </div>
                `;

                // Update total price
                
                if (!isNaN(totp)) {
                    document.querySelector('.hiawi').innerHTML = `<div class="hiawi wtf">Total price: </div><div class="khalaf">${totp.toLocaleString()} IQD</div>`;
                }
            }
        });

        // Update the cart display with the new content
        document.querySelector('.checkitems').innerHTML = htmsummin;

        // Update the total price display
        if (!isNaN(totp)) {
            document.querySelector('.hiawi').innerHTML = `<div class="hiawi wtf">Total price: </div><div class="khalaf">${totp.toLocaleString()} IQD</div>`;
        }
    }
});









  document.querySelector('.butex2').addEventListener('click',()=>{
    document.querySelector('.checkitems').innerHTML='';
    cart.length=0;
    document.querySelector('.hiawi').innerHTML='';
    savetolocals();
    let c123=0;
    localStorage.setItem("countcart",c123.toString());
  });

  
  
//

