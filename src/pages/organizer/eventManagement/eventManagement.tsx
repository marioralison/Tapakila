import { useState } from "react";
import { Plus } from "lucide-react"
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

function EventManagement() {

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
    <div className="w-full h-full flex flex-col justify-start items-start gap-16">
      <div className="w-full h-full relative">
        <button className="absolute py-3 px-4 bottom-0 right-0 bg-primary flex justify-center items-center gap-2 rounded-xl shadow-xl cursor-pointer">
          <Plus size={22}/>
          <p className="font-semibold">Créer évènement</p>
        </button>
        <h1 className="text-4xl font-bold pb-5">Mes évènements</h1>
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
          userType="admin"
        />
      )}
    </div>
  );
}

export default EventManagement;
