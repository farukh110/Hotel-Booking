import React from 'react';

const Success = ({message}) => {
    return (
        <div>
            <div className="alert alert-primary" role="alert">
                {message}
            </div>
        </div>
    )
}

export default Success;