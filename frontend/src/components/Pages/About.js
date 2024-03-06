import React from 'react'
import "./About.css"
import ajay from '../../assets/ajay.jpg'
import aneesh from '../../assets/aneesh.jpeg'
import ram from '../../assets/ram.jpg'
import singh from '../../assets/singh.jpg'

export const About = () => {
  let message = `The team which has worked behind this project\n for the betterment of the society.`;

    return (
      <section class="section-white">
 
    <div class="container">
 
        <div class="row">
       
                    <div class="col-md-12 text-center">

                          <h2 class="section-title">The Team</h2>

                          <p class="section-subtitle">{message}</p>
                          
                    </div> 
             
            <div class="col-sm-6 col-md-4">

                  <div class="team-item">
                  
                      <img src={aneesh} class="team-img" alt="pic" />                   
                      <h3>ANEESH K P</h3>            
                      <div class="team-info"><p>1BM22CS040</p></div>
                      <p>Aneesh is our  co-founder and has developed search strategies for a variety of clients from international brands to medium sized businesses for over five years.</p>
                  
                      <ul class="team-icon">
                      
                          <li><a href="#" class="twitter">
                            <i class="fa fa-twitter"></i>
                        </a></li>
                          
                          <li><a href="#" class="pinterest">
                            <i class="fa fa-pinterest"></i>
                        </a></li>
                          
                          <li><a href="#" class="facebook">
                            <i class="fa fa-facebook"></i>
                        </a></li>
                          
                          <li><a href="#" class="dribble">
                            <i class="fa fa-dribbble"></i>
                        </a></li>
                          
                      </ul>
                      
                  
                </div>
            </div> 
              
            <div class="col-sm-6 col-md-4">

                  <div class="team-item">
                  
                      <img src={ajay} class="team-img" alt="pic" />
                     
                      <h3>AJAY N M</h3>
                      
                      <div class="team-info"><p>1BM22CS026</p></div>

                      <p>With a spcealization in Spanish and English, Ajay has always loved writing and now he's lucky enough to do it as part of her new job inside our agency.</p>
                  
                      <ul class="team-icon">
                      
                          <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
                          
                          <li><a href="#" class="pinterest"><i class="fa fa-pinterest"></i></a></li>
                          
                          <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
                          
                          <li><a href="#" class="dribble"><i class="fa fa-dribbble"></i></a></li>
                          
                      </ul>
                      
                  </div>

            </div> 
            <div class="col-sm-6 col-md-4">
                  <div class="team-item">
                  
                      <img src={singh} class="team-img" alt="pic" />
                     
                      <h3>ADITHYA SINGH</h3>
                      
                      <div class="team-info"><p>1BM22CS022</p></div>

                      <p>Adithya Singh with a degree in Spanish and English, he has always loved interacting and now he's lucky enough to do it as part of her new job inside our agency.</p>
                  
                      <ul class="team-icon">
                      
                          <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
                          
                          <li><a href="#" class="pinterest"><i class="fa fa-pinterest"></i></a></li>
                          
                          <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
                          
                          <li><a href="#" class="dribble"><i class="fa fa-dribbble"></i></a></li>
                          
                      </ul>
                      
                  </div>

            </div> 
            <div class="col-sm-6 col-md-4" id="last">

                  <div class="team-item">
                  
                      <img src={ram} class="team-img" alt="pic" />
                     
                      <h3>ADITHYA RAM S H</h3>
                      
                      <div class="team-info"><p>1BM22CS019</p></div>

                      <p>Adithya Ram first fell in love with digital marketing at the university. He loves to learn, and looks forward to being part of this new exciting industry for many years.</p>
                  
                      <ul class="team-icon">
                      
                          <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
                          
                          <li><a href="#" class="pinterest"><i class="fa fa-pinterest"></i></a></li>
                          
                          <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
                          
                          <li><a href="#" class="dribble">
                            <i class="fa fa-dribbble"></i>
                        </a></li>
                          
                      </ul>
                      
                  </div>

            </div> 
        
        </div> 
    
    </div> 

    </section>
  );
};

export default About;
