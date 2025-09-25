// Calendário escolher data
const datePicker = document.getElementById('datePicker');
datePicker.addEventListener('change', (e) => {
  const dataSelecionada = e.target.value;
  console.log('Data selecionada:', dataSelecionada);
});

// Botão criar evento
document.getElementById('btnCriarEvento').addEventListener('click', () => {
  console.log('Criar Evento clicado');
});

// Campo pesquisar evento
document.getElementById('searchInput').addEventListener('input', (e) => {
  const termo = e.target.value.trim().toLowerCase();
  console.log('Pesquisar evento:', termo);
});

// Calendário Principal
document.addEventListener('DOMContentLoaded', () => {
  const calendarEl = document.getElementById('calendar');
  const ec = new EventCalendar(calendarEl, { //inicializa o calendário
    view: 'timeGridWeek',
    events: [
      {
        id: '1',
        title: 'Evento 1',
        start: '2025-09-25T10:00:00',
        end: '2025-09-25T12:00:00'
      },
      {
        id: '2',
        title: 'Evento 2',
        start: '2025-09-26T14:00:00',
        end: '2025-09-26T16:00:00'
      }
    ]
  });
});