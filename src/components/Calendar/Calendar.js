import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import styled from 'styled-components';

const CalendarContainer = styled.div`
  padding: 4rem 2rem;
  text-align: center;
`;

const CalendarTitle = styled.h1`
  margin-bottom: 2rem;
  font-size: 2.5rem;
`;

function Calendar() {
  const [events, setEvents] = useState([
    { title: 'Halloween Party at Timmons Manor', date: '2024-10-26' },
  ]);

  return (
    <CalendarContainer>
      <CalendarTitle>Come see me!</CalendarTitle>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        height="auto"
      />
    </CalendarContainer>
  );
}

export default Calendar;