import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBContainer, MDBCarousel, MDBCardHeader, MDBCardImage, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from "mdbreact";

// CREST PHOTOS
import crestWelcome from "./Crest/images/welcome.png";
import crestWelcome2 from "./Crest/images/welcomepage2.png";
import crestHome from "./Crest/images/home.png";
import crestDiversity from "./Crest/images/portfolio-diversity.png";
import crestSummary from "./Crest/images/portfolio-summary.png";
import crestTrading from "./Crest/images/trade.png";
import crestWatchlist from "./Crest/images/watchlist.png";

// PAWSTAGRAM PHOTOS
import pawsLogin from "./Pawstagram/images/Login.png";
import pawsUser from "./Pawstagram/images/User.png";
import pawsPet from "./Pawstagram/images/Pet.png";
import pawsComm from "./Pawstagram/images/Community.png";

// NOSH PHOTOS
import noshHome from "./Nosh/images/Home.png";
import noshRecipe from "./Nosh/images/Recipe.png";
import noshShopping from "./Nosh/images/Shopping.png";

// INDIVIDUAL PHOTOS
import bamazon from "./Individual/bamazon.gif";
import GifTastic from "./Individual/GifTastic.png";
import GuessThatFruit from "./Individual/GuessThatFruit.png";
import CrazyCrystalCollectors from "./Individual/CrazyCrystalCollectors.png";


const Projects = () => {
  return (
    <section id="projects" className="projects-page mt-4 mb-4" style={{opacity: ".9", minHeight: "90vh", borderBottom: "3px solid white"}}>
      <MDBContainer style={{width:"80%", minHeight: "0vh"}}>
        <MDBCard className="shadow-box-example hoverable">
          <MDBRow>
            <MDBCol lg="12" className="mx-auto">
              <h1 className="mt-4 mb-3 text-lg-center" color="#FFFFFF"><strong><strong style={{fontFamily: "'Crimson Text', serif"}}>Development Projects</strong></strong></h1>
              <p className="px-4">Feel free to check out some of these projects I've worked on as I learned to code! <br />
              I'll be adding to this page periodically as I continue to develop projects.</p>
              <h1><MDBIcon className="" fab icon="codepen" /></h1>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>

      <MDBCol lg="11" className="mx-auto mt-4">
        <MDBRow>
          <MDBCol lg="6" className="mx-auto">
            <MDBCard className="shadow-box-example hoverable mb-4">
              <h1 className="mt-4 mb-3 text-lg-center" color="#FFFFFF"><strong><strong style={{fontFamily: "'Crimson Text', serif"}}>Collaborative</strong></strong></h1>
              <p className="px-4">This is a collection of work that I've developed as part of a team, <br /> group, or pair programming approach.</p>
              <hr style={{width: "60%"}} className="mx-auto" />
              <MDBCardBody>
                
                {/* Crest */}
                <MDBCard style={{width: "90%"}} className="mx-auto mb-4">
                  <MDBCardHeader>
                    <h5><strong>Crest<br /></strong><small>Market Trading. Simplified.</small></h5>
                  </MDBCardHeader>
                    <MDBCarousel activeItem={1} length={7} showControls={true} showIndicators={true} className="z-depth-1">
                      <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                          <MDBView>
                            <img className="d-block w-100" src={crestWelcome} alt="Landing Page" />
                            <MDBMask overlay="black-slight" />
                          </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                          <MDBView>
                            <img className="d-block w-100" src={crestWelcome2} alt="Landing Page (cont.)" />
                            <MDBMask overlay="black-slight" />
                          </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                          <MDBView>
                            <img className="d-block w-100" src={crestHome} alt="Home Page" />
                            <MDBMask overlay="black-slight" />
                          </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="4">
                          <MDBView>
                            <img className="d-block w-100" src={crestDiversity} alt="Portfolio Diversity" />
                            <MDBMask overlay="black-slight" />
                          </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="5">
                          <MDBView>
                            <img className="d-block w-100" src={crestSummary} alt="Portfolio Summary" />
                            <MDBMask overlay="black-slight" />
                          </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="6">
                          <MDBView>
                            <img className="d-block w-100" src={crestTrading} alt="Trading Page" />
                            <MDBMask overlay="black-slight" />
                          </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="7">
                          <MDBView>
                            <img className="d-block w-100" src={crestWatchlist} alt="Watchlist Page" />
                            <MDBMask overlay="black-slight" />
                          </MDBView>
                        </MDBCarouselItem>
                      </MDBCarouselInner>
                    </MDBCarousel>
                  <MDBCardBody>
                    <p>Develop your own portfolio from our pre-allocated budget and track its performance over time. Practice and hone your trading strategies using real-time stock market data, all delivered through IEX Trading's reliable and accurate API.</p>
                    <a href="https://crest-trading.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed</a> | <a href="https://github.com/sgenini/Crest" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </MDBCardBody>
                </MDBCard>
                
                {/* Pawstagram */}
                <MDBCard style={{width: "90%"}} className="mx-auto mb-4">
                  <MDBCardHeader>
                    <h5><strong>Pawstagram<br /></strong><small>Pet-Centric Social Media</small></h5>
                  </MDBCardHeader>
                    <MDBCarousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1">
                      <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                          <MDBView>
                            <img className="d-block w-100" src={pawsLogin} alt="Login page" />
                            <MDBMask overlay="black-slight" />
                          </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                          <MDBView>
                            <img className="d-block w-100" src={pawsUser} alt="User Profile Page" />
                            <MDBMask overlay="black-slight" />
                          </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                          <MDBView>
                            <img className="d-block w-100" src={pawsPet} alt="Pet Profile Page" />
                            <MDBMask overlay="black-slight" />
                          </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="4">
                          <MDBView>
                            <img className="d-block w-100" src={pawsComm} alt="Community Page" />
                            <MDBMask overlay="black-slight" />
                          </MDBView>
                        </MDBCarouselItem>
                      </MDBCarouselInner>
                    </MDBCarousel>
                  <MDBCardBody>
                    <p>Pawstagram is a full-stack social media web based application that enable users to show off photos of their pets, comment on each other’s pets and join communities with other like minded individuals to chat with and meet up with. Communities can be anything from "San Francisco Dog Joggers" to "Cats wearing Hats" and are user-created.</p>
                    <a href="https://pawstagram.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed</a> | <a href="https://github.com/sgenini/Pawstagram" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </MDBCardBody>
                </MDBCard>
                
                {/* Nosh */}
                <MDBCard style={{width: "90%"}} className="mx-auto mb-4">
                  <MDBCardHeader>
                    <h5><strong>/näSH/<br /></strong><small>A Dynamic Recipe Assistant</small></h5>
                  </MDBCardHeader>
                    <MDBCarousel activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1">
                      <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                          <MDBView>
                            <img className="d-block w-100" src={noshHome} alt="Home Page" />
                            <MDBMask overlay="black-slight" />
                          </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                          <MDBView>
                            <img className="d-block w-100" src={noshRecipe} alt="Recipe Page" />
                            <MDBMask overlay="black-slight" />
                          </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                          <MDBView>
                            <img className="d-block w-100" src={noshShopping} alt="Shopping Page" />
                            <MDBMask overlay="black-slight" />
                          </MDBView>
                        </MDBCarouselItem>
                      </MDBCarouselInner>
                    </MDBCarousel>
                  <MDBCardBody>
                    <p>Nosh is your go-to recipe assistant. Simply tell us what dish you're trying to make, or what ingredients you already have, and we will recommend recipes that fit your criteria! Nosh will give you all the information you need, making your next meal as easy as can be!</p>
                    <a href="https://sgenini.github.io/nosh/" target="_blank" rel="noopener noreferrer">Deployed</a> | <a href="https://github.com/sgenini/nosh" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </MDBCardBody>
                </MDBCard>
                
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="6" className="mx-auto">
            <MDBCard className="shadow-box-example hoverable">
              <h1 className="mt-4 mb-3 text-lg-center" color="#FFFFFF"><strong><strong style={{fontFamily: "'Crimson Text', serif"}}>Individual</strong></strong></h1>
              <p className="px-3">Check out some of my solo endeavors, from JavaScript browser-based <br /> games & apps to more developed web-based services!</p>
              <hr style={{width: "60%"}} className="mx-auto" />
              <MDBCardBody>
              
                {/* Bamazon */}
                <MDBCard style={{width: "90%"}} className="mx-auto mb-4">
                  <MDBCardHeader>
                    <h5><strong>bAmazon<br /></strong><small>CLI-based Storefront and Inventory Management</small></h5>
                  </MDBCardHeader>
                  <MDBCardImage src={bamazon} className="img-fluid"/>
                  <MDBCardBody>
                    <p>bAmazon is a MySQL-database storefront, taking in orders from customers and depleting  stock from the store’s inventory. Additionally, we can program our app to track product sales across our store’s departments and then provide a summary of the highest-grossing departments in the store in the management and supervisor modes. Download the program and run it in a node shell.</p>
                    <a href="https://github.com/sgenini/bamazon" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </MDBCardBody>
                </MDBCard>
              
                {/* Crazy Crystal Collectors */}
                <MDBCard style={{width: "90%"}} className="mx-auto mb-4">
                  <MDBCardHeader>
                    <h5><strong>Crazy Crystal Collectors<br /></strong><small>A Mathematical Matching Game</small></h5>
                  </MDBCardHeader>
                  <MDBCardImage src={CrazyCrystalCollectors} className="img-fluid"/>
                  <MDBCardBody>
                    <p>You will be assigned a Goal Number at the start of the game. Click on the Crystals below to add its specific amount of points to your Current Number. You win the game by matching your Current Number to the Goal Number chosen. You lose the game if your Current Number surpasses the Goal Number. PS- The values of the crystals are hidden. (Use arithmetic to figure out each crystal's value!) Each new round, the game will randomize the Goal Number and the values of the Crystals. Good luck, and have fun!</p>
                    <a href="https://sgenini.github.io/CrazyCrystalCollectors/" target="_blank" rel="noopener noreferrer">Deployed</a> | <a href="https://github.com/sgenini/CrazyCrystalCollectors" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </MDBCardBody>
                </MDBCard>
              
                {/* GifTastic */}
                <MDBCard style={{width: "90%"}} className="mx-auto mb-4">
                  <MDBCardHeader>
                    <h5><strong>GifTastic<br /></strong><small>A Giphy API Web Application</small></h5>
                  </MDBCardHeader>
                  <MDBCardImage src={GifTastic} className="img-fluid"/>
                  <MDBCardBody>
                    <p>Tap into GIPHYs API to summon GIFs! Click the pre-generated buttons, or add your own categories! The app will return a collection of gifs, including their ratings -- simply click one to play!</p>
                    <a href="https://sgenini.github.io/giphy-api/" target="_blank" rel="noopener noreferrer">Deployed</a> | <a href="https://github.com/sgenini/giphy-api" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </MDBCardBody>
                </MDBCard>
              
                {/* Guess That Fruit */}
                <MDBCard style={{width: "90%"}} className="mx-auto mb-4">
                  <MDBCardHeader>
                    <h5><strong>Guess That Fruit<br /></strong><small>A Hangman Style Browser Game</small></h5>
                  </MDBCardHeader>
                  <MDBCardImage src={GuessThatFruit} className="img-fluid"/>
                  <MDBCardBody>
                    <p>Use your keyboard to type a letter. If the letter is in the word, it will update to show where it appears in the word. If the letter is not in the word, you will lose a guess and it will appear in the "Wrong Guesses" section. Keep guessing until you complete the word, or you run out of guesses. Completed words will count as a win, whereas running out of guesses will count as a loss. Good luck!</p>
                    <a href="https://sgenini.github.io/word-guess-game/" target="_blank" rel="noopener noreferrer">Deployed</a> | <a href="https://github.com/sgenini/word-guess-game" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </MDBCardBody>
                </MDBCard>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBCol> 

    </section>
  );
}

export default Projects;