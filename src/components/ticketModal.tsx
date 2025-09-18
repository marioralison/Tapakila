import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog"
import { CalendarIcon, MapPinnedIcon, User } from "lucide-react";
import imgEvent from "@/assets/flyers/lion.jpg"
import bgTicket from "@/assets/images/bg-ticket.jpeg"
import QRCode from "@/assets/barCode/qrcode.png"

type TicketModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function TicketModal({ isOpen, onClose }: TicketModalProps) {

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="rounded-xl p-1">
                <DialogHeader>
                    <DialogDescription className="flex h-65 gap-2 relative">
                        <img src={bgTicket} alt="background" className="absolute object-cover h-full w-full opacity-20"/>
                        <div className="flex z-10 w-7/10">
                            <img src={imgEvent} alt="image ticket" className="w-3/8 h-full rounded-xl"/>
                            <div className="flex flex-col justify-between items-start w-7/10 h-full px-7 py-4">
                                <h1 className="text-4xl font-semibold text-zinc-700">MANAGNA ANAO 2.0</h1>
                                <div className="w-full flex flex-col items-start justify-start gap-1">
                                    <div className="w-fit flex justify-center items-center gap-2">
                                        <CalendarIcon size={22} />
                                        <p className="text-zinc-800 text-lg">11 Janv 2025, 20 : 00</p>
                                    </div>
                                    <div className="w-fit flex justify-center items-center gap-2">
                                        <MapPinnedIcon size={22} />
                                        <p className="text-zinc-800 text-lg">LaCity Ivandry</p>
                                    </div>
                                    <div className="w-fit flex justify-center items-center gap-2">
                                        <User size={22} />
                                        <p className="text-zinc-800 text-lg">Jessica Alba</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-3xl text-zinc-800 font-light">MGA <strong className="font-bold pl-2">25 000</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="z-10 w-3/10 h-full flex justify-between items-center bg-white">
                            <div className="w-10 h-full flex items-center justify-center bg-red-400">
                                <p className="text-2xl -rotate-90 tracking-wide text-white font-bold">TAPAKILA</p>
                            </div>
                            <div className="flex flex-col h-full justify-center px-2 items-center">
                                <img src={QRCode} alt="code-qr" className="w-full"/>
                                <div className="flex flex-col items-center justify-center">
                                    <p>INFOLINE</p>
                                    <p className="font-semibold text-black">+261 34 21 584 54</p>
                                </div>
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
