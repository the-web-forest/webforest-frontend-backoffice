import { Handshake, Trees, User, LogOut } from "lucide-react";

export const NAV_LINKS = [
  [
    {
      title: "Árvores",
      path: "/tree",
      icon: Trees,
    },
    {
      title: "Parceiros",
      path: "/partner",
      icon: Handshake,
    },
    {
      title: "Usuários",
      path: "/user",
      icon: User,
    },
  ],
  [
    {
      title: "Sair",
      path: "/logout",
      icon: LogOut,
    },
  ],
];
