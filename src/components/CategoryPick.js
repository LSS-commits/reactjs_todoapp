import React from "react";

class CategoryPick extends React.Component{
    render(){
        return(
                <option value={this.props.title.name}>{this.props.title.name}</option>
            )
    }
}

export default CategoryPick;