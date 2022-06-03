import React, { Component } from 'react'
import Mois from './mois';
import '../css/annee.css';
import dayjs from 'dayjs';




export class annee extends Component {
    constructor(props){
        super(props);
        this.state= {
            dataSet : []
          }
        }
        datas=this.props.data
        
    render() {
        //console.log(JSON.stringify(this.props))
        return (
            <div className='annee'>
                {
                    this.datas.map((item,index)=>
                    {
                        return <div className='moi_nom' key={index+"mois"}>
                            <div className='nom'>
                                <h3>
                                    {
                                        dayjs((item.date+"-1"), 'YYYY-M-D')
                                            .format('MMMM YYYY')
                                    }
                                </h3>
                            </div>
                            <div>
                                { 
                                    <Mois 
                                        data={item.data}
                                    /> 
                                }
                            </div>
                        </div>
                    }
                )
                
                }
              
            </div>
        )
    }
}

export default annee
