import React from 'react';
import Slider from 'react-slick';
import Event from './event';
import even from '../store/event';
import {observer} from 'mobx-react';

@observer
export default class EventList extends React.Component{
    render(){
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1
          };
        // var eve = new even(12324,"Movie","Fukrey","Bring your friends too, fukrey is gonna be amazing","public","Elante Mall")
        return(
            <Slider {...settings}>
            {this.props.store.events.map((eve)=>{
                return(<div key={eve.id}><Event eve={eve}/></div>)
            })}
            {/* <div><Event eve={eve}/></div>
            <div><Event eve={eve}/></div>
            <div><Event eve={eve}/></div>
            <div><Event eve={eve}/></div> */}
            </Slider>
        )
    }
}