import Dashboard from "@/components/templates/Dashboard";

import { NAV_LINKS } from "@/constants/nav";

export default function List() {
  return (
    <Dashboard.Root>
      <Dashboard.Sidebar navLinks={NAV_LINKS} />
      <Dashboard.Title>Ver árvores</Dashboard.Title>
      <Dashboard.Main>
        <h1>Conteúdo Principal</h1>
      </Dashboard.Main>
    </Dashboard.Root>
  );
}
