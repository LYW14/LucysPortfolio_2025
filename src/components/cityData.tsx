// cityData.tsx
import type { City } from './types';

// Helper function to create clickable Wikipedia links
export const createWikipediaLink = (text: string, url: string) => (
  <span 
    className="font-bold text-blue-600 hover:text-blue-800 cursor-pointer underline decoration-dotted hover:decoration-solid transition-all duration-200"
    onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
    title={`Learn more about ${text} on Wikipedia`}
  >
    {text}
  </span>
);

export const CITIES: City[] = [
  {
    id: 'city1',
    name: 'Boston',
    emoji: '🦞',
    slides: [
      'Visit Boston',
      'I left Boston. Then I moved back. That\'s either love... or Stockholm Syndrome.',
      'Brownstones. Ivy League brains. Dunkin\' in every direction. History in every corner.',
      <>
        {`Take a walk by the `}{createWikipediaLink('Charles River', 'https://en.wikipedia.org/wiki/Charles_River')}{`, where the wind smells like `}{createWikipediaLink('revolution', 'https://en.wikipedia.org/wiki/Siege_of_Boston')}{` and `}{createWikipediaLink('Red Sox heartbreak', 'https://en.wikipedia.org/wiki/Curse_of_the_Bambino')}{`, where rowers carve their oars into the waves, `}{createWikipediaLink('marathoners', 'https://en.wikipedia.org/wiki/Boston_Marathon')}{` fly past on the pavement, and the `}{createWikipediaLink('T', 'https://simple.wikipedia.org/wiki/Massachusetts_Bay_Transportation_Authority')}{` rattles overhead—Boston never stands still; it carries you with it.`}
      </>
    ]
  },
  {
    id: 'city2',
    name: 'Philadelphia (and surrounding suburbia)',
    emoji: '🏙️',
    slides: [
      'Its literally called the City of Brotherly Love.',
      <>
        A roll filled with buttery, seared beef, sweet onions, and a slow melt of silky cheese… Nowhere does a {createWikipediaLink('cheesesteak', 'https://simple.wikipedia.org/wiki/Cheesesteak')} like Philly does a cheesesteak.
      </>,
      <>
        {`This city's got `}
        {createWikipediaLink('grease', 'https://italianmarketphilly.org/italian-market-festival/grease-pole-climbing/')}
        {` under its fingernails and soft pretzel salt on its `}
        {createWikipediaLink('Eagles', 'https://simple.wikipedia.org/wiki/Philadelphia_Eagles')}
        {` shirt—loud, stubborn, and proud of it.`}
      </>,
      <>
        Race to the top of {createWikipediaLink('Rocky steps', 'https://simple.wikipedia.org/wiki/Rocky_Steps')} of the Philadelphia Museum of Art with your chest heaving, the city stretching wide before you… Come find out what's at the top
      </>
    ]
  },
  {
    id: 'city3',
    name: 'Washington, District of Columbia',
    emoji: '🏛️',
    slides: [
      'Washington, DC, it\'s the US capitol, you probably know it.',
      <>
        {`There are monuments and museums, but so are `}
        {createWikipediaLink('cherry blossoms', 'https://en.wikipedia.org/wiki/National_Cherry_Blossom_Festival')}
        {` and a giant panda eating bamboo at the National Zoo.`}
      </>,
      'A city of neighborhoods: Georgetown rowhouses, rhythms in U Street jazz clubs, local produce stands at Dupont Circle, and discoveries in world-class Smithsonian museums.',
      'Its a city of thinkers, fighters, artists, and kids running through sprinklers on the National Mall. If you think D.C. is just politics, youre missing the whole point. Come for the monuments. Stay for the movement.',
      'Want to tour the White House? Want to check out internationally renowned artwork? Interested in Outer Space and Flight? This country?'
    ]
  },
  {
    id: 'city4',
    name: 'Pittsburgh',
    emoji: '🌁',
    slides: [
      'Pittsburgh, its not always grey!',
      <>
        Come to see all {createWikipediaLink('446 bridges', 'https://en.wikipedia.org/wiki/List_of_bridges_of_Pittsburgh')}. Stay because you accidentally ended up on the wrong one and now youre… in Ohio?
      </>,
      <>
        Visit Pittsburgh, where {createWikipediaLink('three rivers', 'https://en.wikipedia.org/wiki/Three_Rivers#Related_to_Pittsburgh,_Pennsylvania,_United_States')} converge and steel skies give way to lights of reinvention.
      </>,
      'Pittsburgh: the City of Champions, where victory is a habit both on the field and far beyond it.',
      'Pittsburgh forged steel, and now silicon. This city knows failure and reinvention better than any other.'
    ]
  }
];