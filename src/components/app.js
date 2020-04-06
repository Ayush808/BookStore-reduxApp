import React, { Component } from 'react'
import BookList from './BookList'
import BookDetails from './BookDetails'

export default class App extends Component {


    render() {
        return (
            <div class="bgimg">
                <div className="container">
                    <h2 className="text-light"><b>REACT+REDUX BOOKSTORE Application</b></h2><hr />
                    <div className="row">
                        <div className="col-4">
                            <BookList />
                        </div>
                        <div className="col-8">
                            <BookDetails />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}