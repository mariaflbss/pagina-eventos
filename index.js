let calendar;

document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');

  calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale: 'pt-br',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    events: []
  });

  calendar.render();

  document.getElementById('btnCriarEvento').addEventListener('click', () => {
    const datePicker = document.getElementById('datePicker');
    const selectedDate = datePicker.value;

    if (!selectedDate) {
      alert('Por favor, selecione uma data antes de criar um evento.');
      return;
    }

    calendar.addEvent({
      title: 'Evento criado',
      start: selectedDate,
      allDay: true
    });

    datePicker.value = '';

    alert('Evento criado para ' + selectedDate);
  });

  document.getElementById('searchInput').addEventListener('input', (e) => {
    const termo = e.target.value.trim().toLowerCase();
    console.log('Pesquisar evento:', termo);
  });
});