import React, { useRef } from 'react'
import FullCalendar from '@fullcalendar/react' //Biblioteca para o calendário principal e plugins
import dayGridPlugin from '@fullcalendar/daygrid'      
import timeGridPlugin from '@fullcalendar/timegrid'     
import listPlugin from '@fullcalendar/list'             
import interactionPlugin from '@fullcalendar/interaction' 
import ptBrLocale from '@fullcalendar/core/locales/pt-br'
import './App.css'

function App() {
  const calendarRef = useRef(null)
  const handleCreateEvent = () => {
    const dateInput = document.getElementById('datePicker')
    const selectedDate = dateInput.value
    if (!selectedDate) {
      alert('Por favor, selecione uma data antes de criar um evento.')
      return 
    }
    const calendarApi = calendarRef.current.getApi()
    calendarApi.addEvent({
      title: 'Evento criado',   
      start: selectedDate,     
      allDay: true             
    })
    dateInput.value = ''
    alert('Evento criado para ' + selectedDate)
  }
  const handleSearch = (e) => {  // Campo de pesquisa de eventos
    const termo = e.target.value.trim().toLowerCase()
    console.log('Pesquisar evento:', termo) 
  }
  return (
    <>
      <aside>
        <button title="Home">
          <img src="/assets/imgHomepage.png" alt="Home" />
        </button>
        <button title="Usuários">
          <img src="/assets/imgAddUserMale.png" alt="Usuários" />
        </button>
        <button title="Calendário">
          <img src="/assets/imgTearOffCalendar.png" alt="Calendário" />
        </button>
        <button title="Notificações">
          <img src="/assets/imgDoorbell.png" alt="Notificações" />
        </button>
      </aside>
      <main>
        <div className="top-bar">
          <input type="date" id="datePicker" className="input-date" />
          <button onClick={handleCreateEvent} className="btn">
            Criar Evento
          </button>
          <input
            type="search"
            id="searchInput"
            className="input-search"
            placeholder="Pesquisar evento"
            onInput={handleSearch}
          />
        </div>
        <div id="calendar">
          <FullCalendar
            ref={calendarRef}
            plugins={[
              dayGridPlugin,       
              timeGridPlugin,      
              listPlugin,          
              interactionPlugin    
            ]}
            initialView="dayGridMonth" 
            locale={ptBrLocale}        
            headerToolbar={{
              left: 'prev,next today',                           // Botões de navegação
              center: 'title',                                  
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek' // Tipos de visualização
            }}

            height="1200px" // Tamanho do calendário
            events={[]} // Lista inicial de eventos 
          />
        </div>
      </main>
    </>
  )
}

export default App