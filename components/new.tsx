import * as React from "react";
import Link from "next/link"; // ✅ التصحيح: استيراد Link الخاص بـ Next.js
import { 
  Sidebar, 
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Inbox, HomeIcon, Settings, Calendar, Search } from "lucide-react";

const AppSidebar = () => {
  const sidebarItems = [
    {
      title: "Name",
      url: "/",
      icon: HomeIcon,
    },
    {
      title: "Inbox",
      url: "/",
      icon: Inbox,
    },
    {
      title: "Calendar",
      url: "/",
      icon: Calendar,
    },
    {
      title: "Search",
      url: "/",
      icon: Search,
    },
    {
      title: "Settings",
      url: "/",
      icon: Settings,
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {/* استخدام asChild مع الـ Link بالطريقة القياسية لـ Shadcn UI */}
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default AppSidebar;