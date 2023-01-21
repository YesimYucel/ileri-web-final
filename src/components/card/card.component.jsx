import { Component } from 'react';
import './card.style.css';

class Card extends Component {
    render() {
        const {name,thumbnail} = this.props.monster;
        if(thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available')
        {
            return (
                <div className='card-container'>
                    <img src={`${thumbnail.path}.jpg`} alt={`monster ${name}`} />
                    <h2>{name}</h2>
                </div>
            );
        }
    }
}

export default Card;