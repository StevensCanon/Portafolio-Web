import Navbar from '@/app/Components/Home/Navbar';
import Body from '@/app/Components/Aboutme/Body';
import Footer from '@/app/Components/Home/Footer';
import "../globals.css";



function AboutPage() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Projects */}
      <Body />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AboutPage;