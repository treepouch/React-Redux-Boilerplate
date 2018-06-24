import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import SideNavigation from '../containers/sideNavigation'


class Header extends Component {



	render() {
        return (
		        <div id="header" className="ent_m066_vh1 module ent_m066_vh1_V8_0_0 ent_m066 un_sticky_header">   
		            <div className="site_header js_header">
		            	<div className="top_outer">
		            		<div className="top_inner">
		            			<div className="menu_holder">
		            				<div className="slide_menu">
		            					<SideNavigation />
		            				</div>
		            				<div className="hamburger">
		            					<span className="icon"></span><span className="screen-reader-text">VH1 Menu</span>
		            				</div>
		            				<a href="/" className="site_logo"></a>
		            				<div className="page_overlay"></div>
		            			</div>
		            			<a className="logo" href="/"><span className="icon" data-graphics="@"></span></a>
		            			<div className="full_logo_wrapper"><div className="logo_anim"></div></div>
		            			<div className="search_wrapper"><div className="search_btn" data-graphics="M"></div></div>
							</div>
							<div className="site_menu_wrapper">
								<div className="site_menu_inner">
								<ul className="main_nav">
									<li className="">
										<a className="shows has_arrow" href="http://www.vh1.com/shows" data-link="shows" data-graphics-after="V">Shows</a>
										<div className="menu_dropdown shows">
											<div>
												<a className="close" href="javascript:void(0)" data-graphics="W"></a>
												<div className="sidea wide">
													<div className="links">
														<div className="column">
															<a href="http://www.vh1.com/full-episodes">Full Episodes</a>
															<a href="http://www.vh1.com/shows">Shows A-Z</a>
															<a href="http://www.vh1.com/tv-schedule">TV Schedule</a>
															<a href="http://www.vh1.com/app">VH1 App</a>
														</div>
														<div className="column">
															<a href="http://www.vh1.com/shows/americas-next-top-model">America's Next Top Model</a>
															<a href="http://www.vh1.com/shows/vh1-beauty-bar">VH1 Beauty Bar</a>
															<a href="http://www.vh1.com/shows/black-ink-crew">Black Ink Crew</a>
															<a href="http://www.vh1.com/dear-mama">Dear Mama</a>
														</div>
														<div className="column">
															<a href="http://www.vh1.com/shows/hip-hop-squares">Hip Hop Squares</a>
															<a href="http://www.vh1.com/shows/leave-it-to-stevie">Leave It To Stevie</a>
															<a href="http://www.vh1.com/shows/love-and-hip-hop">Love &amp; Hip Hop</a>
															<a href="http://www.vh1.com/shows/love-and-hip-hop-atlanta">Love &amp; Hip Hop Atlanta</a></div>
														<div className="column">
															<a href="http://www.vh1.com/shows/love-and-hip-hop-miami">Love &amp; Hip Hop Miami</a>
															<a href="http://www.vh1.com/shows/rupauls-drag-race">RuPaul's Drag Race</a>
															<a href="http://www.vh1.com/shows/rupauls-drag-race-all-stars">RuPaul's Drag Race All Stars</a>
															<a href="http://www.vh1.com/shows/teyana-iman">Teyana &amp; Iman</a>
														</div>
													</div>
													<a className="see_all" href="http://www.vh1.com/shows">see all Shows</a>
												</div>					
											</div>						
										</div>
									</li>
									<li className="">
										<a className="news" href="http://www.vh1.com/news/">News</a>
										</li>
									<li className="">
										<a className="digital_originals" href="http://www.vh1.com/shows/digital-originals">Digital Originals</a>
										</li>
									<li>
										<a className="watch_live_tv" href="http://www.vh1.com/live-tv">Watch Live TV</a>
									</li>
									<li className="social">
										<a href="http://www.facebook.com/VH1" target="_blank" className="notriforce"><span className="icon" data-graphics="N"></span><span className="screen-reader-text"></span></a>
										<a href="https://twitter.com/VH1" target="_blank" className="notriforce"><span className="icon" data-graphics="O"></span><span className="screen-reader-text"></span></a>
										<a href="http://vh1.tumblr.com/" target="_blank" className="notriforce"><span className="icon" data-graphics="Q"></span><span className="screen-reader-text"></span></a>
									</li>
								</ul>
								</div>
							</div>
						</div>
						<div className="bottom_outer"></div>
		        	</div>
		        </div>
		    );
    }




}

export default Header;