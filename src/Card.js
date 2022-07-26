import React from 'react';

class Card extends React.Component{
    constructor(props){
        super(props)
        this.state={
            orang: this.props.people
        }
    }

    render(){
        console.log("Card child rendered")
        return (
                <div className="card">
                    <h1> {this.state.orang.name}</h1>
                    {this.props.people.name}
                    {this.props.people.age}
                    {this.props.people.address}
                    <p>
                        {this.state.orang.age}
                    </p>
                </div>
        );
    }
}

export default Card;