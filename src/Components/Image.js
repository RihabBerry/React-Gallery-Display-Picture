import { Component } from "react";

class Image extends Component
{

    render()
    {

        return (
            <li className="img-wrap">

                <img src={this.props.url} alt="" />
            </li>
        );
    }


}
export default Image;