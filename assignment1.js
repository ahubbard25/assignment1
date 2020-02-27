import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    @track accounts = [
        {
        Id: 1,
        Name: 'Austin Hubbard',
        Industry: 'Information Technology',
        Sector: 'Developement',
        Phone: '2144041183',
        },
    ]
    @track accountName = "";
    @track accountIndustry = "";
    @track accountSector = "";
    @track accountPhone = "";
    @track idGenerator = 2;

handleChange(event){
const field = event.target.name;
if(field === "accountName"){
    this.accountName = event.target.value;
}else if(field === "accountIndustry"){
    this.accountIndustry = event.target.value;
}else if(field === "accountSector"){
    this.accountSector = event.target.value;
}else if(field === "accountPhone"){
    this.accountPhone = event.target.value;
    }
}
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

