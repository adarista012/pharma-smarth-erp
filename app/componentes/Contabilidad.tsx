import React, { useState } from 'react'

interface ContabilidadProps {
  setTab: (tab: string) => void
}

const Contabilidad: React.FC<ContabilidadProps> = ({ setTab }) => {
  // --- ESTADOS DE VISIBILIDAD ---
  const [showInvOptions, setShowInvOptions] = useState(false) // 6
  const [showAlmOptions, setShowAlmOptions] = useState(false) // 7
  const [showComOptions, setShowComOptions] = useState(false) // 8
  const [showRecOptions, setShowRecOptions] = useState(false) // 9
  const [showCliOptions, setShowCliOptions] = useState(false) // 13
  const [showVenOptions, setShowVenOptions] = useState(false) // 14
  const [showTraOptions, setShowTraOptions] = useState(false) // 15

  const resetViews = () => {
    setShowInvOptions(false)
    setShowAlmOptions(false)
    setShowComOptions(false)
    setShowRecOptions(false)
    setShowCliOptions(false)
    setShowVenOptions(false)
    setShowTraOptions(false)
  }

  return (
    <div className='animate-in fade-in zoom-in duration-500 space-y-12 pb-20'>
      {/* HEADER PRINCIPAL */}
      <div className='bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
        <div>
          <h3 className='font-black text-slate-800 uppercase text-sm tracking-[0.15em]'>
            Módulos de Gestión de Materiales y Comercial
          </h3>
          <p className='text-slate-400 text-xs font-bold mt-1 uppercase text-balance'>
            Control Integral: Desde la Materia Prima hasta la Trazabilidad en el
            Mercado
          </p>
        </div>
        <div className='flex gap-2'>
          <button
            onClick={resetViews}
            className='px-4 py-3 rounded-2xl font-black text-[10px] uppercase bg-slate-50 text-slate-400 hover:text-orange-600 transition-all'
          >
            Resetear Vistas
          </button>
          <button
            onClick={() => setTab('dashboard')}
            className='bg-slate-900 text-white px-6 py-3 rounded-2xl font-black text-[10px] uppercase shadow-lg'
          >
            Volver al Hub
          </button>
        </div>
      </div>

      {/* SECCIÓN A: SUMINISTRO E INVENTARIOS (6, 7, 8, 9) */}
      <div className='space-y-6'>
        <h5 className='text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] pl-4'>
          MÓDULOS DE GESTIÓN DE MATERIALES
        </h5>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* 6. GESTIÓN DE INVENTARIOS */}
          <div
            className={`p-8 rounded-[2.5rem] border transition-all duration-500 min-h-[380px] flex flex-col ${
              showInvOptions
                ? 'bg-white border-orange-500 shadow-2xl'
                : 'bg-white border-slate-100 shadow-sm'
            }`}
          >
            <div className='flex justify-between items-center border-b border-slate-50 pb-4 mb-6'>
              <h4 className='font-black text-slate-800 text-[10px] uppercase tracking-widest'>
                6. Gestión de Inventarios
              </h4>
              <button
                onClick={() => setShowInvOptions(!showInvOptions)}
                className='text-[9px] font-black uppercase text-orange-600'
              >
                {showInvOptions ? '✕' : 'Ver'}
              </button>
            </div>
            {!showInvOptions ? (
              <div
                className='space-y-4 animate-in fade-in cursor-pointer'
                onClick={() => setShowInvOptions(true)}
              >
                <div className='grid grid-cols-2 gap-3'>
                  <div className='p-4 bg-orange-50 rounded-2xl'>
                    <p className='text-[8px] font-black text-orange-600 uppercase'>
                      Stock Valorizado
                    </p>
                    <p className='text-lg font-black text-slate-800'>$2.4M</p>
                  </div>
                  <div className='p-4 bg-slate-50 rounded-2xl'>
                    <p className='text-[8px] font-black text-slate-400 uppercase'>
                      Alertas
                    </p>
                    <p className='text-lg font-black text-rose-500'>08</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className='grid grid-cols-1 gap-2 animate-in zoom-in-95'>
                {[
                  'Materias primas, empaque, productos terminados',
                  'Control FEFO/FIFO estricto',
                  'Cuarentena, aprobado, rechazado, retenido',
                  'Inventarios por lote',
                  'Alertas de vencimientos y reorden',
                  'Gestión de obsoletos'
                ].map((t, i) => (
                  <button
                    key={i}
                    className='p-3 rounded-xl bg-slate-50 hover:bg-orange-600 text-slate-700 hover:text-white transition-all text-left text-[9px] font-black uppercase'
                  >
                    {t}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 7. GESTIÓN DE ALMACENES */}
          <div
            className={`p-8 rounded-[2.5rem] transition-all duration-500 min-h-[380px] flex flex-col ${
              showAlmOptions ? 'bg-slate-800 shadow-2xl' : 'bg-slate-900'
            }`}
          >
            <div className='flex justify-between items-center border-b border-white/10 pb-4 mb-6'>
              <h4 className='font-black text-orange-400 text-[10px] uppercase tracking-widest'>
                7. Gestión de Almacenes
              </h4>
              <button
                onClick={() => setShowAlmOptions(!showAlmOptions)}
                className='text-[9px] font-black uppercase text-white/50'
              >
                {showAlmOptions ? '✕' : 'Mapa'}
              </button>
            </div>
            {!showAlmOptions ? (
              <div
                className='space-y-6 animate-in fade-in cursor-pointer'
                onClick={() => setShowAlmOptions(true)}
              >
                <div className='p-4 bg-white/5 rounded-2xl border border-white/10 flex justify-between items-center'>
                  <p className='text-[8px] font-black text-slate-400 uppercase leading-relaxed'>
                    Zonificación y<br />
                    Temperatura
                  </p>
                  <div className='text-xl font-black text-white'>18.5°C</div>
                </div>
              </div>
            ) : (
              <div className='grid grid-cols-1 gap-2 animate-in zoom-in-95'>
                {[
                  'Ubicaciones y zonificación (T°/H% controlada)',
                  'Control de accesos',
                  'Movimientos y transferencias',
                  'Picking y preparación de materiales',
                  'Monitoreo ambiental en tiempo real'
                ].map((t, i) => (
                  <button
                    key={i}
                    className='p-3 rounded-xl bg-white/5 hover:bg-white text-white hover:text-slate-900 transition-all text-left text-[9px] font-black uppercase'
                  >
                    {t}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 8. COMPRAS Y PROVEEDORES */}
          <div
            className={`p-8 rounded-[2.5rem] border transition-all duration-500 min-h-[350px] flex flex-col ${
              showComOptions
                ? 'border-blue-500 shadow-2xl'
                : 'border-slate-100 shadow-sm bg-white'
            }`}
          >
            <div className='flex justify-between items-center border-b border-slate-50 pb-4 mb-6'>
              <h4 className='font-black text-slate-800 text-[10px] uppercase tracking-widest'>
                8. Compras y Proveedores
              </h4>
              <button
                onClick={() => setShowComOptions(!showComOptions)}
                className='text-[9px] font-black uppercase text-blue-600'
              >
                {showComOptions ? '✕' : 'Gestionar'}
              </button>
            </div>
            {!showComOptions ? (
              <div
                className='space-y-4 animate-in fade-in cursor-pointer'
                onClick={() => setShowComOptions(true)}
              >
                <div className='flex gap-2'>
                  <span className='bg-blue-50 text-blue-600 text-[8px] font-black px-2 py-1 rounded-full'>
                    12 OC ACTIVAS
                  </span>
                </div>
                <p className='text-[8px] text-slate-400 font-bold uppercase mt-12'>
                  Homologación y Calificación
                </p>
              </div>
            ) : (
              <div className='grid grid-cols-1 gap-2 animate-in zoom-in-95'>
                {[
                  'Órdenes de compra',
                  'Homologación y calificación de proveedores',
                  'Evaluación periódica de proveedores',
                  'Acuerdos de calidad',
                  'Auditorías a proveedores'
                ].map((t, i) => (
                  <button
                    key={i}
                    className='p-3 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white transition-all text-left text-[9px] font-black uppercase'
                  >
                    {t}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 9. RECEPCIÓN Y MUESTREO */}
          <div
            className={`p-8 rounded-[2.5rem] border transition-all duration-500 min-h-[350px] flex flex-col ${
              showRecOptions
                ? 'border-indigo-500 bg-indigo-50 shadow-2xl'
                : 'border-slate-100 shadow-sm bg-white'
            }`}
          >
            <div className='flex justify-between items-center border-b border-slate-200 pb-4 mb-6'>
              <h4 className='font-black text-slate-800 text-[10px] uppercase tracking-widest'>
                9. Recepción y Muestreo
              </h4>
              <button
                onClick={() => setShowRecOptions(!showRecOptions)}
                className='text-[9px] font-black uppercase text-indigo-600'
              >
                {showRecOptions ? '✕' : 'Ver'}
              </button>
            </div>
            {!showRecOptions ? (
              <div
                className='space-y-4 animate-in fade-in cursor-pointer'
                onClick={() => setShowRecOptions(true)}
              >
                <div className='p-4 bg-white rounded-2xl border border-slate-100 text-[9px] font-black text-indigo-600 text-center uppercase tracking-tighter'>
                  Etiquetado y Cuarentena Automática
                </div>
              </div>
            ) : (
              <div className='grid grid-cols-1 gap-2 animate-in zoom-in-95'>
                {[
                  'Registro de recepciones',
                  'Planes de muestreo',
                  'Etiquetado y cuarentena automática',
                  'Conciliación con órdenes de compra'
                ].map((t, i) => (
                  <button
                    key={i}
                    className='p-3 rounded-xl bg-white hover:bg-indigo-600 text-indigo-700 hover:text-white transition-all text-left text-[9px] font-black uppercase border border-indigo-100'
                  >
                    {t}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* SECCIÓN B: MERCADO Y SALIDA (13, 14, 15) */}
      <div className='space-y-6 pt-8'>
        <h5 className='text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] pl-4'>
          MÓDULOS COMERCIALES Y DISTRIBUCIÓN
        </h5>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* 13. REGISTRO DE CLIENTES */}
          <div
            className={`p-8 rounded-[2.5rem] border transition-all duration-500 min-h-[350px] flex flex-col ${
              showCliOptions
                ? 'border-sky-500 bg-sky-50 shadow-xl'
                : 'bg-white border-slate-100 shadow-sm'
            }`}
          >
            <div className='flex justify-between items-center border-b border-slate-100 pb-4 mb-6'>
              <h4 className='font-black text-slate-800 text-[10px] uppercase tracking-widest'>
                13. Clientes
              </h4>
              <button
                onClick={() => setShowCliOptions(!showCliOptions)}
                className='text-[9px] font-black uppercase text-sky-600'
              >
                {showCliOptions ? '✕' : 'Ver'}
              </button>
            </div>
            {!showCliOptions ? (
              <div
                className='space-y-4 animate-in fade-in cursor-pointer'
                onClick={() => setShowCliOptions(true)}
              >
                <div className='flex flex-wrap gap-1'>
                  {['Farmacias', 'Hospitales', 'Export'].map((t) => (
                    <span
                      key={t}
                      className='px-2 py-1 bg-slate-50 rounded text-[7px] font-black text-slate-400 uppercase'
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <div className='grid grid-cols-1 gap-2 animate-in zoom-in-95'>
                {[
                  'Farmacias',
                  'Hospitales',
                  'Consultorios',
                  'Clinicas',
                  'Exportaciones'
                ].map((t, i) => (
                  <button
                    key={i}
                    className='p-3 rounded-xl bg-white hover:bg-sky-600 text-sky-700 hover:text-white transition-all text-left text-[9px] font-black uppercase border border-sky-100'
                  >
                    {t}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 14. VENTAS Y DISTRIBUCIÓN */}
          <div
            className={`p-8 rounded-[2.5rem] border transition-all duration-500 min-h-[350px] flex flex-col ${
              showVenOptions
                ? 'border-violet-500 bg-violet-50 shadow-xl'
                : 'bg-white border-slate-100 shadow-sm'
            }`}
          >
            <div className='flex justify-between items-center border-b border-slate-100 pb-4 mb-6'>
              <h4 className='font-black text-slate-800 text-[10px] uppercase tracking-widest'>
                14. Ventas y Dist.
              </h4>
              <button
                onClick={() => setShowVenOptions(!showVenOptions)}
                className='text-[9px] font-black uppercase text-violet-600'
              >
                {showVenOptions ? '✕' : 'Gestionar'}
              </button>
            </div>
            {!showVenOptions ? (
              <div
                className='space-y-4 animate-in fade-in cursor-pointer'
                onClick={() => setShowVenOptions(true)}
              >
                <p className='text-[8px] font-black text-slate-400 uppercase'>
                  Control de cuotas y registros sanitarios
                </p>
                <div className='h-1 w-full bg-slate-100 rounded-full'>
                  <div className='h-full w-2/3 bg-violet-500 rounded-full'></div>
                </div>
              </div>
            ) : (
              <div className='grid grid-cols-1 gap-2 animate-in zoom-in-95'>
                {[
                  'Órdenes de venta',
                  'Control de cuotas y registros sanitarios',
                  'Gestión de clientes',
                  'Facturación',
                  'Trazabilidad de distribución'
                ].map((t, i) => (
                  <button
                    key={i}
                    className='p-3 rounded-xl bg-white hover:bg-violet-600 text-violet-700 hover:text-white transition-all text-left text-[9px] font-black uppercase border border-violet-100'
                  >
                    {t}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 15. TRAZABILIDAD COMPLETA */}
          <div
            className={`p-8 rounded-[2.5rem] border transition-all duration-500 min-h-[350px] flex flex-col ${
              showTraOptions
                ? 'bg-slate-900 border-indigo-500 shadow-xl'
                : 'bg-white border-slate-100 shadow-sm'
            }`}
          >
            <div
              className={`flex justify-between items-center border-b pb-4 mb-6 ${
                showTraOptions ? 'border-white/10' : 'border-slate-100'
              }`}
            >
              <h4
                className={`font-black text-[10px] uppercase tracking-widest ${
                  showTraOptions ? 'text-indigo-400' : 'text-slate-800'
                }`}
              >
                15. Track & Trace
              </h4>
              <button
                onClick={() => setShowTraOptions(!showTraOptions)}
                className={`text-[9px] font-black uppercase ${
                  showTraOptions ? 'text-white' : 'text-indigo-600'
                }`}
              >
                {showTraOptions ? '✕' : 'Detalles'}
              </button>
            </div>
            {!showTraOptions ? (
              <div
                className='space-y-4 animate-in fade-in cursor-pointer'
                onClick={() => setShowTraOptions(true)}
              >
                <div className='p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 text-center'>
                  <span className='text-xs font-black text-indigo-400 uppercase tracking-widest'>
                    Serialización Activa
                  </span>
                </div>
              </div>
            ) : (
              <div className='grid grid-cols-1 gap-2 animate-in slide-in-from-right-2'>
                {[
                  'Serialización por unidad',
                  'Agregación (unidad-caja-pallet)',
                  'Integración con sistemas nacional',
                  'Recall management (retiro de mercado)'
                ].map((t, i) => (
                  <button
                    key={i}
                    className='p-3 rounded-xl bg-white/5 hover:bg-indigo-600 text-white transition-all text-left text-[9px] font-black uppercase border border-white/5'
                  >
                    {t}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contabilidad
