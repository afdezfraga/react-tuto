import MarkerLogo from './../../assets/marker.png';

const JournalEntry = ({ entry }) => {
  return (
    <article className="journal-entry">
      <div className="journal-entry-img-container">
        <img src={entry.img.src} alt={entry.img.alt} className='journal-entry-img' />
      </div>
      <div className="journal-entry-content">
        <img src={MarkerLogo} alt="Marker Logo" className="marker" />
        <span className='country'>{entry.country}</span>
        <a className='maps-link' href={entry.googleMapsLink}>View on Google Maps</a>
        <h2 className='entry-title'>{entry.title}</h2>
        <p className='trip-dates'>{entry.dates}</p>
        <p className='entry-text'>{entry.text}</p>
      </div>
    </article>
  );
}

export default JournalEntry;