import { CalendarIcon, Clock10Icon, MapPinnedIcon, CircleDollarSign, CheckCircle2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog"
import { useState } from "react";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "sonner";

type EventModalProps = {
  isOpen: boolean;
  onClose: () => void;
  event: {
    title: string;
    date: string;
    time: string;
    location: string;
    price: string | number;
    characteristic: string;
    image: string;
  };
};

export default function EventModal({ isOpen, onClose, event }: EventModalProps) {
  const [reserve, setReserve] = useState(false);

  const handleReserve = () => {
    setReserve(true);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="rounded-xl p-1">
        <DialogHeader>
          <DialogDescription>
            {!reserve ? (
                <div className="space-y-3 h-full flex gap-2">
                    <img
                        src={event.image}
                        alt={event.title}
                        className="w-1/2 h-full object-cover rounded-md"
                    />
                    <div className="w-8/12 h-full flex flex-col items-start justify-between py-6 px-6 rounded-lg">
                        <div>
                            <h3 className="text-4xl font-semibold text-zinc-900">
                                {event.title}
                            </h3>
                            <div className="w-fit mt-2 px-4 py-1 bg-red-400 rounded-tr-2xl rounded-bl-2xl">
                                <p className="text-white text-lg">{event.characteristic}</p>
                            </div>
                            <div className="w-full flex flex-col justify-center items-start py-4 space-y-1 mt-2 text-lg">
                                <div className="flex items-center">
                                    <CalendarIcon size={22} />
                                    <p className="pl-2">{event.date}</p>
                                </div>
                                <div className="flex items-center">
                                    <Clock10Icon size={22} />
                                    <p className="pl-2">{event.time}</p>
                                </div>
                                <div className="flex items-center">
                                    <MapPinnedIcon size={22} />
                                    <p className="pl-2">{event.location}</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center font-semibold text-2xl text-zinc-700 border px-4 py-3 mt-1 w-full rounded-lg gap-3">
                                <CircleDollarSign size={32} strokeWidth={1} color="black" opacity={0.4} />
                                <div className="flex justify-center items-center">
                                    <span>MGA</span>
                                    <h3 className="pl-2">{event.price}</h3>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={handleReserve}
                            className="w-full bg-primary mt-4 py-2 rounded-xl cursor-pointer text-secondary text-xl"
                        >
                            Réserver
                        </button>
                    </div>
                </div>
            ) : (
                <div className="space-y-3 h-full flex gap-2">
                    <img
                        src={event.image}
                        alt={event.title}
                        className="w-1/2 h-full object-cover rounded-md"
                    />
                    <form className="flex flex-col justify-between items-center gap-3 py-6 px-6">
                        <div className="w-full">
                            <h3 className="text-4xl font-semibold text-zinc-900 pb-8">Formulaire de paiement</h3>
                            <div className="w-full flex flex-col gap pb-5">
                                <p className="text-lg text-zinc-800 font-semibold pb-2">Mode de paiement</p>
                                <RadioGroup defaultValue="mvola" className="flex gap-4">
                                    <div className="w-1/3 h-12">
                                        <RadioGroupItem
                                            value="mvola"
                                            id="mvola"
                                            className="peer hidden"
                                        />
                                        <Label
                                            htmlFor="mvola"
                                            className="cursor-pointer rounded-lg border border-zinc-200 shadow-sm hover:scale-105 hover:shadow-lg h-full w-full px-4 py-2 text-left
                                                    peer-data-[state=checked]:bg-amber-300 peer-data-[state=checked]:text-black
                                                    transition"
                                        >
                                            Mvola
                                        </Label>
                                    </div>

                                    <div className="w-1/3 h-12">
                                        <RadioGroupItem
                                            value="airtelMoney"
                                            id="airtelMoney"
                                            className="peer hidden"
                                        />
                                        <Label
                                            htmlFor="airtelMoney"
                                            className="w-full cursor-pointer rounded-lg border border-zinc-200 shadow-sm hover:scale-105 hover:shadow-lg h-full px-4 py-2 text-left
                                                    peer-data-[state=checked]:bg-red-500 peer-data-[state=checked]:text-white
                                                    transition"
                                        >
                                            Airtel Money
                                        </Label>
                                    </div>

                                    <div className="w-1/3 h-12">
                                        <RadioGroupItem
                                            value="orangeMoney"
                                            id="orangeMoney"
                                            className="peer hidden"
                                        />
                                        <Label
                                            htmlFor="orangeMoney"
                                            className="block cursor-pointer rounded-lg border border-zinc-200 shadow-sm hover:scale-105 hover:shadow-lg h-full px-4 py-2 text-left
                                                    peer-data-[state=checked]:bg-orange-500 peer-data-[state=checked]:text-white
                                                    transition"
                                        >
                                            Orange Money
                                        </Label>
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="w-full flex flex-col gap-4 text-zinc-800">
                                <input
                                    type="text"
                                    placeholder="Téléphone"
                                    className="border rounded-lg p-2 w-full"
                                />
                                <input
                                    type="text"
                                    placeholder="Compte mobile money"
                                    className="border rounded-lg p-2 w-full"
                                />
                                <input
                                    type="password"
                                    placeholder="Code mobile money"
                                    className="border rounded-lg p-2 w-full"
                                />
                                <input
                                    type="password"
                                    placeholder="Code mot de passe mobile money"
                                    className="border rounded-lg p-2 w-full"
                                />
                            </div>
                        </div>
                        <button
                            onClick={() => toast("Commande effectué", {
                                description: "Votre commande est faite avec succès",
                                icon: <CheckCircle2 fill="green" color="white"/>,
                            })}
                            type="submit"
                            className="w-full bg-primary py-2 rounded-xl text-secondary text-lg cursor-pointer"
                        >
                            Confirmer
                        </button>
                    </form>
              </div>
            )}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
