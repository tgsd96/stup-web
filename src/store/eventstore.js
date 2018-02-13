import {observable,action} from 'mobx';
import Event from './event';
class EventStore{
    @observable events = [];

    @action addEvent(eve){
        this.events.push(eve);
    }
} 

export var observableEventStore = new EventStore();
var eve = new Event(12324,"Movie","Fukrey","Bring your friends too, fukrey is gonna be amazing","public","Elante Mall")
observableEventStore.addEvent(eve)
window.store = observableEventStore;