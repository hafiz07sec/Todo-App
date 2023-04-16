import PropTypes from 'prop-types';
import './counter.css'
export default function CounterButton({ by, incremetMethod, decremetMethod }) {


    return (
        <div className="Counter">
            <div>
                <button className="counterButton"
                    onClick={() => incremetMethod(by)}
                >+{by}</button>
                <button className="counterButton"
                    onClick={() => decremetMethod(by)}
                >-{by}</button>
            </div>

        </div>
    )
}

CounterButton.prototype = {
    by: PropTypes.number
}
CounterButton.defaultProps = {
    by: 1
}