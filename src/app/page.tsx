import Image from "next/image";
import { ThemeToggle } from "~/components/theme-toggle";
import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
      <header className="flex flex-col gap-y-4 lg:flex-row justify-between items-center">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl">C&apos;est quoi Made ?</h1>
          <p>
            Trouve des idées de projets diverses, obtient les maquettes et la
            correction puis présente tous ça à tes futurs clients.
          </p>
          <p>
            <Button>Voir les projets</Button>
          </p>
        </div>
        <div>
          <Image
            src="/img/design/drawings/projects.svg"
            alt="Whiteboard with stickers"
            width={498}
            height={351}
          />
        </div>
      </header>
      <section className="flex gap-4">
        <div></div>
        <div>
          <h1 className="text-2xl">Espace communauté ?</h1>
          <p>
            Créer ton propre profil afin de poster tes projets et pouvoir être
            vu et contacté par d&apos;autres utilisateurs.
          </p>
          <p>
            <Button>Créer mon profil</Button>
          </p>
        </div>
      </section>
      <section>
        <h1>Made c&apos;est aussi ça</h1>
        <div>
          <Image
            src="/img/design/drawings/community.svg"
            alt="Idea"
            width={498}
            height={351}
          />
          <h3>Une communauté d&apos;entraide</h3>
          <p>
            Nos utilisateurs sont eux même acteur ! ils crée des projets pour
            vous afin de vous aider en toute bienveillance.
          </p>
        </div>
        <div>
          <Image
            src="/img/design/drawings/community.svg"
            alt="Idea"
            width={498}
            height={351}
          />
          <h3>Un lieu d&apos;apprentissage</h3>
          <p>
            Vous pouvez apprendre très simplement grace aux projets fournis par
            la communauté et nous même.
          </p>
        </div>
      </section>
      <section>
        <h1>Nous contacter</h1>
        <p>
          Tu as besoins d’aide pour réaliser des actions sur Made, des bugs sont
          survenue subitement et tu aimerais nous en faire part ?
        </p>
        {/* Contact form */}
      </section>
      <ThemeToggle />
    </main>
  );
}
