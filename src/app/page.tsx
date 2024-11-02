import { LegalFooter } from "@/core/modules/shared/components/footer";
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
      className="p-3 gap-3 rounded-xl active:bg-accent border hover:border-accent flex"
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
    <div className="p-4 flex flex-col flex-1 h-full">
      <div className="flex flex-col flex-1 overflow-y-auto">
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
      <LegalFooter />
    </div>
  );
}
