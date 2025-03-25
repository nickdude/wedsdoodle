import React from "react";

const HeaderTop = () => {
  return (
    <header class="header">
            <div class="header-top-in" style={{"backgroundImage": `url("assets/images/background leaves small copy.png")`,"backgroundSize": "cover", "backgroundRepeat": "no-repeat"}} >
                <div class="container">
                    <div class="header-6 header-left" style={{"margin-top":"-20px", "margin-bottom":"-20px"}}>
                        <div class="header-search header-search-extended header-search-visible d-none d-lg-block">
                            <a href="#" class="search-toggle" role="button"><i class="icon-search"></i></a>
                            <form action="#" method="get">
                                <div class="header-search-wrapper search-wrapper-wide">
                                    <label for="q" class="sr-only">Search</label>
                                    <button class="btn btn-primary" type="submit"><i class="icon-search"  style={{"color":"#000000","background-color":"#fbf8f5"}}></i></button>
                                    <input type="text" class="form-control" name="q" id="q" placeholder="Search" required/>
                                </div>
                            </form>
                        </div>
                    </div>
                    

                    <div class="header-right">
                        

                        <ul class="top-menu top-link-menu">
                            <li>
                                <a href="#">Links</a>
                                <ul>
                                    <li><a href="#signin-modal" data-toggle="modal">Sign In </a></li>
                                </ul>
                            </li>
                        </ul>
                        <div class="header-dropdown">
                            <a href="#">Favourites</a>
                            <div class="header-menu">
                                <ul>
                                    <li><a href="wishlist.html">Wish List</a></li>
                                    <li><a href="saved_designs.html">Saved Designs</a></li>
                                </ul>
                            </div>
                        </div>
                                   
                              
                    </div>
                </div>
            </div>

            <div class="sticky-wrapper">
                <div class="header-middle sticky-header" style="background-color:#F6F3EE; border-top: .1rem solid #D9D9D9; border-bottom: .1rem solid #D9D9D9;">
                  <div class="container">
                    <div class="header-left">
                        <button class="mobile-menu-toggler">
                            <span class="sr-only">Toggle mobile menu</span>
                            <i class="icon-bars"></i>
                        </button>

                        <a href="index.html" class="logo">
                            <img src="assets/images/demos/demo-6/WD 2.png" alt="WedDoodles Logo"/>
                        </a>
                    </div>
                    <div class="header-center" style={{"color": "#68095A"}}>
                       
                        <nav class="main-nav">
                            <ul class="menu sf-arrows">

                                <li>
                                    <a href="#" class="sf-with-ul" style={{"font-weight":"bolder", "font-size":"16px"}}>Theme</a>

                                    <div class="megamenu megamenu-md" style={{"left":-"31rem", "width": "1257px"}}>
                                        <div class="row" style={{"width": "100%"}}>
                                            <div class="col-md-12">
                                                <div class="menu-col">
                                                    <div class="row">
                                                        <div class="col-1"></div>
                                                        <div class="col-3">
                                                            
                                                            
                                                                <ul style={{"text-indent":"10px"}}>
                                                                    <li style={{"padding-bottom": "0.7rem"}}><a href="theme.html"><div class="menu-title">ALL</div></a></li>
                                                                    <li><a href="product_list.html">MUGHAL MARVEL</a></li>
                                                                    <li><a href="product_list.html">FESTIVE GANGES</a></li>
                                                                    <li><a href="product_list.html">BLUE MOUNTAINS</a></li>
                                                                    <li><a href="product_list.html">GARDEN VOWS</a></li>
                                                                    <li><a href="product_list.html">HORN OK</a></li>
                                                                    <li><a href="product_list.html">ELEPHANT JUNGLE SAFARI</a></li>
                                                                    <li><a href="product_list.html">MARIGOLD BLOOM</a></li>
                                                                </ul>

                                                        </div>
                                                        <div class="col-3">
                                                            
                                                            
                                                                <ul style="text-indent:10px;">
                                                                    
                                                                    <li class="pt-4"><a href="product_list.html">MAJESTIC JAIPUR</a></li>
                                                                    <li><a href="product_list.html">HIMALAYAN SERENITY</a></li>
                                                                    <li><a href="product_list.html">BLUE MOUNTAINS</a></li>
                                                                    <li><a href="product_list.html">GARDEN VOWS</a></li>
                                                                    <li><a href="product_list.html">HORN OK</a></li>
                                                                    <li><a href="product_list.html">ELEPHANT JUNGLE SAFARI</a></li>
                                                                    <li><a href="product_list.html">MARIGOLD</a></li>
                                                                </ul>

                                                        </div>
                                                        <div class="col-2">
                                                            
                                                            
                                                                <ul style="text-indent:10px;">
                                                                    
                                                                    <li class="pt-4"><a href="product_list.html">MUGHAL MARVEL</a></li>
                                                                    <li><a href="product_list.html">RISHIKESH</a></li>
                                                                    <li><a href="product_list.html">BLUE MOUNTAINS</a></li>
                                                                    <li><a href="product_list.html">GARDEN VOWS</a></li>
                                                                    <li><a href="product_list.html">HORN OK</a></li>
                                                                    <li><a href="product_list.html">ELEPHANT JUNGLE SAFARI</a></li>
                                                                    <li><a href="product_list.html">MARIGOLD</a></li>
                                                                </ul>

                                                        </div>
                                                        <div class="col-2">
                                                            
                                                            
                                                              <img class="pt-4" src="assets/images/menu/menu_theme.png" / >
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                           
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" class="sf-with-ul" style="font-weight:bolder;font-size:16px;">Stationery</a>

                                    <div class="megamenu megamenu-md" style="left:-41rem; width: 1257px; ">
                                        <div class="row" style="width: 100%;">
                                            <div class="col-md-12" >
                                                <div class="menu-col" >
                                                    <div class="row" >
                                                        <div class="col-1"></div>
                                                        <div class="col-2 ">
                                                            <a href="category.html" style="padding-bottom: 1rem;"><div class="menu-title">ALL</div></a>
                                                            <a href="product_list.html"> <div class="menu-title">MONOGRAMS</div></a>
                                                            <a href="product_list.html"> <div class="menu-title">WARDROBE PLANNER</div></a>
                                                                <a href="product_list.html"><div class="menu-title">LUGGAGE TAG</div></a>
                                                                <a href="product_list.html"><div class="menu-title">DOOR DANGLER</div></a>
                                                                <a href="product_list"><div class="menu-title">BAR MENU </div></a>
                                                                <a href="product_list"><div class="menu-title">RITUAL CARD</div></a>
                                                                <a href="product_list"><div class="menu-title">GIFT TAG</div></a>
                                                                <a href="product_list"><div class="menu-title">ENVELOP</div></a>
                                                                <a href="product_list"><div class="menu-title">MITHAI BOX SLEEVE</div></a>
                                                                <a href="product_list"><div class="menu-title">PAPER BAGS </div></a>
                                                                <a href="product_list"><div class="menu-title">CAR STICKERS</div></a>
                                                        </div>
                                                        <div class="col-2">
                                                                <a href="#"><div class="menu-title no-menu-title pt-3">ITINERARY</div></a>
                                                            
                                                            <ul>
                                                               
                                                                <li><a href="product_list.html">Itinerary Flat</a></li>
                                                                <li><a href="product_list.html">Itinerary & Welcome Note Tent Card</a></li>
                                                                <li><a href="product_list.html">Itinerary with Room Key Jacket</a></li>
                                                                
                                                            </ul>
                                                            
                                                        
                                                            
                                                            
                                                        </div>
                                                        <div class="col-2">

                                                            
                                                            <a href="#"><div class="menu-title no-menu-title pt-3">Welcome Cards</div></a>
                                                            <ul>
                                                                <li><a href="product_list.html">Welcome Tent Note</a></li>
                                                                <li><a href="product_list.html"><span>Welcome Note & Itinerary Tent Card</span></a></li>
                                                                <li><a href="product_list.html">Welcome Flat Card A5</a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="col-2">
                                                       
                                                        <a href="#"><div class="menu-title no-menu-title pt-3">ROOM KEY JACKET</div></a>
                                                            <ul>
                                                                <li><a href="product_list.html">Bi-Fold Room Key jacket</a></li>
                                                                <li><a href="product_list.html"><span>Tri-Fold Room Key jacket</span></a></li>
                                                            </ul>
                                                        </div>     
                                                        <div class="col-2 ">
                                                           
                                                                                             
                                                            
                                                            <a href="#"><div class="menu-title no-menu-title pt-3">FOOD MENU</div></a>
                                                            
                                                            <ul>
                                                                <li><a href="product_list.html">Bi-Fold Menu Booklet</a></li>
                                                                <li><a href="product_list.html"><span>Food Menu Flat A5<span class="tip tip-new">New</span></span></a></li>
                                                            
                                                            </ul>
                                                        </div>
                                                        <div class="col-1"></div>




                                                    </div>
                                                </div>
                                            </div>

                                           
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" class="sf-with-ul" style="font-weight:bolder;font-size:16px;">Decor</a>
                                 <div class="megamenu megamenu-md" style="left:-56rem; width: 1257px;">
                                        <div class="row" style="width:100%;">
                                            <div class="col-md-12">
                                                <div class="menu-col">
                                                    <div class="row"  style="width: 100%;">
                                                        <div class="col-2"></div>
                                                        <div class="col-3">
                                                            <a href="decor.html"><div class="menu-title"  style="padding-bottom: 1.1rem;"><span/>ALL</div></a>
                                                            
                                         <a href="product_list.html"><div  class="menu-title"> PAGING BOARD FOR GUEST PICK UP</div></a>
                                         <a href="product_list.html"><div  class="menu-title"> BACKDROPS / PHOTOBOOTHS</div></a>
                                         <a href="product_list.html"><div class="menu-title">FUN MESSAGE BOARDS</div></a>
                                              <a href="product_list.html"><div class="menu-title">POPCORN TUBS</div></a>
                                              <a href="product_list.html"><div class="menu-title">PLAYING CARDS</div></a>
                                        </div>
                                        <div class="col-2">
                                            <a href="product_list.html"><div class="menu-title no-menu-title pt-3">HOSPITALITY DESK</div> </a>
                                        <ul>
                                        
                                        <li><a href="product_list.html">Backdrop</a></li>
                                        <li><a href="product_list.html">Facades & sides</a></li>
                                     
                                        </ul>
                                              
                                        </div>
                                        <div class="col-2">
                                            <a href="#"><div class="menu-title no-menu-title pt-3">WELCOME SIGNAGE</div></a>
                                            <ul>
                                        
                                        <li><a href="product_list.html">Haldi</a></li>
                                        <li><a href="product_list.html">Mehndi</a></li>
                                        <li><a href="product_list.html">Reception</a></li>
                                        <li><a href="product_list.html">Wedding</a></li>
                                        <li><a href="product_list.html">Pooja</a></li>
                                      
                                       </ul>
                                        </div>
                                        <div class="col-2">
                                               
                                            <img class="pt-3" src="assets/images/menu/menu_decor.png" alt="product"/>
                                            
                                       
                                        </div>
                                        
                                    
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                </li>
                                <li >
                                    <a href="product_scroller.html" class="sf-with-ul" style="font-weight:bolder;font-size:16px;">Invitations</a>

                                    <ul style="left:-64.4rem; width: 1257px; display: flex; text-align: center;">
                                        <li class="image-sub-menu"><a href="product_scroller.html">
                                            <img class="mt-5 mb-5" src="assets/images/menu/1.png" width="300" alt="product"/>
                                            ALL</a></li>
                                        <li class="image-sub-menu"><a href="product_scroller.html">
                                            <img class="mt-5 mb-5" src="assets/images/menu/2.png" width="300" alt="product"/>
                                            PDF INVITES
                                            <br/>
                                            <br/>

                                        </a></li>
                                        <li class="image-sub-menu"><a href="product_scroller.html">
                                            <img class="mt-5 mb-5" src="assets/images/menu/3.png" width="300" alt="product"/>
                                            VIDEO INVITES</a></li>
                                                                                   
                                    </ul>
                                </li>
                                <li>
                                    <a href="product_scroller2.html" class="sf-with-ul" style="font-weight:bolder;font-size:16px;">Save The Date</a>

                                    <ul style="left:-82rem; width: 1257px; display: flex; text-align: center;" >
                                        <li class="image-sub-menu"><a href="product_scroller2.html">
                                            <img class="mt-5 mb-5"  src="assets/images/menu/6.png" width="300"  alt="product"/>
                                            ALL
                                        </a></li>
                                        <li class="image-sub-menu"><a href="product_scroller2.html">
                                            <img class="mt-5 mb-5"  src="assets/images/menu/4.png" width="300"  alt="product"/>
                                            PDF SAVE THE DATE
                                            <br/>
                                            <br/>
                                        </a></li>
                                        <li class="image-sub-menu"><a href="product_scroller2.html">
                                            <img class="mt-5 mb-5"  src="assets/images/menu/5.png" width="300"  alt="product"/>
                                            VIDEO SAVE THE DATE
                                        </a></li>
                                        
                                    </ul>
                                </li>
                                
                            </ul>
                        </nav>
                    </div>

                    <div class="header-right">
                       

                        <div class="dropdown cart-dropdown">
                            <a href="https://portotheme.com/html/molla/product-category-boxed.html#" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                <i class="icon-shopping-cart"></i>
                                <span class="cart-count">2</span>
                            </a>

                            <div class="dropdown-menu dropdown-menu-right">
                                <div class="dropdown-cart-products">
                                    <div class="product">
                                        <div class="product-cart-details">
                                            <h4 class="product-title">
                                                <a href="https://portotheme.com/html/molla/product.html">Beige knitted elastic runner shoes</a>
                                            </h4>

                                            <span class="cart-product-info">
                                                <span class="cart-product-qty">1</span>
                                                x $84.00
                                            </span>
                                        </div>

                                        <figure class="product-image-container">
                                            <a href="https://portotheme.com/html/molla/product.html" class="product-image">
                                                <img src="./Molla - Bootstrap eCommerce Template_files/product-1.jpg" alt="product"/>
                                            </a>
                                        </figure>
                                        <a href="https://portotheme.com/html/molla/product-category-boxed.html#" class="btn-remove" title="Remove Product"><i class="icon-close"></i></a>
                                    </div>

                                    <div class="product">
                                        <div class="product-cart-details">
                                            <h4 class="product-title">
                                                <a href="https://portotheme.com/html/molla/product.html">Blue utility pinafore denim dress</a>
                                            </h4>

                                            <span class="cart-product-info">
                                                <span class="cart-product-qty">1</span>
                                                x $76.00
                                            </span>
                                        </div>

                                        <figure class="product-image-container">
                                            <a href="https://portotheme.com/html/molla/product.html" class="product-image">
                                                <img src="./Molla - Bootstrap eCommerce Template_files/product-2.jpg" alt="product"/>
                                            </a>
                                        </figure>
                                        <a href="https://portotheme.com/html/molla/product-category-boxed.html#" class="btn-remove" title="Remove Product"><i class="icon-close"></i></a>
                                    </div>
                                </div>

                                <div class="dropdown-cart-total">
                                    <span>Total</span>

                                    <span class="cart-total-price">$160.00</span>
                                </div>

                                <div class="dropdown-cart-action">
                                    <a href="cart.html" class="btn btn-primary">View Cart</a>
                                    <a href="checkout.html" class="btn btn-outline-primary-2"><span>Checkout</span><i class="icon-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>
        </header>
  );
};

export default HeaderTop;
