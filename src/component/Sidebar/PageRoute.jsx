import {
  DashboardOutlined,
  BankOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import {
  DashboardPage,
  TransactionPage,
  TransactionStatus,
} from "../../pages/index";

const pageRoutes = () => {
  return [
    {
      path: "/customer-beranda",
      link: "/customer-beranda",
      icon: <DashboardOutlined />,
      name: "Beranda",
      component: DashboardPage,
    },
    {
      path: "/customer-transaksibaru",
      link: "/customer-transaksibaru",
      icon: <BankOutlined />,
      name: "Transaksi",
      component: TransactionPage,
    },
    {
      path: "/login",
      link: "/login",
      icon: <LogoutOutlined />,
      name: "Logout",
    },

    // Catatan: Route Content (Sementara) Seharusnya berjalan di satu url yang sama mengikuti wireframe yg diberikan
    // Semua Transaksi yg dibuat berjalan di url /customer-transaksi-baru

    // Status transaksi seharusnya berjalan di url /customer-beranda
    {
      path: "/beranda/transaksi-sukses",
      link: "/beranda/transaksi-sukses",
      component: TransactionStatus,
    },
  ];
};

export default pageRoutes();
