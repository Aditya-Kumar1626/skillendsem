import React, { useState } from "react";
import "./App.css";

const eventsList = [
  { id: 1, title: "Tech Conference 2025", date: "12 Feb 2025", location: "Mumbai", description: "A global meet-up for IT professionals." },
  { id: 2, title: "AI Summit", date: "20 Mar 2025", location: "Delhi", description: "Showcase of latest artificial intelligence innovations." },
  { id: 3, title: "Startup Expo", date: "05 Apr 2025", location: "Bangalore", description: "Networking event for founders and investors." },
];

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setShowModal(false);
  };

  return (
    <div className="container">
      <h2 className="heading">Upcoming Events</h2>

      {/* Event Cards */}
      <div className="events-grid">
        {eventsList.map((event) => (
          <div key={event.id} className="event-card" onClick={() => openModal(event)}>
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p className="location">{event.location}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedEvent && (
        <div className="modal-overlay">
          <div className="modal">
            <h3 className="modal-title">{selectedEvent.title}</h3>
            <p><strong>Date:</strong> {selectedEvent.date}</p>
            <p><strong>Location:</strong> {selectedEvent.location}</p>
            <p className="description">{selectedEvent.description}</p>

            <button className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
