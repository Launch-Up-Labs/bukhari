// pages/index.js
import Navbar from "../../components/Navbar";

export default function Blog() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <header className="section--brown text-br text-center py-2">
        <h1 className="text-5xl font-bold mb-4 text-white">BLOG</h1>
      </header>

      <div className="section--light">
        <section className="container  mx-auto banner p-10">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white h-60"></div>
            <div className="bg-white h-60"></div>
            <div className="bg-white h-60"></div>
            <div className="bg-white h-60"></div>
            <div className="bg-white h-60"></div>
            <div className="bg-white h-60"></div>
            <div className="container py-20"></div>
          </div>
        </section>
      </div>
      <div className="section--brown" style={{height: "200px"}}>
      </div>
    </div>
  );
}
