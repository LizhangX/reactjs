import '../stylesheets/ui.scss';

const percentToDecimal = (decimal) => {
    return ((decimal * 100) + '%')
}

const calGoalProgress = (total, goal) => {
    return percentToDecimal(total/goal)
}

export const GymDayCount = ({total, rain, busy, goal}) => (
        <div className="gym-day-count">
            <div className="total-days">
                <span>{total} </span>
                <span>days</span>
            </div>
            <div className="rain-days">
                <span>{rain} </span>
                <span>days</span>
            </div>
            <div className="busy-days">
                <span>{busy} </span>
                <span>days</span>
            </div>
            <div>
                <span>
                    {calGoalProgress(total, goal)}
                </span>
            </div>
        </div>
)