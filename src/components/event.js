import React from 'react';
import './event.css';
import {Button,Card,Tag,Avatar} from 'antd';
import TimeAgo from 'react-timeago';
import {observer} from 'mobx-react';

@observer
export default class Event extends React.Component{
    render(){
        const eve = this.props.eve;
        return(
            <div className="eventCard">
                <div className="activityDiv"><Tag color="green">{eve.activity}</Tag>
                <span className="timeSpanned"><TimeAgo date={eve.createAt} live={false}/></span>
                </div>
                <h2 className="eventTarget">{eve.target}</h2>
                <div className="eventFooter">
                    <div className="eventAuthor">
                        <Avatar icon="user" size="small"></Avatar>
                        <span>{eve.author}</span>
                    </div>
                    <Button type="primary" className="eventJoin">Join</Button>
                </div>
            </div>
        )
    }
}