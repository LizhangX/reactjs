import React from 'react';
import '../stylesheets/ui.scss';

export const GymDayCount = React.createClass({

    percentToDecimal(decimal) {
        return ((decimal * 100) + '%')
    },
    calGoalProgress(total, goal) {
        return this.percentToDecimal(total/goal)
    },
    render() {
        return(
            <div className="gym-day-count">
                <div className="total-days">
                    <span>{this.props.total} </span>
                    <span>days</span>
                </div>
                <div className="rain-days">
                    <span>{ this.props.rain } </span>
                    <span>days</span>
                </div>
                <div className="busy-days">
                    <span>{ this.props.busy } </span>
                    <span>days</span>
                </div>
                <div>
                    <span>
                        {this.calGoalProgress(this.props.total, this.props.goal)}
                    </span>
                </div>
            </div>
        )
    }
})