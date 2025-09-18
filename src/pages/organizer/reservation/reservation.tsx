import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useState } from "react"

import mvola from "@/assets/logo/mvola.jpg"
import airtel from "@/assets/logo/airtel.jpg"
import orange from "@/assets/logo/orange.jpg"

import TicketModal from "@/components/ticketModal"

function ReservationList() {

  const [viewTicket, setViewTicket] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setViewTicket(true)
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full h-full flex flex-col justify-start items-start">
      <h1 className="text-4xl font-bold pb-5">Tickets réservés</h1>
      <Table className="bg-white w-full rounded-xl">
        <TableCaption>Liste des tickets vendus</TableCaption>
        <TableHeader>
          <TableRow className="hover:bg-transparent h-15">
            <TableHead className="w-1/6">Numéro</TableHead>
            <TableHead className="w-1/6">Nom client</TableHead>
            <TableHead className="w-1/6">Nom évènement</TableHead>
            <TableHead className="w-1/6">Type évènement</TableHead>
            <TableHead className="w-1/6">Status</TableHead>
            <TableHead className="w-1/6">Montant MGA</TableHead>
            <TableHead className="w-1/6">Mode paiement</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="h-20 cursor-pointer" onClick={() => openModal()}>
            <TableCell className="font-medium w-1/6">0001</TableCell>
            <TableCell className="font-medium w-1/6">Jessica alba</TableCell>
            <TableCell className="font-medium w-1/6">LJO - Showcase</TableCell>
            <TableCell className="font-medium w-1/6">Concert</TableCell>
            <TableCell className="w-1/6">Payé</TableCell>
            <TableCell className="w-1/6">25 000</TableCell>
            <TableCell className="w-1/6">
              <img src={airtel} alt="logo" className="w-12 h-12 rounded-sm"/>
            </TableCell>
          </TableRow>
          <TableRow className="h-20 cursor-pointer">
            <TableCell className="font-medium w-1/6">0002</TableCell>
            <TableCell className="font-medium w-1/6">Gleen Scott</TableCell>
            <TableCell className="font-medium w-1/6">Lion Hill - Vita Bacc</TableCell>
            <TableCell className="font-medium w-1/6">Live</TableCell>
            <TableCell className="w-1/6">Payé</TableCell>
            <TableCell className="w-1/6">10 000</TableCell>
            <TableCell className="w-1/6">
              <img src={orange} alt="logo" className="w-12 h-12 rounded-sm"/>
            </TableCell>
          </TableRow>
          <TableRow className="h-20 cursor-pointer">
            <TableCell className="font-medium w-1/6">0003</TableCell>
            <TableCell className="font-medium w-1/6">Travis McCoy</TableCell>
            <TableCell className="font-medium w-1/6">Denise - Live Concert</TableCell>
            <TableCell className="font-medium w-1/6">Concert</TableCell>
            <TableCell className="w-1/6">Payé</TableCell>
            <TableCell className="w-1/6">35 000</TableCell>
            <TableCell className="w-1/6">
              <img src={mvola} alt="logo" className="w-12 h-12 rounded-sm"/>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      {viewTicket && (
        <TicketModal 
          isOpen={isOpen}
          onClose={closeModal}
        />
      )}
    </div>
  )
}

export default ReservationList