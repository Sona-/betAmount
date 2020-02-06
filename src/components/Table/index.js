import React from 'react';
import { formatDate } from '../utils';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import './index.scss';

const BETS = gql`
{
    bets {
      id
      time
      bet
      payout
      profit
    }
  }
`;

const Table = () => {
    const { loading, data } = useQuery(BETS);

    if (loading) {
        return <div className="table-container"><p>loading...</p></div>
    }

    return <div className="table-container">
        <div>
            <div className="table-container-header">
                <div>Time</div>
                <div className="hide-mobile">Bet</div>
                <div className="hide-mobile">Multiplier</div>
                <div>Profit</div>
            </div>
        </div>
        <div>
            {data.bets.map(item => (<div key={item.id} className="row">
                <div>{formatDate(item.time)}</div>
                <div className="hide-mobile">{item.bet / 1000}</div>
                <div className="hide-mobile">{`x${item.payout / 4}`}</div>
                <div className={`${item.profit > 0 ? 'positive' : 'negative'}`}>{item.profit / 1000}</div>
            </div>
            ))}

        </div>
    </div>
};


export default Table;


