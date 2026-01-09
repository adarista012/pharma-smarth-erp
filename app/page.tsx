'use client'
import React, { useState } from 'react'

export default function PharmaERP() {
  const [tab, setTab] = useState('dashboard')

  // --- NUEVO COMPONENTE: PREDICCIONES IA ---
  const Predictivo = () => (
    <div className='animate-in fade-in zoom-in duration-500 space-y-6'>
      {/* Alerta de Tendencia */}
      <div className='bg-amber-50 border-2 border-amber-200 p-6 rounded-[2.5rem] flex items-center gap-4'>
        <span className='text-4xl'>⚠️</span>
        <div>
          <h4 className='font-black text-amber-900 uppercase text-xs tracking-widest'>
            Alerta de Abastecimiento
          </h4>
          <p className='text-amber-800 text-sm font-medium'>
            Se prevé un aumento del 40% en antigripales para la próxima semana
            debido al frente frío.
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* Gráfico de Proyección */}
        <div className='bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm'>
          <h3 className='font-black text-slate-800 mb-6 uppercase text-sm tracking-widest'>
            Tendencia: Antigripales
          </h3>
          <div className='h-40 flex items-end gap-3'>
            {[30, 35, 40, 45, 80, 95, 100].map((h, i) => (
              <div key={i} className='flex-1 flex flex-col items-center gap-2'>
                <div
                  style={{ height: `${h}%` }}
                  className={`w-full rounded-t-xl transition-all duration-700 ${
                    i > 3
                      ? 'bg-indigo-600 shadow-[0_0_15px_rgba(79,70,229,0.3)]'
                      : 'bg-slate-200'
                  }`}
                ></div>
                <span className='text-[10px] font-black text-slate-400'>
                  Día {i + 1}
                </span>
              </div>
            ))}
          </div>
          <p className='text-[10px] text-center mt-4 font-bold text-indigo-600 uppercase tracking-tighter italic'>
            ▲ La IA predice pico de ventas en 72 horas
          </p>
        </div>

        {/* Acciones sugeridas */}
        <div className='bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between'>
          <div>
            <h3 className='font-black text-slate-800 mb-4 uppercase text-sm tracking-widest'>
              Sugerencia de Pedido
            </h3>
            <div className='space-y-4'>
              <div className='flex justify-between items-center border-b border-slate-50 pb-2 text-sm font-bold'>
                <span>Noxpirín Plus</span>
                <span className='text-indigo-600'>+50 unidades</span>
              </div>
              <div className='flex justify-between items-center border-b border-slate-50 pb-2 text-sm font-bold'>
                <span>Vitamina C</span>
                <span className='text-indigo-600'>+30 unidades</span>
              </div>
            </div>
          </div>
          <button className='w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-indigo-600 transition-colors mt-6'>
            Aprobar Orden Automática
          </button>
        </div>
      </div>
    </div>
  )

  // --- COMPONENTES EXISTENTES ---
  const Dashboard = () => (
    <div className='animate-in fade-in zoom-in duration-500 space-y-8'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {[
          {
            label: 'Ventas Hoy',
            value: '$1,240.00',
            icon: '📈',
            color: 'text-emerald-600'
          },
          {
            label: 'Alertas IA',
            value: '03',
            icon: '🔔',
            color: 'text-rose-600'
          },
          {
            label: 'Stock Crítico',
            value: '12',
            icon: '📦',
            color: 'text-indigo-600'
          }
        ].map((card, i) => (
          <div
            key={i}
            className='bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm'
          >
            <span className='text-2xl mb-4 block'>{card.icon}</span>
            <p className='text-slate-500 text-xs font-bold uppercase tracking-widest'>
              {card.label}
            </p>
            <p className={`text-3xl font-black mt-1 ${card.color}`}>
              {card.value}
            </p>
          </div>
        ))}
      </div>
      <div className='bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm'>
        <h3 className='font-black text-slate-800 mb-6 uppercase text-sm tracking-widest'>
          Flujo de Caja Semanal
        </h3>
        <div className='h-32 flex items-end gap-2'>
          {[30, 50, 80, 60, 90, 100, 70].map((h, i) => (
            <div
              key={i}
              style={{ height: `${h}%` }}
              className='flex-1 bg-indigo-50 rounded-lg hover:bg-indigo-500 transition-colors'
            ></div>
          ))}
        </div>
      </div>
      <div className='bg-slate-900 rounded-[2.5rem] p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6'>
        <div className='flex items-center gap-6 text-center md:text-left'>
          <div className='w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center text-3xl'>
            💡
          </div>
          <div>
            <p className='text-indigo-400 font-black text-xs uppercase tracking-[0.2em] mb-1'>
              Dato del Día (IA)
            </p>
            <p className='text-slate-200 font-medium text-sm'>
              "Los clientes que compraron{' '}
              <span className='text-white font-bold'>Suero</span> hoy tienen un
              70% de probabilidad de requerir{' '}
              <span className='text-white font-bold'>Zinc</span>."
            </p>
          </div>
        </div>
        <button className='bg-white text-slate-900 px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-indigo-400 transition-colors'>
          Ver Detalles
        </button>
      </div>
    </div>
  )

  const POS = () => (
    <div className='animate-in slide-in-from-bottom duration-500 grid grid-cols-1 lg:grid-cols-3 gap-6'>
      <input
        type='text'
        placeholder='🔍 Buscar medicamento (Ej: Paracetamol)...'
        className='w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-4 text-sm font-bold focus:border-indigo-500 focus:bg-white transition-all outline-none text-slate-900 shadow-inner'
      />
      <div className='lg:col-span-2 bg-white p-6 rounded-[2rem] border border-slate-100'>
        <h3 className='font-black mb-4 uppercase text-sm tracking-widest'>
          Nueva Transacción
        </h3>
        <div className='space-y-3 font-bold'>
          <div className='p-4 bg-slate-50 rounded-2xl flex justify-between items-center border border-slate-100'>
            <span>Aspirina 100mg</span>
            <span className='text-indigo-600'>$12.50</span>
          </div>
          <div className='p-4 bg-slate-50 rounded-2xl flex justify-between items-center border border-slate-100'>
            <span>Omeprazol 20mg</span>
            <span className='text-indigo-600'>$16.50</span>
          </div>
        </div>
      </div>
      <div className='bg-slate-900 text-white p-8 rounded-[2.5rem]'>
        <p className='text-slate-400 font-bold text-xs uppercase tracking-[0.2em] mb-2'>
          Total a Pagar
        </p>
        <p className='text-4xl font-black mb-6'>$29.00</p>
        <button className='w-full bg-indigo-600 py-4 rounded-2xl font-black hover:bg-indigo-500 shadow-lg shadow-indigo-500/20'>
          COBRAR
        </button>
      </div>
    </div>
  )

  const IAInsights = () => (
    <div className='animate-in fade-in duration-500 space-y-6'>
      <div className='bg-indigo-600 p-8 rounded-[2.5rem] text-white overflow-hidden relative shadow-xl shadow-indigo-100'>
        <div className='relative z-10'>
          <h2 className='text-2xl font-black mb-2 tracking-tight uppercase'>
            Analista Inteligente
          </h2>
          <p className='text-indigo-100 font-medium text-sm leading-relaxed'>
            Optimizando inventario en tiempo real. Se detectaron 2 medicamentos
            con baja rotación que podrían vencer pronto.
          </p>
        </div>
        <span className='absolute -right-4 -bottom-4 text-9xl opacity-20'>
          🤖
        </span>
      </div>
      <div className='bg-white p-6 rounded-[2rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center py-12 text-center'>
        <span className='text-4xl mb-4 animate-pulse'>📸</span>
        <p className='font-black text-slate-800 uppercase tracking-widest text-sm'>
          Escaneo de Receta por IA
        </p>
        <p className='text-slate-400 text-xs font-bold mt-1'>
          Sube la foto para procesar el pedido
        </p>
      </div>
    </div>
  )

  return (
    <div className='min-h-screen bg-[#F8FAFC] text-slate-900 pb-24 md:pb-0 font-sans'>
      {/* NAVBAR SUPERIOR */}
      <nav className='bg-white border-b border-slate-100 px-6 py-4 sticky top-0 z-50'>
        <div className='max-w-5xl mx-auto flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <div className='w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black italic shadow-indigo-200 shadow-lg'>
              P
            </div>
            <span className='text-xl font-black tracking-tighter'>
              PharmaOS
            </span>
          </div>

          <div className='hidden md:flex bg-slate-100 p-1 rounded-xl gap-1'>
            {['dashboard', 'pos', 'predicciones', 'ia'].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase transition-all ${
                  tab === t
                    ? 'bg-white text-indigo-600 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {t === 'ia' ? 'IA Smart' : t}
              </button>
            ))}
          </div>
          <div className='w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[10px] font-black text-indigo-600 tracking-tighter'>
            ADM
          </div>
        </div>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <main className='max-w-5xl mx-auto p-6 md:p-10'>
        <div className='mb-8'>
          <h2 className='text-3xl font-black text-slate-900 tracking-tight capitalize'>
            {tab === 'ia'
              ? 'IA Insights'
              : tab === 'predicciones'
              ? 'Tendencias Futuras'
              : tab}
          </h2>
          <p className='text-slate-400 font-bold text-xs tracking-widest uppercase mt-1'>
            Viernes, Enero 09, 2026
          </p>
        </div>

        {tab === 'dashboard' && <Dashboard />}
        {tab === 'pos' && <POS />}
        {tab === 'predicciones' && <Predictivo />}
        {tab === 'ia' && <IAInsights />}
      </main>

      {/* NAVBAR INFERIOR MÓVIL */}
      <div className='md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-6 py-3 flex justify-around items-center z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]'>
        {[
          { id: 'dashboard', icon: '📊', label: 'Home' },
          { id: 'pos', icon: '💰', label: 'Ventas' },
          { id: 'predicciones', icon: '🔮', label: 'IA Trends' },
          { id: 'ia', icon: '🤖', label: 'IA' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setTab(item.id)}
            className={`flex flex-col items-center gap-1 ${
              tab === item.id ? 'text-indigo-600' : 'text-slate-400'
            }`}
          >
            <span className='text-xl'>{item.icon}</span>
            <span className='text-[8px] font-black uppercase'>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
