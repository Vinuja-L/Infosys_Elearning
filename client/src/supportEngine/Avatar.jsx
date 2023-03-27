import React, { useState } from 'react'

import{ Style } from './Style'

const Avatar = props => {
    return (
        <div style={{ position: 'fixed', bottom: '24px', left:'24px'   }}>
            <div >
            For Help
            </div>
                
            <div
            style={{
                ...Style.chatwithAdminButton
            }}
            />
        </div>
    )
}

export default Avatar