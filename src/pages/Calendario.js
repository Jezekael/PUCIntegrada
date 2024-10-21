// src/pages/Calendario.js
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const Calendario = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      title: 'INF1039',
      start: new Date(2024, 9, 21, 7, 0),
      end: new Date(2024, 9, 21, 9, 0),
      description: 'Atividades de projeto + Reunião Sprint (rs6).',
    },
    {
      title: 'LET1281',
      start: new Date(2024, 9, 21, 11, 0),
      end: new Date(2024, 9, 21, 13, 0),
      description: 'PORTUGESE.',
    },
    {
      title: 'INF1039',
      start: new Date(2024, 9, 23, 7, 0),
      end: new Date(2024, 9, 23, 9, 0),
      description: 'Atividades de projeto + Preparar apresentação.',
    },
    {
      title: 'LET1281',
      start: new Date(2024, 9, 23, 11, 0),
      end: new Date(2024, 9, 23, 13, 0),
      description: 'PORTUGESE.',
    },
  ];

  const onSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div style={{ flex: 2 }}>
        <h1>Calendário Semanal</h1>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          defaultView="week"
          style={{ height: 600, width: '100%' }}
          onSelectEvent={onSelectEvent}
          min={new Date(2024, 9, 10, 7, 0)}
          max={new Date(2024, 9, 10, 22, 0)} 
        />
      </div>
      <div style={{ flex: 1, marginLeft: '20px', padding: '10px', background: '#f0f0f0', borderRadius: '8px' }}>
        <h2>Geral da Aula</h2>
        {selectedEvent ? (
          <div>
            <h3>{selectedEvent.title}</h3>
            <p>{selectedEvent.description}</p>
            <p>
              Horário: {moment(selectedEvent.start).format('HH:mm')} - {moment(selectedEvent.end).format('HH:mm')}
            </p>
          </div>
        ) : (
          <p>Nenhuma aula selecionada.</p>
        )}
      </div>
    </div>
  );
};

export default Calendario;
