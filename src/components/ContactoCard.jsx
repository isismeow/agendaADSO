export default function ContactoCard({ id, nombre, telefono, correo, etiqueta, onEliminar }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-bold text-gray-800">{nombre}</h3>
          {etiqueta && (
            <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
              {etiqueta}
            </span>
          )}
        </div>
        <div className="mt-2 space-y-1 text-gray-600 text-sm">
          <p>📞 {telefono}</p>
          {correo && <p>✉️ {correo}</p>}
        </div>
      </div>
      <div>
        <button
          onClick={onEliminar}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition-colors font-medium text-sm cursor-pointer shadow-sm"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
