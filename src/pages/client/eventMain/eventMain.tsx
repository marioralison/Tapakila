import { useState } from "react";
import EventCard from "@/components/eventCard";
import EventModal from "@/components/eventModal";
import { eventsData } from "@/data/eventsData";

interface Event {
  id: string | number;
  image: string;
  title: string;
  date: string;
  time: string;
  location: string;
  price: string | number;
  characteristic: string;
}

function EventMain() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (event: Event) => {
    setSelectedEvent(event);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="w-full h-full flex flex-col justify-start items-start gap-16 pb-10">
      <div>
        <h1 className="text-4xl font-bold pb-5">Concerts</h1>
        <div className="w-full flex flex-wrap gap-7">
          {eventsData.map((event) => (
            <EventCard
              key={event.id}
              {...event}
              onClick={() => openModal(event)}
            />
          ))}
        </div>
      </div>

      {selectedEvent && (
        <EventModal 
          isOpen={isOpen} 
          onClose={closeModal} 
          event={selectedEvent} 
          userType="client"
        />
      )}
    </div>
  );
}

export default EventMain;
