"use client";
import { ContactPhoneListItem } from "./components/contact-phone-list-item";
import { useContactPhonesViewmodel } from "./viewmodels/use-contact-phones-viewmodel";

const ConnectedContactPhonesScreen: React.FC = () => {
  const { contacts } = useContactPhonesViewmodel();
  return (
    <div className="flex flex-col gap-2 p-4">
      <p>¿Necesitas ayuda? Encuentra los teléfonos de contacto</p>
      {contacts.map((contact) => {
        return <ContactPhoneListItem key={contact.id} contact={contact} />;
      })}
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
