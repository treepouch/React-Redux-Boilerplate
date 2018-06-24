import React from 'react';
import {connect} from 'react-redux';
import NavList from '../components/navList';
import NavItem from '../components/navItem';
import PropTypes from 'prop-types';



const NavContainer = ({navItems}) => 
   					<NavList>
   						{navItems.map((item, i) => <NavItem {...item} key={i} />)}
					</NavList>
				


NavContainer.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired
}


const mapStateToProps = state => ({
  navItems: state.nav
})

export default connect(
  mapStateToProps
)(NavContainer)
