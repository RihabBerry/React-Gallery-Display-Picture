import { Component } from "react";

class Search extends Component
{


    state = {
        query: ''

    }
    mySubmitHandler = (event) =>
    {
        console.log(event.target.query.value)
        console.log("this is the query 1", event.target.query.value)
        event.preventDefault();
        this.props.performSearch(event.target.query.value);
    }

    myChangeHandler = (event) =>
    {
        this.setState({ query: event.target.value })
    }

    render()
    {

        return (
            <div >
                <form onSubmit={this.mySubmitHandler}>
                    <input
                        name='query'
                        type='text'
                        onChange={this.myChangeHandler}
                    />
                    <input
                        type='submit'
                    />
                </form>
            </div>

        );

    };

}
export default Search;