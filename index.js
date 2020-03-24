
let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Driver {
  constructor(name, startDate, endyear ) {
    const Endyear = new date(endyear)
    this.name = name;
  }
    yearsExperienceFromBeginningOf( year ) {
     let endDate = new Date( year, 1, 1 );
     let totalYears = ( endDate - this.startDate ) / ( 365 * 24 * 60 * 60 * 1000 );
     return parseInt( totalYears );
   }
 }
