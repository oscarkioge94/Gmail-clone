import { IconButton } from '@material-ui/core'
import { Checkbox } from '@material-ui/core';
import { StarBorderOutlined } from '@material-ui/icons'
import React from 'react'
import './EmailRow.css'
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { selectMail } from "../features/mailSlice"

function EmailRow({title, subject, description, time, id}) {
    const history = useHistory();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(selectMail({
            id,
            title,
            subject,
            description,
            time,
        }));
        history.push("/mail")
    }
    return (
        <div onClick={openMail} className='emailRow'>
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
