import React from 'react'
import Navigation from './Navigation-ash'
import Bottom from'./Bottom-nav'

const Searched = () => {
	return (
		<>
		<div className="search-page">
			
				<Navigation colour={"ash"} ></Navigation>
			
           
            	
            
            	
            
             <div className="content">
            	


            	<div className="sidebar">
            		<div className="desc">
            			<h1 className="title">
            				Categories
            			</h1>
            			<div className="turnoff"></div>
            		</div>
            		<div className="categories">
            			<h1 className="category">Action Figures</h1>
            			<h1 className="category">Manga</h1>
            			<h1 className="category">Novel</h1>
            			<h1 className="category">Lamps</h1>
            			<h1 className="category">Anime Goods</h1>
            			<h1 className="category">Accessories</h1>
            			{/*<h1 className="category">Action Figures</h1>
            			<h1 className="category">Action Figures</h1>
            			<h1 className="category">Action Figures</h1>*/}
            		</div>
            		<div className="filter">
            			<h1 className="title">
            				Filter
            			</h1>
            			<div className="turnoff"></div>
            		</div>
            	</div>





            	<div className="others">
            		<div className="functions">
            			<div className="searchbar">

            				<input type="text" placeholder="Search for products" className="searchplace"/>
            				<button className="search-btn">
            					<img src="images/search-white.png" alt=""/>
            				</button>
            			</div>
            			<div className="func-buts">
            				<div className="buts" id="but1">
            					<h1 className="sorting"> Default sorting</h1>
                                <img src="images/arrow-icon.png" alt="" className="drop"/>           				
            				</div>
            				<div className="buts" id="but2">
            					<div className="secs" id="num1">
            						<h1 className="show">Show:</h1>
            					</div>
            					<div className="secs" id="num2">
            						<h1 className="num">20</h1>
            					</div>
            				</div>
            			</div>
            		</div>
            		<div className="results">
            			<div className="stats">
            				<h1>
            					Showing 1–20 of 3231 results
            				</h1>
            			</div>
            			<div className="cards">
            				<div className="card">
            					<img className="prod-img" src="images/product6.jpg" alt=""/>
            					<h1 className="title">Novel name Vol.14</h1>
            					<div className="price">
            						<img src="images/taka.png" alt="" className="icon"/>
            						<h1 className="price-num">240</h1>
            					</div>
            					<div className="stars">
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            					</div>
            					<div className="last">
            						<h1 className="add">Add to cart</h1>
            						<img src="images/like.png" alt="" className="heart"/>
            					</div>
            				</div>
            				<div className="card">
            					<img className="prod-img" src="images/product6.jpg" alt=""/>
            					<h1 className="title">Novel name Vol.14</h1>
            					<div className="price">
            						<img src="images/taka.png" alt="" className="icon"/>
            						<h1 className="price-num">240</h1>
            					</div>
            					<div className="stars">
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            					</div>
            					<div className="last">
            						<h1 className="add">Add to cart</h1>
            						<img src="images/like.png" alt="" className="heart"/>
            					</div>
            				</div>
            				<div className="card">
            					<img className="prod-img" src="images/product6.jpg" alt=""/>
            					<h1 className="title">Novel name Vol.14</h1>
            					<div className="price">
            						<img src="images/taka.png" alt="" className="icon"/>
            						<h1 className="price-num">240</h1>
            					</div>
            					<div className="stars">
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            					</div>
            					<div className="last">
            						<h1 className="add">Add to cart</h1>
            						<img src="images/like.png" alt="" className="heart"/>
            					</div>
            				</div>
            				<div className="card">
            					<img className="prod-img" src="images/product6.jpg" alt=""/>
            					<h1 className="title">Novel name Vol.14</h1>
            					<div className="price">
            						<img src="images/taka.png" alt="" className="icon"/>
            						<h1 className="price-num">240</h1>
            					</div>
            					<div className="stars">
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            					</div>
            					<div className="last">
            						<h1 className="add">Add to cart</h1>
            						<img src="images/like.png" alt="" className="heart"/>
            					</div>
            				</div>
            				<div className="card">
            					<img className="prod-img" src="images/product6.jpg" alt=""/>
            					<h1 className="title">Novel name Vol.14</h1>
            					<div className="price">
            						<img src="images/taka.png" alt="" className="icon"/>
            						<h1 className="price-num">240</h1>
            					</div>
            					<div className="stars">
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            					</div>
            					<div className="last">
            						<h1 className="add">Add to cart</h1>
            						<img src="images/like.png" alt="" className="heart"/>
            					</div>
            				</div>
            				<div className="card">
            					<img className="prod-img" src="images/product6.jpg" alt=""/>
            					<h1 className="title">Novel name Vol.14</h1>
            					<div className="price">
            						<img src="images/taka.png" alt="" className="icon"/>
            						<h1 className="price-num">240</h1>
            					</div>
            					<div className="stars">
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            					</div>
            					<div className="last">
            						<h1 className="add">Add to cart</h1>
            						<img src="images/like.png" alt="" className="heart"/>
            					</div>
            				</div>
            				<div className="card">
            					<img className="prod-img" src="images/product6.jpg" alt=""/>
            					<h1 className="title">Novel name Vol.14</h1>
            					<div className="price">
            						<img src="images/taka.png" alt="" className="icon"/>
            						<h1 className="price-num">240</h1>
            					</div>
            					<div className="stars">
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            					</div>
            					<div className="last">
            						<h1 className="add">Add to cart</h1>
            						<img src="images/like.png" alt="" className="heart"/>
            					</div>
            				</div>
            				<div className="card">
            					<img className="prod-img" src="images/product6.jpg" alt=""/>
            					<h1 className="title">Novel name Vol.14</h1>
            					<div className="price">
            						<img src="images/taka.png" alt="" className="icon"/>
            						<h1 className="price-num">240</h1>
            					</div>
            					<div className="stars">
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            					</div>
            					<div className="last">
            						<h1 className="add">Add to cart</h1>
            						<img src="images/like.png" alt="" className="heart"/>
            					</div>
            				</div>
            				<div className="card">
            					<img className="prod-img" src="images/product6.jpg" alt=""/>
            					<h1 className="title">Novel name Vol.14</h1>
            					<div className="price">
            						<img src="images/taka.png" alt="" className="icon"/>
            						<h1 className="price-num">240</h1>
            					</div>
            					<div className="stars">
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            					</div>
            					<div className="last">
            						<h1 className="add">Add to cart</h1>
            						<img src="images/like.png" alt="" className="heart"/>
            					</div>
            				</div>
            				<div className="card">
            					<img className="prod-img" src="images/product6.jpg" alt=""/>
            					<h1 className="title">Novel name Vol.14</h1>
            					<div className="price">
            						<img src="images/taka.png" alt="" className="icon"/>
            						<h1 className="price-num">240</h1>
            					</div>
            					<div className="stars">
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            					</div>
            					<div className="last">
            						<h1 className="add">Add to cart</h1>
            						<img src="images/like.png" alt="" className="heart"/>
            					</div>
            				</div>
            				<div className="card">
            					<img className="prod-img" src="images/product6.jpg" alt=""/>
            					<h1 className="title">Novel name Vol.14</h1>
            					<div className="price">
            						<img src="images/taka.png" alt="" className="icon"/>
            						<h1 className="price-num">240</h1>
            					</div>
            					<div className="stars">
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            					</div>
            					<div className="last">
            						<h1 className="add">Add to cart</h1>
            						<img src="images/like.png" alt="" className="heart"/>
            					</div>
            				</div>
            				<div className="card">
            					<img className="prod-img" src="images/product6.jpg" alt=""/>
            					<h1 className="title">Novel name Vol.14</h1>
            					<div className="price">
            						<img src="images/taka.png" alt="" className="icon"/>
            						<h1 className="price-num">240</h1>
            					</div>
            					<div className="stars">
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            						<img src="images/favourite.png" alt=""/>
            					</div>
            					<div className="last">
            						<h1 className="add">Add to cart</h1>
            						<img src="images/like.png" alt="" className="heart"/>
            					</div>
            				</div>

            				

            			</div>

            		</div>

            	</div>
            	
             </div>
             <Bottom></Bottom>
        </div>

		
		</>
	)
}

export default Searched