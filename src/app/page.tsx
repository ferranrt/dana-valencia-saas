import { Map } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const RedirectLink: React.FC<{
  href: string;
  title: string;
  children?: ReactNode;
  icon?: ReactNode;
}> = ({ href, title, children, icon }) => {
  return (
    <Link
      href={href}
      className="p-2 gap-2 rounded-lg border hover:border-accent flex"
    >
      <div>{icon}</div>
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold">{title}</h4>
        <div className="text-sm text-muted-foreground">{children}</div>
      </div>
    </Link>
  );
};
export default function Home() {
  return (
    <div className="p-4">
      <h1>Ayuda a Valencia</h1>
      <div>
        <RedirectLink
          icon={<Map />}
          title="Puntos de recogida"
          href="/puntos-recogida"
        >
          <p>
            Encuentra los puntos de recogida de alimentos más cercanos a ti.
          </p>
          <p>
            Conoces un punto de recogida que no está en el mapa? Ayúdanos a que
            más personas lo encuentren.
          </p>
        </RedirectLink>
      </div>
    </div>
  );
}
