import React from 'react';
import {connect} from 'react-redux';
import TierpromosItem from '../components/tier1promosItem';
import TierpromosList from '../components/tier1promosList';
import PropTypes from 'prop-types';



const Tier1promosContainer = ({tier1items}) => (
    <TierpromosList>
			{tier1items.map((item, i) => 
			<TierpromosItem {...item} key={i} />)}
	</TierpromosList>
)

Tier1promosContainer.propTypes = {
  tier1items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired
}

const mapStateToProps = state => ({
  tier1items: state.tier1promos
})

export default connect(
  mapStateToProps
)(Tier1promosContainer)
