import React, { Component } from 'react'
import './Styles/Style.css'
import logo from './assets/coffee.svg'
import Para1 from './assets/coffee-bag.svg'
import Para2 from './assets/spa.svg'
import Para3 from './assets/ecology-and-environment.svg'
import Para4 from './assets/cook.svg'
import Video from './assets/woman-drinking-coffee2.mp4'
import Arrow from './assets/down-arrow.svg'
import Paragraph from './Components/Paragraph';
import Button1 from './assets/hot-drinks (1).png'
import Button2 from './assets/hot-drinks (1).png'
import Card1 from './assets/1.jpeg'
import Card2 from './assets/2.jpeg'
import Card3 from './assets/3.jpeg'
import Card4 from './assets/4.jpeg'
import Card5 from './assets/5.jpeg'
import Card6 from './assets/6.jpeg'
import Card7 from './assets/7.jpeg'
import Card8 from './assets/8.jpeg'
import Card11 from './assets/11.jpeg'
import Card12 from './assets/12.jpeg'
import Card13 from './assets/13.jpeg'
import Card14 from './assets/14.jpeg'
import Card15 from './assets/15.jpeg'
import Card16 from './assets/16.jpeg'
import Card17 from './assets/17.jpeg'
import Card18 from './assets/18.jpeg'
import People1 from './assets/people_1.jpeg' 
import People2 from './assets/people_2.jpeg'
import People3 from './assets/people_3.jpeg'
import People4 from './assets/people_4.jpeg'
import People5 from './assets/people_5.jpeg'
import People6 from './assets/people_6.jpeg'
import Structure from './assets/Struct.jpg'
import Social1 from './assets/facebook.svg'
import Social2 from './assets/instagram.svg'
import Social3 from './assets/google.svg'
import Social4 from './assets/linkedin.svg'
import Social5 from './assets/whatsapp.svg'
import Media1 from './assets/instagram-red.svg'
import Media2 from './assets/facebook-red.svg'
import MenuCard from './Components/MenuCard';
import MenuCardGallery from './Components/MenuCardGallery';
import MenuSnacksGallery from './Components/MenuSnacksGallery';
import People from './Components/People';
import PeopleInfo from './Components/PeopleInfo';

function App (){        

  return(
    
    <>
  
    <header className="header">
    
        <div className="flex container">
            <a href="#"><img src={logo} height="30px"/></a>
            <nav className="nav">
                <a href="#">home</a>
                <a href="#">about us</a>
                <a href="#">discover</a>
                <a href="#">contact us</a>
            </nav>
        </div>
        <div className="heading">
            <h1>Crafted Coffees</h1>
            <h3>"Coffee पे चर्चा"</h3>
        </div>
        <div className="arrow"><a href="#"><img src={Arrow}/></a></div>
    </header>
    <div className="divider"></div>

   
  
    <section>
        <div className="flex_para">
            <Paragraph>
                <center><img src={Para1} alt="" height="45px"/></center>
                <h3 className="first">made in us</h3>
                <p className="first_p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
                    porro.</p>
            </Paragraph>

            <Paragraph>
                <center><img src={Para2} alt="" height="45px"/></center>
                <h3 className="first">relaxation</h3>
                <p className="first_p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
                    porro.</p>
            </Paragraph>

            <Paragraph>
                <center><img src={Para3} alt="" height="45px"/></center>
                <h3 className="first">energy</h3>
                <p className="first_p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
                    porro.</p>
            </Paragraph> 

            <Paragraph>
                <center><img src={Para4} alt="" height="45px"/></center>
                <h3 className="first first_h">family recipe</h3>
                <p className="first_p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
                    porro.</p>
            </Paragraph>
        </div>
    </section>

    <section className="flex">
        <article className="container3">
            <div>
                <video autoPlay muted loop id="video" src={Video}></video>
            </div>
        </article>

        <article className="container3">
            <h3 className="second_h">ABOUT</h3>
            <h2>Crafted Coffee's</h2
            >
            <p className="second_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dolores.</p>
            <p className="second_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dolores.</p>
            <a className="btn" href="#">LEARN</a>
        </article>
    </section>

    <section>
        <div className="menu_bg">
            <div className="third_h">
                <h1>Discover</h1>
                <h3>O U R &nbsp; M E N U</h3>
            </div>
        </div>
    </section>

    <section className="hr_container">
        <div className="hr_btn">
            <hr className="hr"/>
        </div>
        <button type="button" id="drinks" onclick="switchDrinksBtn()" className="button"><img src={Button1}
                alt="" class="img_circle"/></button>
        <button type="button" id="snacks" onclick="switchSnacksBtn()" className="button"><img src={Button2} alt=""
                className="img_circle"/></button>
        <div className="hr_btn">
            <hr className="hr"/>
        </div>
    </section>
    
    <section>
    <div id="id-menu-drinks" class="menu-drinks">
        <section class="flex">
   
        <MenuCardGallery
        href="1.jpeg"
        image={Card1} 
        alt=""
        />
       
       
        <MenuCardGallery
        href="2.jpeg"
        image={Card2} 
        alt=""
        />
       
      
        <MenuCardGallery
        href="3.jpeg"
        image={Card3} 
        alt=""
        />
       
     
        <MenuCardGallery
        href="4.jpeg"
        image={Card4} 
        alt=""
        />
       
      
        <MenuCardGallery
        href="5.jpeg"
        image={Card5} 
        alt=""
        />
       
        <MenuCardGallery
        href="6.jpeg"
        image={Card6} 
        alt=""
        />
       
        <MenuCardGallery
        href="7.jpeg"
        image={Card7} 
        alt=""
        />
       
        <MenuCardGallery
        href="8.jpeg"
        image={Card8} 
        alt=""
        />
        </section>
        </div>
        
       
       
       </section>
       
       {/*<section>
       <MenuCard>
        <MenuSnacksGallery
        href="11.jpeg"
        image={Card11} 
        alt=""
        />
       </MenuCard>
       <MenuCard>
        <MenuSnacksGallery
        href="12.jpeg"
        image={Card12} 
        alt=""
        />
       </MenuCard>
       <MenuCard>
        <MenuSnacksGallery
        href="13.jpeg"
        image={Card13} 
        alt=""
        />
       </MenuCard>
       <MenuCard>
        <MenuSnacksGallery
        href="14.jpeg"
        image={Card14} 
        alt=""
        />
       </MenuCard>
       <MenuCard>
        <MenuSnacksGallery
        href="15.jpeg"
        image={Card15} 
        alt=""
        />
       </MenuCard>
       <MenuCard>
        <MenuSnacksGallery
        href="16.jpeg"
        image={Card16} 
        alt=""
        />
       </MenuCard>
       <MenuCard>
        <MenuSnacksGallery
        href="17.jpeg"
        image={Card17} 
        alt=""
        />
       </MenuCard>
       <MenuCard>
        <MenuSnacksGallery
        href="18.jpeg"
        image={Card18} 
        alt=""
        />
       </MenuCard>
       </section>*/}
    

       <section className="flex_para container">
        <article className="basis">
            <h3 class="title">YOUR RESPONSE</h3>
            <form>
                <label for="fname">Name</label><br/>
                <input type="text" id="fname" name="firstname" placeholder="Alex Hunter" required="Name" /><br/>
                <label for="city">City</label><br/>
                <input type="text" id="city" name="cityname" placeholder="City Name" required="City Name" /><br/>
                <label for="mail">E-Mail</label><br/>
                <input type="email" id="email" name="mail" placeholder="alexhunter@xyz.com" required="Email" />
                <label for="subject">Rate Us:</label><br/>
                <fielset>
                    <input type="radio" id="star1" name="rating" value="1" />
                    <label for="star1" title=""></label>
                    <input type="radio" id="star2" name="rating" value="2" />
                    <label for="star2" title=""></label>
                    <input type="radio" id="star3" name="rating" value="3" />
                    <label for="star3" title=""></label>
                    <input type="radio" id="star4" name="rating" value="4" />
                    <label for="star4" title=""></label>
                    <input type="radio" id="star5" name="rating" value="5" />
                    <label for="star5" title=""></label>
                </fielset><br></br>

                <label for="subject">Your Reviews</label><br/>
                <textarea id="feedback" name="feedback" placeholder="Your Thoughts" styles={{height:"120px"}}
                    cols="73"></textarea>

                <p><input type="submit" value="SUBMIT"/></p>
            </form>
        </article>
        <article className="basis">
            <h3 className="title">TESTIMONIAL</h3>
            <div className="sliders">
            <People>
            <PeopleInfo
             href="people_1.jpeg"
             image={People1} 
             alt=""
             inst={Media1}
             face={Media2}
            />
            </People>
            <People>
            <PeopleInfo
             href="people_2.jpeg"
             image={People2} 
             alt=""
             inst={Media1}
             face={Media2}
            />
            </People>
           {/* <People>
            <PeopleInfo
             href="people_3.jpeg"
             image={People3} 
             alt=""
             inst={Media1}
             face={Media2}
            />
            </People>
            <People>
            <PeopleInfo
             href="people_4.jpeg"
             image={People4} 
             alt=""
             inst={Media1}
             face={Media2}
            />
            </People>
            <People>
            <PeopleInfo
             href="people_5.jpeg"
             image={People5} 
             alt=""
             inst={Media1}
             face={Media2}
            />
            </People>
            <People>
            <PeopleInfo
             href="people_6.jpeg"
             image={People6} 
             alt=""
             inst={Media1}
             face={Media2}
            />
            </People>*/}
                
            </div>
            <br/>
            <br/>
            <div styles={{textAlign:"center"}}>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </article>
    </section>

    <section className="contact-template" id="id-contact">
        <h1 className="contact-title">Contact</h1>
        <br/><center><h3 className="menu-subtitle">L O C A T E&nbsp;&nbsp;U S</h3></center>
    </section>
    

    <section className="flex">
          <article className="contact-map" >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.435760888755!2d72.81818205068974!3d22.60019718757948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7571b60b6c28001b!2sDevang%20Patel%20Institute%20of%20Advance%20Technology%20and%20Research!5e0!3m2!1sen!2sin!4v1578498063542!5m2!1sen!2sin" width="600" height="450" frameborder="0" styles="border:0;" allowfullscreen=""
            ></iframe>
          </article>

          <article className="contact-img" >
            <div className="opening-container">
              <img src={Structure} alt="" styles={{width:"50%"}}/>
              <div className="opening-text ">
                <h3>O P E N&nbsp;&nbsp;H O U R S</h3>
                  <p>
                    <strong>Monday: Closed</strong><br/>
                    <strong>Tuesday to Friday</strong><br/>
                    7:00 AM - 9:00 PM<br/>
                    <strong>Saturday & Sunday</strong><br/>
                    11:00 AM - 10:00 PM
                  </p>
              </div>
            </div>
          </article>
        </section>
     
       
    <section> 
        <center>
            <div className="contact-social">
                <a className="contact-social-icons" href="#"><img src={Social1} weight="25" title="facebook" height="25"/></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a className="contact-social-icons" href="#"><img src={Social2} weight="25" title="instagram" height="25"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a className="contact-social-icons" href="#"><img src={Social3} weight="25" title="gmail" height="25"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a className="contact-social-icons" href="#"><img src={Social4} weight="25" title="gmail" height="25"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a className="contact-social-icons" href="#"><img src={Social5} weight="25" title="whatsapp" height="25"/></a> 
            </div><br/>
            <div>
            <p className="para-settings">Copyright © 2020 | <a className="colorcover-link" href="#" styles={{color:"black"}}>Crafted Coffee's</a></p><br></br>
          </div>
        </center>
    </section>
   
    </>
  );
}
export default App;
