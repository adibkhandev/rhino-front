import React from 'react'
import {Taka,Stars} from "./Components"
import Navigation from './Navigation-ash'
const Reviewer = () => {
	return (
		<div className="reviewer-page">
            <Navigation colour={"ash"} ></Navigation>
			<div className="product-details">
				<img src="images/product-2.jpg" alt=""/>
				<div className="details">
				    <h1 className="title">Solo leveling vol. 1</h1>
					<h1 className="story"> Am unknown treasure lost in the unknown which came out of no where was now a mess needed to be taken care of</h1>
					<Taka num={"one"} taka={"310"}></Taka>
					<Stars>
						
					</Stars>
				</div>
			</div>
			<div className="input">
				<input  placeholder="Write your own review"  type="text"  className="rev">

				</input>
				 <img src="images/edit.png" alt="" className="write"/>
			</div>
			<div className="buttons">

			   <div className="btn-2">
					<img src="images/photo-camera.png" alt=""/>
				</div>
				<div className="btn-1">
					<button>
						Post review
					</button>
				</div>
				
			</div>
		</div>
	)
}

export default Reviewer