let product_gallery = [
{
    product_image: '1',
    price: '35000',
    content: 'converse hightop sneakers'
},
{
    product_image: '2',
    price: '35000',
    content: 'adidas low sneakers'
},
{
    product_image: '3.5',
    price: ' 35000',
    content: 'alexander macqueen sneakers'
},
{
    product_image: '4.5',
    price: '35000',
    content: 'prada sneakers'
},
{
    product_image: '5.5',
    price: '35000',
    content: 'gucci sneakers'
},
{
    product_image: '6',
    price: '35000',
    content: 'nike offwhite sneakers'
},
{
    product_image: '7.6',
    price: '35000',
    content: 'louis vuitton sneakers'
},
{
    product_image: '8',
    price: '35000',
    content: 'new balance sneakers'
},
{
    product_image: '9',
    price: '35000',
    content: 'puma sneakers'
},
{
    product_image: '10.5',
    price: '35000',
    content: 'vans classic sneakers'
},
{
    product_image: '11.5',
    price: '35000',
    content: 'versace hightop sneakers'
},
{
    product_image: '12',
    price: '35000',
    content: 'yeezy sply sneakers'
}
]

//product_gallery.forEach(element => {
 //   console.log(element)
// });

let gallery_display = document.getElementById('prod_gallery')
let html = "";
product_gallery.forEach(e => {
 html += `
     <div class="col-lg-3 col-md-4 col-sm-12">
         <div class="product bg-white ">
              <div class="product-image py-5 mt-5 text-center" >
                      <a href="products.html" class="image d-block link-text">
                          <img class="img-fluid prod-resize"  src="img/${e.product_image}.png" alt="">
                         </a>
                       <div class="content">
                           <h3 class="title"><a class="link-text" href="">${e.content}</a></h3>
                           <div class="price">${e.price}</div>
                       </div>
              </div>
          </div>
     </div>
    `
             

             gallery_display.innerHTML = html
})