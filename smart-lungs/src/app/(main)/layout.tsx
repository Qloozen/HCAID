import MobileNav from "@/components/mobile-nav";
import Navbar from "@/components/navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <MobileNav className="md:hidden" />
      <Navbar className="hidden md:flex" />
      <div className="px-10 py-20">{children}</div>;
    </div>
  );
};

export default MainLayout;
