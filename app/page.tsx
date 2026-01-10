'use client'
import React, { useState } from 'react'

export default function PharmaERP() {
  const [tab, setTab] = useState('dashboard')

  const Dashboard = () => (
    <div className='animate-in fade-in zoom-in duration-500 space-y-8'>
      {/* 18. Business Intelligence (KPIs Globales) - AHORA CLICABLES */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {[
          {
            id: 'control_prod',
            label: 'OEE Global',
            val: '88.2%',
            desc: 'Rendimiento Planta',
            color: 'text-indigo-600'
          },
          {
            id: 'qc',
            label: 'Alertas Calidad',
            val: '02',
            desc: 'Pendientes QA',
            color: 'text-rose-600'
          },
          {
            id: 'qa',
            label: 'Cumplimiento',
            val: '100%',
            desc: 'ALCOA+ Status',
            color: 'text-emerald-600'
          },
          {
            id: 'validacionFDA',
            label: 'Audit Trail',
            val: 'Activo',
            desc: 'Inmutable (21 CFR)',
            color: 'text-slate-900'
          }
        ].map((kpi, i) => (
          <button
            key={i}
            onClick={() => setTab(kpi.id)}
            className='bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm text-left hover:border-indigo-300 transition-all active:scale-95'
          >
            <p className='text-slate-400 text-[9px] font-black uppercase tracking-widest'>
              {kpi.label}
            </p>
            <p className={`text-2xl font-black mt-1 ${kpi.color}`}>{kpi.val}</p>
            <p className='text-[10px] text-slate-400 font-bold'>{kpi.desc}</p>
          </button>
        ))}
      </div>
      {/* 1. GESTIÓN DE FÓRMULAS MAESTRAS (BOM CORE) */}
      <div
        onClick={() => setTab('produccion')}
        className='lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm cursor-pointer hover:border-indigo-400 transition-all group relative overflow-hidden'
      >
        {/* Decoración de fondo para resaltar que es un Módulo Core */}
        <div className='absolute -right-4 -top-4 w-24 h-24 bg-indigo-50 rounded-full opacity-50 group-hover:scale-110 transition-transform'></div>

        <div className='flex justify-between items-start relative z-10'>
          <div>
            <div className='flex items-center gap-2 mb-2'>
              <span className='bg-indigo-600 text-white text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter'>
                Módulo Core
              </span>
              <h4 className='font-black text-slate-800 text-xs uppercase tracking-widest'>
                PRODUCCIÓN Y CALIDAD
              </h4>
            </div>
            <p className='text-[10px] text-slate-400 font-bold mb-6'>
              Control de versiones, escalamiento y cálculo automático de
              materiales.
            </p>
          </div>
          <span className='text-2xl group-hover:rotate-12 transition-transform'>
            🧪
          </span>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10'>
          {/* Mini Indicadores de Fórmulas */}
          <div className='space-y-3'>
            <div className='flex justify-between items-center bg-slate-50 p-3 rounded-xl'>
              <span className='text-[9px] font-black text-slate-500 uppercase'>
                Versiones Activas
              </span>
              <span className='text-xs font-black text-indigo-600'>142</span>
            </div>
            <div className='flex justify-between items-center bg-slate-50 p-3 rounded-xl'>
              <span className='text-[9px] font-black text-slate-500 uppercase'>
                En Escalamiento
              </span>
              <span className='text-xs font-black text-amber-600'>03</span>
            </div>
          </div>

          {/* Lista de funcionalidades Core (Lo que pidió el cliente) */}
          <ul className='space-y-2'>
            {[
              'Control de versiones de fórmulas',
              'Escalamiento de lotes (Piloto → Prod)',
              'Cálculo automático de materiales'
            ].map((item, i) => (
              <li
                key={i}
                className='flex items-center gap-2 text-[9px] font-bold text-slate-600'
              >
                <div className='w-1 h-1 bg-indigo-400 rounded-full'></div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className='mt-6 pt-4 border-t border-slate-50 flex justify-between items-center'>
          <span className='text-[9px] font-black text-indigo-600 uppercase tracking-widest group-hover:translate-x-2 transition-transform inline-block'>
            Entrar al Maestro de Fórmulas →
          </span>
          <div className='flex -space-x-2'>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className='w-5 h-5 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[7px] font-black'
              >
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BLOQUE SUPERIOR: 10, 11, 12 */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* 10. Gestión Documental (SOPs) -> NAVEGA A QA */}

        <div
          onClick={() => setTab('qa')}
          className='bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm cursor-pointer hover:border-indigo-200 transition-all'
        >
          <div className='flex justify-between items-center mb-6'>
            <h4 className='font-black text-slate-800 text-[10px] uppercase tracking-widest'>
              10. Gestión Documental
            </h4>
            <span className='bg-indigo-50 text-indigo-600 px-2 py-1 rounded-md text-[8px] font-black'>
              v4.0
            </span>
          </div>
          <div className='space-y-4'>
            {[
              {
                doc: 'SOP-PRO-01: Limpieza',
                status: 'Vigente',
                color: 'text-emerald-500'
              },
              {
                doc: 'SOP-LAB-05: HPLC',
                status: 'Revisión',
                color: 'text-amber-500'
              }
            ].map((d, i) => (
              <div
                key={i}
                className='flex justify-between items-center border-b border-slate-50 pb-2'
              >
                <span className='text-[10px] font-bold text-slate-700'>
                  {d.doc}
                </span>
                <span className={`text-[8px] font-black uppercase ${d.color}`}>
                  {d.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 11. Calibración y Mantenimiento -> NAVEGA A CONTROL_PROD */}
        <div
          onClick={() => setTab('control_prod')}
          className='bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm cursor-pointer hover:border-indigo-200 transition-all'
        >
          <h4 className='font-black text-slate-800 text-[10px] uppercase tracking-widest mb-6'>
            11. Mantenimiento y Equipos
          </h4>
          <div className='space-y-4'>
            <div className='flex gap-3 items-center p-3 bg-slate-50 rounded-2xl'>
              <div className='text-lg'>⚖️</div>
              <div className='flex-1'>
                <p className='text-[10px] font-black'>Balanza Analítica B-09</p>
                <p className='text-[8px] text-rose-500 font-bold uppercase'>
                  Vence en 2 días
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 12. Gestión de Validaciones (IQ, OQ, PQ) -> NAVEGA A VALIDACION FDA */}
        <div
          onClick={() => setTab('validacionFDA')}
          className='bg-indigo-600 p-8 rounded-[2.5rem] text-white relative overflow-hidden shadow-xl cursor-pointer hover:ring-4 ring-indigo-500/30 transition-all'
        >
          <h4 className='font-black text-indigo-200 text-[10px] uppercase tracking-widest mb-6'>
            12. Validaciones
          </h4>
          <div className='space-y-4 relative z-10'>
            {[
              { label: 'Equipos IQ/OQ/PQ', prog: 90 },
              { label: 'Sistemas Comp.', prog: 100 }
            ].map((v, i) => (
              <div key={i} className='space-y-1'>
                <div className='flex justify-between text-[9px] font-black uppercase'>
                  <span>{v.label}</span>
                  <span>{v.prog}%</span>
                </div>
                <div className='w-full bg-white/10 h-1 rounded-full'>
                  <div
                    className='bg-white h-full'
                    style={{ width: `${v.prog}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BLOQUE INFERIOR: 16, 17, 19 + CONSIDERACIONES CRÍTICAS */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* 16 y 17. Soporte (RRHH y EHS) */}
        <div className='space-y-6'>
          <div className='bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm'>
            <h4 className='font-black text-slate-800 text-[10px] uppercase tracking-widest mb-4'>
              16. RRHH y Entrenamiento GMP
            </h4>
            <div className='p-3 bg-slate-50 rounded-xl flex justify-between items-center'>
              <span className='text-[10px] font-bold'>
                Personal Certificado
              </span>
              <span className='text-emerald-600 font-black text-xs'>98%</span>
            </div>
          </div>
          <div className='bg-rose-50 p-6 rounded-[2.5rem] border border-rose-100 shadow-sm'>
            <h4 className='font-black text-rose-900 text-[10px] uppercase tracking-widest mb-4'>
              17. Seguridad y Medio Ambiente
            </h4>
            <div className='flex justify-between items-center text-[10px] font-black text-rose-700'>
              <span>Incidentes (45d)</span>
              <span>0</span>
            </div>
          </div>
        </div>

        {/* 19. Administración y Audit Trail -> AHORA NAVEGA A VALIDACIONFDA */}
        <div
          onClick={() => setTab('validacionFDA')}
          className='bg-slate-900 p-8 rounded-[2.5rem] text-white relative overflow-hidden cursor-pointer hover:ring-4 ring-slate-800 transition-all'
        >
          <h4 className='font-black text-indigo-400 text-[10px] uppercase tracking-widest mb-4'>
            19. Administración y Audit Trail
          </h4>
          <div className='p-4 bg-white/5 border border-white/10 rounded-2xl font-mono text-[8px] text-slate-400 space-y-1'>
            <p>[10:31] USR_ADMIN: Acceso a Fórmula Maestro</p>
            <p>[10:28] SYS: Backup Cloud Completado</p>
          </div>
          <button className='w-full mt-4 py-2 bg-indigo-600 rounded-xl text-[9px] font-black uppercase hover:bg-indigo-500 transition-colors'>
            Gestionar Roles
          </button>
        </div>

        {/* Consideraciones Críticas e Integraciones -> NAVEGA A CONTABILIDAD/STOCK */}
        <div
          onClick={() => setTab('contabilidad')}
          className='bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm cursor-pointer hover:border-indigo-200 transition-all'
        >
          <h4 className='font-black text-slate-400 text-[9px] uppercase tracking-widest mb-4 italic'>
            Integraciones & Cumplimiento
          </h4>
          <div className='flex flex-wrap gap-2 mb-6'>
            {['LIMS', 'SCADA', 'ERP Fin', 'Balanzas', 'GS1'].map((tag, i) => (
              <span
                key={i}
                className='bg-slate-100 px-2 py-1 rounded text-[8px] font-black text-slate-600'
              >
                {tag}
              </span>
            ))}
          </div>
          <div className='border-t border-slate-50 pt-4'>
            <p className='text-[10px] font-black text-slate-800 uppercase'>
              Data Integrity
            </p>
            <p className='text-[8px] text-slate-400 font-bold'>
              ALCOA+ Compliance Verified
            </p>
          </div>
        </div>
      </div>
    </div>
  )
  const ContabilidadYLogistica = () => (
    <div className='animate-in fade-in zoom-in duration-500 space-y-6'>
      {/* --- SECCIÓN LOGÍSTICA (PUNTOS 6, 7, 8, 9) --- */}

      {/* 7. Monitoreo Ambiental en Tiempo Real */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        {[
          { label: 'Temp. Bodega A', val: '18.5°C', status: 'OK', icon: '🌡️' },
          { label: 'Humedad Rel.', val: '45%', status: 'OK', icon: '💧' },
          {
            label: 'Zona Cuarentena',
            val: '12 Lotes',
            status: 'ALERTA',
            icon: '🚧'
          },
          { label: 'Pendiente Muestreo', val: '04', status: 'PEND', icon: '🧪' }
        ].map((item, i) => (
          <div
            key={i}
            className='bg-white p-4 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-3'
          >
            <div className='w-10 h-10 bg-slate-50 rounded-2xl flex items-center justify-center text-lg'>
              {item.icon}
            </div>
            <div>
              <p className='text-[9px] font-black text-slate-400 uppercase tracking-tighter'>
                {item.label}
              </p>
              <p
                className={`text-lg font-black ${
                  item.status === 'ALERTA' ? 'text-rose-600' : 'text-slate-800'
                }`}
              >
                {item.val}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* 6 y 9. Gestión de Inventarios y Recepción */}
        <div className='lg:col-span-2 space-y-6'>
          <div className='bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden'>
            <div className='p-6 border-b border-slate-50 flex justify-between items-center bg-slate-50/50'>
              <h3 className='font-black text-slate-800 uppercase text-xs tracking-widest'>
                6. Inventario por Lote (FEFO/FIFO)
              </h3>
              <div className='flex gap-2'>
                <span className='bg-emerald-500 text-white px-2 py-1 rounded-md text-[8px] font-black uppercase'>
                  Aprobado
                </span>
                <span className='bg-amber-500 text-white px-2 py-1 rounded-md text-[8px] font-black uppercase'>
                  Cuarentena
                </span>
              </div>
            </div>
            <table className='w-full text-left'>
              <thead className='bg-slate-50/30 text-[9px] font-black text-slate-400 uppercase'>
                <tr>
                  <th className='p-4'>Material / Lote</th>
                  <th className='p-4'>Estado</th>
                  <th className='p-4'>Vencimiento</th>
                  <th className='p-4 text-right'>Stock</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-50'>
                {[
                  {
                    m: 'Ácido Ascórbico',
                    l: 'L-9921',
                    e: 'Aprobado',
                    v: '2027/12',
                    q: '500 Kg'
                  },
                  {
                    m: 'Frasco Ámbar 120ml',
                    l: 'E-4420',
                    e: 'Cuarentena',
                    v: 'N/A',
                    q: '5,000 Un'
                  }
                ].map((row, i) => (
                  <tr
                    key={i}
                    className='text-xs font-bold hover:bg-slate-50 transition-colors'
                  >
                    <td className='p-4'>
                      <p className='text-slate-800'>{row.m}</p>
                      <p className='text-[9px] text-slate-400 font-mono'>
                        {row.l}
                      </p>
                    </td>
                    <td className='p-4'>
                      <span
                        className={`px-2 py-1 rounded-lg text-[8px] uppercase ${
                          row.e === 'Aprobado'
                            ? 'bg-emerald-50 text-emerald-600'
                            : 'bg-amber-50 text-amber-600'
                        }`}
                      >
                        {row.e}
                      </span>
                    </td>
                    <td className='p-4 text-slate-500 font-mono'>{row.v}</td>
                    <td className='p-4 text-right font-black text-indigo-600'>
                      {row.q}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 8. Compras y Proveedores */}
          <div className='bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm'>
            <h3 className='font-black text-slate-800 uppercase text-xs tracking-widest mb-6'>
              8. Compras y Proveedores
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {[
                { name: 'BioChemical Corp', score: 98, status: 'Homologado' },
                { name: 'Packaging Global', score: 85, status: 'Calificado' }
              ].map((p, i) => (
                <div
                  key={i}
                  className='p-4 border border-slate-100 rounded-2xl flex justify-between items-center'
                >
                  <div>
                    <p className='text-xs font-black'>{p.name}</p>
                    <p className='text-[9px] text-slate-400 font-bold uppercase'>
                      {p.status}
                    </p>
                  </div>
                  <div className='text-right'>
                    <p className='text-sm font-black text-indigo-600'>
                      {p.score}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 7 y 9. Almacenes y Muestreo */}
        <div className='space-y-6'>
          <div className='bg-slate-900 text-white p-8 rounded-[2.5rem]'>
            <h4 className='font-black text-indigo-400 text-[10px] uppercase tracking-widest mb-6'>
              7. Operaciones de Almacén
            </h4>
            <div className='space-y-4'>
              <button className='w-full bg-white/5 border border-white/10 p-4 rounded-2xl text-[10px] font-black uppercase text-left hover:bg-white/10 flex justify-between items-center transition-all'>
                <span>Plan de Muestreo ISO 2859</span>
                <span className='text-indigo-400'>→</span>
              </button>
            </div>
          </div>
          <div className='bg-indigo-50 p-8 rounded-[2.5rem] border border-indigo-100'>
            <h4 className='font-black text-indigo-900 text-[10px] uppercase tracking-widest mb-4'>
              9. Etiquetado Automático
            </h4>
            <div className='bg-white p-4 rounded-2xl border border-indigo-200 shadow-sm flex items-center gap-4'>
              <div className='w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white text-2xl'>
                🔳
              </div>
              <div className='text-[10px] font-black'>
                <p>AMOXICILINA 500mg</p>
                <p className='text-indigo-600'>ESTADO: CUARENTENA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- SECCIÓN COMERCIAL (PUNTOS 13, 14, 15) --- */}
      <div className='space-y-8 mt-8 border-t border-slate-100 pt-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* 13. Registro de Clientes */}
          <div className='bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm'>
            <h3 className='font-black text-slate-800 uppercase text-xs tracking-widest mb-6'>
              13. Registro de Clientes
            </h3>
            <div className='space-y-3'>
              {[
                { cat: 'Farmacias', count: 124, icon: '🏪' },
                { cat: 'Hospitales', count: 12, icon: '🏥' },
                { cat: 'Consultorios', count: 45, icon: '🩺' },
                { cat: 'Clínicas', count: 8, icon: '🏢' },
                { cat: 'Exportaciones', count: 3, icon: '🌍' }
              ].map((c, i) => (
                <div
                  key={i}
                  className='flex justify-between items-center p-3 bg-slate-50 rounded-2xl hover:bg-indigo-50 transition-colors cursor-pointer'
                >
                  <div className='flex items-center gap-3 text-xs font-bold'>
                    <span>{c.icon}</span>
                    <span>{c.cat}</span>
                  </div>
                  <span className='text-[10px] font-black text-indigo-600'>
                    {c.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 14. Ventas y Distribución */}
          <div className='lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm'>
            <div className='flex justify-between items-center mb-6'>
              <h3 className='font-black text-slate-800 uppercase text-xs tracking-widest'>
                14. Ventas y Distribución
              </h3>
              <span className='text-[9px] font-black bg-rose-50 text-rose-600 px-2 py-1 rounded'>
                Registro Sanitario OK
              </span>
            </div>
            <table className='w-full text-left'>
              <thead className='text-[9px] font-black text-slate-400 uppercase'>
                <tr>
                  <th className='pb-4'>Orden</th>
                  <th className='pb-4'>Cliente</th>
                  <th className='pb-4'>Trazabilidad</th>
                  <th className='pb-4 text-right'>Factura</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-50'>
                {[
                  {
                    id: 'OV-440',
                    cli: 'Hospital San José',
                    track: 'En Tránsito',
                    fact: '$12,400'
                  },
                  {
                    id: 'OV-441',
                    cli: 'Farmacia Central',
                    track: 'Entregado',
                    fact: '$2,150'
                  }
                ].map((v, i) => (
                  <tr key={i} className='text-xs font-bold'>
                    <td className='py-4 text-indigo-600'>{v.id}</td>
                    <td className='py-4'>{v.cli}</td>
                    <td className='py-4'>{v.track}</td>
                    <td className='py-4 text-right'>{v.fact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 15. Track & Trace */}
        <div className='bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl'>
          <div className='relative z-10'>
            <div className='flex justify-between items-center mb-8'>
              <h3 className='font-black text-indigo-400 uppercase text-xs tracking-widest'>
                15. Trazabilidad Track & Trace
              </h3>
              <button className='bg-rose-600 text-white px-4 py-2 rounded-xl font-black text-[10px] uppercase'>
                Recall Manager
              </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {[
                { label: 'Serialización x Unidad', status: 'OK' },
                { label: 'Agregación (Pallet)', status: 'Vinculado' },
                { label: 'Sist. Nacional', status: 'Activo' }
              ].map((track, i) => (
                <div
                  key={i}
                  className='bg-white/5 border border-white/10 p-5 rounded-2xl flex justify-between'
                >
                  <p className='text-[10px] font-black uppercase'>
                    {track.label}
                  </p>
                  <span className='text-[8px] font-black text-indigo-400'>
                    {track.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  // --- NUEVO COMPONENTE: GESTIÓN DE FÓRMULAS MAESTRAS ---
  const ProduccionYCalidad = () => {
    // Estado para controlar si mostramos la lista de fórmulas o el menú de opciones del BOM
    const [showBOMOptions, setShowBOMOptions] = React.useState(false)

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
              onClick={() => setShowBOMOptions(false)}
              className={`px-4 py-3 rounded-2xl font-black text-[10px] uppercase transition-all ${
                !showBOMOptions
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'bg-slate-50 text-slate-400'
              }`}
            >
              Vista General
            </button>
            <button
              onClick={() => setTab('dashboard')}
              className='bg-slate-900 text-white px-6 py-3 rounded-2xl font-black text-[10px] uppercase shadow-lg'
            >
              Volver al Hub
            </button>
          </div>
        </div>

        {/* SECCIÓN 1 Y 2: BOM Y MES */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* 1. Gestión de Fórmulas Maestras (BOM) */}
          <div
            className={`bg-white p-8 rounded-[2.5rem] border transition-all duration-500 min-h-[350px] flex flex-col ${
              showBOMOptions
                ? 'border-indigo-500 shadow-indigo-100 shadow-2xl'
                : 'border-slate-100 shadow-sm'
            }`}
          >
            <div className='flex justify-between items-center border-b border-slate-50 pb-4 mb-6'>
              <h4 className='font-black text-slate-800 text-[10px] uppercase tracking-widest'>
                1. Master Formula / BOM
              </h4>
              {!showBOMOptions ? (
                <button
                  onClick={() => setShowBOMOptions(true)}
                  className='text-[9px] font-black bg-indigo-600 text-white px-3 py-1 rounded-lg hover:bg-indigo-700 transition-all'
                >
                  CONFIGURAR BOM
                </button>
              ) : (
                <button
                  onClick={() => setShowBOMOptions(false)}
                  className='text-[9px] font-black text-slate-400 hover:text-rose-500'
                >
                  CERRAR ✕
                </button>
              )}
            </div>

            {!showBOMOptions ? (
              <div className='space-y-4 animate-in fade-in slide-in-from-bottom-2'>
                {[
                  { n: 'Jarabe Forte', v: 'v3.1', d: '± 0.5%' },
                  { n: 'Cápsulas Magnesio', v: 'v1.0', d: '± 1.0%' }
                ].map((f, i) => (
                  <div
                    key={i}
                    className='p-4 bg-slate-50 rounded-2xl flex justify-between items-center border border-transparent hover:border-indigo-100 transition-all cursor-pointer'
                    onClick={() => setShowBOMOptions(true)}
                  >
                    <div>
                      <p className='text-xs font-black text-slate-800'>{f.n}</p>
                      <p className='text-[9px] text-slate-400 font-bold uppercase'>
                        Versión {f.v}
                      </p>
                    </div>
                    <div className='text-indigo-600 text-xs font-black'>
                      {f.d}
                    </div>
                  </div>
                ))}
                <p className='text-[8px] text-center text-slate-400 font-bold italic mt-2'>
                  Click para desplegar opciones de control
                </p>
              </div>
            ) : (
              <div className='space-y-3 animate-in zoom-in-95 duration-300'>
                {[
                  {
                    title: 'Fórmulas estándar y desviaciones permitidas',
                    icon: '📏',
                    color: 'bg-blue-50 text-blue-600'
                  },
                  {
                    title: 'Control de versiones de fórmulas',
                    icon: '📑',
                    color: 'bg-indigo-50 text-indigo-600'
                  },
                  {
                    title: 'Escalamiento de lotes (piloto a producción)',
                    icon: '📈',
                    color: 'bg-emerald-50 text-emerald-600'
                  },
                  {
                    title: 'Cálculo automático de materiales',
                    icon: '🧮',
                    color: 'bg-amber-50 text-amber-600'
                  }
                ].map((opcion, i) => (
                  <button
                    key={i}
                    className='w-full flex items-center gap-4 p-4 rounded-2xl border border-slate-50 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all group text-left'
                  >
                    <div
                      className={`w-10 h-10 ${opcion.color} rounded-xl flex items-center justify-center text-lg`}
                    >
                      {opcion.icon}
                    </div>
                    <div className='flex-1'>
                      <p className='text-[10px] font-black text-slate-800 uppercase leading-tight'>
                        {opcion.title}
                      </p>
                      <p className='text-[8px] text-slate-400 font-bold uppercase mt-0.5 group-hover:text-indigo-500'>
                        Ejecutar Módulo →
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 2. MES - Planificación y Control */}
          <div
            onClick={() => setTab('control_prod')}
            className='bg-slate-900 p-8 rounded-[2.5rem] text-white space-y-6 cursor-pointer hover:ring-4 ring-indigo-500/20 transition-all group min-h-[350px]'
          >
            <div className='flex justify-between items-center'>
              <h4 className='font-black text-indigo-400 text-[10px] uppercase tracking-widest'>
                2. MES - Control de Producción
              </h4>
              <span className='text-lg'>⚙️</span>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='bg-white/5 p-4 rounded-2xl border border-white/10'>
                <p className='text-[8px] font-black text-slate-400 uppercase'>
                  OEE Línea A
                </p>
                <p className='text-xl font-black text-emerald-400'>92.4%</p>
              </div>
              <div className='bg-white/5 p-4 rounded-2xl border border-white/10'>
                <p className='text-[8px] font-black text-slate-400 uppercase'>
                  Estado
                </p>
                <p className='text-xl font-black text-white'>En Línea</p>
              </div>
            </div>
            <div className='p-6 bg-white/5 rounded-3xl border border-white/5 space-y-4'>
              <p className='text-[10px] font-bold text-indigo-300 uppercase'>
                Cola de Producción
              </p>
              <div className='flex justify-between items-center text-[10px] border-b border-white/10 pb-2'>
                <span>Lote #9921 - Ibuprofeno</span>
                <span className='text-emerald-400 font-black'>65%</span>
              </div>
            </div>
            <p className='text-[9px] text-center font-black text-indigo-400 uppercase tracking-widest group-hover:translate-x-1 transition-transform'>
              Ver Panel Operativo MES →
            </p>
          </div>
        </div>

        {/* SECCIÓN 3, 4 Y 5: EBR, QC Y QA (RESTAURADOS) */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* 3. EBR - Registro Electrónico */}
          <div
            onClick={() => setTab('ebr')}
            className='bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm cursor-pointer hover:shadow-md transition-all group'
          >
            <div className='flex justify-between items-center mb-6'>
              <h4 className='font-black text-slate-800 text-[10px] uppercase tracking-widest'>
                3. EBR (Electronic Batch Record)
              </h4>
              <span className='text-lg group-hover:scale-125 transition-transform'>
                📋
              </span>
            </div>
            <div className='space-y-4 font-mono text-[9px]'>
              <div className='p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-800'>
                <p className='font-black italic'>LOTE #L-9921 INICIADO</p>
                <p className='text-[7px]'>Firma: USR_PROD_10-JAN</p>
              </div>
              <div className='p-3 bg-slate-50 border border-slate-100 rounded-xl text-slate-500'>
                <p className='font-black uppercase'>Checklist Pesaje OK</p>
              </div>
            </div>
          </div>

          {/* 4. QC - Control de Calidad */}
          <div
            onClick={() => setTab('qc')}
            className='bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm cursor-pointer hover:shadow-md transition-all group'
          >
            <div className='flex justify-between items-center mb-6'>
              <h4 className='font-black text-slate-800 text-[10px] uppercase tracking-widest'>
                4. Control de Calidad (QC)
              </h4>
              <span className='text-lg group-hover:rotate-12 transition-transform'>
                🔬
              </span>
            </div>
            <div className='space-y-3'>
              {['HPLC: Identidad', 'Disolución Lote #22', 'Microbiología'].map(
                (test, i) => (
                  <div
                    key={i}
                    className='flex justify-between items-center p-2 border-b border-slate-50'
                  >
                    <span className='text-[10px] font-bold text-slate-600'>
                      {test}
                    </span>
                    <span className='w-2 h-2 bg-emerald-500 rounded-full'></span>
                  </div>
                )
              )}
              <p className='text-[8px] text-center font-black text-indigo-600 mt-4 uppercase'>
                Gestión de LIMS →
              </p>
            </div>
          </div>

          {/* 5. QA - Aseguramiento de Calidad */}
          <div
            onClick={() => setTab('qa')}
            className='bg-indigo-50 p-6 rounded-[2.5rem] border border-indigo-100 shadow-sm cursor-pointer hover:bg-indigo-100 transition-all group'
          >
            <div className='flex justify-between items-center mb-6'>
              <h4 className='font-black text-indigo-900 text-[10px] uppercase tracking-widest'>
                5. Aseguramiento (QA)
              </h4>
              <span className='text-lg group-hover:scale-110 transition-transform'>
                🛡️
              </span>
            </div>
            <div className='bg-white p-4 rounded-2xl shadow-sm mb-4 border border-indigo-100/50'>
              <p className='text-[8px] font-black text-indigo-600 uppercase mb-2'>
                Liberación de Lote
              </p>
              <div className='w-full bg-slate-100 h-1.5 rounded-full overflow-hidden'>
                <div className='bg-indigo-600 h-full w-[75%]'></div>
              </div>
              <p className='text-[7px] text-slate-400 font-black mt-2 uppercase'>
                ALCOA+ Status: Verified
              </p>
            </div>
            <div className='flex justify-between text-[7px] font-black uppercase text-indigo-600 bg-white/50 p-2 rounded-lg'>
              <span>CAPAs: 12</span>
              <span>Desviaciones: 0</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  // --- NUEVO COMPONENTE: MES (Manufacturing Execution System) ---
  const ControlProduccion = () => (
    <div className='animate-in fade-in zoom-in duration-500 space-y-6'>
      {/* Indicadores de Rendimiento OEE */}
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        {[
          {
            label: 'Disponibilidad',
            val: '92.4%',
            color: 'text-indigo-600',
            trend: 'OK'
          },
          {
            label: 'Rendimiento',
            val: '88.1%',
            color: 'text-emerald-600',
            trend: '▲ 2%'
          },
          {
            label: 'OEE Global',
            val: '84.5%',
            color: 'text-slate-900',
            trend: 'OBJ: 85%'
          }
        ].map((stat, i) => (
          <div
            key={i}
            className='bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm'
          >
            <p className='text-slate-400 text-[10px] font-black uppercase tracking-widest'>
              {stat.label}
            </p>
            <div className='flex justify-between items-end mt-2'>
              <p className={`text-3xl font-black ${stat.color}`}>{stat.val}</p>
              <span className='text-[10px] font-bold bg-slate-50 px-2 py-1 rounded-lg text-slate-500 uppercase'>
                {stat.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* Órdenes de Fabricación en Tiempo Real */}
        <div className='lg:col-span-2 space-y-4'>
          <h3 className='font-black text-slate-800 uppercase text-xs tracking-widest ml-4'>
            Líneas de Producción Activas
          </h3>
          {[
            {
              id: 'OF-2026-001',
              prod: 'Ibuprofeno 400mg',
              linea: 'Línea A (Tableteado)',
              progreso: 65,
              estado: 'Produciendo'
            },
            {
              id: 'OF-2026-004',
              prod: 'Amoxicilina Susp.',
              linea: 'Línea C (Líquidos)',
              progreso: 20,
              estado: 'Ajuste de Equipo'
            },
            {
              id: 'OF-2026-009',
              prod: 'Vitamina C Kids',
              linea: 'Línea B (Blister)',
              progreso: 100,
              estado: 'Finalizado'
            }
          ].map((of, i) => (
            <div
              key={i}
              className='bg-white p-6 rounded-[2rem] border border-slate-100 relative overflow-hidden'
            >
              <div className='flex justify-between items-start mb-4'>
                <div>
                  <span className='text-[9px] font-black bg-indigo-50 text-indigo-600 px-2 py-1 rounded-md mb-2 inline-block'>
                    {of.id}
                  </span>
                  <h4 className='font-black text-slate-800 text-sm'>
                    {of.prod}
                  </h4>
                  <p className='text-slate-400 text-[10px] font-bold uppercase'>
                    {of.linea}
                  </p>
                </div>
                <span
                  className={`text-[10px] font-black uppercase ${
                    of.estado === 'Produciendo'
                      ? 'text-emerald-500 animate-pulse'
                      : 'text-slate-400'
                  }`}
                >
                  ● {of.estado}
                </span>
              </div>
              <div className='space-y-2'>
                <div className='flex justify-between text-[10px] font-black text-slate-400 uppercase italic'>
                  <span>Progreso de Lote</span>
                  <span>{of.progreso}%</span>
                </div>
                <div className='w-full bg-slate-100 h-3 rounded-full overflow-hidden'>
                  <div
                    className={`h-full transition-all duration-1000 ${
                      of.progreso === 100 ? 'bg-emerald-500' : 'bg-indigo-600'
                    }`}
                    style={{ width: `${of.progreso}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Secuenciación y Prioridades */}
        <div className='bg-white p-8 rounded-[2.5rem] border border-slate-100'>
          <h3 className='font-black text-slate-800 uppercase text-xs tracking-widest mb-6'>
            Prioridades de Secuenciación
          </h3>
          <div className='space-y-6'>
            {[
              {
                color: 'bg-rose-500',
                label: 'Urgente',
                msg: 'Demanda disparada por IA'
              },
              {
                color: 'bg-indigo-500',
                label: 'Programado',
                msg: 'Stock de seguridad bajo'
              },
              {
                color: 'bg-slate-300',
                label: 'Mantenimiento',
                msg: 'Línea C - 14:00 PM'
              }
            ].map((prio, i) => (
              <div key={i} className='flex gap-4 items-start'>
                <div className={`w-1 h-10 rounded-full ${prio.color}`}></div>
                <div>
                  <p className='font-black text-xs uppercase tracking-tighter'>
                    {prio.label}
                  </p>
                  <p className='text-[10px] text-slate-400 font-medium'>
                    {prio.msg}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button className='w-full mt-10 border-2 border-dashed border-slate-200 py-4 rounded-2xl text-[10px] font-black text-slate-400 hover:border-indigo-300 hover:text-indigo-400 transition-all'>
            RE-SECUENCIAR PLANTA
          </button>
        </div>
      </div>
    </div>
  )

  // --- NUEVO COMPONENTE: EBR (Electronic Batch Record) ---
  const EBR = () => (
    <div className='animate-in fade-in zoom-in duration-500 space-y-6'>
      {/* Header de Cumplimiento Regulatorio */}
      <div className='bg-indigo-900 text-white p-6 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-4 shadow-xl'>
        <div className='flex items-center gap-4'>
          <div className='w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl'>
            🔐
          </div>
          <div>
            <h3 className='font-black uppercase text-sm tracking-widest'>
              Registro de Lote Electrónico
            </h3>
            <p className='text-indigo-300 text-[10px] font-bold uppercase tracking-tighter'>
              Cumplimiento Estricto: FDA 21 CFR Part 11 & GMP
            </p>
          </div>
        </div>
        <div className='flex gap-2'>
          <span className='bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-lg text-[9px] font-black border border-emerald-500/30'>
            FIRMA DIGITAL ACTIVA
          </span>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* Ejecución del Lote (Paso a Paso) */}
        <div className='lg:col-span-2 space-y-4'>
          <div className='bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm'>
            <div className='flex justify-between items-center mb-8'>
              <h4 className='font-black text-slate-800 text-xs uppercase tracking-widest'>
                Proceso Actual: Mezclado Fase A
              </h4>
              <span className='text-indigo-600 font-black text-xs italic'>
                Lote: #2026-X99
              </span>
            </div>

            <div className='space-y-8'>
              {[
                {
                  paso: '1. Verificación de limpieza de área',
                  status: 'Completado',
                  user: 'OP-44',
                  time: '08:15 AM'
                },
                {
                  paso: '2. Carga de materia prima (P. Activo)',
                  status: 'En Proceso',
                  user: 'OP-44',
                  time: '09:30 AM'
                },
                {
                  paso: '3. Control de RPM (Mezclador)',
                  status: 'Pendiente',
                  user: '--',
                  time: '--'
                }
              ].map((step, i) => (
                <div
                  key={i}
                  className={`flex gap-4 items-start pb-6 ${
                    i < 2
                      ? 'border-l-2 border-indigo-100 ml-3 pl-6'
                      : 'ml-3 pl-6'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full -ml-[38px] flex items-center justify-center text-[10px] font-black shadow-sm ${
                      step.status === 'Completado'
                        ? 'bg-emerald-500 text-white'
                        : step.status === 'En Proceso'
                        ? 'bg-indigo-600 text-white animate-pulse'
                        : 'bg-slate-100 text-slate-400'
                    }`}
                  >
                    {step.status === 'Completado' ? '✓' : i + 1}
                  </div>
                  <div className='flex-1'>
                    <div className='flex justify-between'>
                      <p
                        className={`font-black text-sm ${
                          step.status === 'Pendiente'
                            ? 'text-slate-300'
                            : 'text-slate-800'
                        }`}
                      >
                        {step.paso}
                      </p>
                      <span className='text-[10px] font-mono text-slate-400'>
                        {step.time}
                      </span>
                    </div>
                    {step.status === 'En Proceso' && (
                      <div className='mt-4 p-4 bg-slate-50 rounded-2xl space-y-3 border border-slate-100'>
                        <label className='text-[9px] font-black text-slate-400 uppercase'>
                          Parámetro Crítico: Peso exacto (kg)
                        </label>
                        <div className='flex gap-2'>
                          <input
                            type='text'
                            placeholder='Ingrese valor...'
                            className='flex-1 p-2 rounded-lg border border-slate-200 text-xs font-bold'
                          />
                          <button className='bg-slate-900 text-white px-4 rounded-lg text-[9px] font-black uppercase'>
                            Registrar
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Panel Lateral: Conciliación y Firmas */}
        <div className='space-y-6'>
          {/* Conciliación de Materiales */}
          <div className='bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm'>
            <h4 className='font-black text-slate-800 text-[10px] uppercase tracking-widest mb-4'>
              Conciliación Teórica
            </h4>
            <div className='space-y-3'>
              <div className='flex justify-between text-xs font-bold'>
                <span>Entrada</span>
                <span>100.0 Kg</span>
              </div>
              <div className='flex justify-between text-xs font-bold'>
                <span>Salida Actual</span>
                <span>99.8 Kg</span>
              </div>
              <div className='pt-2 border-t border-slate-50 flex justify-between text-emerald-600 font-black text-sm'>
                <span>Rendimiento</span>
                <span>99.8%</span>
              </div>
            </div>
          </div>

          {/* Desviaciones */}
          <div className='bg-rose-50 p-6 rounded-[2.5rem] border border-rose-100 shadow-sm'>
            <h4 className='font-black text-rose-900 text-[10px] uppercase tracking-widest mb-2'>
              Acciones Correctivas (CAPA)
            </h4>
            <p className='text-[10px] text-rose-700 font-medium mb-4'>
              0 desviaciones detectadas en este lote.
            </p>
            <button className='w-full border border-rose-200 text-rose-600 py-2 rounded-xl text-[9px] font-black uppercase hover:bg-rose-100'>
              Reportar Incidencia
            </button>
          </div>

          {/* Firma Multinivel */}
          <div className='bg-slate-50 p-6 rounded-[2.5rem] border border-slate-100'>
            <h4 className='font-black text-slate-400 text-[10px] uppercase tracking-widest mb-4 text-center'>
              Firma Electrónica Requerida
            </h4>
            <button className='w-full bg-white border border-slate-200 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-sm hover:border-indigo-500 hover:text-indigo-600 transition-all'>
              🖋️ FIRMAR PASO ACTUAL
            </button>
          </div>
        </div>
      </div>
    </div>
  )
  // --- NUEVO COMPONENTE: CONTROL DE CALIDAD (QC) ---
  const ControlCalidad = () => (
    <div className='animate-in fade-in zoom-in duration-500 space-y-6'>
      {/* Resumen de Muestras y Estabilidad */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm'>
          <p className='text-slate-400 text-[10px] font-black uppercase tracking-widest'>
            Muestras en Análisis
          </p>
          <div className='flex justify-between items-end mt-2'>
            <p className='text-3xl font-black text-indigo-600'>14</p>
            <span className='text-[9px] font-black bg-indigo-50 text-indigo-600 px-2 py-1 rounded-md'>
              PRIORIDAD ALTA
            </span>
          </div>
        </div>
        <div className='bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm'>
          <p className='text-slate-400 text-[10px] font-black uppercase tracking-widest'>
            Estudios de Estabilidad
          </p>
          <div className='flex justify-between items-end mt-2'>
            <p className='text-3xl font-black text-slate-800'>08</p>
            <span className='text-[9px] font-black bg-slate-50 text-slate-400 px-2 py-1 rounded-md'>
              EN CURSO
            </span>
          </div>
        </div>
        <div className='bg-emerald-600 p-6 rounded-[2.5rem] text-white shadow-lg shadow-emerald-100'>
          <p className='text-emerald-100 text-[10px] font-black uppercase tracking-widest'>
            Certificados (COA)
          </p>
          <div className='flex justify-between items-end mt-2'>
            <p className='text-3xl font-black'>124</p>
            <span className='text-[9px] font-black bg-white/20 px-2 py-1 rounded-md italic'>
              MES ACTUAL
            </span>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* Laboratorio: Registro de Resultados */}
        <div className='lg:col-span-2 space-y-6'>
          <div className='bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm'>
            <div className='flex justify-between items-center mb-6'>
              <h3 className='font-black text-slate-800 uppercase text-xs tracking-widest'>
                Registro de Análisis de Laboratorio
              </h3>
              <div className='flex gap-2 text-[9px] font-black uppercase'>
                <span className='text-slate-400'>Muestra: #M-8821</span>
              </div>
            </div>

            <table className='w-full mb-6'>
              <thead className='bg-slate-50 text-[10px] font-black text-slate-400 uppercase'>
                <tr>
                  <th className='text-left p-3'>Parámetro</th>
                  <th className='text-left p-3'>Especificación</th>
                  <th className='text-left p-3'>Resultado</th>
                  <th className='text-center p-3'>Estado</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-50 font-bold text-xs'>
                {[
                  {
                    p: 'Valoración (HPLC)',
                    s: '98.0 - 102.0%',
                    r: '100.2%',
                    st: 'PASSED'
                  },
                  {
                    p: 'Disolución',
                    s: 'Q > 75% en 45min',
                    r: '82.5%',
                    st: 'PASSED'
                  },
                  { p: 'Humedad (KF)', s: '< 1.5%', r: '1.2%', st: 'PASSED' }
                ].map((row, i) => (
                  <tr key={i} className='text-slate-700'>
                    <td className='p-3'>{row.p}</td>
                    <td className='p-3 text-slate-400 font-mono'>{row.s}</td>
                    <td className='p-3 font-black text-indigo-600'>{row.r}</td>
                    <td className='p-3 text-center'>
                      <span className='bg-emerald-50 text-emerald-600 px-2 py-1 rounded-lg text-[9px] font-black'>
                        ✓ {row.st}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className='flex gap-4'>
              <button className='flex-1 border-2 border-slate-100 py-3 rounded-2xl text-[10px] font-black uppercase text-slate-500 hover:bg-slate-50 transition-all'>
                Generar Certificado (COA)
              </button>
              <button className='flex-1 bg-slate-900 text-white py-3 rounded-2xl text-[10px] font-black uppercase hover:bg-indigo-600 transition-all shadow-xl'>
                Aprobar Lote
              </button>
            </div>
          </div>
        </div>

        {/* Muestras de Retención y Estabilidad */}
        <div className='space-y-6'>
          <div className='bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm'>
            <h4 className='font-black text-slate-800 text-[10px] uppercase tracking-widest mb-6'>
              Gestión de Retención
            </h4>
            <div className='space-y-4'>
              {[
                {
                  lote: 'L-9092',
                  ubicacion: 'Nevera 02',
                  dias: 'Retener 5 años'
                },
                {
                  lote: 'L-8821',
                  ubicacion: 'Bodega Seca',
                  dias: 'Retener 3 años'
                }
              ].map((m, i) => (
                <div
                  key={i}
                  className='p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-3'
                >
                  <span className='text-xl'>🧪</span>
                  <div>
                    <p className='font-black text-xs'>{m.lote}</p>
                    <p className='text-[9px] font-bold text-slate-400 uppercase'>
                      {m.ubicacion} • {m.dias}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='bg-slate-900 p-8 rounded-[2.5rem] text-white overflow-hidden relative'>
            <h4 className='font-black text-indigo-400 text-[10px] uppercase tracking-widest mb-4'>
              Próximas Estabilidades
            </h4>
            <div className='space-y-3 relative z-10'>
              <div className='flex justify-between items-center text-xs'>
                <span className='font-bold'>Ibuprofeno 400 (T6)</span>
                <span className='text-amber-400 font-black'>Ayer</span>
              </div>
              <div className='flex justify-between items-center text-xs'>
                <span className='font-bold'>Vitamina C (T12)</span>
                <span className='text-slate-400 font-bold italic'>
                  En 12 días
                </span>
              </div>
            </div>
            <span className='absolute -right-4 -bottom-4 text-7xl opacity-10'>
              📊
            </span>
          </div>
        </div>
      </div>
    </div>
  )
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
  // --- COMPONENTE: PROTOCOLOS DE VALIDACIÓN FDA (Punto 12 + Consideraciones Críticas) ---
  const SeccionValidacion = () => (
    <div className='animate-in fade-in zoom-in duration-500 space-y-8'>
      {/* Encabezado de Protocolo */}
      <div className='bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden'>
        <div className='relative z-10'>
          <h2 className='font-black text-indigo-400 text-xs tracking-[0.3em] uppercase mb-2'>
            Protocolo de Calificación
          </h2>
          <h3 className='text-3xl font-black italic mb-4'>
            SISTEMA PHARMA-OS v1.0
          </h3>
          <div className='flex flex-wrap gap-4 text-[10px] font-black uppercase'>
            <span className='bg-white/10 px-3 py-1 rounded-full border border-white/20'>
              FDA 21 CFR Part 11
            </span>
            <span className='bg-white/10 px-3 py-1 rounded-full border border-white/20'>
              GAMP 5 Cat. 4
            </span>
            <span className='bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/30'>
              Status: Validado
            </span>
          </div>
        </div>
        <div className='absolute right-[-20px] top-[-20px] text-[150px] font-black opacity-5 italic select-none'>
          GMP
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* FASE 1: IQ - Calificación de Instalación */}
        <div className='bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col'>
          <div className='p-6 bg-slate-50 border-b border-slate-100'>
            <p className='text-[10px] font-black text-indigo-600 uppercase tracking-widest'>
              Fase 1
            </p>
            <h4 className='font-black text-slate-800 text-lg'>
              IQ: Instalación
            </h4>
          </div>
          <div className='p-6 space-y-4 flex-1'>
            <div className='space-y-2'>
              <p className='text-[10px] font-black text-slate-400 uppercase'>
                Verificación de Documentación (IQ-001)
              </p>
              {[
                { doc: 'Manual de Instalación', status: '✓' },
                { doc: 'Certificados SSL/TLS', status: '✓' },
                { doc: 'Matriz URS-FS', status: '✓' }
              ].map((d, i) => (
                <div
                  key={i}
                  className='flex justify-between p-3 bg-slate-50 rounded-xl text-[11px] font-bold'
                >
                  <span>{d.doc}</span>
                  <span className='text-emerald-600'>{d.status}</span>
                </div>
              ))}
            </div>
          </div>
          <button className='m-6 mt-0 py-3 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest'>
            Ver Reporte IQ Completo
          </button>
        </div>

        {/* FASE 2: OQ - Calificación Operacional */}
        <div className='bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col'>
          <div className='p-6 bg-slate-50 border-b border-slate-100'>
            <p className='text-[10px] font-black text-indigo-600 uppercase tracking-widest'>
              Fase 2
            </p>
            <h4 className='font-black text-slate-800 text-lg'>
              OQ: Operacional
            </h4>
          </div>
          <div className='p-6 space-y-4 flex-1'>
            <p className='text-[10px] font-black text-slate-400 uppercase'>
              Casos de Prueba (OQ-001)
            </p>
            <div className='p-4 border-2 border-dashed border-slate-100 rounded-2xl space-y-3'>
              <div className='flex justify-between items-center'>
                <span className='text-[10px] font-black'>Audit Trail Test</span>
                <span className='bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-[8px] font-black'>
                  PASA
                </span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-[10px] font-black'>Password Policy</span>
                <span className='bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-[8px] font-black'>
                  PASA
                </span>
              </div>
            </div>
          </div>
          <button className='m-6 mt-0 py-3 bg-slate-100 text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-slate-200'>
            Ejecutar Stress Test
          </button>
        </div>

        {/* FASE 3: PQ - Calificación de Desempeño */}
        <div className='bg-indigo-600 rounded-[2.5rem] p-8 text-white shadow-xl flex flex-col'>
          <p className='text-[10px] font-black text-indigo-200 uppercase tracking-widest'>
            Fase 3
          </p>
          <h4 className='font-black text-white text-lg mb-6'>PQ: Desempeño</h4>
          <div className='flex-1 space-y-4'>
            <div className='bg-white/10 p-4 rounded-2xl'>
              <p className='text-[9px] font-black uppercase opacity-60'>
                Escenario End-to-End
              </p>
              <p className='text-[11px] font-bold mt-1'>
                Producción Lote Ibuprofeno 400mg
              </p>
              <div className='w-full bg-white/20 h-1.5 mt-3 rounded-full overflow-hidden'>
                <div
                  className='bg-white h-full'
                  style={{ width: '100%' }}
                ></div>
              </div>
            </div>
            <p className='text-[9px] italic opacity-80'>
              * Verificación de trazabilidad completa hacia atrás y adelante
              verificada.
            </p>
          </div>
          <button className='mt-6 py-4 bg-white text-indigo-600 rounded-2xl text-[10px] font-black uppercase tracking-widest'>
            Descargar COA & EBR
          </button>
        </div>
      </div>
    </div>
  )

  const SeccionValidacionFDA = () => (
    <div className='animate-in fade-in zoom-in duration-500 space-y-8 pb-20'>
      {/* Encabezado Protocolo Oficial */}
      <div className='bg-white border-4 border-slate-900 p-8 rounded-sm shadow-xl max-w-5xl mx-auto'>
        <div className='flex justify-between items-start border-b-4 border-slate-900 pb-6 mb-6'>
          <div className='space-y-1'>
            <h2 className='text-2xl font-black uppercase tracking-tighter'>
              Protocolo de Calificación de Instalación (IQ)
            </h2>
            <p className='text-xs font-bold text-slate-500'>
              Sistema: PHARMA-OS ERP | Versión: 1.0.4 | Código: VAL-IQ-2026-001
            </p>
          </div>
          <div className='text-right'>
            <span className='bg-slate-900 text-white px-4 py-2 text-xs font-black'>
              CONFIDENCIAL - GMP
            </span>
          </div>
        </div>

        {/* 1. INFORMACIÓN GENERAL (TABLA TIPO FORMULARIO) */}
        <div className='grid grid-cols-2 gap-0 border border-slate-300 mb-8'>
          <div className='p-3 border-b border-r border-slate-300 bg-slate-50 text-[10px] font-black uppercase'>
            Propósito del Sistema
          </div>
          <div className='p-3 border-b border-slate-300 text-[10px] font-bold'>
            Gestión Integral de Calidad y Producción Farmacéutica
          </div>
          <div className='p-3 border-r border-slate-300 bg-slate-50 text-[10px] font-black uppercase'>
            Referencia Normativa
          </div>
          <div className='p-3 text-[10px] font-bold italic text-indigo-600 underline'>
            21 CFR Part 11, GAMP 5, Anexo 11 EU GMP
          </div>
        </div>

        {/* FORMULARIO IQ-001: VERIFICACIÓN DE DOCUMENTACIÓN */}
        <div className='space-y-4'>
          <div className='bg-slate-100 p-2 border border-slate-300 flex justify-between items-center'>
            <h4 className='text-[11px] font-black uppercase'>
              Formulario IQ-001: Verificación de Documentación
            </h4>
            <span className='text-[9px] font-bold italic text-slate-500 font-mono'>
              REF: §11.10(a)
            </span>
          </div>

          <table className='w-full border-collapse border border-slate-300 text-[10px]'>
            <thead className='bg-slate-50'>
              <tr className='font-black uppercase'>
                <th className='border border-slate-300 p-2 text-left w-10'>
                  N°
                </th>
                <th className='border border-slate-300 p-2 text-left'>
                  Documento
                </th>
                <th className='border border-slate-300 p-2 text-center w-24'>
                  Disponible
                </th>
                <th className='border border-slate-300 p-2 text-center w-20'>
                  Versión
                </th>
                <th className='border border-slate-300 p-2 text-center w-24'>
                  Conforme
                </th>
              </tr>
            </thead>
            <tbody className='font-bold'>
              {[
                { id: '01', doc: 'Manual de Instalación y Configuración' },
                {
                  id: '02',
                  doc: 'Licencias de Software y Certificados de Propiedad'
                },
                { id: '03', doc: 'Certificados SSL/TLS (Cifrado de Datos)' },
                { id: '04', doc: 'Matriz de Trazabilidad URS vs FS' },
                {
                  id: '05',
                  doc: 'Procedimientos Operativos (SOPs) del Sistema'
                }
              ].map((row, i) => (
                <tr key={i} className='hover:bg-indigo-50/30 transition-colors'>
                  <td className='border border-slate-300 p-2 text-center'>
                    {row.id}
                  </td>
                  <td className='border border-slate-300 p-2'>{row.doc}</td>
                  <td className='border border-slate-300 p-2 text-center'>
                    <input
                      type='checkbox'
                      defaultChecked
                      className='accent-indigo-600'
                    />
                  </td>
                  <td className='border border-slate-300 p-2 text-center font-mono'>
                    v1.0
                  </td>
                  <td className='border border-slate-300 p-2 text-center'>
                    <span className='text-emerald-600'>SÍ</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ÁREA DE FIRMAS DIGITALES (ESTILO DOCUMENTO) */}
        <div className='mt-12 grid grid-cols-2 gap-8'>
          <div className='border-t-2 border-slate-900 pt-4 text-center'>
            <p className='text-[10px] font-black uppercase'>
              Ejecutado por (SME)
            </p>
            <div className='h-8 flex justify-center items-center py-2'>
              <span className='font-serif italic text-indigo-600 text-lg'>
                Digital Signature: USR_QA_99
              </span>
            </div>
            <p className='text-[9px] text-slate-400 font-mono'>
              Fecha: 10-ENE-2026 14:30 UTC
            </p>
          </div>
          <div className='border-t-2 border-slate-900 pt-4 text-center'>
            <p className='text-[10px] font-black uppercase'>
              Revisado por (QA Manager)
            </p>
            <div className='h-8 bg-slate-50 border border-dashed border-slate-200 mt-2 flex items-center justify-center'>
              <button className='text-[8px] font-black text-slate-400 hover:text-indigo-600 uppercase tracking-widest'>
                Firmar con Certificado
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SEGUNDO FORMULARIO: IQ-002 (INFRAESTRUCTURA) */}
      <div className='bg-white border-4 border-slate-900 p-8 rounded-sm shadow-xl max-w-5xl mx-auto animate-in slide-in-from-bottom duration-1000'>
        <div className='bg-slate-900 text-white p-2 mb-6 flex justify-between items-center'>
          <h4 className='text-[11px] font-black uppercase'>
            Formulario IQ-002: Verificación de Infraestructura
          </h4>
        </div>

        <div className='space-y-6 text-[10px]'>
          <p className='font-black uppercase text-indigo-600'>
            A. Hardware y Software Base
          </p>
          <table className='w-full border border-slate-300'>
            <tr className='bg-slate-50 font-black uppercase border border-slate-300'>
              <th className='p-2 text-left border'>Componente</th>
              <th className='p-2 text-left border'>Especificado</th>
              <th className='p-2 text-left border'>Instalado</th>
              <th className='p-2 text-center border'>✓/✗</th>
            </tr>
            <tr className='border'>
              <td className='p-2 border font-bold'>Base de Datos</td>
              <td className='p-2 border'>PostgreSQL 15+</td>
              <td className='p-2 border italic text-slate-500 text-[9px]'>
                PostgreSQL 15.4 (Azure Cloud)
              </td>
              <td className='p-2 border text-center text-emerald-600 font-black'>
                ✓
              </td>
            </tr>
            <tr className='border'>
              <td className='p-2 border font-bold'>Certificado SSL</td>
              <td className='p-2 border'>TLS 1.2 o superior</td>
              <td className='p-2 border italic text-slate-500 text-[9px]'>
                DigiCert Global CA G2 (AES-256)
              </td>
              <td className='p-2 border text-center text-emerald-600 font-black'>
                ✓
              </td>
            </tr>
          </table>
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
              { id: 'contabilidad', label: 'Logística' },
              { id: 'produccion', label: 'BOM' },
              { id: 'control_prod', label: 'MES' },
              { id: 'ebr', label: 'eBR' },
              { id: 'qc', label: 'QC' },
              { id: 'qa', label: 'QA' },
              { id: 'validacionFDA', label: 'FDA IQ/OQ' }
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
        {tab === 'dashboard' && <Dashboard />}
        {tab === 'contabilidad' && <ContabilidadYLogistica />}
        {tab === 'produccion' && <ProduccionYCalidad />}
        {tab === 'control_prod' && <ControlProduccion />}
        {tab === 'ebr' && <EBR />}
        {tab === 'qc' && <ControlCalidad />}
        {tab === 'qa' && <AseguramientoCalidad />}
        {tab === 'validacionFDA' && <SeccionValidacionFDA />}
      </main>

      {/* --- NAVBAR MÓVIL (BOTTOM NAV CON SCROLL) --- */}
      {/* Agregamos 'overflow-x-auto' para que el usuario pueda deslizar y ver todas las opciones */}
      <div className='md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.08)]'>
        <div className='flex overflow-x-auto no-scrollbar items-center py-3 px-4 gap-6 focus:outline-none'>
          {[
            { id: 'dashboard', icon: '📊', label: 'Home' },
            { id: 'contabilidad', icon: '📦', label: 'Stock' },
            { id: 'produccion', icon: '🧪', label: 'BOM' },
            { id: 'control_prod', icon: '⚙️', label: 'MES' },
            { id: 'ebr', icon: '📋', label: 'eBR' },
            { id: 'qc', icon: '🔬', label: 'QC' },
            { id: 'validacionFDA', icon: '⚖️', label: 'FDA' }
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
