
import { Component } from 'react';
import { apiKey } from "../../api/config"
import axios from 'axios';
import ImageList from "../ImageList"
import Search from "../Search"
import React from 'react';

class Container extends Component
{

    state = {
        imgs: [],
        query: {}
    }

    performSearch = (e) =>
    {
        console.log("qery=", e)
        this.setState({ query: e })
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${this.state.query}&per_page=24&page=1&format=json&nojsoncallback=true`)
            .then(response =>
            {
                setTimeout(() =>
                {
                    this.setState({
                        imgs: response.data.photos.photo,
                    })
                }, 150);
            })
            .catch(error =>
            {
                console.log('Error fetching and parsing data', error);
            })
    }



    render()
    {
        console.log(this.state.imgs, "this is pictures")

        return (
            <div>
                <Search performSearch={this.performSearch} />
                <ImageList images={this.state.imgs} />
            </div>);
    }





}
export default Container;