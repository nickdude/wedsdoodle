import React, { useState, useRef }  from 'react'
import './ProductDiscription.css'

const ProductDiscription = () => {
  const [backgroundPosition, setBackgroundPosition] = useState("0% 0%");
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };
  
  return (
   <>
        <div className='product-discription-page'>
          <nav   style={{
                backgroundImage: `url("/assets/nav-banner.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
            <div className='nav-bottons-container'>
              <button className='nav-buttons'>Favourites</button>
              <button className='nav-buttons'>Sign In /Up</button>
            </div>
            <div className='banner-bar'>
              <img src="./assets/nav-WD.svg" className='bar-logo'/>
              <div className='banner-buttons-container'>
                 <button>Themes </button>
                 <button>Stationary </button>
                 <button>Decor </button>
                 <button>Invites </button>
                 <button>Save the Date </button>
              </div>
              <div className='banner-side-buttons-container'>
                  <button>Search<img src="./assets/search (1) 1.svg"/></button>
                  <button>Cart<img src="./assets/shopping-bag 1.svg"/></button>
                  <button><img src="./assets/humburg.svg"/></button>
              </div>
            </div>
            <div className='tag-line-container'>
              <p className='tag-line'>
              {"<"}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Join Our Designer’s club now and start earning !&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{">"}
              </p>
           
            <div className='related-product-container'>
               <p className='product-features-title'>Related Products </p>
               <div class="acc-decor-wrapper-up">
                  <button class="scroll-btn left">{"<"}</button>
                      <div class="acc-box-main">
                          <div className='related-product-image-container'>
                              <div className='related-product-image-box'>
                                <img src="./assets/wishlist.svg" className='icon-left-top'/>
                              </div>
                              <p className='related-product-image-title'>Product Name</p>
                          </div>
                          <div className='related-product-image-container'>
                              <div className='related-product-image-box'>
                                <img src="./assets/wishlist.svg" className='icon-left-top'/>
                              </div>
                              <p className='related-product-image-title'>Product Name</p>
                          </div>
                          <div className='related-product-image-container'>
                              <div className='related-product-image-box'>
                                <img src="./assets/wishlist.svg" className='icon-left-top'/>
                              </div>
                              <p className='related-product-image-title'>Product Name</p>
                          </div>
                          <div className='related-product-image-container'>
                              <div className='related-product-image-box'>
                                <img src="./assets/wishlist.svg" className='icon-left-top'/>
                              </div>
                              <p className='related-product-image-title'>Product Name</p>
                          </div>
                          <div className='related-product-image-container'>
                              <div className='related-product-image-box'>
                                <img src="./assets/wishlist.svg" className='icon-left-top'/>
                              </div>
                              <p className='related-product-image-title'>Product Name</p>
                          </div>
                          <div className='related-product-image-container'>
                              <div className='related-product-image-box'>
                                <img src="./assets/wishlist.svg" className='icon-left-top'/>
                              </div>
                              <p className='related-product-image-title'>Product Name</p>
                          </div>
                       </div>
                  <button class="scroll-btn right">{">"}</button>
                </div>
            </div>
            </div>
          </nav>
           <hr className='line-extend'/>
            <nav class="breadcrumb">
                <a href="#">Home</a>
                <span> &gt;</span>
                <a href="#">Stationary</a>
                <span> &gt;</span>
                <span class="current">Product Name</span>
            </nav>
          <div className='product-discription-main-container'>
              <div className='product-discription-image-container'>
                  <div className='product-discription-main-image-container'>
                      <img src="./assets/sample3.svg"/>
                      {/* <img
                      ref={imageRef}
                      src="./assets/sample3.svg"
                      alt="Zoomable"
                      className="zoom-image"
                      onMouseMove={handleMouseMove}
                      onMouseLeave={() => setBackgroundPosition("0% 0%")}
                    />
                    <div
                      className="zoom-lens"
                      style={{
                        backgroundImage: `url(./assets/sample3.svg)`,
                        backgroundPosition: backgroundPosition,
                      }}
                    ></div> */}
                  </div>
                   {/* <div className="zoom-container">
                    <img
                      ref={imageRef}
                      src="./assets/sample3.svg"
                      alt="Zoomable"
                      className="zoom-image"
                      onMouseMove={handleMouseMove}
                      onMouseLeave={() => setBackgroundPosition("0% 0%")}
                    />
                    <div
                      className="zoom-lens"
                      style={{
                        backgroundImage: `url(./assets/sample3.svg)`,
                        backgroundPosition: backgroundPosition,
                      }}
                    ></div>
                  </div> */}
                  <div className='product-discription-sub-image-box'>
                      <div className='product-discription-sub-image-container'>
                          <img src="./assets/sample4.svg"/>
                          <p className='sub-image-title'>Front</p>
                      </div>
                      <div className='product-discription-sub-image-container'>
                          <img src="./assets/sample4.svg"/>
                          <p className='sub-image-title'>Back</p>
                      </div>
                      <div className='product-discription-sub-image-container'>
                          <img src="./assets/sample4.svg"/>
                          <p className='sub-image-title'>left side</p>
                      </div>
                      <div className='product-discription-sub-image-container'>
                          <img src="./assets/sample4.svg"/>
                          <p className='sub-image-title'>right side</p>
                      </div>
                  </div>
              </div>
              <div className='product-discription-details-container'>
                    <nav class="breadcrumb no-margin">
                        <a href="#">Majestic Jaipur</a>
                          <span> &gt;</span>
                        <span class="current">Stationary</span>
                    </nav>
                    <p className='product-name'>Food Menu <span className='product-code'>(Product Code)</span></p>
                    <p className='product-by'>by Tejashri</p>
                    <div className='icons'>
                      <img src="./assets/wishlist.svg"/>
                      <img src="./assets/share.svg"/>
                    </div>
                    <hr className='horizontal-line'/>
                    <p className='product-features-title'>Formats</p>
                    <div className='action-buttons'>
                        <button className='clicked'>Digital</button>
                        <button className='not-clicked'>Printable</button>
                    </div>
                    <p className='product-features-title'>Shape Name </p>
                    <div className='product-shape-box'>
                        <div className='product-scroll-content'>
                          <div className='product-shape-container'>

                          </div>
                          <div className='product-shape-container'>

                          </div>
                          <div className='product-shape-container'>

                          </div>
                          <div className='product-shape-container'>

                          </div>
                          <div className='product-shape-container'>

                          </div>
                          <div className='product-shape-container'>

                          </div>
                        </div>
                         
                    </div>
                    <p className='product-features-title'>Quantity </p>
                    <div class="custom-dropdown">
                    <div class="product-dropdown">
                          <div class="dropdown-header" onclick="toggleDropdown()">
                              100 @ Rs. 1000 (Rs. 10 each /-)
                              <span class="arrow">&#9662;</span>
                          </div>
                          <ul class="dropdown-list" id="dropdownList">
                              <li>50 @ Rs. 500 (Rs. 10 each)</li>
                              <li>200 @ Rs. 2000 (Rs. 10 each)</li>
                              <li>500 @ Rs. 5000 (Rs. 10 each)</li>
                          </ul>
                      </div>
                        {/* <div class="dropdown-content">
                            <p className='content-dis'>Digital @ INR.500/-</p>
                            <p className='content-dis'>100 @ INR. 1000 (Rs. 10 each /-)</p>
                            <p className='content-dis'>200 @ INR. 1500 (Rs. 8 each /-)</p>
                        </div> */}
                    </div>
                    <hr className='horizontal-line'/>
                    <p className='product-features-title'>Matching Accessories </p>
                    <div class="acc-decor-wrapper">
                        <button class="scroll-btn mat-left">{"<"}</button>
                            <div className='acc-box'>
                                <div className='acc-image-box'>
                                  <div className='acc-image-container'> 
                                    <img src="./assets/Small1.svg"/>
                                  </div>
                                  <p className='acc-image-title'>Gift Tag</p>
                                  <button className='acc-image-button'> Select</button>
                                </div>
                                <div className='acc-image-box'>
                                  <div className='acc-image-container'> 
                                    <img src="./assets/samplea2.svg"/>
                                  </div>
                                  <p className='acc-image-title'>Gift Tag</p>
                                  <button className='acc-image-button'> Select</button>
                                </div>
                                <div className='acc-image-box'>
                                  <div className='acc-image-container'> 
                                    <img src="./assets/samplea3.svg"/>
                                  </div>
                                  <p className='acc-image-title'>Gift Tag</p>
                                  <button className='acc-image-button'> Select</button>
                                </div>
                                <div className='acc-image-box'>
                                  <div className='acc-image-container'> 
                                    <img src="./assets/samplea3.svg"/>
                                  </div>
                                  <p className='acc-image-title'>Gift Tag</p>
                                  <button className='acc-image-button'> Select</button>
                                </div>
                                <div className='acc-image-box'>
                                  <div className='acc-image-container'> 
                                    <img src="./assets/samplea3.svg"/>
                                  </div>
                                  <p className='acc-image-title'>Gift Tag</p>
                                  <button className='acc-image-button'> Select</button>
                                </div>
                            </div>
                          <button class="scroll-btn mat-right">{">"}</button>
                     </div>
                     <hr className='horizontal-line'/>
                     {/* <p className='product-features-title'>Sub Total <span className='price'>INR.500</span></p> */}
                         <div className='price-header'><p>Sub Total</p> <p>INR.500</p></div>
                          <div className='button-container'>
                              <button className='product-feature-button'>Customise</button>
                          </div>
                     <hr className='horizontal-line'/>
                    
              </div>
          </div>
          <div className='discription-box'>
            <div class="tabs">
                <span class="active">Product Description</span>
                <span>Shipping & Return</span>
                <span>Reviews</span>
            </div>
            <div class="product-details">
                <table>
                    <tr>
                        <td class="label">PRODUCT CODE</td>
                        <td>Room key jacket - 1001</td>
                    </tr>
                    <tr>
                        <td class="label">ACTUAL PRODUCT SIZE</td>
                        <td>10 inches x 14 inches</td>
                    </tr>
                    <tr>
                        <td class="label">ADDITIONAL INFORMATION</td>
                        <td>
                            This Product is a Bi-fold room key jacket which has a pocket to keep the product. 
                            The product is made keeping in mind the beautiful decor in Mughal era.
                        </td>
                    </tr>
                    <tr>
                        <td class="label">PRINTING STANDARD</td>
                        <td>350 Gsm paper</td>
                    </tr>
                    <tr>
                        <td class="label">DESIGNER NAME</td>
                        <td>Umesh Pandey</td>
                    </tr>
                </table>
            </div>
          </div>
          <hr className='line-extend'/>
          <div className='more-theme'>
              <p className='more-theme-header'>More Under This Theme </p>
              <div className='more-theme-box'>
                <div className='more-theme-img-box'>
                    <div className='more-theme-img-container'>
                      <img src="./assets/Small1.svg"/>
                       {/* <button className='more-theme-view'>View</button> */}
                    </div>
                    <div className='more-theme-dis'>
                      <p className='more-theme-title'>Product Name</p>
                      <p className='more-theme-sub-title'>Product category</p>
                      <img src="./assets/wishlist.svg" className='more-theme-icon'/>
                    </div>
                </div>

                <div className='more-theme-img-box'>
                    <div className='more-theme-img-container'>
                      <img src="./assets/Small1.svg"/>
                       {/* <button className='more-theme-view'>View</button> */}
                    </div>
                    <div className='more-theme-dis'>
                      <p className='more-theme-title'>Product Name</p>
                      <p className='more-theme-sub-title'>Product category</p>
                      <img src="./assets/wishlist.svg"  className='more-theme-icon'/>
                    </div>
                </div>

                <div className='more-theme-img-box'>
                    <div className='more-theme-img-container'>
                      <img src="./assets/Small1.svg"/>
                       {/* <button className='more-theme-view'>View</button> */}
                    </div>
                    <div className='more-theme-dis'>
                      <p className='more-theme-title'>Product Name</p>
                      <p className='more-theme-sub-title'>Product category</p>
                      <img src="./assets/wishlist.svg"  className='more-theme-icon'/>
                    </div>
                </div>

                <div className='more-theme-img-box'>
                    <div className='more-theme-img-container'>
                      <img src="./assets/Small1.svg"/>
                       {/* <button className='more-theme-view'>View</button> */}
                    </div>
                    <div className='more-theme-dis'>
                      <p className='more-theme-title'>Product Name</p>
                      <p className='more-theme-sub-title'>Product category</p>
                      <img src="./assets/wishlist.svg"  className='more-theme-icon'/>
                    </div>
                </div>

                <div className='more-theme-img-box'>
                    <div className='more-theme-img-container'>
                      <img src="./assets/Small1.svg"/>
                       {/* <button className='more-theme-view'>View</button> */}
                    </div>
                    <div className='more-theme-dis'>
                      <p className='more-theme-title'>Product Name</p>
                      <p className='more-theme-sub-title'>Product category</p>
                      <img src="./assets/wishlist.svg"  className='more-theme-icon'/>
                    </div>
                </div>

                <div className='more-theme-img-box'>
                    <div className='more-theme-img-container'>
                      <img src="./assets/Small1.svg"/>
                       {/* <button className='more-theme-view'>View</button> */}
                    </div>
                    <div className='more-theme-dis'>
                      <p className='more-theme-title'>Product Name</p>
                      <p className='more-theme-sub-title'>Product category</p>
                      <img src="./assets/wishlist.svg"  className='more-theme-icon'/>
                    </div>
                </div>

                <div className='more-theme-img-box'>
                    <div className='more-theme-img-container'>
                      <img src="./assets/Small1.svg"/>
                       {/* <button className='more-theme-view'>View</button> */}
                    </div>
                    <div className='more-theme-dis'>
                      <p className='more-theme-title'>Product Name</p>
                      <p className='more-theme-sub-title'>Product category</p>
                      <img src="./assets/wishlist.svg"  className='more-theme-icon'/>
                    </div>
                </div>

                <div className='more-theme-img-box'>
                    <div className='more-theme-img-container'>
                      <img src="./assets/Small1.svg"/>
                       {/* <button className='more-theme-view'>View</button> */}
                    </div>
                    <div className='more-theme-dis'>
                      <p className='more-theme-title'>Product Name</p>
                      <p className='more-theme-sub-title'>Product category</p>
                      <img src="./assets/wishlist.svg"  className='more-theme-icon'/>
                    </div>
                </div>
                 
              </div>
          </div>
          <div className='botton-banner-bar'>
              <p>Subscribe to receive promotional updates and exclusive offers via email ans SMS</p>
              <div className='bottom-banner-container'>
                <input type="text"/>
                <input type="text"/>
              </div>
              <button>Subscribe</button>
          </div>
          <div className='footer-container'
              style={{
                backgroundImage: `url("/assets/nav-banner.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
            <img src="./assets/hourse.svg"/>
            <div className='footer-details-container'>
                <div className='footer-block'>
                    <img src="./assets/nav-WD.svg"/>
                    <p className='no-margin'> A solution to all your stationery needs in the Wedding. Enhance the feel of the wedding with unique themes and concepts. Just one click away stationary products designed in unified and mesmerising themes.</p>
                    <p className='margin-top'>weddoodles@gmail.com</p>
                    <div className='social-icon-container'>
                          <img src="./assets/pininterest.svg"/>
                          <img src="./assets/twitter.svg"/>
                          <img src="./assets/facebook.svg"/>
                          <img src="./assets/instagram.svg"/>
                    </div>
                </div>
                <div className='footer-block'>
                    <p className='footer-header'>Information</p>
                    <p className='no-margin pink'>About Us</p>
                    <p className='no-margin pink'>Designer’s Club</p>
                    <p className='no-margin pink'>Shipping & Returns</p>
                    <p className='no-margin pink'>Terms & PRivacy</p>
                </div>
                <div className='footer-block'>
                    <p className='footer-header'>Help Center</p>
                    <p className='no-margin pink'>How to Shop On WedDoodles</p>
                    <p className='no-margin pink'>Payment Methods</p>
                    <p className='no-margin pink'>Contact Us</p>
                </div>
                <div className='footer-block'>
                    <p className='footer-header'>Account</p>
                    <p className='no-margin pink'>My Account</p>
                    <p className='no-margin pink'>My Saved Designs</p>
                    <p className='no-margin pink'>My Wishlist</p>
                    <p className='no-margin pink'>View Cart</p>
                </div>
            </div>
          </div>
          <hr className='line-extend-footer'/>
          <div className='copy-rights'>
            <p>copyright@weddoodles24-25</p>
            <img src="./assets/cards.svg"/>
          </div>
        </div>
   </>
  )
}

export default ProductDiscription