import Dashboard from "@/components/templates/Dashboard";

import { NAV_LINKS } from "@/constants/nav";

export default function Create() {
  return (
    <Dashboard.Root>
      <Dashboard.Sidebar navLinks={NAV_LINKS} />
      <Dashboard.Title>Criar parceiro</Dashboard.Title>
      <Dashboard.Main>
        <h1>Conteúdo Principal</h1>
      </Dashboard.Main>
    </Dashboard.Root>
  );
}
