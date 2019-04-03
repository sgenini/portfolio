import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBCardImage } from "mdbreact";

// INDIVIDUAL PHOTOS
import bamazon from "./bamazon.gif";
import GifTastic from "./GifTastic.png";
import CrazyCrystalCollectors from "./CrazyCrystalCollectors.png";
import GuessThatFruit from "./GuessThatFruit.png";
import TriviaPotter from "./TriviaPotter.png";
import MemoryClick from "./MemoryClick.png";


const IndividualProjects = () => {
  return (
    <section id="projects" className="projects-page mb-4" style={{opacity: ".9", minHeight: "90vh"}}>
      <div className="py-5"></div>
      <MDBCol lg="10" className="mx-auto mt-4">
        <MDBRow>
          <MDBCol lg="6" className="mx-auto">
            <MDBCard className="shadow-box-example hoverable mb-4">
              <h1 className="mt-4 mb-3 text-lg-center" color="#FFFFFF"><strong><strong style={{fontFamily: "'Crimson Text', serif"}}>Individual</strong></strong></h1>
              <p className="px-3 pb-3">Check out some of my solo endeavors, from JavaScript browser-based <br /> games & apps to more developed web-based services!</p>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="6" className="shadow-box-example hoverable">
            <MDBCard>
              <MDBCardBody>
                {/* Bamazon */}
                <MDBCard style={{width: "90%"}} className="mx-auto mb-4 mt-3">
                  <MDBCardHeader>
                    <h5><strong>bAmazon<br /></strong><small>CLI-based Storefront and Inventory Management</small></h5>
                  </MDBCardHeader>
                  <MDBCardImage src={bamazon} className="img-fluid"/>
                  <MDBCardBody>
                    <p>bAmazon is a MySQL-database storefront, taking in orders from customers and depleting  stock from the store’s inventory. Additionally, we can program our app to track product sales across our store’s departments and then provide a summary of the highest-grossing departments in the store in the management and supervisor modes. Download the program and run it in a node shell.</p>
                    <a href="https://github.com/sgenini/bamazon" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </MDBCardBody>
                </MDBCard>
                
                {/* MemoryClick */}
                <MDBCard style={{width: "90%"}} className="mx-auto mb-4">
                  <MDBCardHeader>
                    <h5><strong>MemoryClick<br /></strong><small>A React.js Memory Game</small></h5>
                  </MDBCardHeader>
                  <MDBCardImage src={MemoryClick} className="img-fluid"/>
                  <MDBCardBody>
                    <p>The game will populate with twelve character cards in a randomized order. The objective is simple: click each character <strong>only once</strong>. The positions of each character will randomize again after each click. Don't click the same one twice, or the game will end and you'll have to start from 0! Try to beat your high score, or reach a perfect score of 12. Good luck!</p>
                    <a href="https://sgenini.github.io/TriviaGame/" target="_blank" rel="noopener noreferrer">Deployed</a> | <a href="https://github.com/sgenini/TriviaGame" target="_blank" rel="noopener noreferrer">GitHub</a>
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

          <MDBCol lg="6" className="shadow-box-example hoverable">
            <MDBCard>
              <MDBCardBody>
                
                {/* GifTastic */}
                <MDBCard style={{width: "90%"}} className="mx-auto mb-4 mt-3">
                  <MDBCardHeader>
                    <h5><strong>GifTastic<br /></strong><small>A Giphy API Web Application</small></h5>
                  </MDBCardHeader>
                  <MDBCardImage src={GifTastic} className="img-fluid"/>
                  <MDBCardBody>
                    <p>Tap into GIPHYs API to summon GIFs! Click the pre-generated buttons, or add your own categories! The app will return a collection of gifs, including their ratings -- simply click one to play!</p>
                    <a href="https://sgenini.github.io/giphy-api/" target="_blank" rel="noopener noreferrer">Deployed</a> | <a href="https://github.com/sgenini/giphy-api" target="_blank" rel="noopener noreferrer">GitHub</a>
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
              
                {/* Harry Potter Trivia */}
                <MDBCard style={{width: "90%"}} className="mx-auto mb-4">
                  <MDBCardHeader>
                    <h5><strong>Harry Potter Trivia<br /></strong><small>A Wizarding Wisdom Game</small></h5>
                  </MDBCardHeader>
                  <MDBCardImage src={TriviaPotter} className="img-fluid"/>
                  <MDBCardBody>
                    <p>You will be presented with a series of questions. Each question will have multiple choice or true/false answers. You will have 20 seconds to answer each question. The game will alert you if you were correct or incorrect. At the end of the game, your score will be revealed. You will have the option to restart the game to try and beat your score. Good luck, and have fun!</p>
                    <a href="https://sgenini.github.io/TriviaGame/" target="_blank" rel="noopener noreferrer">Deployed</a> | <a href="https://github.com/sgenini/TriviaGame" target="_blank" rel="noopener noreferrer">GitHub</a>
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

export default IndividualProjects;