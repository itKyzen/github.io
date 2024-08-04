import React from 'react';

function UserName({name}) {
    console.log(name, '11')
    return (
        <div>
            <p>
                {name}
            </p>
        </div>
    );
}

export default UserName;