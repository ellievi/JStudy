class DateFormat{
    // Creation of the attribute date = new Date(_) to use later
    date = new Date();

    // Creation of the constructor as an object with info for him parametres
    constructor(info){
        this.date = info.date;
    };
    
    // Creation of the methods - 1/3 -
    // Convert date to milliseconds
    formatDateToMs = () => `${this.date.getTime()}`

    // Creation of the methods - 2/3 -
    // Add hours, minute, second, day, month or year
    addHoursToDate = () => `${this.date.getHours + 2}`

    // Creation of the methods - 3/3 -
    // Format to brazilian's date standard
    formatToBrazilianDate = () => `${this.date.getDate()}/${this.date.getMonth() + 1}/${this.date.getFullYear()}`;
}

// Creation of an obje'ct that carry the data info abt the date
const dataChest = {Date: new Date()};

// Creation of the base instance for the others instances
const dateFormatInstance = new DateFormat(dataChest);

// Creation of the instance - 1/3 -
const showDateToMsFormat = dateFormatInstance.formatDateToMs();

// Creation of the instance - 2/3 -


// Creation of the instance - 3/3 -
const showBrazilianFormat = dateFormatInstance.formatToBrazilianDate();

// Instance's console log
console.log(showDateToMsFormat);
console.log(showBrazilianFormat);