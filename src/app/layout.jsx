import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import DevelopmentNotice from "./components/DevelopmentNotice";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Provider from './globalRedux/provider'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nouridine",
  description:
    "My Name is Mahamadou Nouridine, I'm junior software developer aiming to bring success in whatever I'm inveolved in",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="https://res.cloudinary.com/ddayqmsfs/image/upload/v1697407794/my%20portfolio/standed-fotor-bg-remover-20230926213924-fotor-20230926215051_a7tny9.png"
          sizes="any"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <Provider>
          <ToastContainer />
          <main>
            <Sidebar />
            <div className="main-content">
              <Navbar />
              {children}
            </div>
          </main>
        </Provider>
      </body>
      <script
        type="module"
        defer
        async
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        noModule
        defer
        async
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </html>
  );
}
