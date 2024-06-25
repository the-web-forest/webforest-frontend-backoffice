import Dashboard from "@/components/templates/Dashboard";

import { NAV_LINKS } from "@/constants/nav";

export default function Edit() {
  return (
    <Dashboard.Root>
      <Dashboard.Sidebar navLinks={NAV_LINKS} />
      <Dashboard.Title>Editar usuário</Dashboard.Title>
      <Dashboard.Main>
        <h1>Conteúdo Principal</h1>
      </Dashboard.Main>
    </Dashboard.Root>
  );
}
