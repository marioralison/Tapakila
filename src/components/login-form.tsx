import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { useNavigate } from "react-router-dom"

import bgImage from '@/assets/images/welcome.jpg'
import bgImage1 from '@/assets/images/2.png'
import fbicon from '@/assets/icons/Facebook.svg'
import googleIcon from '@/assets/icons/Google.svg'

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const navigate = useNavigate()

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-2">
        <CardContent className="grid justify-center items-center gap-4 p-0 md:grid-cols-2 text-secondary">
          <form className="p-8 w-full">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold">Tongasoa</h1>
                <p className="text-sm text-muted-foreground text-balance pt-2">
                  Nous vous souhaitons la bienvue sur Tapakila
                </p>
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
              <Button onClick={() => navigate("/layout")} type="submit" className="w-full">
                Se connecter
              </Button>
              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-foreground relative z-10 px-2">
                  Or continue with
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" type="button" className="w-full">
                  <img src={googleIcon} alt="logo google" />
                  <span className="sr-only">Google</span>
                </Button>
                <Button variant="outline" type="button" className="w-full">
                  <img src={fbicon} alt="logo facebook" />
                  <span className="sr-only">Meta</span>
                </Button>
              </div>
              <div className="text-center text-sm">
                Vous ne possedez pas de compte ?
                <a onClick={() => navigate("/signIn")} className="pl-2 underline underline-offset-4 text-blue cursor-pointer hover:text-primary">
                  S'inscrire
                </a>
              </div>
            </div>
          </form>
          <div className="w-full h-full rounded-xl relative flex justify-center items-center">
            <img src={bgImage} alt="Mon logo" className="w-full h-full absolute rounded-xl"/>
            <img src={bgImage1} alt="illustration" className="w-80 absolute bottom-0"/>
            <h1 className="w-5/6 top-5 left-5 absolute text-white text-3xl font-semibold text-shadow-lg/2">Réserver votre ticket dans notre plateforme</h1>
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
