import React, { useState } from 'react'

interface CriticoProps {
  setTab: (tab: string) => void
}

const ConsideracionesCriticas: React.FC<CriticoProps> = ({ setTab }) => {
  const [openSec, setOpenSec] = useState<string | null>('normativo')

  const toggle = (sec: string) => setOpenSec(openSec === sec ? null : sec)

  const SectionHeader = ({
    title,
    id,
    icon
  }: {
    title: string
    id: string
    icon: string
  }) => (
    <div
      onClick={() => toggle(id)}
      className={`p-6 rounded-3xl border cursor-pointer transition-all flex justify-between items-center ${
        openSec === id
          ? 'bg-slate-900 border-slate-900 shadow-xl'
          : 'bg-white border-slate-100'
      }`}
    >
      <div className='flex items-center gap-4'>
        <span className='text-xl'>{icon}</span>
        <h4
          className={`font-black text-[11px] uppercase tracking-[0.15em] ${
            openSec === id ? 'text-white' : 'text-slate-800'
          }`}
        >
          {title}
        </h4>
      </div>
      <span
        className={`text-xs font-black ${
          openSec === id ? 'text-indigo-400' : 'text-slate-300'
        }`}
      >
        {openSec === id ? '−' : '+'}
      </span>
    </div>
  )

  return (
    <div className='animate-in fade-in zoom-in duration-500 space-y-6 pb-20 max-w-5xl mx-auto'>
      {/* HEADER DE VALIDACIÓN */}
      <div className='bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6'>
        <div className='text-center md:text-left'>
          <h3 className='font-black text-slate-800 uppercase text-sm tracking-[0.2em]'>
            Marco de Cumplimiento GxP
          </h3>
          <p className='text-slate-400 text-[10px] font-bold mt-1 uppercase'>
            Aseguramiento de la Calidad en Sistemas Computarizados
          </p>
        </div>
        <button
          onClick={() => setTab('dashboard')}
          className='bg-slate-900 text-white px-8 py-3 rounded-2xl font-black text-[10px] uppercase shadow-lg active:scale-95 transition-all'
        >
          Cerrar Protocolos
        </button>
      </div>

      <div className='space-y-4'>
        {/* 1. CUMPLIMIENTO NORMATIVO */}
        <div className='space-y-2'>
          <SectionHeader
            title='Cumplimiento Normativo'
            id='normativo'
            icon='🛡️'
          />
          {openSec === 'normativo' && (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 p-4 animate-in slide-in-from-top-4 duration-300'>
              {[
                {
                  t: '21 CFR Part 11 (FDA)',
                  d: 'Firmas electrónicas y registros de auditoría conformes.'
                },
                {
                  t: 'Anexo 11 EU GMP',
                  d: 'Estándares europeos para sistemas computarizados.'
                },
                {
                  t: 'Data Integrity (ALCOA+)',
                  d: 'Atribuible, Legible, Contemporáneo, Original, Exacto.'
                },
                {
                  t: 'Audit Trail Inmutable',
                  d: 'Registro de eventos no editable con marca de tiempo.'
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className='bg-white p-5 rounded-[2rem] border border-slate-100'
                >
                  <p className='text-[10px] font-black text-indigo-600 uppercase mb-1'>
                    {item.t}
                  </p>
                  <p className='text-[10px] text-slate-500 font-medium'>
                    {item.d}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 2. INTEGRACIONES ESENCIALES */}
        <div className='space-y-2'>
          <SectionHeader
            title='Integraciones Esenciales'
            id='integra'
            icon='🔌'
          />
          {openSec === 'integra' && (
            <div className='p-6 bg-white rounded-[2.5rem] border border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-4 animate-in slide-in-from-top-4'>
              {[
                'ERP Financiero',
                'LIMS (Gestión Laboratorio)',
                'SCADA / DCS',
                'Balanzas y Equipos',
                'Serialización GS1'
              ].map((tag, i) => (
                <div
                  key={i}
                  className='p-4 bg-slate-50 rounded-2xl flex items-center gap-3'
                >
                  <div className='w-2 h-2 rounded-full bg-indigo-500'></div>
                  <span className='text-[10px] font-black text-slate-700 uppercase'>
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 3. CONTROLES DE SISTEMAS CERRADOS */}
        <div className='space-y-2'>
          <SectionHeader
            title='Sistemas Cerrados (§11.10)'
            id='cerrados'
            icon='🔒'
          />
          {openSec === 'cerrados' && (
            <div className='p-8 bg-indigo-50 rounded-[2.5rem] border border-indigo-100 animate-in slide-in-from-top-4'>
              <div className='flex items-start gap-4'>
                <div className='bg-indigo-600 text-white p-3 rounded-2xl text-[10px] font-black uppercase'>
                  Validación
                </div>
                <div>
                  <h5 className='text-indigo-900 font-black text-xs uppercase mb-2'>
                    a) Validación del Sistema
                  </h5>
                  <p className='text-indigo-700 text-[11px] font-bold'>
                    Ejecución completa de protocolos IQ, OQ y PQ para asegurar
                    la integridad total del proceso farmacéutico.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 4. MARCO GENERAL DE VALIDACIÓN */}
        <div className='space-y-2'>
          <SectionHeader
            title='Marco General de Validación'
            id='marco'
            icon='📐'
          />
          {openSec === 'marco' && (
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 animate-in slide-in-from-top-4'>
              {/* GAMP 5 */}
              <div className='bg-slate-900 p-8 rounded-[2.5rem] text-white'>
                <h5 className='text-indigo-400 font-black text-[10px] uppercase tracking-widest mb-6'>
                  Enfoque Basado en Riesgo (GAMP 5)
                </h5>
                <div className='space-y-4'>
                  <div className='border-l-2 border-white/20 pl-4 py-1'>
                    <p className='text-[10px] font-black text-white uppercase'>
                      Categoría 4
                    </p>
                    <p className='text-[9px] text-slate-400 uppercase'>
                      Software Configurable (ERP, MES, QMS)
                    </p>
                  </div>
                  <div className='border-l-2 border-white/20 pl-4 py-1'>
                    <p className='text-[10px] font-black text-white uppercase'>
                      Categoría 5
                    </p>
                    <p className='text-[9px] text-slate-400 uppercase'>
                      Software Customizado / A Medida
                    </p>
                  </div>
                </div>
              </div>
              {/* FASES */}
              <div className='bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl'>
                <h5 className='text-slate-800 font-black text-[10px] uppercase tracking-widest mb-6 text-center'>
                  Fases de Validación
                </h5>
                <div className='flex justify-between items-center px-4'>
                  {[
                    { l: 'IQ', d: 'Instalación' },
                    { l: 'OQ', d: 'Operación' },
                    { l: 'PQ', d: 'Desempeño' }
                  ].map((f, i) => (
                    <div key={i} className='text-center group'>
                      <div className='w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-black text-xs mb-2 group-hover:bg-indigo-600 transition-colors'>
                        {f.l}
                      </div>
                      <p className='text-[9px] font-black uppercase text-slate-400'>
                        {f.d}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ConsideracionesCriticas
