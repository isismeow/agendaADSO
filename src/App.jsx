import { useEffect, useState } from "react";
import { listarContactos, crearContacto, eliminarContactoPorId } from "./api.js";
import FormularioContacto from "./components/FormularioContacto";
import ContactoCard from "./components/ContactoCard";

export default function App() {
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    listarContactos()
      .then(data => setContactos(data))
      .catch(err => console.error(err));
  }, []);

  const agregarContacto = async (form) => {
    try {
      const nuevo = await crearContacto(form);
      setContactos([...contactos, nuevo]);
    } catch (error) {
      console.error(error);
    }
  };

  const eliminarContacto = async (id) => {
    try {
      await eliminarContactoPorId(id);
      setContactos(contactos.filter(c => c.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <header className="max-w-4xl mx-auto mb-8">
        <h1 className="text-4xl md:text-5xl font-black text-purple-600 text-center md:text-left">
          Agenda ADSO v5
        </h1>
      </header>
      <div className="max-w-4xl mx-auto">
        <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-6">
          <FormularioContacto onAgregar={agregarContacto} />
        </section>
        <section className="space-y-4">
          {contactos.map((c) => (
            <ContactoCard
              key={c.id}
              {...c}
              onEliminar={() => eliminarContacto(c.id)}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
