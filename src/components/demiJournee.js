import React, { Component } from 'react'
import '../css/demiJournee.css';

export default class demiJournee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataProps: this.props.data,
            numWeekProps: this.props.numWeek
        }
        this.colorchange = this.colorchange.bind(this)
        this.textchange = this.textchange.bind(this)
    }

    colorchange() {
        if (this.state.dataProps != 4 && this.state.dataProps != 3) {
            this.setState({
                dataProps: 1
            })
        }
        //this.props.onSetDisign(3);
        this.props.onSetDisign(6);

    }
    textchange() {
        if (this.state.dataProps != 4 && this.state.dataProps != 3) {
            this.setState({
                dataProps: 2
            })
        }
        //this.props.onSetDisign(3);
    }
    render() {
        if (this.state.dataProps == 1) {
            return (
                <div onClick={this.colorchange}
                    onDoubleClick={this.textchange}
                    className="demi_journee jCour">
                </div>
            );

        }
        if (this.state.dataProps == 2) {
            return (
                <div onClick={this.colorchange}
                    onDoubleClick={this.textchange}
                    className="demi_journee jEntreprise">
                </div>
            );

        }
        if (this.state.dataProps == 3) {
            return (
                <div onClick={this.colorchange}
                    onDoubleClick={this.textchange}
                    className="demi_journee jFerier">
                </div>
            );

        }
        if (this.state.dataProps == 4) {
            return (
                <div onClick={this.colorchange}
                    onDoubleClick={this.textchange}
                    className="demi_journee jWeekend">
                    {
                        this.state.numWeekProps
                    }

                </div>
            );

        }
        return (
            <div onClick={this.colorchange}
                onDoubleClick={this.textchange}
                className="demi_journee">

            </div>
        )


    }
}