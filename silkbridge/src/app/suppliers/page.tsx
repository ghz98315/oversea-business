import { getAllSuppliers } from "@/lib/suppliers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SuppliersClient from "./SuppliersClient";

export default async function SuppliersPage() {
  const suppliers = await getAllSuppliers();

  return (
    <>
      <Navbar />
      <SuppliersClient suppliers={suppliers} />
      <Footer />
    </>
  );
}
