import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useNavigate } from "react-router-dom"

export default function Alert() {

    const navigate = useNavigate()

    return(
        <div className="w-full flex items-center justify-center">
            <AlertDialog>
                <AlertDialogTrigger>
                    <label className="text-white cursor-pointer">Déconnexion</label>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>Voulez-vous vous déconnecter ?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Cette action fermera la session courante
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>Annuler</AlertDialogCancel>
                    <AlertDialogAction onClick={() => navigate("/")}>Déconnecter</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}