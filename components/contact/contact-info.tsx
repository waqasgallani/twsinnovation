import { Mail, Phone, MapPin } from "lucide-react";

export function ContactInfo() {
  const contactDetails = [
    {
      icon: <Mail className="h-6 w-6 text-blue-600 mr-4" />,
      title: "Email",
      content: "contact@twsinnovations.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600 mr-4" />,
      title: "Phone",
      content: "+1 (555) 123-4567"
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-600 mr-4" />,
      title: "Address",
      content: "123 Innovation Street\nTech City, TC 12345\nUnited States"
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
      <div className="space-y-6">
        {contactDetails.map((detail) => (
          <div key={detail.title} className="flex items-start">
            {detail.icon}
            <div>
              <h3 className="font-semibold mb-1">{detail.title}</h3>
              <p className="text-gray-600 whitespace-pre-line">{detail.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}