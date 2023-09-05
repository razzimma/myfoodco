import React  from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'
import firstimage from "./component/foodpic/bacggggg.jpg";
import secondimage from "./component/foodpic/foodco3.jpeg";
import thirdimage from "./component/foodpic/bakggggg.jpg";
import fourthimage from "./component/foodpic/bakggggggg.jpg";
import fifthimage from "./component/foodpic/bakg.jpg";
import sixthimage from "./component/foodpic/bakgggggggg.jpg";
import seventhimage from "./component/foodpic/bakggg.jpg";
import eightimage from "./component/foodpic/bakgg.jpg";
import ninthimage from "./component/foodpic/bacggg.jpg";
import ninth from "./component/foodpic/trance.jpg";
import tenth from "./component/foodpic/trancee.jpg";
import eleventh from "./component/foodpic/tranceee.jpg";
import twelfth from "./component/foodpic/tranceeee.jpg";
import thirteenth from "./component/foodpic/tranceeeee.jpg";
import 'boxicons/css/boxicons.min.css';
// import fourteenth from "./component/foodpic/adeypic.jpeg";




export const Home = () => {
    return(
        <div>
           
          
                <header>

                <nav class="navbar  fixed-top">
  <div class="container-fluid">
    <img className="image" src={secondimage} alt="" />
    <a class="navbar-brand" href="#">AS COOKING</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">SHOP</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              ABOUT
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">CUSTOMER</a></li>
              <li><a class="dropdown-item" href="#">CONTACT</a></li>
              <li>
                <hr class="dropdown-divider"></hr>
              </li>
              {/* <li><a class="dropdown-item" href="#"></a></li> */}
            </ul>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
                
                    {/* <a href="#" className="logo"><img className="image" src={secondimage} alt="" />A.S COOKING</a>
                    <div className="bx bx-menu" id="menu-icon"></div> */}

                    {/* <ul className="navbar">
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#shop">SHOP</a></li>
                        <li><a href="#customer">CUSTOMER</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                    </ul> */}
                </header>

                        <section className="home" id="home">
                            <div className="home-text">
                                <span>Welcome To Our</span>
                                <h1>Delicious Food       <br />  Collection!</h1>
                                <p>We serve you the best delicacy that worth every penny you pay and with your trust in us we're not going to let you down. Your satisfaction is our main aim</p>
                                <a href="#" className="btn">Our Menu</a>
                            </div>
                            {/* <div className="home-img">
                                <img className="imagess" src="" alt="" />
                            </div> */}
                        </section>
                        <section className="about" id="about">
                            <h1>Today's Deal</h1>

                            <div className="about-container">
                                <div className="about-box">
                                    <div className="box-img">
                                        <img src={thirdimage} alt="" />
                                    </div>
                                    <h2>Vanilla Cake</h2>
                                    <h3>$30</h3>
                                </div>
                                <div className="about-box">
                                    <div className="box-img">
                                        <img className="boximg" src={fourthimage} alt="" />
                                    </div>
                                    <h2>Steak & Brocolli</h2>
                                    <h3>$40</h3>
                                </div>
                                <div className="about-box">
                                    <div className="box-img">
                                        <img src={fifthimage} alt="" />
                                    </div>
                                    <h2>Lamb Chop</h2>
                                    <h3>$25</h3>
                                </div>
                                <div className="about-box">
                                    <div className="box-img">
                                        <img src={sixthimage} alt="" />
                                    </div>
                                    <h2>Pasta</h2>
                                    <h3>$21</h3>
                                </div>
                            </div>
                        </section>
                        <section className="shop" id="shop">
                            <div className="heading">
                                <h2>Food Shop</h2>
                                <p>What will you like to have today?</p>
                            </div>
                            <div className="shop-container">
                                <div className="shop-box">
                                    <div className="shop-img">
                                        <img src={eightimage} alt="" />
                                    </div>
                                    <h3>Tasty Food</h3>
                                    <h2>$50</h2>
                                    <i class='bx bxs-cart'></i>
                                </div>
                                <div className="shop-box">
                                    <div className="shop-img">
                                        <img src={ninthimage} alt="" />
                                    </div>
                                    <h3>Tasty Food</h3>
                                    <h2>$50</h2>
                                    <i class='bx bxs-cart'></i>
                                </div>
                                <div className="shop-box">
                                    <div className="shop-img">
                                        <img src={thirdimage} alt="" />
                                    </div>
                                    <h3>Tasty Food</h3>
                                    <h2>$50</h2>
                                    <i class='bx bxs-cart'></i>
                                </div>
                                <div className="shop-box">
                                    <div className="shop-img">
                                        <img src={seventhimage} alt="" />
                                    </div>
                                    <h3>Tasty Food</h3>
                                    <h2>$50</h2>
                                    <i class='bx bxs-cart'></i>
                                </div>
                                <div className="shop-box">
                                    <div className="shop-img">
                                        <img src={fifthimage} alt="" />
                                    </div>
                                    <h3>Tasty Food</h3>
                                    <h2>$50</h2>
                                    <i class='bx bxs-cart'></i>
                                </div>
                                <div className="shop-box">
                                    <div className="shop-img">
                                        <img src={sixthimage} alt="" />
                                    </div>
                                    <h3>Tasty Food</h3>
                                    <h2>$50</h2>
                                    <i class='bx bxs-cart'></i>
                                </div>
                                <div className="shop-box">
                                    <div className="shop-img">
                                        <img src={fourthimage} alt="" />
                                    </div>
                                    <h3>Tasty Food</h3>
                                    <h2>$50</h2>
                                    <i class='bx bxs-cart'></i>
                                </div>
                                <div className="shop-box">
                                    <div className="shop-img">
                                        <img src={firstimage} alt="" />
                                    </div>
                                    <h3>Tasty Food</h3>
                                    <h2>$50</h2>
                                    <i class='bx bxs-cart'></i>
                                </div>
                                
                            </div>
                        </section>
                        <section className="customer" id="customer">
                            <div className="heading">
                                <h2>Our Customers</h2>
                                <p>We truly appreciate all our customers for your continous patronage </p>
                            </div>
                            <div className="customer-container">
                                <div className="box">
                                    <img src={ninth} alt="" />
                                    <div className="stars">
                                    <i class='bx bxs-star' ></i>
                                    <i class='bx bxs-star' ></i>
                                    <i class='bx bxs-star' ></i>
                                    <i class='bx bxs-star' ></i>
                                    </div>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur eveniet tenetur esse sequi numquam?</p>
                                    <h2>Jackson Durella</h2>
                                </div>
                                <div className="box">
                                    <img src={tenth} alt="" />
                                    <div className="stars">
                                    <i class='bx bxs-star' ></i>
                                    <i class='bx bxs-star' ></i>
                                    <i class='bx bxs-star' ></i>
                                    </div>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur eveniet tenetur esse sequi numquam?</p>
                                    <h2>Clinton Harry</h2>
                                </div>
                                <div className="box">
                                    <img src={eleventh} alt="" />
                                    <div className="stars">
                                    <i class='bx bxs-star' ></i>
                                    <i class='bx bxs-star' ></i>
                                    </div>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur eveniet tenetur esse sequi numquam?</p>
                                    <h2>Diane Jill</h2>
                                </div>
                                <div className="box">
                                    <img src={twelfth} alt="" />
                                    <div className="stars">
                                    <i class='bx bxs-star' ></i>
                                    <i class='bx bxs-star' ></i>
                                    <i class='bx bxs-star' ></i>
                                    <i class='bx bxs-star' ></i>
                                    <i class='bx bxs-star' ></i>
                                    </div>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur eveniet tenetur esse sequi numquam?</p>
                                    <h2>John Bragg</h2>
                                </div>
                            </div>
                        </section>
                        <section className="contact" id="contact">
                        <div className="heading">
                                <h2>Contact Us</h2>
                                <p>You can reach us through the following </p>
                            </div>
                            <div className="contact-container">
                                <div className="contact-info">
                                    <h2>Get In Touch</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <div className="address">
                                        
                                        <i className="bx bxs-map"><span>44 Franconia Ave, OH 43301</span></i>
                                        <i className="bx bxs-phone"><span>+44 75657 9585</span></i>
                                        <i className="bx bxs-envelope"><span>Contact@AScooking.com</span></i>
                                        
                                    </div>
                                    <div className="social">
                                            <a href="#"><i className="bx bxl-facebook"></i></a>
                                            <a href="#"><i className="bx bxl-twitter"></i></a>
                                            <a href="#"><i className="bx bxl-instagram"></i></a>
                                           
                                    </div>
                                </div>
                                <div className="contact-form">
                                    <form action="">
                                        <input type="text" placeholder="Name" />
                                        <input type="email" name="" id="" placeholder="Email" />
                                        <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                                        <input className="btn" type="button" value="Submit" />
                                    </form>
                                </div>
                            </div>
                        </section>
                        <div className="copyright">
                            <p>&#169; Razzimma All Right Reserved. </p>
                        </div>

         
        </div>
    )
}