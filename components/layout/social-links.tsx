import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <a href="#" className="hover:text-blue-400"><Facebook size={20} /></a>
      <a href="#" className="hover:text-blue-400"><Twitter size={20} /></a>
      <a href="#" className="hover:text-blue-400"><Linkedin size={20} /></a>
      <a href="#" className="hover:text-blue-400"><Instagram size={20} /></a>
    </div>
  );
}