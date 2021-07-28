import { Component } from "react";

class Image extends Component
{

    render()
    {

        return (
            <div>    <img src={this.props.url} alt="" />
            </div>
        );
    }


}
export default Image;