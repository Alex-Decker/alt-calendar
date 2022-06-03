import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/nouveauCal.css';




export default class nouveauCal extends Component {
    constructor(props){
        super(props);
        this.state= {
          date: "",
          duree: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
      }

    handleInputChange(event) {
        event.preventDefault();
        const target = event.target;
        this.setState({
            [target.name]: target.value,
        });
        //console.log(this.state);
    }
    render() {
        return (
            <div className='containt'>
                <form className='newCalForm'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Date debut annee: </label>
                        <input type="date" name='date' className="form-control" id="datedebannee" value={this.state.date} onChange={this.handleInputChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Nonbre d'annee: </label>
                        <input type="number" name='duree' className="form-control" id="nombreannee" value={this.state.duree} onChange={this.handleInputChange}/>
                    </div>
                    <Link to={{
                            pathname: "/modifier",
                            state: { date: this.state.date, duree: this.state.duree }
                        }}>
                        <button type="submit" className="btn btn-primary">
                            Créer
                        </button>
                    </Link>
                </form>
            </div>
        )
    }
}
