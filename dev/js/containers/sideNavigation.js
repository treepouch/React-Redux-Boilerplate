import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';



class SideNavigation extends Component {

	
	renderList() {
        return this.props.sidenavigation.map((sidenavItem, i) => {
            return (
                
                    <li
                        key={i}>
                        <a href={sidenavItem.url}>{sidenavItem.title}</a>
                    </li>

               
            );
        });
    }


	render() {
        return (
     

            <ul className="side_navigation">
				<li>
					<a href="http://www.vh1.com/">VH1 Home</a>
				</li>
				<li className="shows">
					<a href="javascript:void(0)" className="has_arrow" data-link="shows" data-graphics-after="V">Shows</a>
					<div className="sub_entries">
						<ul>
							{this.renderList()}
						</ul>
						<a href="http://www.vh1.com/shows" className="see_all">See all Shows</a>
					</div>
				</li>
				<li className="news">
					<a href="http://www.vh1.com/news/" data-link="news">News</a>
				</li>
				<li className="digital_originals">
					<a href="http://www.vh1.com/shows/digital-originals" data-link="digital_originals">Digital Originals</a>
				</li>
				<li className="watch_live_tv">
					<a href="http://www.vh1.com/live-tv" data-link="watch_live_tv">Watch Live TV</a>
				</li>
				<li className="social">
					<a href="http://www.facebook.com/VH1" target="_blank" className="notriforce"><span className="icon" data-graphics="N"></span><span className="screen-reader-text"></span></a>
					<a href="https://twitter.com/VH1" target="_blank" className="notriforce"><span className="icon" data-graphics="O"></span><span className="screen-reader-text"></span></a>
					<a href="http://vh1.tumblr.com/" target="_blank" className="notriforce"><span className="icon" data-graphics="Q"></span><span className="screen-reader-text"></span></a>
				</li>
			</ul>



     	);
    }

}







// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        sidenavigation: state.sidenavigation
    };
}



// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps)(SideNavigation);



