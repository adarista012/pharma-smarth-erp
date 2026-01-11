import React, { useState } from 'react'

interface RegulatorioProps {
  setTab: (tab: string) => void
}

const GestionRegulatoria: React.FC<RegulatorioProps> = ({ setTab }) => {
  const [showDocOptions, setShowDocOptions] = useState(false)
  const [showCalOptions, setShowCalOptions] = useState(false)
  const [showValOptions, setShowValOptions] = useState(false)

  const resetViews = () => {
    setShowDocOptions(false)
    setShowCalOptions(false)
    setShowValOptions(false)
  }

  return (
    <div className='animate-in fade-in zoom-in duration-500 space-y-8 pb-10'>
      {/* HEADER DE CUMPLIMIENTO */}
      <div className='bg-slate-900 p-8 rounded-[2.5rem] border border-slate-800 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative overflow-hidden'>
        <div className='relative z-10'>
          <h3 className='font-black text-white uppercase text-sm tracking-[0.15em]'>
            Módulos Regulatorios y Validación
          </h3>
          <p className='text-slate-400 text-xs font-bold mt-1 uppercase'>
            Garantía de cumplimiento GxP & 21 CFR Part 11
          </p>
        </div>
        <div className='flex gap-2 relative z-10'>
          <button
            onClick={resetViews}
            className='px-4 py-3 rounded-2xl font-black text-[10px] uppercase bg-white/5 text-slate-400 hover:text-white transition-all border border-white/10'
          >
            Vista General
          </button>
          <button
            onClick={() => setTab('dashboard')}
            className='bg-blue-600 text-white px-6 py-3 rounded-2xl font-black text-[10px] uppercase shadow-lg shadow-blue-900/20'
          >
            Volver al Hub
          </button>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* 10. GESTIÓN DOCUMENTAL */}
        <div
          className={`p-8 rounded-[2.5rem] border transition-all duration-500 min-h-[450px] flex flex-col ${
            showDocOptions
              ? 'bg-white border-blue-600 shadow-2xl'
              : 'bg-white border-slate-100 shadow-sm'
          }`}
        >
          <div className='flex justify-between items-center border-b border-slate-50 pb-4 mb-6'>
            <h4 className='font-black text-slate-800 text-[10px] uppercase tracking-widest'>
              10. Gestión Documental
            </h4>
            <button
              onClick={() => setShowDocOptions(!showDocOptions)}
              className='text-[9px] font-black uppercase text-blue-600'
            >
              {showDocOptions ? 'Cerrar ✕' : 'Ver SOPs'}
            </button>
          </div>
          {!showDocOptions ? (
            <div
              className='space-y-4 animate-in fade-in cursor-pointer'
              onClick={() => setShowDocOptions(true)}
            >
              <div className='bg-slate-50 p-4 rounded-2xl border-l-4 border-blue-500'>
                <p className='text-[9px] font-black text-slate-400 uppercase'>
                  Próximo a Vencer
                </p>
                <p className='text-[11px] font-black text-slate-800 mt-1'>
                  SOP-PROD-001 v.4
                </p>
              </div>
              <div className='flex justify-around py-6 opacity-20'>
                <span className='text-4xl'>📑</span>
                <span className='text-4xl'>🖋️</span>
              </div>
              <p className='text-[8px] text-center text-slate-400 font-bold uppercase mt-auto'>
                Control de versiones y SOPs
              </p>
            </div>
          ) : (
            <div className='grid grid-cols-1 gap-2 animate-in slide-in-from-bottom-2'>
              {[
                'Control de SOPs (Procedimientos)',
                'Control de versiones',
                'Distribución y capacitación',
                'Firmas y aprobaciones',
                'Archivo maestro del producto',
                'Documentos técnicos y de validación'
              ].map((t, i) => (
                <button
                  key={i}
                  className='p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white transition-all text-left text-[9px] font-black uppercase leading-tight'
                >
                  {t}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 11. CALIBRACIÓN Y MANTENIMIENTO */}
        <div
          className={`p-8 rounded-[2.5rem] border transition-all duration-500 min-h-[450px] flex flex-col ${
            showCalOptions
              ? 'bg-white border-slate-800 shadow-2xl'
              : 'bg-white border-slate-100 shadow-sm'
          }`}
        >
          <div className='flex justify-between items-center border-b border-slate-50 pb-4 mb-6'>
            <h4 className='font-black text-slate-800 text-[10px] uppercase tracking-widest'>
              11. Mantenimiento y Calib.
            </h4>
            <button
              onClick={() => setShowCalOptions(!showCalOptions)}
              className='text-[9px] font-black uppercase text-slate-500'
            >
              {showCalOptions ? '✕' : 'Equipos'}
            </button>
          </div>
          {!showCalOptions ? (
            <div
              className='space-y-4 animate-in fade-in cursor-pointer'
              onClick={() => setShowCalOptions(true)}
            >
              <div className='grid grid-cols-2 gap-2'>
                <div className='bg-slate-900 p-3 rounded-xl text-center'>
                  <p className='text-[7px] font-black text-slate-500 uppercase'>
                    Críticos
                  </p>
                  <p className='text-lg font-black text-white'>24</p>
                </div>
                <div className='bg-amber-500 p-3 rounded-xl text-center'>
                  <p className='text-[7px] font-black text-amber-900 uppercase'>
                    Pendientes
                  </p>
                  <p className='text-lg font-black text-white'>02</p>
                </div>
              </div>
              <p className='text-[8px] text-center text-slate-400 font-bold uppercase mt-20'>
                Inventario de equipos críticos
              </p>
            </div>
          ) : (
            <div className='grid grid-cols-1 gap-2 animate-in slide-in-from-bottom-2'>
              {[
                'Inventario de equipos críticos',
                'Programación de calibraciones',
                'Programación de mantenimiento preventivo',
                'Registro de mantenimiento correctivo',
                'Certificados de calibración',
                'Historial completo por equipo'
              ].map((t, i) => (
                <button
                  key={i}
                  className='p-3.5 rounded-2xl bg-slate-100 hover:bg-slate-800 text-slate-700 hover:text-white transition-all text-left text-[9px] font-black uppercase leading-tight'
                >
                  {t}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 12. GESTIÓN DE VALIDACIONES */}
        <div
          className={`p-8 rounded-[2.5rem] border transition-all duration-500 min-h-[450px] flex flex-col ${
            showValOptions
              ? 'bg-blue-700 border-blue-600 shadow-2xl text-white'
              : 'bg-white border-slate-100 shadow-sm text-slate-800'
          }`}
        >
          <div
            className={`flex justify-between items-center border-b pb-4 mb-6 ${
              showValOptions ? 'border-white/20' : 'border-slate-50'
            }`}
          >
            <h4 className='font-black text-[10px] uppercase tracking-widest'>
              12. Gestión de Validaciones
            </h4>
            <button
              onClick={() => setShowValOptions(!showValOptions)}
              className={`text-[9px] font-black uppercase ${
                showValOptions ? 'text-white/60' : 'text-blue-600'
              }`}
            >
              {showValOptions ? 'Cerrar' : 'Protocolos'}
            </button>
          </div>
          {!showValOptions ? (
            <div
              className='space-y-4 animate-in fade-in cursor-pointer'
              onClick={() => setShowValOptions(true)}
            >
              <div className='p-4 bg-blue-50 border border-blue-100 rounded-2xl text-blue-800'>
                <p className='text-[10px] font-black uppercase'>PPQ en curso</p>
                <div className='w-full bg-blue-200 h-1.5 rounded-full mt-2'>
                  <div className='bg-blue-600 h-full w-[40%]'></div>
                </div>
              </div>
              <p className='text-[8px] text-center text-slate-400 font-bold uppercase mt-20'>
                Calificación de equipos (IQ/OQ/PQ)
              </p>
            </div>
          ) : (
            <div className='grid grid-cols-1 gap-2 animate-in slide-in-from-bottom-2'>
              {[
                'Calificación de equipos (IQ, OQ, PQ)',
                'Validación de procesos (PPQ)',
                'Validación de limpieza',
                'Validación de métodos analíticos',
                'Validación de sistemas computarizados',
                'Revalidaciones periódicas'
              ].map((t, i) => (
                <button
                  key={i}
                  className='p-3.5 rounded-2xl bg-white/10 hover:bg-white text-white hover:text-blue-800 transition-all text-left text-[9px] font-black uppercase leading-tight'
                >
                  {t}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default GestionRegulatoria
