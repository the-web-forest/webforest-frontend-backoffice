import {
  createContext,
  Children,
  Fragment,
  ReactNode,
  useContext,
  useState,
  isValidElement,
} from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { Nav } from "@/components/common/Nav";
import { LucideIcon } from "lucide-react";

export const DashboardContext = createContext<{ isCollapsed: boolean }>({
  isCollapsed: false,
});

interface SidebarProps {
  navLinks: {
    title: string;
    icon: LucideIcon;
    path: string;
  }[][];
}

function Sidebar({ navLinks }: SidebarProps) {
  const { isCollapsed } = useContext(DashboardContext);
  return navLinks.map((links, i) => (
    <Fragment key={i}>
      {i > 0 && <Separator />}
      <Nav isCollapsed={isCollapsed} links={links} />
    </Fragment>
  ));
}

function Title({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

function Main({ children }: { children: ReactNode }) {
  return <ResizablePanel defaultSize={85}>{children}</ResizablePanel>;
}

function Root({ children }: { children: ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const elements = Children.toArray(children).filter(isValidElement);
  const sidebar = elements.find((child) => child.type === Sidebar);
  const title = elements.find((child) => child.type === Title);
  const main = elements.find((child) => child.type === Main);

  return (
    <DashboardContext.Provider value={{ isCollapsed }}>
      <TooltipProvider delayDuration={0}>
        <ResizablePanelGroup
          direction="horizontal"
          className="h-full items-stretch"
        >
          <ResizablePanel
            defaultSize={15}
            collapsedSize={2}
            collapsible={true}
            minSize={10}
            maxSize={20}
            onCollapse={() => setIsCollapsed(true)}
            onExpand={() => setIsCollapsed(false)}
            className="min-w-[50px] transition-all duration-300 ease-in-out"
          >
            <div className="flex h-12 items-center justify-center px-2">
              icone webforest
            </div>
            <Separator />
            {sidebar}
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={90}>
            <div className="flex items-center px-4 py-2 h-12">
              <h1 className="text-xl font-bold">{title}</h1>
            </div>
            <Separator />
            <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              {main}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </TooltipProvider>
    </DashboardContext.Provider>
  );
}

const Dashboard = { Root, Main, Sidebar, Title };

export default Dashboard;
