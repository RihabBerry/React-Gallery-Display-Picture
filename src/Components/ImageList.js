import Image from "../Components/Image";
import React from 'react';
import { Component } from "react";
import NotFound from "../Components/NotFound"
let pictures;

class ImageList extends Component
{

    render()
    {
        console.log("this is your state img", this.props.images)
        if (this.props.images.length)
        {
            console.log("here the issue ")
            pictures = this.props.images.map((img) =>
            {
                let id = img.id;
                let path = `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`;
                return <Image className="size" url={`${path}`} key={id} />
            });
        } else
        {
            pictures = <NotFound />
        }

        return (<ul>
            {pictures}
        </ul>);

    }
}

export default ImageList;