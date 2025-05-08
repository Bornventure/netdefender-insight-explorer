
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  Users,
  Ticket,
  Banknote,
  MessageSquare,
  Network,
  Router,
  HardDrive,
  Map,
  Calendar,
  // Replacing the incorrect Inventory import with a valid alternative
  // Inventory was causing build error
  Package,
  Settings,
  LogOut,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";

type MenuItemType = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  path?: string;
  submenu?: MenuItemType[];
};

const menuItems: MenuItemType[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <Shield />,
    path: "/dashboard"
  },
  {
    id: "crm",
    label: "CRM",
    icon: <Users />,
    submenu: [
      {
        id: "customers",
        label: "Customers",
        submenu: [
          { id: "customers-search", label: "Search", path: "/crm/customers/search" },
          { id: "customers-list", label: "List", path: "/crm/customers/list" },
          { id: "customers-maps", label: "Maps", path: "/crm/customers/maps" }
        ]
      },
      {
        id: "tickets",
        label: "Tickets",
        submenu: [
          { id: "tickets-dashboard", label: "Dashboard", path: "/crm/tickets/dashboard" },
          { id: "tickets-list", label: "List", path: "/crm/tickets/list" },
          { id: "tickets-closed", label: "List of closed", path: "/crm/tickets/closed" },
          { id: "tickets-archive", label: "Archive", path: "/crm/tickets/archive" },
          { id: "tickets-recipients", label: "Recipients", path: "/crm/tickets/recipients" }
        ]
      },
      {
        id: "finance",
        label: "Finance",
        submenu: [
          { id: "finance-dashboard", label: "Dashboard", path: "/crm/finance/dashboard" },
          { id: "finance-transactions", label: "Transactions", path: "/crm/finance/transactions" },
          { id: "finance-invoices", label: "Invoices", path: "/crm/finance/invoices" },
          { id: "finance-payments", label: "Payments", path: "/crm/finance/payments" },
          { id: "finance-history", label: "History & Preview", path: "/crm/finance/history" }
        ]
      },
      {
        id: "messages",
        label: "Messages",
        submenu: [
          { id: "messages-inbox", label: "Inbox", path: "/crm/messages/inbox" },
          {
            id: "messages-mass",
            label: "Mass sending",
            submenu: [
              { id: "messages-mass-create", label: "Create", path: "/crm/messages/mass/create" },
              { id: "messages-mass-history", label: "History", path: "/crm/messages/mass/history" },
              { id: "messages-mass-news", label: "Company News", path: "/crm/messages/mass/news" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "company",
    label: "Company",
    icon: <Network />,
    submenu: [
      {
        id: "networking",
        label: "Networking",
        submenu: [
          {
            id: "network-sites",
            label: "Network sites",
            submenu: [
              { id: "network-sites-add", label: "Add", path: "/company/networking/sites/add" },
              { id: "network-sites-list", label: "List", path: "/company/networking/sites/list" }
            ]
          },
          {
            id: "routers",
            label: "Routers",
            submenu: [
              { id: "routers-add", label: "Add", path: "/company/networking/routers/add" },
              { id: "routers-list", label: "List", path: "/company/networking/routers/list" }
            ]
          },
          {
            id: "tr-069",
            label: "TR-069 (ACS)",
            submenu: [
              { id: "tr-069-dashboard", label: "Dashboard", path: "/company/networking/tr069/dashboard" },
              { id: "tr-069-devices", label: "Devices", path: "/company/networking/tr069/devices" },
              { id: "tr-069-files", label: "Files", path: "/company/networking/tr069/files" },
              { id: "tr-069-upgrade", label: "Upgrade Batches", path: "/company/networking/tr069/upgrade" }
            ]
          },
          {
            id: "hardware",
            label: "Hardware",
            submenu: [
              { id: "hardware-add", label: "Add", path: "/company/networking/hardware/add" },
              { id: "hardware-list", label: "List", path: "/company/networking/hardware/list" },
              { id: "hardware-backups", label: "Backups", path: "/company/networking/hardware/backups" }
            ]
          },
          {
            id: "ipv4",
            label: "IPv4 Networks",
            submenu: [
              { id: "ipv4-add", label: "Add", path: "/company/networking/ipv4/add" },
              { id: "ipv4-list", label: "List", path: "/company/networking/ipv4/list" }
            ]
          },
          {
            id: "ipv6",
            label: "IPv6 Networks",
            submenu: [
              { id: "ipv6-add", label: "Add", path: "/company/networking/ipv6/add" },
              { id: "ipv6-list", label: "List", path: "/company/networking/ipv6/list" }
            ]
          },
          { id: "network-maps", label: "Maps", path: "/company/networking/maps" }
        ]
      },
      {
        id: "scheduling",
        label: "Scheduling",
        submenu: [
          { id: "scheduling-dashboard", label: "Dashboard", path: "/company/scheduling/dashboard" },
          { id: "scheduling-projects", label: "Projects", path: "/company/scheduling/projects" },
          { id: "scheduling-tasks", label: "Tasks", path: "/company/scheduling/tasks" },
          { id: "scheduling-calendars", label: "Calendars", path: "/company/scheduling/calendars" },
          { id: "scheduling-maps", label: "Maps", path: "/company/scheduling/maps" },
          { id: "scheduling-archive", label: "Archive", path: "/company/scheduling/archive" }
        ]
      },
      {
        id: "inventory",
        label: "Inventory",
        submenu: [
          { id: "inventory-dashboard", label: "Dashboard", path: "/company/inventory/dashboard" },
          { id: "inventory-items", label: "Items", path: "/company/inventory/items" },
          { id: "inventory-products", label: "Products", path: "/company/inventory/products" },
          {
            id: "inventory-supply",
            label: "Supply",
            submenu: [
              { id: "inventory-supplies", label: "Supplies", path: "/company/inventory/supply/supplies" },
              { id: "inventory-vendors", label: "Vendors", path: "/company/inventory/supply/vendors" },
              { id: "inventory-invoices", label: "Supplier Invoices", path: "/company/inventory/supply/invoices" }
            ]
          },
          {
            id: "inventory-reports",
            label: "Reports",
            submenu: [
              { id: "inventory-sold", label: "Sold & Rented items", path: "/company/inventory/reports/sold" },
              { id: "inventory-report-items", label: "Items", path: "/company/inventory/reports/items" }
            ]
          }
        ]
      },
      {
        id: "tariff",
        label: "Tariff Plans",
        submenu: [
          { id: "tariff-internet", label: "Internet", path: "/company/tariff/internet" },
          { id: "tariff-recurring", label: "Recurring", path: "/company/tariff/recurring" },
          { id: "tariff-one-time", label: "One-time", path: "/company/tariff/one-time" },
          { id: "tariff-bundles", label: "Bundles", path: "/company/tariff/bundles" }
        ]
      },
      { id: "administration", label: "Administration", path: "/company/administration" }
    ]
  }
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
    dashboard: true
  });
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  const toggleMenu = (menuId: string) => {
    setOpenMenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId]
    }));
  };

  const handleMenuClick = (path?: string) => {
    if (path) {
      navigate(path);
    }
  };

  const MenuItem = ({ item, level = 0 }: { item: MenuItemType; level?: number }) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const isOpen = openMenus[item.id];
    const indentPadding = `${level * 12}px`;

    return (
      <>
        <div
          className={cn(
            "flex items-center px-3 py-2 text-sm rounded-md cursor-pointer",
            level === 0 ? "text-slate-200 font-medium" : "text-slate-300",
            item.path && "hover:bg-cyber-blue/20"
          )}
          style={level > 0 ? { paddingLeft: indentPadding } : {}}
          onClick={() => {
            if (hasSubmenu) {
              toggleMenu(item.id);
            } else if (item.path) {
              handleMenuClick(item.path);
            }
          }}
        >
          {level === 0 && item.icon && <span className="mr-2 text-cyber-green">{item.icon}</span>}
          <span className={cn("flex-grow truncate", !collapsed || level > 0 ? "block" : "hidden")}>
            {item.label}
          </span>
          {hasSubmenu && !collapsed && (
            <span className="ml-2">
              {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </span>
          )}
        </div>
        {hasSubmenu && isOpen && !collapsed && (
          <div className={level === 0 ? "mt-1" : ""}>
            {item.submenu!.map((subItem) => (
              <MenuItem key={subItem.id} item={subItem} level={level + 1} />
            ))}
          </div>
        )}
      </>
    );
  };

  return (
    <div
      className={cn(
        "h-screen flex flex-col bg-cyber-darkBlue border-r border-cyan-900/30 transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between px-4 h-16 border-b border-cyan-900/30">
        <div className="flex items-center">
          <Shield className="h-8 w-8 text-cyber-green" />
          {!collapsed && <span className="ml-2 font-bold text-cyber-green">NetDefender</span>}
        </div>
        <button
          onClick={onToggle}
          className="p-1 rounded-md hover:bg-cyber-blue/20 text-slate-400 hover:text-cyber-green"
        >
          {collapsed ? (
            <ChevronDown className="h-5 w-5" />
          ) : (
            <ChevronUp className="h-5 w-5" />
          )}
        </button>
      </div>
      <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-cyber-blue/30 scrollbar-track-transparent">
        <nav className="px-2 py-3 space-y-1">
          {menuItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </nav>
      </div>
      <div className="p-3 border-t border-cyan-900/30">
        <button
          onClick={handleLogout}
          className="flex items-center w-full px-3 py-2 text-sm rounded-md text-slate-300 hover:bg-cyber-blue/20"
        >
          <LogOut className="h-5 w-5 text-red-500" />
          {!collapsed && <span className="ml-2">Logout</span>}
        </button>
      </div>
    </div>
  );
}
