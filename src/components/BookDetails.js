import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetails extends Component {

    render() {

        if (!this.props.book) {
            return <div><h3><b> Select a book to get started</b></h3></div>
        }

        return (
            <div>
                <h3><b>Book details are :-</b></h3>
                <div className="card-deck col-sm-12">
                    <div className="card bg-light">
                        <div className="card-body">
                            <div className="card-header bg-success text-white">{this.props.book.title}</div>
                            <br />
                            <p className="bg-secondary text-white"><b>Page: </b> {this.props.book.pages}</p>
                            <p className="bg-secondary text-white"><b>Description: </b> {this.props.book.description}</p>
                            <p className="bg-secondary text-white"><b>Author: </b> {this.props.book.Author}</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

function mapStateToProps(state) {
    return {
        book: state.book // whatever you set in the combine reduce of that only you did state.whatever
    }
}

export default connect(mapStateToProps)(BookDetails)