import { Event } from '../event.entity';
import { PartnerId } from '../partner.entity';
import { EventSection } from '../event-section';
import { EventSpot } from '../event-spot';

test('Deve criar um evento', () => {
  const event = Event.create({
    name: 'Evento de Teste',
    description: 'Descrição do Evento de Teste',
    date: new Date('2023-10-01T10:00:00Z'),
    partner_id: new PartnerId(),
  });
  expect(event).toBeInstanceOf(Event);

  const section = EventSection.create({
    name: 'Seção de Teste',
    description: 'Descrição da Seção de Teste',
    total_spots: 100,
    price: 50,
  });
  expect(section).toBeInstanceOf(EventSection);

  const spots = EventSpot.create();
  expect(spots).toBeInstanceOf(EventSpot);
});
