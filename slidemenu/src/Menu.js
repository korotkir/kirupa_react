import React, {Component} from "react"
import "./Menu.css"

class Menu extends Component {
    render() {
        let visibility = "hide";
        if (this.props.menuVisibility) {
            visibility = "show";
        }
        return (
            <div id="flyoutMenu"
                 onMouseDown={this.props.handleMouseDown}
                 className={visibility}>
                <h2>Main</h2>
                <h2>About</h2>
                <h2>Contact</h2>
                <h2>Search</h2>
            </div>
        );
    }
}
export default Menu;

