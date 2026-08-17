import { useState } from "react";

export default function FormularioContacto({ onAgregar }) {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    etiqueta: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.telefono) {
      alert("Nombre y teléfono son obligatorios");
      return;
    }
    onAgregar(form);
    setForm({ nombre: "", telefono: "", correo: "", etiqueta: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
        <input
          className="rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 w-full px-4 py-3 outline-none transition-all"
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={form.nombre}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono *</label>
        <input
          className="rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 w-full px-4 py-3 outline-none transition-all"
          type="text"
          name="telefono"
          placeholder="Número de teléfono"
          value={form.telefono}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Correo *</label>
        <input
          className="rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 w-full px-4 py-3 outline-none transition-all"
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          value={form.correo}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Etiqueta (opcional)</label>
        <input
          className="rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 w-full px-4 py-3 outline-none transition-all"
          type="text"
          name="etiqueta"
          placeholder="Ej: Trabajo, Profe"
          value={form.etiqueta}
          onChange={handleChange}
        />
      </div>
      <div className="md:col-span-2">
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-md w-full cursor-pointer"
          type="submit"
        >
          Agregar contacto
        </button>
      </div>
    </form>
  );
}
