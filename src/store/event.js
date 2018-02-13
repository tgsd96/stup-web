import {observable,extendObservable, action,computed} from 'mobx';
import { access } from 'fs';

export default class Event{
    @observable id;
    @observable activity;
    @observable target;
    @observable description;
    @observable type;
    @observable location;

    // Todo advanced options to be implemented later
    // timeStart;
    // timeEnd;
    // dateStart;
    // dateEnd;
    // approxCost;    
    // location
    @observable createAt;
    // @observable updateAt;
    // @observable memCount;
    // @observable groupId;
    // @observable userId;
    // @observable inviteList = []

    constructor(id, activity, target, description, type,location){
        this.id = id
        this.activity = activity
        this.target = target
        this.description = description
        this.type = type
        this.location = location
        this.createAt = Date.now()
    }

    // will use this to get author image and name by author user id
    @computed get author(){
        return(
            "Tushar Garg"
        )
    }
    @computed get timeSpan(){
        var timeDiff = Date.now()-this.createAt
        var indicator = ""
        if(timeDiff>3600){
            timeDiff = timeDiff/3600;
            indicator = "hr"
        }else if(timeDiff>60){
            timeDiff = timeDiff/60
            indicator = "min"
        }else{
            indicator = "sec"
        }
        return timeDiff+" "+indicator
    }

}

var eve = new Event(12324,"Movie","Fukrey","Bring your friends too, fukrey is gonna be amazing","public","Elante Mall")
window.eve  = eve;