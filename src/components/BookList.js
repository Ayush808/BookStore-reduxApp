import { connect } from 'react-redux'
import React, { Component } from 'react'
import { selectBook } from '../actions/book'
import { bindActionCreators } from 'redux'

class BookList extends Component {

    renderBookList() {
        return this.props.books.map((book) => {
            return (
                <button className="list-group-item border border-secondary bg-info text-white">
                    <li key={book.title}
                        onClick={() => this.props.sb(book)}
                    >
                        {book.title}
                    </li>
                </button>
            )
        })
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.renderBookList()}
                </ul>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        books: state.books
    }
}

function mapDispatchToProps(disptch) {
    return bindActionCreators({ sb: selectBook }, disptch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)