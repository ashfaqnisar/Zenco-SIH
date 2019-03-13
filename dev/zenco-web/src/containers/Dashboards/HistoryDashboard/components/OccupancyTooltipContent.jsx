import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class OccupancyTooltipContent extends PureComponent {
    static propTypes = {
        label: PropTypes.string,
        colorForKey: PropTypes.objectOf(PropTypes.string),
        itemSorter: PropTypes.func,
    };
    
    static defaultProps = {
        colorForKey: {},
        label: '',
        itemSorter: () => {
        },
    };
    
    renderContent() {
        const {
            itemSorter,
            colorForKey,
        } = this.props;
        
        // eslint-disable-next-line
        const payload = this.props.payload;
        
        if (payload && payload.length) {
            const listStyle = {padding: 0, margin: 0};
            
            const items = payload.sort(itemSorter)
                .map((entry, i) => {
                    const finalItemStyle = {
                        display: 'block',
                        paddingTop: 4,
                        paddingBottom: 4,
                        color: entry.color || '#555555',
                    };
                    Object.keys(colorForKey)
                        .filter(key => key === entry.dataKey)
                        .forEach((key) => {
                            finalItemStyle.color = colorForKey[key];
                        });
                    
                    return (
                        <li className="recharts-tooltip-item" key={`tooltip-item-${i + 1}`} style={finalItemStyle}>
                            <span className="recharts-tooltip-item-name">{entry.name}</span>
                            <span className="recharts-tooltip-item-separator"> : </span>
                            <span className="recharts-tooltip-item-value">
                {entry.value}
              </span>
                            <span className="recharts-tooltip-item-unit">{entry.unit || ''}</span>
                        </li>
                    );
                });
            
            return <ul className="recharts-tooltip-item-list" style={listStyle}>{items}</ul>;
        }
        
        return null;
    }
    
    render() {
        const {
            label,
        } = this.props;
        const finalStyle = {
            margin: 0,
            padding: 10,
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            whiteSpace: 'nowrap',
        };
        const finalLabelStyle = {
            margin: 0,
        };
        
        return (
            <div className="recharts-default-tooltip" style={finalStyle}>
                <p className="recharts-tooltip-label" style={finalLabelStyle}>{label}</p>
                {this.renderContent()}
            </div>
        );
    }
}

export default OccupancyTooltipContent;
