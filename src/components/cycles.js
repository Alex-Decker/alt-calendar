import React, { Component } from 'react'
import Annee from './annee';
import '../css/cycle.css';
import dataService from './DataService';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSet: []
    }
  }
  componentDidMount() {
    dataService.getAll(this.props.history.location.state.date, this.props.history.location.state.duree)
      .then(res => {
        this.setState({
          dataSet: res.data
        })
      })
  }

  render() {
    //console.log(this.props.history.location.state.date)
    return (
      <div>
        {
          this.state.dataSet.map((item, index) => {
            return <div key={index + "annee"}>
              <div className="textAnnee">
                <h4>{item.date}</h4>
              </div>
              {
                <Annee
                  data={item.data}
                />
              }
            </div>
          }
          )
        }
        <p>{ }</p>
      </div>
    )
  }
}
