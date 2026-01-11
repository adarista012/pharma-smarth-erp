'use client'
import React, { useState } from 'react'
import ProduccionYCalidad from './componentes/ProduccionYCalidad'
import Contabilidad from './componentes/Contabilidad'
import GestionRegulatoria from './componentes/Regulatorios'
import GestionSoporte from './componentes/Soporte'
import SeccionValidacionFDA from './componentes/ValidacionFDA'
import Dashboard from './componentes/Dashboard'
import ConsideracionesCriticas from './componentes/ConsideracionesCriticas'

export default function PharmaERP() {
  const [tab, setTab] = useState('dashboard')
  // --- NUEVO COMPONENTE: ASEGURAMIENTO DE CALIDAD (QA) ---
  const AseguramientoCalidad = () => (
    <div className='animate-in fade-in zoom-in duration-500 space-y-6'>
      {/* Resumen de Gestión de Riesgos */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {[
          {
            label: 'Pendientes Liberar',
            val: '05',
            color: 'text-indigo-600',
            sub: 'Lotes en revisión'
          },
          {
            label: 'CAPAs Abiertas',
            val: '02',
            color: 'text-rose-600',
            sub: '1 Crítica / 1 Mayor'
          },
          {
            label: 'Quejas/Reclamos',
            val: '01',
            color: 'text-amber-600',
            sub: 'Últimos 30 días'
          },
          {
            label: 'Auditoría',
            val: '12d',
            color: 'text-slate-900',
            sub: 'Próxima visita ente'
          }
        ].map((stat, i) => (
          <div
            key={i}
            className='bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm'
          >
            <p className='text-slate-400 text-[9px] font-black uppercase tracking-widest'>
              {stat.label}
            </p>
            <p className={`text-3xl font-black mt-1 ${stat.color}`}>
              {stat.val}
            </p>
            <p className='text-[10px] text-slate-400 font-bold mt-1'>
              {stat.sub}
            </p>
          </div>
        ))}
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* Panel de Liberación de Lotes */}
        <div className='lg:col-span-2 space-y-6'>
          <div className='bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm'>
            <h3 className='font-black text-slate-800 uppercase text-xs tracking-widest mb-6'>
              Centro de Liberación de Lote
            </h3>
            <div className='space-y-4'>
              {[
                {
                  lote: 'L-2026-X99',
                  prod: 'Amoxicilina 500mg',
                  checks: '3/4',
                  status: 'Revisión Final'
                },
                {
                  lote: 'L-2026-X88',
                  prod: 'Suero Fisiológico',
                  checks: '4/4',
                  status: 'Listo para Liberar'
                }
              ].map((lote, i) => (
                <div
                  key={i}
                  className='p-6 bg-slate-50 rounded-[2rem] border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4'
                >
                  <div>
                    <span className='text-[10px] font-black text-indigo-600'>
                      {lote.lote}
                    </span>
                    <h4 className='font-black text-slate-800 text-sm'>
                      {lote.prod}
                    </h4>
                    <p className='text-[10px] font-bold text-slate-400'>
                      Checklist de Documentación: {lote.checks}
                    </p>
                  </div>
                  <div className='flex gap-3 w-full md:w-auto'>
                    <button className='flex-1 md:flex-none bg-white border border-slate-200 px-4 py-2 rounded-xl text-[10px] font-black uppercase hover:bg-slate-100'>
                      Revisar Dossier
                    </button>
                    <button
                      className={`flex-1 md:flex-none px-4 py-2 rounded-xl text-[10px] font-black uppercase shadow-lg ${
                        lote.checks === '4/4'
                          ? 'bg-emerald-600 text-white shadow-emerald-100'
                          : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      Liberar Producto
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gestión de Cambios y CAPA */}
          <div className='bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm'>
            <h3 className='font-black text-slate-800 uppercase text-xs tracking-widest mb-6'>
              Change Control & CAPA
            </h3>
            <div className='space-y-4'>
              <div className='flex items-center gap-4 p-4 border-2 border-dashed border-slate-100 rounded-2xl'>
                <div className='w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center font-black'>
                  !
                </div>
                <div className='flex-1'>
                  <p className='text-xs font-black'>CAPA #2026-004</p>
                  <p className='text-[10px] text-slate-400 font-bold uppercase'>
                    Desviación en temperatura de mezclado
                  </p>
                </div>
                <span className='text-[9px] font-black text-amber-600 bg-amber-50 px-2 py-1 rounded'>
                  PENDIENTE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Auditorías y Quejas */}
        <div className='space-y-6'>
          <div className='bg-slate-900 text-white p-8 rounded-[2.5rem] relative overflow-hidden'>
            <h4 className='font-black text-indigo-400 text-[10px] uppercase tracking-widest mb-4'>
              Compliance & Auditoría
            </h4>
            <p className='text-sm font-medium mb-6 relative z-10'>
              Próxima auditoría interna programada en 5 días.
            </p>
            <div className='w-full bg-white/10 h-2 rounded-full mb-4 overflow-hidden'>
              <div className='bg-indigo-500 h-full w-[85%]'></div>
            </div>
            <p className='text-[9px] font-bold text-slate-400 uppercase'>
              Preparación del sistema: 85%
            </p>
            <span className='absolute -right-4 -bottom-4 text-7xl opacity-10'>
              📋
            </span>
          </div>

          <div className='bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm'>
            <h4 className='font-black text-slate-800 text-[10px] uppercase tracking-widest mb-4'>
              Quejas y Devoluciones
            </h4>
            <div className='space-y-3'>
              <div className='p-3 bg-rose-50 rounded-xl border border-rose-100'>
                <p className='text-[10px] font-black text-rose-900'>
                  RECLAMO #RT-88
                </p>
                <p className='text-[9px] text-rose-700 font-bold'>
                  Empaque primario dañado en farmacia C.
                </p>
              </div>
              <button className='w-full py-3 rounded-xl border border-slate-100 text-[9px] font-black uppercase text-slate-400 hover:bg-slate-50'>
                Ver Historial Completo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className='min-h-screen bg-[#F8FAFC] text-slate-900 pb-24 md:pb-10 font-sans'>
      {/* --- NAVBAR DESKTOP (STICKY TOP) --- */}
      <nav className='bg-white border-b border-slate-100 px-6 py-4 sticky top-0 z-50'>
        <div className='max-w-5xl mx-auto flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <div className='w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black italic shadow-indigo-200 shadow-lg'>
              NI
            </div>
            <span className='text-xl font-black tracking-tighter'>
              NEXUS INFINITY
            </span>
          </div>

          {/* Menu Desktop: Con scroll horizontal sutil si crece mucho */}
          <div className='hidden md:flex bg-slate-100 p-1 rounded-xl gap-1 overflow-x-auto max-w-2xl no-scrollbar'>
            {[
              { id: 'dashboard', label: 'Dashboard' },
              { id: 'produccion', label: 'Produccion' },
              { id: 'contabilidad', label: 'Contabilidad' },
              { id: 'regulatorio', label: 'Regulatorio' },
              { id: 'soporte', label: 'Soporte' },
              { id: 'cumplimiento', label: 'Cumplimiento' },
              { id: 'FDA', label: 'FDA IQ/OQ' }
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`px-3 py-2 rounded-lg text-[9px] font-black uppercase whitespace-nowrap transition-all ${
                  tab === t.id
                    ? 'bg-white text-indigo-600 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className='w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[10px] font-black text-indigo-600'>
            ADM
          </div>
        </div>
      </nav>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <main className='max-w-5xl mx-auto p-6 md:p-10'>
        <div className='mb-8'>
          <h2 className='text-3xl font-black text-slate-900 tracking-tight capitalize'>
            {tab === 'validacionFDA' ? 'Protocolos FDA' : tab.replace('_', ' ')}
          </h2>
          <p className='text-slate-400 font-bold text-xs tracking-widest uppercase mt-1'>
            {new Date().toLocaleDateString('es-ES', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>

        {/* Renderizado de componentes */}
        {tab === 'dashboard' && <Dashboard setTab={setTab} />}
        {tab === 'contabilidad' && <Contabilidad setTab={setTab} />}
        {tab === 'produccion' && <ProduccionYCalidad setTab={setTab} />}
        {tab === 'regulatorio' && <GestionRegulatoria setTab={setTab} />}
        {tab === 'soporte' && <GestionSoporte setTab={setTab} />}
        {tab === 'cumplimiento' && <ConsideracionesCriticas setTab={setTab} />}
        {tab === 'qa' && <AseguramientoCalidad />}
        {tab === 'FDA' && <SeccionValidacionFDA />}
      </main>

      {/* --- NAVBAR MÓVIL (BOTTOM NAV CON SCROLL) --- */}
      {/* Agregamos 'overflow-x-auto' para que el usuario pueda deslizar y ver todas las opciones */}
      <div className='md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.08)]'>
        <div className='flex overflow-x-auto no-scrollbar items-center py-3 px-4 gap-6 focus:outline-none'>
          {[
            { id: 'dashboard', icon: '💎', label: 'Nexus Hub' },
            { id: 'produccion', icon: '⚗️', label: 'Producción' },
            { id: 'contabilidad', icon: '🚛', label: 'Materiales' },
            { id: 'regulatorio', icon: '🛡️', label: 'Cumplimiento' },
            { id: 'soporte', icon: '📊', label: 'Estrategia' },
            { id: 'FDA', icon: '✅', label: 'FDA' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              className={`flex flex-col items-center min-w-[50px] gap-1 transition-all ${
                tab === item.id ? 'text-indigo-600 scale-110' : 'text-slate-400'
              }`}
            >
              <span className='text-xl'>{item.icon}</span>
              <span
                className={`text-[8px] font-black uppercase tracking-tighter whitespace-nowrap`}
              >
                {item.label}
              </span>
              {tab === item.id && (
                <div className='w-1 h-1 bg-indigo-600 rounded-full mt-0.5 animate-pulse'></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
