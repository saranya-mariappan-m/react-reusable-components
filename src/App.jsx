import Header from './components/Header.jsx'
import Banners from './components/BannersCard.jsx'
import FeaturedCard from './components/FeaturedCard.jsx'
import Testimonials from './components/Testimonial.jsx'
import Footer from './components/Footer.jsx'
import './index.css'

function App() {

  return (
    <div>
      <Header />
      <Banners showHeader={true} />
      <FeaturedCard />
      <Testimonials />
      <Banners showHeader={false} />
      <Footer />
    </div>
  );
}

export default App
