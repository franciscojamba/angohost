import './Location.css'; // Make sure to create this CSS file

function Location() {
  return (
    <div className="location-container">
      <div className="location-info">
        <h2>ONDE NOS ENCONTRAR</h2>
        <h1>Sede da Angohost</h1>
        <p>Av. Pedro de Castro Van - Dúnem <br />Vila Ecocampo nº 76<br />Luanda</p>
      </div>
      <div className="map-container">
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1970.8958068478926!2d13.20602029643022!3d-8.898956484281484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f783eef1fd19%3A0xf7df4316070ec55!2sPETROHOST%2C%20LDA!5e0!3m2!1spt-PT!2sao!4v1719408430059!5m2!1spt-PT!2sao" width="600" height="450" 
      style={{border:0}}
       allowFullScreen 
       loading="lazy"
       referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}

export default Location;