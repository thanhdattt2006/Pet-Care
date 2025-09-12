import React, { useState, useEffect } from 'react';

const Shelter = () => {
    const [shelterData, setShelterData] = useState(null);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        fetch('/data/shelter.json')
            .then(response => response.json())
            .then(data => setShelterData(data))
            .catch(error => console.error('Error fetching shelter data:', error));
    }, []);

    if (!shelterData) {
        return <div>Đang tải dữ liệu...</div>;
    }

    const filteredPets = shelterData.petsForAdoption.filter(pet => {
        if (filter === 'all') {
            return true;
        }
        return pet.type === filter;
    });

    return (
        <>
            {/* Gallery Thú Cưng Nhận Nuôi */}
            <section id="pet-adoption">
                <h2 className="text-center mb-4">Adoption Library</h2>
                <div className="text-center mb-4">
                    {/* Nút lọc thú cưng */}
                    <button onClick={() => setFilter('all')} className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'} mx-1`}>All</button>
                    <button onClick={() => setFilter('dog')} className={`btn ${filter === 'dog' ? 'btn-primary' : 'btn-outline-primary'} mx-1`}>Dog</button>
                    <button onClick={() => setFilter('cat')} className={`btn ${filter === 'cat' ? 'btn-primary' : 'btn-outline-primary'} mx-1`}>Cat</button>
                </div>
                <div className="row">
                    {filteredPets.map(pet => (
                        <div key={pet.id} className="col-md-4 col-sm-6 mb-4">
                            <div className="card h-100">
                                <img src={pet.image} className="card-img-top" alt={pet.name} style={{ height: '250px', objectFit: 'cover' }} />
                                <div className="card-body">
                                    <h5 className="card-title">{pet.name}</h5>
                                    <p className="card-text"><strong>Breed:</strong> {pet.breed}</p>
                                    <p className="card-text"><strong>Age:</strong> {pet.age}</p>
                                    <p className="card-text">{pet.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Câu Chuyện Thành Công */}
            <section id="success-stories" className="mt-5">
                <h2 className="text-center mb-4">Succes Story</h2>
                <div className="row">
                    {shelterData.successStories.map(story => (
                        <div key={story.id} className="col-md-6 mb-4">
                            <div className="card">
                                <img src={story.image} className="card-img-top" alt={story.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{story.title}</h5>
                                    <p className="card-text">{story.story}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sự Kiện */}
            <section id="events" className="mt-5">
                <h2 className="text-center mb-4">Upcoming Events</h2>
                <ul className="list-group">
                    {shelterData.events.map(event => (
                        <li key={event.id} className="list-group-item">
                            <h5>{event.title}</h5>
                            <p><strong>Time:</strong> {event.date}</p>
                            <p>{event.description}</p>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Thông Tin Liên Hệ */}
            <section id="shelter-contact" className="mt-5">
                <h2 className="text-center mb-4">Contact</h2>
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">{shelterData.contactInfo.name}</h5>
                        <p className="card-text">{shelterData.contactInfo.address}</p>
                        <p className="card-text"><strong>Phone:</strong> {shelterData.contactInfo.phone}</p>
                        <p className="card-text"><strong>Email:</strong> {shelterData.contactInfo.email}</p>
                    </div>
                    {/* Nhúng Google Map */}
                    <div className="mt-3">
                         <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.447793428843!2d106.70014831527379!3d10.77698399232079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f499c8f185f%3A0x2931b6bf643a6a1c!2sBitexco%20Financial%20Tower!5e0!3m2!1sen!2s!4v1662888123456!5m2!1sen!2s" 
                            width="100%" 
                            height="450" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Shelter Location">
                        </iframe>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Shelter;