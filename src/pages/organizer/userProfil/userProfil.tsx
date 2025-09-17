function UserProfil() {

  return (
    <div className="w-full h-full flex flex-col justify-between items-start">
      <h1 className="text-4xl font-bold pb-5">Mon profil</h1>
      <div className="w-full flex flex-col gap-6">
        <div className="w-full bg-white rounded-xl p-10">
          <h1 className="text-4xl">RALISON Mario Euphraim</h1>
          <h3 className="text-xl pt-2">Compte organisateur</h3>
        </div>
        <div className="w-full bg-white rounded-xl p-10">
          <h2 className="text-3xl font-semibold">Informations personnelles</h2>
          <div className="pt-1 flex flex-wrap">
            <div className="w-1/2 py-4">
              <h4 className="text-zinc-400">Nom</h4>
              <p className="text-xl pt-2">RALISON</p>
            </div>
            <div className="w-1/2 py-4">
              <h4 className="text-zinc-400">Prénom</h4>
              <p className="text-xl pt-2">Mario Euphraim</p>
            </div>
            <div className="w-1/2 py-4">
              <h4 className="text-zinc-400">Téléphone</h4>
              <p className="text-xl pt-2">033 34 802 93</p>
            </div>
            <div className="w-1/2 py-4">
              <h4 className="text-zinc-400">Email</h4>
              <p className="text-xl pt-2">marioeuphraim@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-xl p-10">
          <h2 className="text-3xl font-semibold">Adresse</h2>
          <div className="pt-1 flex flex-wrap">
            <div className="w-1/2 py-4">
              <h4 className="text-zinc-400">Pays</h4>
              <p className="text-xl pt-2">Madagascar</p>
            </div>
            <div className="w-1/2 py-4">
              <h4 className="text-zinc-400">ville Antananarivo</h4>
              <p className="text-xl pt-2">033 34 802 93</p>
            </div>
            <div className="w-1/2 py-4">
              <h4 className="text-zinc-400">Code postal</h4>
              <p className="text-xl pt-2">101</p>
            </div>
            <div className="w-1/2 py-4">
              <h4 className="text-zinc-400">Domicile</h4>
              <p className="text-xl pt-2">Ambolokandrina</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default UserProfil