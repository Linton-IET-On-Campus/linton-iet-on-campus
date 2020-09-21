import React from 'react';
import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import { Footer } from '../../components/Footer';

const Styles = styled.div`

    .liet{
        text-align: center;
    }

    section {
        padding: 60px 0;
        min-height: 100vh;
    }
    a, a:hover, a:focus, a:active {
        text-decoration: none;
        outline: none;
    }
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }.bg-gray {
        background-color: #f9f9f9;
    }
    
    .site-heading h2 {
      display: block;
      font-weight: 700;
      margin-bottom: 10px;
      text-transform: uppercase;
    }
    
    .site-heading h2 span {
      color: #EF9125;
    }
    
    .site-heading h4 {
      display: inline-block;
      padding-bottom: 20px;
      position: relative;
      text-transform: capitalize;
      z-index: 1;
    }
    
    .site-heading h4::before {
      background: #EF9125 none repeat scroll 0 0;
      bottom: 0;
      content: "";
      height: 2px;
      left: 50%;
      margin-left: -25px;
      position: absolute;
      width: 50px;
    }
    
    .site-heading {
      margin-bottom: 60px;
      overflow: hidden;
      margin-top: -5px;
    }
    
    .carousel-shadow .owl-stage-outer {
      margin: -15px -15px 0;
      padding: 15px;
    }
    
    .we-offer-area .our-offer-carousel .owl-dots .owl-dot span {
      background: #ffffff none repeat scroll 0 0;
      border: 2px solid;
      height: 15px;
      margin: 0 5px;
      width: 15px;
    }
    
    .we-offer-area .our-offer-carousel .owl-dots .owl-dot.active span {
      background: #EF9125 none repeat scroll 0 0;
      border-color: #EF9125;
    }
    
    .we-offer-area .item {
      background: #ffffff none repeat scroll 0 0;
      border-left: 2px solid #EF9125;
      -moz-box-shadow: 0 0 10px #cccccc;
      -webkit-box-shadow: 0 0 10px #cccccc;
      -o-box-shadow: 0 0 10px #cccccc;
      box-shadow: 0 0 10px #cccccc;
      overflow: hidden;
      padding: 30px;
      position: relative;
      z-index: 1;
    }
    
    .we-offer-area.text-center .item {
      background: #ffffff none repeat scroll 0 0;
      border: medium none;
      padding: 67px 40px 64px;
    }
    
    .we-offer-area.text-center .item i {
      background: #EF9125 none repeat scroll 0 0;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      color: #ffffff;
      font-size: 40px;
      height: 80px;
      line-height: 80px;
      position: relative;
      text-align: center;
      width: 80px;
      z-index: 1;
      transition: all 0.35s ease-in-out;
      -webkit-transition: all 0.35s ease-in-out;
      -moz-transition: all 0.35s ease-in-out;
      -ms-transition: all 0.35s ease-in-out;
      -o-transition: all 0.35s ease-in-out;
      margin-bottom: 25px;
    }
    
    .we-offer-area.text-center .item i::after {
      border: 2px solid #EF9125;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      content: "";
      height: 90px;
      left: -5px;
      position: absolute;
      top: -5px;
      width: 90px;
      z-index: -1;
      transition: all 0.35s ease-in-out;
      -webkit-transition: all 0.35s ease-in-out;
      -moz-transition: all 0.35s ease-in-out;
      -ms-transition: all 0.35s ease-in-out;
      -o-transition: all 0.35s ease-in-out;
    }
    
    .we-offer-area.item-border-less .item {
      border: medium none;
    }
    
    .we-offer-area .our-offer-items.less-carousel .equal-height {
      margin-bottom: 30px;
    }
    
    .we-offer-area.item-border-less .item .number {
      font-family: "Poppins",sans-serif;
      font-size: 50px;
      font-weight: 900;
      opacity: 0.1;
      position: absolute;
      right: 30px;
      top: 30px;
    }
    
    .our-offer-carousel.center-active .owl-item:nth-child(2n) .item,
    .we-offer-area.center-active .single-item:nth-child(2n) .item {
      background: #EF9125 none repeat scroll 0 0;
    }
    
    .our-offer-carousel.center-active .owl-item:nth-child(2n) .item i,
    .our-offer-carousel.center-active .owl-item:nth-child(2n) .item h4,
    .our-offer-carousel.center-active .owl-item:nth-child(2n) .item p,
    .we-offer-area.center-active .single-item:nth-child(2n) .item i,
    .we-offer-area.center-active .single-item:nth-child(2n) .item h4,
    .we-offer-area.center-active .single-item:nth-child(2n) .item p {
      color: #ffffff;
    }
    
    .we-offer-area .item i {
      color: #EF9125;
      display: inline-block;
      font-size: 60px;
      margin-bottom: 20px;
    }
    
    .we-offer-area .item h4 {
      font-weight: 600;
      text-transform: capitalize;
    }
    
    .we-offer-area .item p {
      margin: 0;
    }
    
    .we-offer-area .item i,
    .we-offer-area .item h4,
    .we-offer-area .item p {
      transition: all 0.35s ease-in-out;
      -webkit-transition: all 0.35s ease-in-out;
      -moz-transition: all 0.35s ease-in-out;
      -ms-transition: all 0.35s ease-in-out;
      -o-transition: all 0.35s ease-in-out;
    }
    
    .we-offer-area .item::after {
      background: #EF9125 none repeat scroll 0 0;
      content: "";
      height: 100%;
      left: -100%;
      position: absolute;
      top: 0;
      transition: all 0.35s ease-in-out;
      -webkit-transition: all 0.35s ease-in-out;
      -moz-transition: all 0.35s ease-in-out;
      -ms-transition: all 0.35s ease-in-out;
      -o-transition: all 0.35s ease-in-out;
      width: 100%;
      z-index: -1;
    }
    
    .we-offer-area .item:hover::after {
      left: 0;
    }
    
    .we-offer-area .item:hover i,
    .we-offer-area .item:hover h4,
    .we-offer-area .item:hover p {
      color: #ffffff !important;
    }
    
    .we-offer-area.text-center .item:hover i::after {
      border-color: #ffffff !important;
    }
    
    .we-offer-area.text-center .item:hover i {
      background-color: #ffffff !important;
      color: #EF9125 !important;
    }
    
    .we-offer-area.text-left .item i {
      background: #EF9125 none repeat scroll 0 0;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      color: #ffffff;
      display: inline-block;
      font-size: 60px;
      height: 100px;
      line-height: 100px;
      margin-bottom: 30px;
      position: relative;
      width: 100px;
      z-index: 1;
      text-align: center;
    }
    
    .we-offer-area.text-left .item i::after {
      border: 2px solid #EF9125;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      content: "";
      height: 120px;
      left: -10px;
      position: absolute;
      top: -10px;
      width: 120px;
    }
    
 
  
`;


export const LIET = () => (
    <Styles>

        <br></br>

        <Container className="liet">
            <h1>Linton IET on Campus</h1>    
        </Container>

        <br></br>

        <Container className="liet">
            <img src={logo} width="200" height="200" />
        </Container>

        <br></br>

        <Container className="article">

                <p>Linton IET was founded by <a href="https://hovahyii.github.io/portfolio-v2/" target="_blank" >Hovah Yii</a> with the help of Dr. Sadip, Dr. Ery, friends and committees.</p>
                <p>Linton IET welcomes all engineering and IT/ICT students <strong>(Mechanical, Civil, Electrical &amp;	 Electronic, Architecture and also software engineer)</strong> to join Linton IET for their academic performance and career advancement.</p>
                <p>Although, the IET is a professional body solely for engineers. Linton IET also welcomes Business, Accounting, Quantity Survey and Graphic Design student to join.</p>
        </Container>
        <hr />

        <section class="we-offer-area text-center bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="site-heading text-center">
                        <h2>What we <span>Offer</span></h2>
                        <h4>6 reasons to join us</h4>
                    </div>
                </div>
            </div>
                <div class="row our-offer-items less-carousel">
                    <div class="col-md-4 col-sm-6 equal-height">
                        <div class="item">
                            <i class="fas fa-medal"></i>
                            <h4>Strive for Excellency</h4>
                            <p>
                                Our club pushes your limit and strive for excellency.
                            </p>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-6 equal-height">
                        <div class="item">
                            <i class="fas fa-robot"></i>
                            <h4>Learn Latest Technology</h4>
                            <p>
                                Learn about latest technology and IR 4.0.
                            </p>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-6 equal-height">
                        <div class="item">
                        <i class="fas fa-network-wired"></i>                            
                        <h4>Expand Your Network</h4>
                            <p>
                                Meet people from other campus and broaden your vision. 
                            </p>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-6 equal-height">
                        <div class="item">
                            <i class="fas fa-industry"></i>
                            <h4>Site visit</h4>
                            <p>
                                Visit factories and industries that are related to your studies. 
                            </p>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-6 equal-height">
                        <div class="item">
                            <i class="fas fa-chalkboard-teacher"></i>
                            <h4>Academic Support</h4>
                            <p>
                                Need helps for your studies? No worry, we got your back. 
                            </p>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-6 equal-height">
                        <div class="item">
                            <i class="fas fa-briefcase"></i>
                            <h4>Career Opportunity</h4>
                            <p>
                                We collaborate with industry and prepare our member to be job-ready. 
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    </section>

    <Footer />

  </Styles>

)