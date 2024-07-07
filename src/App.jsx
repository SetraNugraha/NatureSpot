import Navbar from './components/navbar'
import Hero from './components/hero'
import Benefits from './components/benefits'
import Services from './components/services'
import Promotion from './components/promotion'
import Products from './components/products'
import Testimoni from './components/testimoni'
import Contact from './components/contact'
import Footer from './components/footer'

export default function App() {
  return (
    <>
      <main className="px-[15%] min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Hero */}
        <Hero />

        {/* Benefits */}
        <Benefits />

        {/* Services */}
        <Services />

        {/* Promotion */}
        <Promotion />

        {/* Products */}
        <Products />

        {/* Testimoni */}
        <Testimoni />

        {/* Contact */}
        <Contact />
      </main>
      {/* Footer */}
      <Footer />
    </>
  )
}
