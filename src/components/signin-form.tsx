import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { useNavigate } from "react-router-dom"

import bgImage from '@/assets/images/welcome.jpg'
import bgImage1 from '@/assets/images/1.png'

export function SigninForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const navigate = useNavigate()

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-2">
        <CardContent className="grid p-0 md:grid-cols-2 gap-4 text-secondary">
          <form className="px-10 py-12">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold">Inscription</h1>
                <p className="text-sm text-muted-foreground text-balance pt-2">
                  Veuillez remplir tous les champs pour créer votre compte
                </p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="firstname">Nom</Label>
                <Input
                  id="firstname"
                  type="text"
                  placeholder="John"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="lastname">Prénom</Label>
                <Input
                  id="lastname"
                  type="text"
                  placeholder="Doe"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nom@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Mot de passe</Label>
                </div>
                <Input id="password" type="password" required />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Confirmer mot de passe</Label>
                </div>
                <Input id="password" type="password" required />
              </div>
              <RadioGroup defaultValue="client" className="flex">
                <div className="w-1/2 flex items-center space-x-2">
                  <RadioGroupItem value="client" id="client" />
                  <Label htmlFor="client" className="cursor-pointer">Client</Label>
                </div>
                <div className="w-1/2 flex items-center space-x-2">
                  <RadioGroupItem value="organizer" id="organizer" />
                  <Label htmlFor="organizer" className="cursor-pointer">Organisateur</Label>
                </div>
              </RadioGroup>
              <Button type="submit" className="w-full">
                S'inscrire
              </Button>
              <div className="text-center text-sm">
                Vous avez déjà un compte ?
                <a onClick={() => navigate("/")} className="pl-2 underline underline-offset-4 text-blue cursor-pointer hover:text-primary">
                  Se connecter
                </a>
              </div>
            </div>
          </form>
          <div className="w-full h-full rounded-xl relative flex justify-center items-center">
            <img src={bgImage} alt="Mon logo" className="w-full h-full absolute rounded-xl"/>
            <img src={bgImage1} alt="illustration" className="w-70 absolute bottom-0"/>
            <h1 className="w-5/6 top-5 left-5 absolute text-white text-3xl font-semibold text-shadow-lg/2">Devenez notre utilisateur préferé</h1>
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4 pt-5">
        En cliquant sur le bouton, vous êtes en accord <a href="#">aux termes du service</a>{" "}
        et <a href="#">politique de confidentialité</a>.
      </div>
    </div>
  )
}