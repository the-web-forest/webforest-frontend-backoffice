import { BiomeForm } from "@/components/pages/Biome/BiomeForm";
import Dashboard from "@/components/templates/Dashboard";

import { NAV_LINKS } from "@/constants/nav";

export default function Edit() {
  return (
    <Dashboard.Root>
      <Dashboard.Sidebar navLinks={NAV_LINKS} />
      <Dashboard.Title>Novo bioma</Dashboard.Title>
      <Dashboard.Main>
        <BiomeForm />
      </Dashboard.Main>
    </Dashboard.Root>
  );
}
