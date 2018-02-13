import {expect} from 'chai';
import Event from './event';


describe('New Event',()=>{
    it('Should have a working constructor',()=>{
        var eve = new Event(12324,"Movie","Fukrey","Bring your friends too, fukrey is gonna be amazing","public","Elante Mall")
    
        // assert(eve.id, 12324)
        expect(eve.id).to.equal(12324);
        expect(eve.activity).to.equal("Movie")
        expect(eve.target).to.equal("Fukrey")
        expect(eve.location).to.equal("Elante Mall")
    });
    it('Should ')

})