// 'use client'
// import React, { useState } from 'react'
// import ProduccionYCalidad from './componentes/ProduccionYCalidad'
// import Contabilidad from './componentes/Contabilidad'
// import GestionRegulatoria from './componentes/Regulatorios'
// import GestionSoporte from './componentes/Soporte'
// import Dashboard from './componentes/Dashboard'
// import ConsideracionesCriticas from './componentes/ConsideracionesCriticas'
// import ProtocoloIQ from './componentes/ProtocoloIQ'
// import VerificacionIQ from './componentes/VerificacionIQ'
// import VerificacionOQ from './componentes/VerificacionOQ'
// import VerificacionPQ from './componentes/VerificacionPQ'

// export default function PharmaERP() {
//   const [tab, setTab] = useState('dashboard')

//   return (
//     <div className='min-h-screen bg-[#F8FAFC] text-slate-900 pb-24 md:pb-10 font-sans'>
//       {/* --- NAVBAR DESKTOP --- */}
//       <nav className='bg-white border-b border-slate-100 px-6 py-4 sticky top-0 z-50'>
//         <div className='max-w-5xl mx-auto flex justify-between items-center'>
//           <div className='flex items-center gap-2'>
//             <div className='w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black italic shadow-indigo-200 shadow-lg'>
//               NI
//             </div>
//             <span className='text-xl font-black tracking-tighter'>
//               NEXUS INFINITY
//             </span>
//           </div>

//           <div className='hidden md:flex bg-slate-100 p-1 rounded-xl gap-1 overflow-x-auto max-w-2xl no-scrollbar'>
//             {[
//               { id: 'dashboard', label: 'Dashboard' },
//               { id: 'produccion', label: 'Produccion' },
//               { id: 'contabilidad', label: 'Contabilidad' },
//               { id: 'regulatorio', label: 'Regulatorio' },
//               { id: 'soporte', label: 'Soporte' },
//               { id: 'cumplimiento', label: 'Cumplimiento' }
//             ].map((t) => (
//               <button
//                 key={t.id}
//                 onClick={() => setTab(t.id)}
//                 className={`px-3 py-2 rounded-lg text-[9px] font-black uppercase whitespace-nowrap transition-all ${
//                   tab === t.id
//                     ? 'bg-white text-indigo-600 shadow-sm'
//                     : 'text-slate-500 hover:text-slate-800'
//                 }`}
//               >
//                 {t.label}
//               </button>
//             ))}
//           </div>

//           <div className='w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[10px] font-black text-indigo-600'>
//             ADM
//           </div>
//         </div>
//       </nav>

//       {/* --- CONTENIDO PRINCIPAL --- */}
//       <main className='max-w-5xl mx-auto p-6 md:p-10'>
//         <div className='mb-8'>
//           <h2 className='text-3xl font-black text-slate-900 tracking-tight uppercase'>
//             {tab === 'cumplimiento'
//               ? 'Marco de Validación'
//               : tab.replace('-', ' ').replace('fase', 'Protocolo')}
//           </h2>
//           <p className='text-slate-400 font-bold text-xs tracking-widest uppercase mt-1'>
//             {new Date().toLocaleDateString('es-ES', {
//               weekday: 'long',
//               year: 'numeric',
//               month: 'long',
//               day: 'numeric'
//             })}
//           </p>
//         </div>

//         {tab === 'dashboard' && <Dashboard setTab={setTab} />}
//         {tab === 'contabilidad' && <Contabilidad setTab={setTab} />}
//         {tab === 'produccion' && <ProduccionYCalidad setTab={setTab} />}
//         {tab === 'regulatorio' && <GestionRegulatoria setTab={setTab} />}
//         {tab === 'soporte' && <GestionSoporte setTab={setTab} />}
//         {tab === 'cumplimiento' && <ConsideracionesCriticas setTab={setTab} />}
//         {tab === 'fase-iq' && <ProtocoloIQ setTab={setTab} />}
//         {tab === 'verificacion-iq' && <VerificacionIQ setTab={setTab} />}
//         {tab === 'fase-oq' && <VerificacionOQ setTab={setTab} />}
//         {tab === 'fase-pq' && <VerificacionPQ setTab={setTab} />}
//       </main>

//       {/* --- NAVBAR MÓVIL (ICONOS INDUSTRIALES) --- */}
//       <div className='md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.08)]'>
//         <div className='flex overflow-x-auto no-scrollbar items-center py-3 px-4 gap-6'>
//           {[
//             { id: 'dashboard', icon: '💎', label: 'Panel' },
//             { id: 'produccion', icon: '🏭', label: 'Planta' },
//             { id: 'contabilidad', icon: '📦', label: 'Almacén' },
//             { id: 'cumplimiento', icon: '📋', label: 'Validar' },
//             { id: 'regulatorio', icon: '⚖️', label: 'Normas' }
//           ].map((item) => (
//             <button
//               key={item.id}
//               onClick={() => setTab(item.id)}
//               className={`flex flex-col items-center min-w-[60px] gap-1 transition-all ${
//                 tab === item.id ? 'text-indigo-600 scale-105' : 'text-slate-400'
//               }`}
//             >
//               <span className='text-xl'>{item.icon}</span>
//               <span className='text-[8px] font-black uppercase tracking-tighter whitespace-nowrap'>
//                 {item.label}
//               </span>
//               {tab === item.id && (
//                 <div className='w-1 h-1 bg-indigo-600 rounded-full mt-0.5 animate-pulse'></div>
//               )}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }
