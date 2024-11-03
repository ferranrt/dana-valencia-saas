import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContactPhoneDTO } from "@/core/server/dtos/contact-phone.dto";
import { Phone, PhoneCall } from "lucide-react";

type Props = {
  contact: ContactPhoneDTO;
};

const generatePhoneLink = (phone: string) => {
  return `tel:${phone}`;
};
export const ContactPhoneListItem = ({ contact }: Props) => {
  return (
    <div className="flex gap-4 p-3 border rounded-lg w-full">
      <div className="flex flex-col">
        <div className="  bg-muted p-2 border rounded-lg">
          <PhoneCall className="size-4" />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <p className="font-normal  text-foreground leading-4 mb-2">
          <strong>{contact.title}</strong>
        </p>
        {contact.description && contact.description?.length > 0 ? (
          <p className="text-sm text-muted-foreground  ">
            {contact.description}
          </p>
        ) : null}
        <div className="mt-2">
          <Badge variant="outline" className="gap-1.5">
            <Phone className="size-2.5" />
            {contact.value}
          </Badge>
        </div>
        <div className="flex justify-end">
          <Button asChild className="mt-2">
            <a href={generatePhoneLink(contact.value)}>Llamar</a>
          </Button>
        </div>
      </div>
    </div>
  );
};
