import React, { Component } from 'react'
import Journee from './journee';
import '../css/mois.css';



export class mois extends Component {
    constructor(props){
        super(props);
    }
    dataProps = this.props.data

    render() {
        return (
            <div className='mois'>
                { 
                    this.dataProps.map((item,index)=>
                    {
                        return <div className='jour_numero' key={index+"journee"}>
                            <div className='numero'>
                                {index+1}
                            </div>
                            <div>
                                <Journee 
                                    data={item.data}
                                    date={item.date}
                                />
                            </div>
                        </div>
                    }
                     
                    )
                }
            </div>
        )
    }
}

export default mois
