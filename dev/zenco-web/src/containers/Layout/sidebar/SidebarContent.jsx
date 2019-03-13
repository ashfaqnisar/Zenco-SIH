import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';

class SidebarContent extends Component {
    static propTypes = {
        changeToDark: PropTypes.func.isRequired,
        onClick: PropTypes.func.isRequired,
    };
    
    hideSidebar = () => {
        this.props.onClick();
    };
    
    render() {
        return (
            <div className="sidebar__content">
                <ul className="sidebar__block">
                    <SidebarLink
                        title="Home"
                        icon="home"
                        route="/home"
                        onClick={this.hideSidebar}
                    />
                    <SidebarLink
                        title="Usage"
                        icon="chart-bars"
                        route="/usage"
                        onClick={this.hideSidebar}
                    />
                    <ul className="sidebar__block">
                        <SidebarCategory title="Machines" icon="cart">
                            <SidebarLink
                                title="Machine 1"
                                route="/machines/1"
                                onClick={this.hideSidebar}/>
                            <SidebarLink
                                title="Machine 2"
                                route="/machines/2"
                                onClick={this.hideSidebar}/>
                        </SidebarCategory>
                    </ul>
                    <SidebarLink
                        title="Solar"
                        icon="store"
                        route="/solar"
                        onClick={this.hideSidebar}
                    />
                    
                    <SidebarLink
                        title="History"
                        icon="list"
                        newLink
                        route="/history1"
                        onClick={this.hideSidebar}
                    />
                    <SidebarLink
                        title="Settings"
                        icon="cog"
                        newLink
                        route="/settings1"
                        onClick={this.hideSidebar}
                    />
                </ul>
                <ul className="sidebar__block">
                    <SidebarLink title="Log Out" icon="exit" route="/log_in"/>
                </ul>
            </div>
        );
    }
}

export default SidebarContent;
