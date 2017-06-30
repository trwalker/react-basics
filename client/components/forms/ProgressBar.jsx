import React from 'react';

const ProgressBar = ({progress}) => {
    return (
        <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" style={{ width: `${progress}%` }} aria-valuenow={`${progress}`} aria-valuemin="0" aria-valuemax="100">{`${progress}%`}</div>
        </div>
    );
};

export default ProgressBar;