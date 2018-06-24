import React from 'react';

const Tier1promosItem = ({imageUrl, title, description}) =>
    <li>
		<div className="imageHolder">
			<img src={imageUrl} width="200" height="200" />
		</div>
		<div className="copyHolder">
			<span className="title">{title}</span>
			<div className="description">
				{description}
			</div>
		</div>
	</li>

export default Tier1promosItem;
