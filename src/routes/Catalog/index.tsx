import './styles.css';
import CardCar from '../../components/CardCar';
import Header from '../../components/Header';
import CardComments from '../../components/CardComments';
import Footer from '../../components/Footer';

export default function Catalog() {
  return (
    <>
      <Header />
      <main>
        <section id="container-card" className="container">
          <h2>Venha nos visitar</h2>
          <CardCar />
          <CardCar />
        </section>
        <section id="container-comments" className="container">
          <h2>O que estão dizendo</h2>
            <CardComments />
            <CardComments />
            <CardComments />
            <CardComments />
            <CardComments />
        </section>
        <Footer />
      </main>
    </>
  );
}
