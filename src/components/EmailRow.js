import { IconButton } from '@material-ui/core'
import { Checkbox } from '@material-ui/core';
import { StarBorderOutlined } from '@material-ui/icons'
import React from 'react'
import './EmailRow.css'
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

function EmailRow({title, subject, description, time, id}) {
    return (
        <div className='emailRow'>
            <div className='emaiRow__options'>
                <Checkbox/>
                <IconButton>
                    <StarOutlineIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportantIcon/>
                </IconButton>
            </div>
            <h3 className='emailRow__title'>
                {title}
            </h3>
            <div className='emailRow__message'>
                <h4>{subject}{""}
                <span className='emailRow__description'>-
                    {description}
                </span>
                </h4>
            </div>
            <div className='emailRow__time'>{time}</div>
            
        </div>
    )
}

export default EmailRow
