const EventEmitter = require('events');

class Bakery extends EventEmitter
{
    peopleInBakery = [];

    enter(name)
    {
        if(!this.peopleInBakery.includes(name))
        {
            this.peopleInBakery.push(name);
            this.emit('EnterBakery', {name: name});
        }
    }

    exit(name)
    {
        let index = this.peopleInBakery.indexOf(name);
        if(index != -1)
        {
            this.peopleInBakery.splice(index, 1);
            this.emit('ExitBakery', {name: name});
        }
        else
        {
            console.log("Someone try to exit the bakery without entering it... Marti is that you ??");
        }
    }

    getNbPeople()
    {
        return this.peopleInBakery.length;
    }
}

module.exports = Bakery;
