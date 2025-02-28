(function() {
    // 1. Calculate the number of days between your birthdate and the current date
    const birthDate = DateTime.fromISO('YYYY-MM-DD'); // Replace 'YYYY-MM-DD' with your birthdate
      const daysBetween = nowLuxon.diff(birthDate, 'days').days;
      eDisplayLuxon.innerHTML += `<p>Days between birthdate and now: ${Math.floor(daysBetween)} days</p>`;
  
      // 2. Display the number of years, months, and days between your birthdate and current date
      const diff = nowLuxon.diff(birthDate, ['years', 'months', 'days']).toObject();
      eDisplayLuxon.innerHTML += `<p>Time between birthdate and now: ${Math.floor(diff.years)} years, ${Math.floor(diff.months)} months, and ${Math.floor(diff.days)} days</p>`;
  
      // 3. Given two dates, display the date closest to the current date
      const date1 = DateTime.fromISO('YYYY-MM-DD'); // Replace 'YYYY-MM-DD' with the first date
      const date2 = DateTime.fromISO('YYYY-MM-DD'); // Replace 'YYYY-MM-DD' with the second date
      const closestDate = nowLuxon.diff(date1).milliseconds < nowLuxon.diff(date2).milliseconds ? date1 : date2;
      eDisplayLuxon.innerHTML += `<p>Date closest to now: ${closestDate.toISODate()}</p>`;
  
      // 4. Given two dates, display whether the first date is before or after the second date
      const isBefore = date1 < date2;
      eDisplayLuxon.innerHTML += `<p>The first date is ${isBefore ? 'before' : 'after'} the second date</p>`;
  
      // 5. Display the current time in London
      let londonTime = nowLuxon.setZone('Europe/London').toLocaleString(DateTime.DATETIME_FULL);
      eDisplayLuxon.innerHTML += `<p>Current time in London: ${londonTime}</p>`;
  })();
