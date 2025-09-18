import { CheckCircle2, ImageIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog"
import { useState } from "react";
import { toast } from "sonner";

type EventInputModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function EventInputModal({ isOpen, onClose }: EventInputModalProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [imageEvent, setImageEvent] = useState("")

    //Changer l'image pour une autre
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const imageUrl = URL.createObjectURL(file);
            setImageEvent(imageUrl)
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="rounded-xl p-1">
                <DialogHeader>
                    <DialogDescription>
                        <div className="space-y-3 h-full flex gap-2">
                            <div className="w-1/2 h-full bg-zinc-100 rounded-xl">
                                {!imageEvent ? (
                                    <label onClick={() => setIsEditing(!isEditing)} className="w-full h-full flex justify-center items-center gap-1 bg-zinc-100 text-black px-3 py-3 cursor-pointer">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={handleImageChange}
                                        />
                                        <ImageIcon size={24} strokeWidth={1} color="black" opacity={1} />
                                        Charger image
                                    </label>
                                ) : (
                                    <img src={imageEvent} alt="image event" className="w-full h-full rounded-xl"/>
                                )}
                            </div>
                            <div className="w-1/2 flex flex-col justify-between items-center gap-3 py-6 px-6">
                                <form className="flex flex-col gap-4">
                                    <h3 className="text-4xl font-semibold text-zinc-900 pb-6">
                                        Création évènement
                                    </h3>
                                    <input
                                        type="text"
                                        placeholder="Titre"
                                        className="border rounded-lg text-zinc-900 p-2 w-full"
                                    />
                                    <input
                                        type="date"
                                        className="border rounded-lg text-zinc-900 p-2 w-full"
                                    />
                                    <input
                                        type="time"
                                        className="border rounded-lg text-zinc-900 p-2 w-full"
                                    />
                                    <div className="w-full flex items-center justify-center gap-4">
                                        <input
                                            type="text"
                                            placeholder="Lieu"
                                            className="border rounded-lg text-zinc-900 p-2 w-full"
                                        />
                                        <input
                                            type="number"
                                            placeholder="Nombre place"
                                            className="border rounded-lg text-zinc-900 p-2 w-full"
                                        />
                                    </div>
                                    <input
                                        type="number"
                                        placeholder="Prix"
                                        className="border rounded-lg text-zinc-900 p-2 w-full"
                                    />
                                    <input
                                        placeholder="Description"
                                        className="border rounded-lg text-zinc-900 p-2 w-full"
                                        type="text"
                                    />
                                </form>
                                <button
                                    type="submit"
                                    onClick={() => toast("Modification effectué", {
                                        description: "L'évènement est mis à jour",
                                        icon: <CheckCircle2 fill="green" color="white"/>,
                                    })}
                                    className="w-full bg-primary py-2 rounded-xl text-secondary text-lg cursor-pointer mt-6"
                                >
                                    Confirmer
                                </button>
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
