import React, { Component } from 'react';
import {Input,Select,Switch,Button,Card,DatePicker} from 'antd';
import {observer} from 'mobx-react';
import Event from '../store/event'
import  ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import MovieForm from './movieForm';

// api key:  AIzaSyBFMOn8XLYDtA7-y3_XCRm_r0YavKJnPq8
import './eventForm.css';
@observer
export default class EventForm extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleActivity = this.handleActivity.bind(this);
        this.state = {
            activitySelected : "",
            activityValue : "",
        }
    }
    // var activity;
    handleSubmit(e){
        e.preventDefault();
        console.log(e.target);
        const target = e.target;
        var eve = new Event(122,this.state.activityValue,target.target.value,target.description.value,"public","dadri");
        // var eve = new Event(12324,"Movie","Fukrey","Bring your friends too, fukrey is gonna be amazing","public","Elante Mall")
        console.log(eve);
        this.props.store.addEvent(eve);
        this.eventForm.reset();
    }
    handleActivity(e){
        this.setState({activitySelected:e.target.value, activityValue:e.target.value});
    }
    activityType = ['Movie','Trip','Lunch','Dinner', 'Night out'];

    // TODO: add animations
    render() {
        const {TextArea} = Input;
        const {RangePicker} = DatePicker;
        const {Option} = Select;
        let fullForm = null;
        if(this.state.activitySelected=='Movie'){
            fullForm = <MovieForm />
        }
        if(false){
            fullForm = <form onSubmit={this.handleSubmit} ref={(el)=>{this.eventForm=el;}}>
                    
            <Input name="target"size="large" placeholder="Enter the target" />
            <TextArea name="description" rows={4} size="large" placeholder="Enter a description to let other better understand"/>
            <RangePicker 
            name="dateTime"
            showTime={{ format: 'HH:mm' }}
            format="YYYY-MM-DD HH:mm"
            placeholder={['Start Time', 'End Time']}/>
            Invite your friends:
            <TextArea name="inviteList"rows={2} placeholder="Start typing their names"/>
            Block list:
            <TextArea name="blockList" rows={2} placeholder="Hide this event from"/>
            <Switch name="type" checkedChildren="private" unCheckedChildren="public"></Switch>
            <br/>
            <br/>
            <Button type="primary" htmlType="submit">Add Now!</Button>
            <Button type="danger" onClick={()=>{this.setState({activitySelected:false, activityValue:""}); this.refs.activitySelector.selectedIndex=0;}} >Cancel</Button>
        </form> ;
        }
        const transitionOptions = {
            transitionName: "fade",
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 500
          }
        return(
            
            <Card className="eventForm"  noHovering={true}>
            <ReactCSSTransitionGroup {...transitionOptions} >
            <h2>Add a new event</h2>
                    <select name="activity" ref="activitySelector" className="ant-input ant-input-lg" size="large" style={{margin:8,marginLeft:0,marginRight:0}} onChange={this.handleActivity} placeholder="Choose an activity">
                    <option value="" disabled selected>Start by choosing an activity</option>
                    {this.activityType.map((activity)=>{
                        return(<option key={activity} value={activity}>{activity}</option>)
                    })}
                </select>
                {fullForm}
                </ReactCSSTransitionGroup>
            </Card>
            
        );
    }
}