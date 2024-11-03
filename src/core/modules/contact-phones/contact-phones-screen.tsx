"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { ContactPhoneListItem } from "./components/contact-phone-list-item";
import { useContactPhonesViewmodel } from "./viewmodels/use-contact-phones-viewmodel";
import { HelpCircleIcon } from "lucide-react";

const ConnectedContactPhonesScreen: React.FC = () => {
  const { contacts, isLoading } = useContactPhonesViewmodel();
  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="p-3 bg-muted border rounded-lg  flex gap-2 text-sm">
        <HelpCircleIcon />
        <p>¿Necesitas ayuda? Encuentra los teléfonos de contacto</p>
      </div>
      {isLoading ? (
        <>
          {Array.from({ length: 3 }).map((_, index) => {
            return <Skeleton key={index} className="w-full h-24" />;
          })}
        </>
      ) : (
        contacts.map((contact) => {
          return <ContactPhoneListItem key={contact.id} contact={contact} />;
        })
      )}
    </div>
  );
};

export const ContactPhonesScreen = () => {
  return (
    <useContactPhonesViewmodel.Provider>
      <ConnectedContactPhonesScreen />
    </useContactPhonesViewmodel.Provider>
  );
};
