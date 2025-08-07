import './index.scss';

function StatusBar() {
    return (
        <div className='status-bar'>
            <div><p>9:41</p></div>
            <div className="cam"></div>
            <div className="status">
                <img src="./static/icons/mobile-signal.svg" />
                <img src="./static/icons/wifi.svg" />
                <img src="./static/icons/status-bar-battery.svg" />
            </div>
        </div>
    )
}

export default StatusBar;