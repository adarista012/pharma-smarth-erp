import React, { useState } from 'react'

interface ProduccionYCalidadProps {
  setTab: (tab: string) => void
}

const ProduccionYCalidad: React.FC<ProduccionYCalidadProps> = ({ setTab }) => {
  const [showBOMOptions, setShowBOMOptions] = useState(false)
  const [showMESOptions, setShowMESOptions] = useState(false)
  const [showEBROptions, setShowEBROptions] = useState(false)
  const [showQCOptions, setShowQCOptions] = useState(false)
  const [showQAOptions, setShowQAOptions] = useState(false)

  const resetViews = () => {
    setShowBOMOptions(false)
    setShowMESOptions(false)
    setShowEBROptions(false)
    setShowQCOptions(false)
    setShowQAOptions(false)
  }

  return (
    <div className='animate-in fade-in zoom-in duration-500 space-y-8 pb-10'>
      {/* HEADER TÉCNICO CORE */}
      <div className='bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
        <div>
          <h3 className='font-black text-slate-800 uppercase text-sm tracking-[0.15em]'>
            Módulos Core - Producción y Calidad
          </h3>
          <p className='text-slate-400 text-xs font-bold mt-1 uppercase'>
            Gestión Integral bajo normatividad 21 CFR Part 11
          </p>
        </div>
        <div className='flex gap-2'>
          <button
            onClick={resetViews}
            className='px-4 py-3 rounded-2xl font-black text-[10px] uppercase bg-slate-50 text-slate-400 hover:text-indigo-600 transition-all'
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

      {/* FILA SUPERIOR: 1. BOM y 2. MES */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {/* 1. BOM */}
        <div
          className={`bg-white p-8 rounded-[2.5rem] border transition-all duration-500 min-h-[420px] flex flex-col ${
            showBOMOptions
              ? 'border-indigo-500 shadow-2xl'
              : 'border-slate-100 shadow-sm'
          }`}
        >
          <div className='flex justify-between items-center border-b border-slate-50 pb-4 mb-6'>
            <h4 className='font-black text-slate-800 text-[10px] uppercase tracking-widest'>
              1. Master Formula / BOM
            </h4>
            <button
              onClick={() => setShowBOMOptions(!showBOMOptions)}
              className='text-[9px] font-black uppercase text-indigo-600'
            >
              {showBOMOptions ? 'Cerrar ✕' : 'Configurar'}
            </button>
          </div>
          {!showBOMOptions ? (
            <div
              className='space-y-4 animate-in fade-in'
              onClick={() => setShowBOMOptions(true)}
            >
              {[
                { n: 'Jarabe Forte', v: 'v3.1', d: '± 0.5%' },
                { n: 'Cápsulas Magnesio', v: 'v1.0', d: '± 1.0%' }
              ].map((f, i) => (
                <div
                  key={i}
                  className='p-4 bg-slate-50 rounded-2xl flex justify-between items-center cursor-pointer hover:bg-slate-100 transition-colors'
                >
                  <p className='text-xs font-black text-slate-800'>{f.n}</p>
                  <span className='text-indigo-600 text-[10px] font-black'>
                    {f.d}
                  </span>
                </div>
              ))}
              <div className='mt-10 p-4 border-2 border-dashed border-slate-100 rounded-2xl text-center text-[8px] font-black text-slate-400 uppercase'>
                Gestionar Fórmulas
              </div>
            </div>
          ) : (
            <div className='grid grid-cols-1 gap-2 animate-in zoom-in-95'>
              {[
                'Fórmulas estándar y desviaciones permitidas',
                'Control de versiones de fórmulas',
                'Escalamiento de lotes (piloto a producción)',
                'Cálculo automático de materiales'
              ].map((t, i) => (
                <button
                  key={i}
                  className='p-4 rounded-2xl bg-slate-50 hover:bg-indigo-600 group transition-all text-left'
                >
                  <p className='text-[9px] font-black text-slate-700 group-hover:text-white uppercase'>
                    {t}
                  </p>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 2. MES */}
        <div
          className={`p-8 rounded-[2.5rem] transition-all duration-500 min-h-[420px] flex flex-col ${
            showMESOptions
              ? 'bg-indigo-900 shadow-2xl'
              : 'bg-slate-900 shadow-sm'
          }`}
        >
          <div className='flex justify-between items-center border-b border-white/10 pb-4 mb-6'>
            <h4 className='font-black text-indigo-400 text-[10px] uppercase tracking-widest'>
              2. MES - Producción
            </h4>
            <button
              onClick={() => setShowMESOptions(!showMESOptions)}
              className='text-[9px] font-black uppercase text-white/50 hover:text-white'
            >
              {showMESOptions ? 'Cerrar ✕' : 'Gestionar'}
            </button>
          </div>
          {!showMESOptions ? (
            <div
              className='space-y-6 animate-in fade-in'
              onClick={() => setShowMESOptions(true)}
            >
              <div className='grid grid-cols-2 gap-4'>
                <div className='bg-white/5 p-4 rounded-2xl border border-white/10'>
                  <p className='text-[8px] font-black text-slate-400 uppercase'>
                    OEE Global
                  </p>
                  <p className='text-xl font-black text-emerald-400'>92.4%</p>
                </div>
                <div className='bg-white/5 p-4 rounded-2xl border border-white/10'>
                  <p className='text-[8px] font-black text-slate-400 uppercase'>
                    Estado
                  </p>
                  <p className='text-xl font-black text-white'>Running</p>
                </div>
              </div>
              <p className='text-[8px] text-center text-white/30 font-bold uppercase tracking-widest mt-12 font-mono'>
                Consola de Planta Activa
              </p>
            </div>
          ) : (
            <div className='grid grid-cols-1 gap-2 animate-in zoom-in-95'>
              {[
                'Órdenes de fabricación',
                'Programación de lotes por línea/equipo',
                'Secuenciación y priorización',
                'Control de tiempos de producción',
                'Rendimientos y eficiencias (OEE)'
              ].map((t, i) => (
                <button
                  key={i}
                  className='p-4 rounded-2xl bg-white/5 hover:bg-white text-white hover:text-indigo-900 group transition-all text-left'
                >
                  <p className='text-[9px] font-black uppercase'>{t}</p>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* FILA INFERIOR: 3. EBR, 4. QC y 5. QA */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* 3. EBR */}
        <div
          className={`p-6 rounded-[2.5rem] border transition-all duration-500 min-h-[380px] flex flex-col ${
            showEBROptions
              ? 'bg-emerald-600 border-emerald-500 shadow-xl'
              : 'bg-white border-slate-100 shadow-sm'
          }`}
        >
          <div
            className={`flex justify-between items-center border-b pb-4 mb-4 ${
              showEBROptions ? 'border-white/20' : 'border-slate-50'
            }`}
          >
            <h4
              className={`font-black text-[10px] uppercase tracking-widest ${
                showEBROptions ? 'text-white' : 'text-slate-800'
              }`}
            >
              3. EBR - Registro
            </h4>
            <button
              onClick={() => setShowEBROptions(!showEBROptions)}
              className={`text-[9px] font-black uppercase ${
                showEBROptions ? 'text-white' : 'text-emerald-600'
              }`}
            >
              {showEBROptions ? '✕' : 'Ver Detalles'}
            </button>
          </div>
          {!showEBROptions ? (
            <div
              className='space-y-4 animate-in fade-in cursor-pointer'
              onClick={() => setShowEBROptions(true)}
            >
              <div className='p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-800 text-[9px] font-mono'>
                <p className='font-black italic'>LOTE #L-9921 INICIADO</p>
              </div>
              <p className='text-[8px] text-center text-slate-400 font-bold uppercase mt-12'>
                Log de Eventos GMP
              </p>
            </div>
          ) : (
            <div className='grid grid-cols-1 gap-1.5 animate-in slide-in-from-right-2'>
              {[
                'Instrucciones paso a paso',
                'Registro de parámetros críticos',
                'Firma electrónica multinivel',
                'Conciliación de materiales',
                'Desviaciones y acciones correctivas',
                'Trazabilidad completa 21 CFR'
              ].map((t, i) => (
                <button
                  key={i}
                  className='p-2.5 rounded-xl bg-white/10 hover:bg-white text-white hover:text-emerald-700 transition-all text-left text-[8px] font-black uppercase'
                >
                  {t}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 4. QC */}
        <div
          className={`p-6 rounded-[2.5rem] border transition-all duration-500 min-h-[380px] flex flex-col ${
            showQCOptions
              ? 'bg-cyan-600 border-cyan-500 shadow-xl'
              : 'bg-white border-slate-100 shadow-sm'
          }`}
        >
          <div
            className={`flex justify-between items-center border-b pb-4 mb-4 ${
              showQCOptions ? 'border-white/20' : 'border-slate-50'
            }`}
          >
            <h4
              className={`font-black text-[10px] uppercase tracking-widest ${
                showQCOptions ? 'text-white' : 'text-slate-800'
              }`}
            >
              4. Control Calidad
            </h4>
            <button
              onClick={() => setShowQCOptions(!showQCOptions)}
              className={`text-[9px] font-black uppercase ${
                showQCOptions ? 'text-white' : 'text-cyan-600'
              }`}
            >
              {showQCOptions ? '✕' : 'Analítica'}
            </button>
          </div>
          {!showQCOptions ? (
            <div
              className='space-y-4 animate-in fade-in cursor-pointer'
              onClick={() => setShowQCOptions(true)}
            >
              <div className='p-3 bg-cyan-50 border border-cyan-100 rounded-xl text-cyan-800 text-[9px] font-black uppercase tracking-tighter'>
                Laboratorio Central
              </div>
              <p className='text-[8px] text-center text-slate-400 font-bold uppercase mt-12'>
                Gestión de Muestreo
              </p>
            </div>
          ) : (
            <div className='grid grid-cols-1 gap-1.5 animate-in slide-in-from-left-2'>
              {[
                'Especificaciones por producto/MP',
                'Programación de análisis',
                'Registro de resultados lab',
                'Certificados de análisis (COA)',
                'Gestión de muestras de retención',
                'Estudios de estabilidad'
              ].map((t, i) => (
                <button
                  key={i}
                  className='p-2.5 rounded-xl bg-white/10 hover:bg-white text-white hover:text-cyan-800 transition-all text-left text-[8px] font-black uppercase'
                >
                  {t}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 5. QA (Aseguramiento de Calidad) - NUEVO MENÚ INTERACTIVO */}
        <div
          className={`p-6 rounded-[2.5rem] border transition-all duration-500 min-h-[380px] flex flex-col ${
            showQAOptions
              ? 'bg-indigo-600 border-indigo-500 shadow-xl'
              : 'bg-white border-slate-100 shadow-sm'
          }`}
        >
          <div
            className={`flex justify-between items-center border-b pb-4 mb-4 ${
              showQAOptions ? 'border-white/20' : 'border-slate-50'
            }`}
          >
            <h4
              className={`font-black text-[10px] uppercase tracking-widest ${
                showQAOptions ? 'text-white' : 'text-slate-800'
              }`}
            >
              5. Aseguramiento (QA)
            </h4>
            <button
              onClick={() => setShowQAOptions(!showQAOptions)}
              className={`text-[9px] font-black uppercase ${
                showQAOptions ? 'text-white' : 'text-indigo-600'
              }`}
            >
              {showQAOptions ? '✕' : 'Garantía'}
            </button>
          </div>

          {!showQAOptions ? (
            <div
              className='space-y-4 animate-in fade-in cursor-pointer flex-1 flex flex-col justify-between'
              onClick={() => setShowQAOptions(true)}
            >
              <div className='p-4 bg-indigo-50 border border-indigo-100 rounded-2xl'>
                <div className='flex justify-between items-center mb-2'>
                  <span className='text-[8px] font-black text-indigo-600 uppercase tracking-widest'>
                    Liberación
                  </span>
                  <span className='text-[10px] font-black text-indigo-900'>
                    75%
                  </span>
                </div>
                <div className='w-full bg-slate-200 h-1.5 rounded-full overflow-hidden'>
                  <div className='bg-indigo-600 h-full w-[75%]'></div>
                </div>
              </div>
              <p className='text-[8px] text-center text-slate-400 font-bold uppercase mb-2'>
                Auditoría y Cumplimiento
              </p>
            </div>
          ) : (
            <div className='grid grid-cols-1 gap-1.5 animate-in slide-in-from-bottom-2'>
              {[
                'Liberación de lotes',
                'Revisión de documentación de lote',
                'Gestión de quejas y reclamos',
                'Gestión de devoluciones',
                'Gestión de cambios (Change Control)',
                'CAPA (Acciones Correctivas)',
                'Auditorías internas'
              ].map((t, i) => (
                <button
                  key={i}
                  className='p-2.5 rounded-xl bg-white/10 hover:bg-white text-white hover:text-indigo-900 transition-all text-left text-[8px] font-black uppercase'
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

export default ProduccionYCalidad
