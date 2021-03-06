import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    @track accounts = [];
    @track accountName = "";
    @track accountIndustry = "";
    @track accountSector = "";
    @track accountPhone = "";
// idGenerator effectively assigns an id to each input to create new row 
    @track idGenerator = 1;
// Change event allows for name variable to be linked to lightning input fields
handleChange(event){
if(event.target.name === "Name"){
    this.accountName = event.target.value;
} else if(event.target.name === "Industry"){
    this.accountIndustry = event.target.value;
} else if(event.target.name === "Sector"){
    this.accountSector = event.target.value;
} else if(event.target.name === "Phone"){
    this.accountPhone = event.target.value;
}}
// Key Press event enters information into table upon pressing enter key
handleKeyPress(event){
    var currentId = this.idGenerator;
    if(event.keyCode === 13){
        this.accounts.push(
        {
            id : currentId,
            Name : this.accountName,
            Industry : this.accountIndustry,
            Sector : this.accountSector,
            Phone : this.accountPhone
        }
    );
    this.idGenerator++;
    this.accountName = '';
    this.accountIndustry = '';
    this.accountSector = '';
    this.accountPhone = '';
        }
    }
}

