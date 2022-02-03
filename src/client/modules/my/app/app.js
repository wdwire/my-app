import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    username = 'Whitney'
    valueTSendToChild = 'This is a message passed from ';
    areDetailsVisible = false;
    status = 'Child Component not connected yet!';

    /*
    This won't let us update because it's not using @track

    people = [
        {id: 'lgds4a541, Name: "John"},
        {id: '2fdsaf343', Name: "Joe"},
        {id: 'fdsa3345g', Name: "Sue"}
    ];
    */
   //this will work because track "tracks" reactivity ins

   @track people = [
       {id: '1gds4a541', Name: "John"},
       {id: '2fdsaf343', Name: "Joe"},
       {id: 'fdsa3345g', Name: "Sue"}
   ];

   handleChange(event) {

    this.areDetailsVisible = event.target.checked;
    if (this.areDetailsVisible) {
        this.status = 'Child component connected';
    } else {
        this.status = 'Child component disconnected';
    }
}
}
