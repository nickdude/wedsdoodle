import React, { useRef,useState } from 'react'
import './CategoryPage.css'

const galleries = [
  [
    // Page 1 gallery
    <div className='gallery'>
            <div className='large'>
              <img src="https://picsum.photos/480/480" class="large zoom"/>
              <div className='button-background'>
                <button class="centered-btn">Room Key Jacket</button>
              </div>
            </div>
            <div className='small'>
                <img src="https://picsum.photos/480/480" class="small zoom"/>
                <div className='button-background'>
                <button class="centered-btn">Room Key Jacket</button>
              </div>
            </div>
            <div className='small'>
                <img src="https://picsum.photos/230/230" class="small zoom"/>
                <div className='button-background'>
                <button class="centered-btn">Room Key Jacket</button>
              </div>
            </div>
            <div class="large">
                <img src="https://picsum.photos/480/480" class="large zoom"/>
                <div className='button-background'>
                <button class="centered-btn">Room Key Jacket</button>
              </div>
            </div>
            <div className='wide'>
                <img src="https://picsum.photos/480/230" class="wide zoom"/>
                <div className='button-background'>
                <button class="centered-btn">Room Key Jacket</button>
              </div>
            </div>
            <div class="large">
                <img src="https://picsum.photos/480/480" class="large zoom"/>
                <div className='button-background'>
                <button class="centered-btn">Room Key Jacket</button>
              </div>
            </div>
            <div  class="small">
                <img src="https://picsum.photos/230/230" class="small zoom"/>
                <div className='button-background'>
                <button class="centered-btn">Room Key Jacket</button>
              </div>
            </div>
            <div class="tall">
                <img src="https://picsum.photos/230/480" class="tall zoom"/>
                <div className='button-background'>
                <button class="centered-btn">Room Key Jacket</button>
              </div>
            </div>
            <div className='small'>
                 <img src="https://picsum.photos/230/230" class="small zoom"/>
                 <div className='button-background'>
                <button class="centered-btn">Room Key Jacket</button>
              </div>
            </div>
            <div class="small">
                <img src="https://picsum.photos/230/230" class="small zoom"/>
                <div className='button-background'>
                <button class="centered-btn">Room Key Jacket</button>
              </div>
            </div>
            <div class="small">
                <img src="https://picsum.photos/230/230" class="small zoom"/>
                <div className='button-background'>
                <button class="centered-btn">Room Key Jacket</button>
              </div>
            </div>
            <div class="wide">
                <img src="https://picsum.photos/480/230" class="wide zoom"/>
                <div className='button-background'>
                <button class="centered-btn">Room Key Jacket</button>
              </div>
            </div>
           
        </div>
  ],
  [
    <div className='gallery'>
    <div className='large'>
      <img src="https://picsum.photos/480/480" class="large zoom"/>
      <div className='button-background'>
        <button class="centered-btn">Room Key Jacket</button>
      </div>
    </div>
    <div className='small'>
        <img src="https://picsum.photos/230/230" class="small zoom"/>
        <div className='button-background'>
        <button class="centered-btn">Room Key Jacket</button>
      </div>
    </div>
    <div className='small'>
        <img src="https://picsum.photos/230/230" class="small zoom"/>
        <div className='button-background'>
        <button class="centered-btn">Room Key Jacket</button>
      </div>
    </div>
    <div class="large">
        <img src="https://picsum.photos/480/480" class="large zoom"/>
        <div className='button-background'>
        <button class="centered-btn">Room Key Jacket</button>
      </div>
    </div>
    <div className='wide'>
        <img src="https://picsum.photos/480/230" class="wide zoom"/>
        <div className='button-background'>
        <button class="centered-btn">Room Key Jacket</button>
      </div>
    </div>
    <div class="large">
        <img src="https://picsum.photos/480/480" class="large zoom"/>
        <div className='button-background'>
        <button class="centered-btn">Room Key Jacket</button>
      </div>
    </div>
    <div  class="small">
        <img src="https://picsum.photos/230/230" class="small zoom"/>
        <div className='button-background'>
        <button class="centered-btn">Room Key Jacket</button>
      </div>
    </div>
    <div class="tall">
        <img src="https://picsum.photos/230/480" class="tall zoom"/>
        <div className='button-background'>
        <button class="centered-btn">Room Key Jacket</button>
      </div>
    </div>
    <div className='small'>
         <img src="https://picsum.photos/480/480" class="small zoom"/>
         <div className='button-background'>
        <button class="centered-btn">Room Key Jacket</button>
      </div>
    </div>
    {/* <div class="small">
        <img src="https://picsum.photos/230/230" class="small zoom"/>
        <div className='button-background'>
        <button class="centered-btn">Room Key Jacket</button>
      </div>
    </div>
    <div class="small">
        <img src="https://picsum.photos/230/230" class="small zoom"/>
        <div className='button-background'>
        <button class="centered-btn">Room Key Jacket</button>
      </div>
    </div>
    <div class="wide">
        <img src="https://picsum.photos/480/230" class="wide zoom"/>
        <div className='button-background'>
        <button class="centered-btn">Room Key Jacket</button>
      </div>
    </div> */}
   
</div>
  ],
  [
    <div className='gallery'>
    <div className='large'>
      <img src="https://picsum.photos/480/480" class="large zoom"/>
      <div className='button-background'>
        <button class="centered-btn">Room Key Jacket</button>
      </div>
    </div>
    <div className='small'>
        <img src="https://picsum.photos/230/230" class="small zoom"/>
        <div className='button-background'>
        <button class="centered-btn">Room Key Jacket</button>
      </div>
    </div>
    <div className='small'>
        <img src="https://picsum.photos/230/230" class="small zoom"/>
        <div className='button-background'>
        <button class="centered-btn">Room Key Jacket</button>
      </div>
    </div>
    <div class="large">
        <img src="https://picsum.photos/480/480" class="large zoom"/>
        <div className='button-background'>
        <button class="centered-btn">Room Key Jacket</button>
      </div>
    </div>
    <div className='wide'>
        <img src="https://picsum.photos/480/230" class="wide zoom"/>
        <div className='button-background'>
        <button class="centered-btn">Room Key Jacket</button>
      </div>
    </div>
    <div class="large">
        <img src="https://picsum.photos/480/480" class="large zoom"/>
        <div className='button-background'>
        <button class="centered-btn">Room Key Jacket</button>
      </div>
    </div>
    <div  class="small">
        <img src="https://picsum.photos/230/230" class="small zoom"/>
        <div className='button-background'>
        <button class="centered-btn">Room Key Jacket</button>
      </div>
    </div>
    <div class="tall">
        <img src="https://picsum.photos/230/480" class="tall zoom"/>
        <div className='button-background'>
        <button class="centered-btn">Room Key Jacket</button>
      </div>
    </div>
    <div className='small'>
         <img src="https://picsum.photos/220/220" class="small zoom"/>
         <div className='button-background'>
        <button class="centered-btn">Room Key Jacket</button>
      </div>
    </div>
    {/* <div class="small">
        <img src="https://picsum.photos/230/230" class="small zoom"/>
        <div className='button-background'>
        <button class="centered-btn">Room Key Jacket</button>
      </div>
    </div>
    <div class="small">
        <img src="https://picsum.photos/230/230" class="small zoom"/>
        <div className='button-background'>
        <button class="centered-btn">Room Key Jacket</button>
      </div>
    </div>
    <div class="wide">
        <img src="https://picsum.photos/480/230" class="wide zoom"/>
        <div className='button-background'>
        <button class="centered-btn">Room Key Jacket</button>
      </div>
    </div> */}
   
</div>
  ]
]

const CategoryPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < galleries.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };



    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

  return (
   <>
     <div className='category-page'>
        <nav style={{
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
            <div className='tag-title-container'>
              <p className='tag-title'>WEDDING STATIONERY / DECOR</p>
              <p className='tag-sub-title'>Let our wedding stationery add a personal touch and set the tone for your big day, from welcome note to room key jacket to gift tags and thank you cards , we have it all .</p>
            </div>
           
        </nav>
          <hr className='line-extend'/>
        <nav class="breadcrumb">
            <a href="#">Home</a>
              <span> &gt;</span>
            <a href="#">Themes</a>
              <span> &gt;</span>
            <span class="current">All</span>
        </nav>
        <p className='page-details'>Showing {currentPage + 1} of {galleries.length}</p>
        {galleries[currentPage]}

          <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 0}>
              Previous
            </button>
            <button onClick={nextPage} disabled={currentPage === galleries.length - 1}>
              Next
            </button>
          </div>
        <div className='popular-decor'>
            <p className='popular-header'>POPULAR DECOR</p>
            <p className='popular-sub-header'>View All</p>
            <div class="popular-decor-wrapper">
                <button class="scroll-btn product-left" onClick={scrollLeft}>{"<"}</button>
                <div className='popular-decor-image-box'>
                    <div className='popular-decor-image-container'>
                        <div className='popular-decor-image'>
                            <img src="./assets/reception  2.svg"/> 
                        </div>
                        <p className='popular-decor-title'>Blue Mountain</p>
                        <p className='popular-decor-sub-title'>Hospitality Desk</p>
                    </div>
                    <div className='popular-decor-image-container'>
                        <div className='popular-decor-image'>
                            <img src="./assets/reception  2.svg"/> 
                        </div>
                        <p className='popular-decor-title'>Blue Mountain</p>
                        <p className='popular-decor-sub-title'>Hospitality Desk</p>
                    </div>
                    <div className='popular-decor-image-container'>
                        <div className='popular-decor-image'>
                            <img src="./assets/reception  2.svg"/> 
                        </div>
                        <p className='popular-decor-title'>Blue Mountain</p>
                        <p className='popular-decor-sub-title'>Hospitality Desk</p>
                    </div>
                    <div className='popular-decor-image-container'>
                        <div className='popular-decor-image'>
                            <img src="./assets/reception  2.svg"/> 
                        </div>
                        <p className='popular-decor-title'>Blue Mountain</p>
                        <p className='popular-decor-sub-title'>Hospitality Desk</p>
                    </div>
                    <div className='popular-decor-image-container'>
                        <div className='popular-decor-image'>
                            <img src="./assets/reception  2.svg"/> 
                        </div>
                        <p className='popular-decor-title'>Blue Mountain</p>
                        <p className='popular-decor-sub-title'>Hospitality Desk</p>
                    </div>
                    <div className='popular-decor-image-container'>
                        <div className='popular-decor-image'>
                            <img src="./assets/reception  2.svg"/> 
                        </div>
                        <p className='popular-decor-title'>Blue Mountain</p>
                        <p className='popular-decor-sub-title'>Hospitality Desk</p>
                    </div>
                    <div className='popular-decor-image-container'>
                        <div className='popular-decor-image'>
                            <img src="./assets/reception  2.svg"/> 
                        </div>
                        <p className='popular-decor-title'>Blue Mountain</p>
                        <p className='popular-decor-sub-title'>Hospitality Desk</p>
                    </div>
                    <div className='popular-decor-image-container'>
                        <div className='popular-decor-image'>
                            <img src="./assets/reception  2.svg"/> 
                        </div>
                        <p className='popular-decor-title'>Blue Mountain</p>
                        <p className='popular-decor-sub-title'>Hospitality Desk</p>
                    </div>
                </div>
                <button class="scroll-btn product-right" onClick={scrollRight}>{">"}</button>
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
          <div className='footer-container'>
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

export default CategoryPage