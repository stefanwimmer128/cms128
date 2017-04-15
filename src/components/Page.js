import React from "react";

export default class Page extends React.Component
{
    render()
    {
        return (
            <div>
                <h1 className="text-primary">cms128</h1>
                <p>{this.props.location.pathname}</p>
                <p className="text-muted">Current location: {this.props.location.pathname}</p>
            </div>
        );
    }
}
