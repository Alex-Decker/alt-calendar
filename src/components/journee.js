import React, { Component } from 'react'
import '../css/journee.css';
import DemiJournee from './demiJournee';
import dayjs from 'dayjs';
var isoWeek = require('dayjs/plugin/isoWeek')

dayjs.extend(isoWeek)

export class Journee extends Component {
    constructor(props) {
        super(props);
        this.setDisign = this.setDisign.bind(this);
    }
    dataProps = this.props.data
    dateProps = this.props.date
    setDisign(index) {
        console.log("hoh hah");
    }

    render() {
        const dayOnWeek = dayjs(this.dateProps, 'YYYY-M-D').isoWeekday()
        const WeekOnYear = dayjs(this.dateProps, 'YYYY-M-D').add(1, 'day').isoWeek()
        return (
            <div className='journee'>
                {
                    this.dataProps["AM"] == 4
                        ? <div>

                            <DemiJournee
                                data={this.dataProps["AM"]}
                                setDisign
                                numWeek=
                                {
                                    dayOnWeek === 7
                                        ? WeekOnYear
                                        : null
                                }
                            />
                        </div>
                        : Object.keys(this.dataProps).map((item, index) => {

                            return <DemiJournee
                                data={this.dataProps[item]}
                                key={index + "demiJournee"}
                            />
                        }
                        )
                }
            </div>
        )
    }
}

export default Journee

