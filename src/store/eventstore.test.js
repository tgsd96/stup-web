import {expect} from 'chai';
import {observableEventStore} from './eventstore';
import Event from './event';
import {shallow} from 'enzyme';
import EventList from '../components/eventlist';
describe('EventStore',()=>{
    it('should be empty initially',()=>{
        expect(observableEventStore.events.length).to.equal(0);
    });
    it('should have one event',()=>{
        var eve = new Event(12324,"Movie","Fukrey","Bring your friends too, fukrey is gonna be amazing","public","Elante Mall")
        observableEventStore.addEvent(eve)
        expect(observableEventStore.events.length).to.equal(1);
    })

})