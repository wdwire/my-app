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

//    homePage=false;

   aboutPage=false;

   estimatePage=false;

   watchPage=false;

   modifyPage=false;


   watch(){
       this.watchPage=true;
       this.modifyPage=false;
       this.aboutPage=false;
       this.estimatePage=false;
       this.servicesPage=false;
   }

   modify(){
    this.watchPage=false;
    this.modifyPage=true;
    this.aboutPage=false;
    this.estimatePage=false;
    this.servicesPage=false;
}

about(){
    this.watchPage=false;
    this.modifyPage=false;
    this.aboutPage=true;
    this.estimatePage=false;
    this.servicesPage=false;
}

home(){
    this.watchPage=false;
    this.modifyPage=false;
    this.aboutPage=false;
    this.estimatePage=false;
}

estimate(){
 this.watchPage=false;
 this.modifyPage=false;
 this.aboutPage=false;
 this.servicesPage=false;
 this.estimatePage=true;
}



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
