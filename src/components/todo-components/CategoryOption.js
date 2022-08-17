import React from 'react';

const CategoryOption = ({titles}) => {
    return(
        titles.map((title) => 
            <option value={title.name} key={title.id}>{title.name}</option>
        )
    );
}

export default CategoryOption;