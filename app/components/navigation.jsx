var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = (props) => {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React timer app</li>
                        <li><IndexLink to="/" activeClassName="active-link">Timer</IndexLink></li>
                        <li><Link to="/countdown" activeClassName="active-link">Contdown</Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">Created by <a href="https://github.com/jacandrade" target="_blank">J. Andrade</a></li>
                    </ul>
                </div>                
            </div>
            
            
        );
    }


module.exports = Navigation;