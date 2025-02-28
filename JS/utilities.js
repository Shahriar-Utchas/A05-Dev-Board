function getDate() {
    const today = new Date();
    const mm = today.getMonth();
    const dd = String(today.getDate());
    const yyyy = today.getFullYear();
    const day = today.getDay();
  
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
    return {
      formattedDate: `${months[mm]} ${dd},${yyyy}`,
      formattedDay: days[day]
    };
}