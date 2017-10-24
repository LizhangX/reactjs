import '../stylesheets/ui.scss';
// import Terrain from 'react-icons/lib/md/terrain';
// import SnowFlake from 'react-icons/lib/ti/weather-snow';
import Calendar from 'react-icons/lib/fa/calendar';
import TiWeatherShower from 'react-icons/lib/ti/weather-shower';
import MdEqualizer from 'react-icons/lib/md/equalizer';

const percentToDecimal = (decimal) => {
    return ((decimal * 100) + '%');
};

const calGoalProgress = (total, goal) => {
    return percentToDecimal(total/goal);
};

export const GymDayCount = ({total, rain, busy, goal}) => (
        <div className="gym-day-count">
            <div className="total-days">
                <span>{total} </span>
                <Calendar />                
                <span>days</span>
            </div>
            <div className="rain-days">
                <span>{rain} </span>
                <TiWeatherShower />
                <span>days</span>
            </div>
            <div className="busy-days">
                <span>{busy} </span>
                <MdEqualizer />
                <span>days</span>
            </div>
            <div>
                <span>
                    {calGoalProgress(total, goal)}
                </span>
            </div>
        </div>
)