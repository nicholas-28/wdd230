function meetingReminder(day){
    const banner = document.querySelector(".banner");
    
    if(day == 1 || day == 2){
      banner.setAttribute('id','visible');
    }
  }
meetingReminder(date.getDay());