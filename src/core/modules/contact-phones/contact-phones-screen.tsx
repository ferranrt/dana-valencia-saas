"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { ContactPhoneListItem } from "./components/contact-phone-list-item";
import { useContactPhonesViewmodel } from "./viewmodels/use-contact-phones-viewmodel";

const ConnectedContactPhonesScreen: React.FC = () => {
  const { contacts, isLoading } = useContactPhonesViewmodel();
  return (
    <div className="flex flex-col gap-2 p-4">
      <p>¿Necesitas ayuda? Encuentra los teléfonos de contacto</p>
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
