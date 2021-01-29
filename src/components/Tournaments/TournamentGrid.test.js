import { checkProps } from '../../tests/testUtils';
import TournamentGrid from './TournamentGrid';

test('does not throw warning with expected props', () => {
  const expectedProps = {
    id: '38b9dceb-4c33-41dc-9d42-398403f0b8c3',
    name: 'Quasi Facere2',
    organizer: 'At Molestiae',
    game: 'Dota 2',
    participantsCurrent: 33,
    participantsMax: 256,
    startDate: '2021-01-27T12:24:10.122Z'
  };
  checkProps(TournamentGrid, expectedProps);
});
