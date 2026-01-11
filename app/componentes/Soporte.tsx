import React, { useState } from 'react'

interface SoporteProps {
  setTab: (tab: string) => void
}

const GestionSoporte: React.FC<SoporteProps> = ({ setTab }) => {
  const [showRHOptions, setShowRHOptions] = useState(false) // 16
  const [showSegOptions, setShowSegOptions] = useState(false) // 17
  const [showBIOptions, setShowBIOptions] = useState(false) // 18
  const [showSysOptions, setShowSysOptions] = useState(false) // 19

  const resetViews = () => {
    setShowRHOptions(false)
    setShowSegOptions(false)
    setShowBIOptions(false)
    setShowSysOptions(false)
  }

  return (
    <div className='animate-in fade-in zoom-in duration-500 space-y-8 pb-10'>
      {/* HEADER DE SOPORTE E INTELIGENCIA */}
      <div className='bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
        <div>
          <h3 className='font-black text-slate-800 uppercase text-sm tracking-[0.15em]'>
            Módulos de Soporte y Estrategia
          </h3>
          <p className='text-slate-400 text-xs font-bold mt-1 uppercase'>
            Gestión de Talento, Seguridad y Business Intelligence
          </p>
        </div>
        <div className='flex gap-2'>
          <button
            onClick={resetViews}
            className='px-4 py-3 rounded-2xl font-black text-[10px] uppercase bg-white text-slate-400 hover:text-indigo-600 border border-slate-100 transition-all'
          >
            Vista Global
          </button>
          <button
            onClick={() => setTab('dashboard')}
            className='bg-slate-900 text-white px-6 py-3 rounded-2xl font-black text-[10px] uppercase shadow-lg'
          >
            Volver al Hub
          </button>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {/* 16. GESTIÓN DE RECURSOS HUMANOS */}
        <div
          className={`p-8 rounded-[2.5rem] border transition-all duration-500 min-h-[380px] flex flex-col ${
            showRHOptions
              ? 'bg-white border-emerald-500 shadow-2xl'
              : 'bg-white border-slate-100 shadow-sm'
          }`}
        >
          <div className='flex justify-between items-center border-b border-slate-50 pb-4 mb-6'>
            <h4 className='font-black text-slate-800 text-[10px] uppercase tracking-widest'>
              16. Recursos Humanos
            </h4>
            <button
              onClick={() => setShowRHOptions(!showRHOptions)}
              className='text-[9px] font-black uppercase text-emerald-600'
            >
              {showRHOptions ? '✕' : 'Personal'}
            </button>
          </div>
          {!showRHOptions ? (
            <div
              className='space-y-4 animate-in fade-in cursor-pointer'
              onClick={() => setShowRHOptions(true)}
            >
              <div className='p-4 bg-emerald-50 rounded-2xl flex justify-between items-center'>
                <span className='text-[8px] font-black text-emerald-600 uppercase tracking-widest'>
                  Capacitación GMP
                </span>
                <span className='text-[10px] font-black text-emerald-900'>
                  98% Completado
                </span>
              </div>
              <p className='text-[8px] text-center text-slate-400 font-bold uppercase mt-12'>
                Personal calificado y certificado
              </p>
            </div>
          ) : (
            <div className='grid grid-cols-1 gap-2 animate-in zoom-in-95'>
              {[
                'Personal calificado y certificado',
                'Capacitaciones y entrenamiento GMP',
                'Evaluación de competencias',
                'Control de vestimenta y EPP',
                'Salud ocupacional'
              ].map((t, i) => (
                <button
                  key={i}
                  className='p-3.5 rounded-2xl bg-emerald-50/50 hover:bg-emerald-600 text-emerald-800 hover:text-white transition-all text-left text-[9px] font-black uppercase'
                >
                  {t}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 17. SEGURIDAD Y MEDIO AMBIENTE */}
        <div
          className={`p-8 rounded-[2.5rem] border transition-all duration-500 min-h-[380px] flex flex-col ${
            showSegOptions
              ? 'bg-rose-50 border-rose-500 shadow-2xl'
              : 'bg-white border-slate-100 shadow-sm'
          }`}
        >
          <div className='flex justify-between items-center border-b border-slate-50 pb-4 mb-6'>
            <h4 className='font-black text-slate-800 text-[10px] uppercase tracking-widest'>
              17. Seguridad y M.A.
            </h4>
            <button
              onClick={() => setShowSegOptions(!showSegOptions)}
              className='text-[9px] font-black uppercase text-rose-600'
            >
              {showSegOptions ? '✕' : 'EHS'}
            </button>
          </div>
          {!showSegOptions ? (
            <div
              className='space-y-4 animate-in fade-in cursor-pointer'
              onClick={() => setShowSegOptions(true)}
            >
              <div className='flex justify-center gap-4 py-6 opacity-30'>
                <span className='text-4xl'>☣️</span>
                <span className='text-4xl'>🛡️</span>
              </div>
              <p className='text-[8px] text-center text-slate-400 font-bold uppercase mt-4'>
                Manejo de sustancias y residuos
              </p>
            </div>
          ) : (
            <div className='grid grid-cols-1 gap-2 animate-in slide-in-from-right-2'>
              {[
                'Manejo de sustancias peligrosas',
                'Residuos y efluentes',
                'Incidentes y accidentes',
                'Capacitación en seguridad'
              ].map((t, i) => (
                <button
                  key={i}
                  className='p-3.5 rounded-2xl bg-white hover:bg-rose-600 text-rose-700 hover:text-white transition-all text-left text-[9px] font-black uppercase border border-rose-100'
                >
                  {t}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 18. BUSINESS INTELLIGENCE (Dashboard) */}
        <div
          className={`p-8 rounded-[2.5rem] transition-all duration-500 min-h-[400px] flex flex-col ${
            showBIOptions
              ? 'bg-slate-900 border-amber-500 shadow-2xl'
              : 'bg-slate-800 shadow-sm'
          }`}
        >
          <div className='flex justify-between items-center border-b border-white/10 pb-4 mb-6'>
            <h4 className='font-black text-amber-400 text-[10px] uppercase tracking-widest'>
              18. BI & Reportes
            </h4>
            <button
              onClick={() => setShowBIOptions(!showBIOptions)}
              className='text-[9px] font-black uppercase text-white/50'
            >
              {showBIOptions ? '✕' : 'Analítica'}
            </button>
          </div>
          {!showBIOptions ? (
            <div
              className='space-y-6 animate-in fade-in cursor-pointer h-full flex flex-col justify-center'
              onClick={() => setShowBIOptions(true)}
            >
              <div className='flex items-end gap-1 h-20 justify-center'>
                <div className='w-3 bg-amber-500 h-[40%] rounded-t-sm'></div>
                <div className='w-3 bg-amber-400 h-[70%] rounded-t-sm'></div>
                <div className='w-3 bg-amber-300 h-[90%] rounded-t-sm'></div>
                <div className='w-3 bg-amber-500 h-[60%] rounded-t-sm'></div>
              </div>
              <p className='text-[8px] text-center text-white/30 font-bold uppercase tracking-widest'>
                KPIs y Costos de No Calidad
              </p>
            </div>
          ) : (
            <div className='grid grid-cols-1 gap-2 animate-in zoom-in-95'>
              {[
                'KPIs de producción y calidad',
                'Dashboards ejecutivos',
                'Análisis de tendencias',
                'Reportes regulatorios',
                'Costos de producción y no calidad'
              ].map((t, i) => (
                <button
                  key={i}
                  className='p-3.5 rounded-2xl bg-white/5 hover:bg-amber-500 text-white hover:text-slate-900 transition-all text-left text-[9px] font-black uppercase'
                >
                  {t}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 19. ADMINISTRACIÓN DEL SISTEMA */}
        <div
          className={`p-8 rounded-[2.5rem] border transition-all duration-500 min-h-[400px] flex flex-col ${
            showSysOptions
              ? 'bg-white border-slate-900 shadow-2xl'
              : 'bg-white border-slate-100 shadow-sm'
          }`}
        >
          <div className='flex justify-between items-center border-b border-slate-50 pb-4 mb-6'>
            <h4 className='font-black text-slate-800 text-[10px] uppercase tracking-widest'>
              19. Admin Sistema
            </h4>
            <button
              onClick={() => setShowSysOptions(!showSysOptions)}
              className='text-[9px] font-black uppercase text-slate-400'
            >
              {showSysOptions ? '✕' : 'IT'}
            </button>
          </div>
          {!showSysOptions ? (
            <div
              className='space-y-4 animate-in fade-in cursor-pointer'
              onClick={() => setShowSysOptions(true)}
            >
              <div className='p-4 bg-slate-900 rounded-2xl flex flex-col items-center justify-center text-white'>
                <span className='text-[10px] font-mono'>AUDIT TRAIL</span>
                <span className='text-[8px] text-emerald-400 mt-1 font-black uppercase'>
                  Encriptado
                </span>
              </div>
              <p className='text-[8px] text-center text-slate-400 font-bold uppercase mt-8'>
                Gestión de usuarios y seguridad
              </p>
            </div>
          ) : (
            <div className='grid grid-cols-1 gap-2 animate-in slide-in-from-bottom-2'>
              {[
                'Gestión de usuarios y roles',
                'Audit trail (registro de auditoría)',
                'Seguridad y respaldos',
                'Integraciones con otros sistemas'
              ].map((t, i) => (
                <button
                  key={i}
                  className='p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-900 text-slate-700 hover:text-white transition-all text-left text-[9px] font-black uppercase'
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

export default GestionSoporte
