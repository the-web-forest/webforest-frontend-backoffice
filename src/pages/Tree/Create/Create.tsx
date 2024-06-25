import { TreeForm } from "@/components/pages/Tree/TreeForm";
import Dashboard from "@/components/templates/Dashboard";

import { NAV_LINKS } from "@/constants/nav";

export default function Edit() {
  return (
    <Dashboard.Root>
      <Dashboard.Sidebar navLinks={NAV_LINKS} />
      <Dashboard.Title>Criar árvore</Dashboard.Title>
      <Dashboard.Main>
        <h1>Conteúdo Principal</h1>
        <TreeForm />
      </Dashboard.Main>
    </Dashboard.Root>
  );
}
