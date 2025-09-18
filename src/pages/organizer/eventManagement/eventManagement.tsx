import { useState } from "react";
import { Plus } from "lucide-react"
import EventCard from "@/components/eventCard";
import EventModal from "@/components/eventModal";
import EventInputModal from "@/components/eventInputModal";
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
  const [selectCreateEvent, setSelectCreateEvent] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (event: Event) => {
    setSelectedEvent(event);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedEvent(null);
    setSelectCreateEvent(false)
  };

  return (
    <div className="w-full h-full flex flex-col justify-start items-start gap-16">
      <div className="w-full h-full relative">
        <button onClick={() => setSelectCreateEvent(true)} className="absolute z-50 fixed py-3 px-4 bottom-15 right-15 bg-primary flex justify-center items-center gap-2 rounded-xl shadow-xl cursor-pointer transition delay-180 duration-180 ease-in-out hover:-translate-y-1 hover:scale-102">
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

      {selectCreateEvent && (
        <EventInputModal
          isOpen={selectCreateEvent}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default EventManagement;
