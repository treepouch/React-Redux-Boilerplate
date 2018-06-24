import React, {Component} from 'react'
import PropTypes from 'prop-types';

class FormList extends Component {

    constructor(props) {
      super(props);
       this.getPromos = this.getPromos.bind(this);
       this.makeSubmit = this.makeSubmit.bind(this);

    }

    getPromos() {
          const {tier1items} = this.props;
         
          return tier1items.map((p, i) => ({id: p.id,
                                            title: p.title,
                                            imageUrl: p.imageUrl,
                                            description: this["promo" + p.id].value})
                                  )

    }
  
     makeSubmit(e) {
      e.preventDefault();
      const {onSubmit} = this.props;
      onSubmit(this.getPromos());


    }
      


		render() {
       const {tier1items, header} = this.props;
        return (
        <form onSubmit={this.makeSubmit}>
  				{tier1items.map((item, i) => {
             return (
            <div key={i}>
              {header + " " + (i + 1) + ":"}
                <textarea cols="100" rows="7" ref={input => (this["promo" + item.id] = input)} name={"promo" + i} defaultValue={item.description} />
            </div>
            )

        })}

           <button>Edit</button>
  	   </form>
       )
    }

}


FormList.propTypes = {
  tier1items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired
}
export default FormList;