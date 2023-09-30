
import PropTypes from 'prop-types';
import VisulCard from './VisulCard';


const Cards = ({cards}) => {


    console.log(cards);
    return (
        <div className="py-10">
            <h1 className="text-5xl text-purple-700 text-center">All Category List</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
                {
                   cards.map(card=><VisulCard key={name.id} card={card}></VisulCard>)
                }
            </div>
        </div>
    );
};

export default Cards;

Cards.propTypes ={
    children: PropTypes.node
}