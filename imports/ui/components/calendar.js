import './calendar.html';

Template.calendar.onRendered( () => {
  var $calendar = $( '#events-calendar' ).fullCalendar(
    { //start options
    header: {
      left: 'prevYear,nextYear',
      right: 'today,month,agendaDay,agendaWeek, listDay,listWeek,listMonth,listYear, prev,next',
      center: 'title',

    },
    // Make possible to respond to clicks and selections
    selectable: true,
    // Make events editable, globally
    editable: true,

    views: {
      listDay: { buttonText: 'list day' },
      listWeek: { buttonText: 'list week' },
      listMonth: { buttonText: 'list month' },
      listYear: { buttonText: 'list year' }
      },
      // Some hardcoded events to view calendar in action
     events: [
     {
       title: 'All Day Event',
       start: '2018-04-05'
     },
     {
     title: 'Long Event',
     start: '2018-04-08',
     end: '2018-04-10'
     },
     {
     id: 5,
     title: 'Repeating Event',
     start: '2018-04-09T08:00:00'
     },
     {
     id: 5,
     title: 'Repeating Event',
     start: '2018-04-16T08:00:00'
     }
     ],
      
     select: function(start, end, jsEvent, view) {
       // alert(start.format("MM/DD/YYYY hh:mm a") + " to " + end.format("MM/DD/YYYY hh:mm a") + " in view " + view.name);
       var title = prompt("Enter a title for this event", "New event");
        // If did not pressed Cancel button
         if (title != null) {
         // Create event
         var event = {
         title: title.trim() != "" ? title : "New event",
         start: start,
         end: end
         };
         $calendar.fullCalendar("renderEvent", event, true);
         };
         // Whatever happens, unselect selection
         $calendar.fullCalendar("unselect");
        },
        // Callback triggered when we click on an event
   
           eventClick: function(event, jsEvent, view){
        // Ask for a title. If empty it will default to "New event"
           var newTitle = prompt("Enter a new title for this event", event.title);
        // If did not pressed Cancel button
           if (newTitle != null) {
           // Update event
           event.title = newTitle.trim() != "" ? newTitle : event.title;
          
           // Call the "updateEvent" method
           $calendar.fullCalendar("updateEvent", event);
           }
          }
      } // End of options
  
  );

});