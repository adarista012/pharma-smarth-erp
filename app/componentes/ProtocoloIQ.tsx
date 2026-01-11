import React, { useState } from 'react'

interface IQProps {
  setTab: (tab: string) => void
}

const ProtocoloIQ: React.FC<IQProps> = ({ setTab }) => {
  const [openSec, setOpenSec] = useState<number | null>(1)

  const sections = [
    {
      id: 1,
      title: '1. INFORMACIÓN GENERAL',
      content: [
        {
          t: '1.1 Propósito del Sistema',
          d: 'Definir los requisitos de instalación para garantizar que el software opere en un entorno controlado.'
        },
        {
          t: '1.2 Alcance de la Validación',
          d: 'Cubre la infraestructura cloud, base de datos y terminales de acceso en planta.'
        },
        {
          t: '1.3 Referencias',
          d: 'SOP-VAL-01, GAMP 5, FDA 21 CFR Part 11, EU Annex 11.'
        },
        {
          t: '1.4 Criterios de Aceptación',
          d: 'El 100% de los componentes críticos deben estar instalados y verificados.'
        }
      ]
    },
    {
      id: 2,
      title: '2. ROLES Y RESPONSABILIDADES',
      content: [
        {
          t: 'Sponsor del Proyecto',
          d: 'Aprobación de recursos y presupuesto.'
        },
        {
          t: 'Líder de Validación',
          d: 'Gestión del plan maestro de validación (VMP).'
        },
        {
          t: 'Especialista QA',
          d: 'Aseguramiento del cumplimiento normativo.'
        },
        {
          t: 'Administrador de Sistema',
          d: 'Configuración técnica y backups.'
        },
        {
          t: 'SME (Subject Matter Expert)',
          d: 'Validación de procesos de negocio.'
        }
      ]
    },
    {
      id: 3,
      title: '3. ENTREGABLES PREVIOS (Prerrequisitos)',
      isChecklist: true,
      content: [
        'User Requirements Specification (URS)',
        'Functional Specification (FS)',
        'Risk Assessment',
        'Vendor Audit (si aplica)',
        'Contratos y licencias'
      ]
    }
  ]

  return (
    <div className='animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl mx-auto pb-20'>
      {/* HEADER ESTILO PROTOCOLO OFICIAL */}
      <div className='bg-white border-2 border-slate-900 p-8 mb-8 relative overflow-hidden shadow-[10px_10px_0px_0px_rgba(15,23,42,1)]'>
        <div className='absolute top-0 right-0 bg-slate-900 text-white px-4 py-1 text-[8px] font-black uppercase'>
          Confidencial
        </div>

        <h2 className='font-black text-slate-900 text-sm md:text-base uppercase tracking-widest text-center border-b-2 border-slate-900 pb-4 mb-4'>
          FASE 1: IQ - INSTALLATION QUALIFICATION <br />
          <span className='text-[10px] text-slate-500'>
            (CALIFICACIÓN DE INSTALACIÓN)
          </span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-[9px] text-slate-600'>
          <div className='border-r border-slate-100 uppercase'>
            <strong>Sistema:</strong> Nexus Infinity ERP
          </div>
          <div className='border-r border-slate-100 uppercase text-center'>
            <strong>Versión:</strong> 1.0.4-GAMP5
          </div>
          <div className='uppercase text-right'>
            <strong>Fecha:</strong> 11-ENE-2026
          </div>
        </div>
        <div className='mt-4 border-t-2 border-slate-900 pt-2 text-center overflow-hidden whitespace-nowrap opacity-20'>
          {'━'.repeat(100)}
        </div>
      </div>

      {/* SECCIONES DESPLEGABLES */}
      <div className='space-y-4'>
        {sections.map((sec) => (
          <div
            key={sec.id}
            className='bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm'
          >
            <button
              onClick={() => setOpenSec(openSec === sec.id ? null : sec.id)}
              className={`w-full p-5 flex justify-between items-center transition-colors ${
                openSec === sec.id ? 'bg-slate-50' : 'hover:bg-slate-50/50'
              }`}
            >
              <span className='font-black text-[10px] uppercase tracking-widest text-slate-800'>
                {sec.title}
              </span>
              <span className='text-xs font-black text-slate-400'>
                {openSec === sec.id ? '▲' : '▼'}
              </span>
            </button>

            {openSec === sec.id && (
              <div className='p-6 border-t border-slate-100 animate-in slide-in-from-top-2'>
                {sec.isChecklist ? (
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {sec.content.map((item: any, i) => (
                      <div
                        key={i}
                        className='flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100'
                      >
                        <div className='w-4 h-4 rounded border-2 border-indigo-500 bg-white flex items-center justify-center text-[10px] text-indigo-600 font-black'>
                          ✓
                        </div>
                        <span className='text-[10px] font-bold text-slate-600 uppercase'>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className='space-y-4'>
                    {sec.content.map((item: any, i) => (
                      <div
                        key={i}
                        className='border-b border-slate-50 pb-3 last:border-0'
                      >
                        <p className='text-[9px] font-black text-indigo-600 uppercase mb-1'>
                          {item.t}
                        </p>
                        <p className='text-[11px] text-slate-500 font-medium leading-relaxed'>
                          {item.d}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* FOOTER DE NAVEGACIÓN */}
      <div className='mt-10 flex justify-between items-center'>
        <button
          onClick={() => setTab('cumplimiento')}
          className='text-[9px] font-black uppercase text-slate-400 hover:text-slate-800 transition-colors'
        >
          ← Volver a Marco General
        </button>
        <div className='flex gap-2'>
          <button className='px-6 py-3 bg-slate-100 text-slate-400 rounded-xl font-black text-[9px] uppercase'>
            Descargar PDF
          </button>
          <button
            className='px-6 py-3 bg-indigo-600 text-white rounded-xl font-black text-[9px] uppercase shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all'
            onClick={() => setTab('verificacion-iq')}
          >
            Iniciar Verificación
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProtocoloIQ
