import { LightningElement, track } from 'lwc';

export default class Assignment1 extends LightningElement {
    @track accounts = [
        {
        Id: 1,
        Name: 'Austin Hubbard',
        Industry: 'Information Technology',
        Sector: 'Developement',
        Phone: '2144041183',
        },
    ]
    @track accountName;
    @track accountIndustry;
    @track accountSector;
    @track accountPhone;
    @track idGenerator = 2;
    accountName = 'initial value';
    accountIndustry = 'initial value';
    accountSector = 'initial value';
    accountPhone = 'initial value';

    handleChange(event){
const field = event.target.value;
if(field == "accountName"){
    console.log(event.target.value);
}else if(field == "accountIndustry"){
    console.log(event.target.value);
}else if(field == "accountSector"){
    console.log(event.target.value);
}else if(field == "accountPhone"){
    console.log(event.target.value);
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

