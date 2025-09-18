import { useState } from "react"
import { Pencil, CheckCircle2, Save } from "lucide-react"
import { toast } from "sonner"

function UserProfil() {
  const [isEditing, setIsEditing] = useState(false)

  const [user, setUser] = useState({
    nom: "RALISON",
    prenom: "Mario Euphraim",
    telephone: "033 34 802 93",
    email: "marioeuphraim@gmail.com",
    pays: "Madagascar",
    ville: "Antananarivo",
    codePostal: "101",
    domicile: "Ambolokandrina",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleSave = () => {
    setIsEditing(false)
    toast("Profil mis à jour", {
      description: "Vos informations personnelles ont été sauvegardées",
      icon: <CheckCircle2 fill="green" color="white" />,
    })
  }

  return (
    <div className="w-full h-full flex flex-col justify-between items-start">
      <div className="flex items-center justify-between w-full">
        <div className="pb-5 flex gap-4">
          <h1 className="text-4xl font-bold">Mon profil</h1>
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center justify-center gap-2 bg-white rounded-full text-black px-4 h-10 text-black text-lg cursor-pointer"
            >
              <Pencil size={18} color="black"/>
              Modifier
            </button>
          ) : (
            <button
              onClick={handleSave}
              className="flex items-center gap-2 bg-green-300 text-secondary px-4 h-10 rounded-full cursor-pointer"
            >
              <Save size={18} color="black"/>
              Sauvegarder
            </button>
          )}
        </div>
      </div>

      <div className="w-full h-full flex justify-between flex-col gap-6">
        <div className="w-full h-2/10 bg-white rounded-xl p-10">
          <h1 className="text-4xl">
            {isEditing ? (
              <input
                type="text"
                name="prenom"
                value={user.prenom}
                onChange={handleChange}
                className="border-b border-zinc-300 focus:outline-none px-1"
              />
            ) : (
              user.nom + " " + user.prenom
            )}
          </h1>
          <h3 className="text-xl pt-2">Compte organisateur</h3>
        </div>

        <div className="w-full h-4/10 bg-white rounded-xl p-10">
          <h2 className="text-3xl font-semibold">Informations personnelles</h2>
          <div className="pt-1 flex flex-wrap">
            <div className="w-1/2 py-4">
              <h4 className="text-zinc-400">Nom</h4>
              {isEditing ? (
                <input
                  type="text"
                  name="nom"
                  value={user.nom}
                  onChange={handleChange}
                  className="text-xl border-b border-zinc-300 focus:outline-none px-1 pt-2"
                />
              ) : (
                <p className="text-xl pt-2">{user.nom}</p>
              )}
            </div>
            <div className="w-1/2 py-4">
              <h4 className="text-zinc-400">Prénom</h4>
              {isEditing ? (
                <input
                  type="text"
                  name="prenom"
                  value={user.prenom}
                  onChange={handleChange}
                  className="text-xl border-b border-zinc-300 focus:outline-none px-1 pt-2"
                />
              ) : (
                <p className="text-xl pt-2">{user.prenom}</p>
              )}
            </div>
            <div className="w-1/2 py-4">
              <h4 className="text-zinc-400">Téléphone</h4>
              {isEditing ? (
                <input
                  type="text"
                  name="telephone"
                  value={user.telephone}
                  onChange={handleChange}
                  className="text-xl border-b border-zinc-300 focus:outline-none px-1 pt-2"
                />
              ) : (
                <p className="text-xl pt-2">{user.telephone}</p>
              )}
            </div>
            <div className="w-1/2 py-4">
              <h4 className="text-zinc-400">Email</h4>
              {isEditing ? (
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  className="text-xl border-b border-zinc-300 focus:outline-none px-1 pt-2"
                />
              ) : (
                <p className="text-xl pt-2">{user.email}</p>
              )}
            </div>
          </div>
        </div>

        <div className="w-full h-4/10 bg-white rounded-xl p-10">
          <h2 className="text-3xl font-semibold">Adresse</h2>
          <div className="pt-1 flex flex-wrap">
            <div className="w-1/2 py-4">
              <h4 className="text-zinc-400">Pays</h4>
              {isEditing ? (
                <input
                  type="text"
                  name="pays"
                  value={user.pays}
                  onChange={handleChange}
                  className="text-xl border-b border-zinc-300 focus:outline-none px-1 pt-2"
                />
              ) : (
                <p className="text-xl pt-2">{user.pays}</p>
              )}
            </div>
            <div className="w-1/2 py-4">
              <h4 className="text-zinc-400">Ville</h4>
              {isEditing ? (
                <input
                  type="text"
                  name="ville"
                  value={user.ville}
                  onChange={handleChange}
                  className="text-xl border-b border-zinc-300 focus:outline-none px-1 pt-2"
                />
              ) : (
                <p className="text-xl pt-2">{user.ville}</p>
              )}
            </div>
            <div className="w-1/2 py-4">
              <h4 className="text-zinc-400">Code postal</h4>
              {isEditing ? (
                <input
                  type="text"
                  name="codePostal"
                  value={user.codePostal}
                  onChange={handleChange}
                  className="text-xl border-b border-zinc-300 focus:outline-none px-1 pt-2"
                />
              ) : (
                <p className="text-xl pt-2">{user.codePostal}</p>
              )}
            </div>
            <div className="w-1/2 py-4">
              <h4 className="text-zinc-400">Domicile</h4>
              {isEditing ? (
                <input
                  type="text"
                  name="domicile"
                  value={user.domicile}
                  onChange={handleChange}
                  className="text-xl border-b border-zinc-300 focus:outline-none px-1 pt-2"
                />
              ) : (
                <p className="text-xl pt-2">{user.domicile}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfil