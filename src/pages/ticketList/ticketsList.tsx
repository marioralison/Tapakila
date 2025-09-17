import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import mvola from "@/assets/logo/mvola.jpg"
import airtel from "@/assets/logo/airtel.jpg"
import orange from "@/assets/logo/orange.jpg"

function Tickets() {

  return (
    <div className="w-full h-full flex flex-col justify-start items-start">
      <h1 className="text-4xl font-bold pb-5">Mes tickets</h1>
      <Table className="bg-white w-full rounded-xl">
        <TableCaption>Liste des tickets achetés</TableCaption>
        <TableHeader>
          <TableRow className="hover:bg-transparent h-15">
            <TableHead className="w-1/6">Numéro commande</TableHead>
            <TableHead className="w-1/6">Nom évènement</TableHead>
            <TableHead className="w-1/6">Type évènement</TableHead>
            <TableHead className="w-1/6">Status</TableHead>
            <TableHead className="w-1/6">Montant MGA</TableHead>
            <TableHead className="w-1/6">Mode paiement</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="h-20">
            <TableCell className="font-medium w-1/6">0001</TableCell>
            <TableCell className="font-medium w-1/6">LJO - Showcase</TableCell>
            <TableCell className="font-medium w-1/6">Concert</TableCell>
            <TableCell className="w-1/6">Payé</TableCell>
            <TableCell className="w-1/6">25 000</TableCell>
            <TableCell className="w-1/6">
              <img src={airtel} alt="logo" className="w-12 h-12 rounded-sm"/>
            </TableCell>
          </TableRow>
          <TableRow className="h-20">
            <TableCell className="font-medium w-1/6">0002</TableCell>
            <TableCell className="font-medium w-1/6">Lion Hill - Vita Bacc</TableCell>
            <TableCell className="font-medium w-1/6">Live</TableCell>
            <TableCell className="w-1/6">Payé</TableCell>
            <TableCell className="w-1/6">10 000</TableCell>
            <TableCell className="w-1/6">
              <img src={orange} alt="logo" className="w-12 h-12 rounded-sm"/>
            </TableCell>
          </TableRow>
          <TableRow className="h-20">
            <TableCell className="font-medium w-1/6">0003</TableCell>
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
    </div>
  )
}

export default Tickets