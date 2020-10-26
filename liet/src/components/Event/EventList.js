import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`

        * {box-sizing: border-box}
		.mySlides {display: none}
		
		.image {max-height: 600px;
			 min-height: 500px;
		}

		h1{font-size: 30px;
		   background-color: black;
		   color: white;
           text-align: center;
           margin: 40px;
		}

		body{
			font-family: Arial;
			font-size: 18px;
			background-color: #FEF9E7;
			margin: 0;
			}

		.container{
			display: grid;
			grid-template: auto/auto auto;
			grid-gap: 20px;
			width: 80%;
			margin: auto;
			padding: 20px;
		}

		.container > div{
			padding: 15px;	
			background-color: rgb(0,0,0,0.1);
		}

		/* unvisited link */
		.a:link, .a:visited{
		background-color: rgba(235.0, 137.0, 28.0, 1.0);
  		color: white;
  		padding: 10px 20px;
  		text-align: center;
  		text-decoration: none;
  		display: inline-block;
		}

		/* mouse over link */
		.a:hover {
  		color: white;
  		background-color: rgb(244, 154, 58) ;
		}

		/* selected link */
		.a:active {
 		 color: white;
 		 background-color: rgb(244, 154, 58) ;
		}

		/* Slideshow container */
		.slideshow-container {
  		max-width: 90%;
  		width: auto;
  		position: relative;
  		margin: auto;
		}

		/* Next & previous buttons */
		.prev, .next{
		  cursor: pointer;
		  position: absolute;
		  top: 50%;
		  width: auto;
		  padding: 16px;
		  margin-top: -22px;
		  color: white;
		  font-weight: bold;
		  font-size: 18px;
		  transition: 0.6s ease;
		  border-radius: 0 3px 3px 0;
		  user-select: none;
		}

		/* Position the "next button" to the right */
		.next {
		  right: 0;
		  border-radius: 3px 0 0 3px;
		}

		/* On hover, add a black background color with a little bit see-through */
		.prev:hover, .next:hover {
		  background-color: rgba(0,0,0,0.8);
        }
        
        h2{
            font-size: 20px;
            font-weight: bold;
            text-transform: capitalize;
        }

		/* Caption text */
		.text {
  		color: #f2f2f2;
  		font-size: 30px;
  		padding: 8px 12px;
  		position: absolute;
  		bottom: 8px;
  		width: 100%;
  		text-align: center;
  		background-color: black;
		}

`;


    
export const EventList = () => (


    <Styles>

        <body>


            <div>
                <h1>Ongoing events</h1>
            </div>

            <div class="container">
                <div>
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" width="100%"/>
                    <h2>Student Helps Student Program</h2>
                    <a class="a" href="/about/student-helps-student">Learn More</a>
                </div>
               
              
    
            </div>
            <div>
                <h1>Past events</h1>
            </div>
            <div class="container">
                <div>
                    <img src="https://scontent.fmkz1-1.fna.fbcdn.net/v/t1.0-9/118158310_176734663919895_2800296699982450412_o.jpg?_nc_cat=108&ccb=2&_nc_sid=8bfeb9&_nc_ohc=EISWluNpVJIAX9SV4vA&_nc_ht=scontent.fmkz1-1.fna&oh=b45107b169c8d79baeb76359a55989e2&oe=5FBB8013" width="100%"/>
                    <h2>Artificial Intelligence and the Future (Rise of AI)</h2>
                    <a class="a" href="https://www.facebook.com/LintonIETOnCampus/photos/176734660586562">View</a>
                </div>
                <div>
                    <img src="https://scontent.fmkz1-1.fna.fbcdn.net/v/t1.0-9/88052247_116388199954542_5292898811172093952_o.jpg?_nc_cat=100&ccb=2&_nc_sid=e3f864&_nc_ohc=v7spkKtpvcgAX-6H5uS&_nc_ht=scontent.fmkz1-1.fna&oh=919c4f94db6ea8c070c416604b62982a&oe=5FBBDA5B" width="100%"/>
                    <h2>Recruitment Drive</h2>
                    <a class="a" href="https://www.facebook.com/LintonIETOnCampus/photos/116388193287876">View</a>
                </div>
                <div>
                    <img src="https://scontent.fmkz1-1.fna.fbcdn.net/v/t1.0-9/87832845_115256820067680_307796980136935424_o.jpg?_nc_cat=102&ccb=2&_nc_sid=730e14&_nc_ohc=nqk1OZ4_h1oAX-yJIvs&_nc_ht=scontent.fmkz1-1.fna&oh=5c03b775177a61135df7888e8fe2f360&oe=5FB8EA2B" width="100%"/>
                    <h2>First Annual General Meeting</h2>
                    <a class="a" href="https://www.facebook.com/LintonIETOnCampus/photos/115256816734347">View</a>
                </div>
            </div>

        </body>

  </Styles>

)