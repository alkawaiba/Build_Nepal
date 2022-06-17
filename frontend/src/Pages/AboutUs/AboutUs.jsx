import React from 'react'
import './AboutUs.css'
const AboutUs = () => {
  return (
    <div class="aboutSection">
		<div class="aboutContainer">
			<div class="aboutContent-section">
				<div class="aboutTitle">
					<h1>About Us</h1>
				</div>
				<div class="aboutContent">
					<h3>Build Nepal: One-stop shop for all construction-related services.</h3>
					<p>
						Welcome to Build Nepal, your number one source for all equipment and services. We're dedicated to providing you the very best of equipment and services, with an emphasis on productivity, good service, quick customer response.
						Founded in 2022 by Alka Lama, Build Nepal has come a long way from its beginnings in Kathmandu, Nepal. We hope you enjoy our services as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
					</p>
					<p>Sincerely,</p>
					<p>Alka Lama</p>
					{/* <div class="aboutButton">
						<a href="#">Read More</a>
					</div> */}
				</div>
				<div class="aboutSocial">
					<a href="#"><i class="fab fa-facebook-f"></i></a>
					<a href="#"><i class="fab fa-twitter"></i></a>
					<a href="#"><i class="fab fa-instagram"></i></a>
				</div>
			</div>
			<div class="aboutImage-section">
				<img src="http://www.waibainfratech.com/images/stories/home1.png" alt = ""/>
			</div>
		</div>
	</div>
  )
}

export default AboutUs

