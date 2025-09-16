import EventCard from "@/components/eventCard"
import { eventsData } from "@/data/eventsData"

function EventMain() {

  return (
    <div className="w-full h-full flex flex-col justify-start items-start gap-16 pb-10">
      <div>
        <h1 className="text-4xl font-bold pb-5">Concerts</h1>
        <div className="w-full flex flex-wrap gap-7">
          {eventsData.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold pb-5">Festivals</h1>
        <div className="w-full flex flex-wrap gap-7">
          {eventsData.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold pb-5">Showcase</h1>
        <div className="w-full flex flex-wrap gap-7">
          {eventsData.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EventMain