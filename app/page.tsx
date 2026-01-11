'use client'
import React, { useState } from 'react'
import ProduccionYCalidad from './componentes/ProduccionYCalidad'
import Contabilidad from './componentes/Contabilidad'
import GestionRegulatoria from './componentes/Regulatorios'
import GestionSoporte from './componentes/Soporte'

export default function PharmaERP() {
  const [tab, setTab] = useState('dashboard')

  const Dashboard = () => (
    <div className='animate-in fade-in zoom-in duration-500 space-y-6 sm:space-y-8 pb-10'>
      {/* 18. Business Intelligence (KPIs Globales) - Grid optimizado: 2 col en móvil, 4 en PC */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4'>
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
            className='bg-white p-4 sm:p-5 rounded-[1.5rem] sm:rounded-[2rem] border border-slate-100 shadow-sm text-left hover:border-indigo-300 transition-all active:scale-95'
          >
            <p className='text-slate-400 text-[8px] sm:text-[9px] font-black uppercase tracking-tighter sm:tracking-widest'>
              {kpi.label}
            </p>
            <p className={`text-xl sm:text-2xl font-black mt-1 ${kpi.color}`}>
              {kpi.val}
            </p>
            <p className='text-[9px] sm:text-[10px] text-slate-400 font-bold leading-tight'>
              {kpi.desc}
            </p>
          </button>
        ))}
      </div>

      {/* SECCIÓN MÓDULOS CORE - Ajuste de gap para móvil */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8'>
        {/* 1. GESTIÓN DE FÓRMULAS MAESTRAS */}
        <div
          onClick={() => setTab('produccion')}
          className='bg-white p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border border-slate-100 shadow-sm cursor-pointer hover:border-indigo-400 transition-all group relative overflow-hidden'
        >
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
                Control de versiones, escalamiento y cálculo automático.
              </p>
            </div>
            <span className='text-2xl group-hover:rotate-12 transition-transform'>
              🧪
            </span>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 relative z-10'>
            <div className='space-y-3'>
              <div className='flex justify-between items-center bg-slate-50 p-3 rounded-xl'>
                <span className='text-[9px] font-black text-slate-500 uppercase'>
                  Versiones
                </span>
                <span className='text-xs font-black text-indigo-600'>142</span>
              </div>
              <div className='flex justify-between items-center bg-slate-50 p-3 rounded-xl'>
                <span className='text-[9px] font-black text-slate-500 uppercase'>
                  Escalamiento
                </span>
                <span className='text-xs font-black text-amber-600'>03</span>
              </div>
            </div>
            <ul className='space-y-2'>
              {[
                'Control de versiones de fórmulas',
                'Escalamiento de lotes',
                'Cálculo automático'
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
            <span className='text-[9px] font-black text-indigo-600 uppercase group-hover:translate-x-2 transition-transform inline-block'>
              Entrar →
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

        {/* CONTABILIDAD Y MATERIALES */}
        <div
          onClick={() => setTab('contabilidad')}
          className='bg-white p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border border-slate-100 shadow-sm cursor-pointer hover:border-orange-400 transition-all group overflow-hidden relative min-h-[220px] flex flex-col justify-between'
        >
          <div className='absolute right-0 top-0 p-8 opacity-10 group-hover:rotate-12 transition-transform'>
            <span className='text-6xl sm:text-7xl'>📦</span>
          </div>
          <div className='relative z-10'>
            <span className='bg-orange-600 text-white text-[8px] font-black px-2 py-0.5 rounded-full uppercase'>
              Módulo Core
            </span>
            <h4 className='font-black text-slate-800 text-xs uppercase tracking-widest mt-2'>
              CONTABILIDAD Y MATERIALES
            </h4>
            <p className='text-[10px] text-slate-400 font-bold mb-6'>
              Inventarios, WMS, Compras y Recepción.
            </p>
            <div className='flex gap-3 sm:gap-4'>
              <div className='flex-1 p-3 bg-slate-50 rounded-xl'>
                <p className='text-[7px] font-black text-slate-400 uppercase'>
                  Stock Total
                </p>
                <p className='text-xs font-black text-slate-800'>8,420 SKUs</p>
              </div>
              <div className='flex-1 p-3 bg-orange-50 rounded-xl'>
                <p className='text-[7px] font-black text-orange-400 uppercase'>
                  Por Recibir
                </p>
                <p className='text-xs font-black text-orange-600'>15 OC</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TARJETAS DE SEGUNDO NIVEL: 1 col en móvil, 2 en tablets, 2 en PC */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div
          onClick={() => setTab('regulatorio')}
          className='bg-slate-900 p-8 rounded-[2.5rem] shadow-sm cursor-pointer hover:ring-4 ring-blue-500/20 transition-all group'
        >
          <div className='flex flex-col h-full'>
            <div className='flex justify-between items-start mb-6'>
              <span className='bg-blue-600 text-white text-[8px] font-black px-2 py-0.5 rounded-full uppercase'>
                Auditable
              </span>
              <span className='text-2xl group-hover:scale-110 transition-transform'>
                🛡️
              </span>
            </div>
            <h4 className='font-black text-white text-xs uppercase tracking-widest mt-2'>
              REGULATORIOS Y VALIDACIÓN
            </h4>
            <p className='text-[9px] text-slate-400 font-bold mt-2'>
              Cumplimiento GxP, SOPs y Protocolos IQ/OQ/PQ.
            </p>
            <div className='mt-8 pt-6 border-t border-white/5 flex gap-2 overflow-hidden items-center'>
              <div className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse'></div>
              <span className='text-[7px] font-black text-slate-500 uppercase tracking-widest'>
                Data Integrity Verified
              </span>
            </div>
          </div>
        </div>

        <div
          onClick={() => setTab('soporte')}
          className='bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm cursor-pointer hover:border-emerald-400 transition-all group'
        >
          <div className='flex flex-col h-full'>
            <div className='flex justify-between items-start mb-4'>
              <span className='bg-emerald-100 text-emerald-700 text-[8px] font-black px-2 py-0.5 rounded-full uppercase'>
                Global Support
              </span>
              <span className='text-2xl group-hover:rotate-12 transition-transform'>
                ⚙️
              </span>
            </div>
            <h4 className='font-black text-slate-800 text-xs uppercase tracking-widest mt-2'>
              MÓDULOS DE SOPORTE
            </h4>
            <p className='text-[9px] text-slate-400 font-bold mt-2'>
              RRHH, Seguridad, BI y Admin.
            </p>
            <div className='mt-auto pt-8 grid grid-cols-2 gap-2'>
              <div className='h-1 bg-emerald-500 rounded-full'></div>
              <div className='h-1 bg-amber-400 rounded-full'></div>
            </div>
          </div>
        </div>
      </div>

      {/* BLOQUE DOCUMENTAL Y MANTENIMIENTO: 1 col móvil, 3 col web */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div
          onClick={() => setTab('qa')}
          className='bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm cursor-pointer hover:border-indigo-200 transition-all'
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
              { doc: 'SOP-PRO-01', st: 'Vigente', c: 'text-emerald-500' },
              { doc: 'SOP-LAB-05', st: 'Revisión', c: 'text-amber-500' }
            ].map((d, i) => (
              <div
                key={i}
                className='flex justify-between items-center border-b border-slate-50 pb-2'
              >
                <span className='text-[10px] font-bold text-slate-700'>
                  {d.doc}
                </span>
                <span className={`text-[8px] font-black uppercase ${d.c}`}>
                  {d.st}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          onClick={() => setTab('control_prod')}
          className='bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm cursor-pointer hover:border-indigo-200 transition-all'
        >
          <h4 className='font-black text-slate-800 text-[10px] uppercase tracking-widest mb-6'>
            11. Mantenimiento
          </h4>
          <div className='flex gap-3 items-center p-3 bg-slate-50 rounded-2xl'>
            <div className='text-lg'>⚖️</div>
            <div className='flex-1'>
              <p className='text-[10px] font-black leading-tight'>
                Balanza Analítica B-09
              </p>
              <p className='text-[8px] text-rose-500 font-bold uppercase'>
                Vence en 2 días
              </p>
            </div>
          </div>
        </div>

        <div
          onClick={() => setTab('validacionFDA')}
          className='bg-indigo-600 p-6 rounded-[2rem] text-white shadow-xl cursor-pointer hover:ring-4 ring-indigo-500/30 transition-all sm:col-span-2 lg:col-span-1'
        >
          <h4 className='font-black text-indigo-200 text-[10px] uppercase tracking-widest mb-6'>
            12. Validaciones
          </h4>
          <div className='space-y-4 relative z-10'>
            {[
              { label: 'Equipos IQ/OQ/PQ', prog: 90 },
              { label: 'Sistemas Comp.', prog: 100 }
            ].map((v, i) => (
              <div key={i} className='space-y-1.5'>
                <div className='flex justify-between text-[9px] font-black uppercase'>
                  <span>{v.label}</span>
                  <span>{v.prog}%</span>
                </div>
                <div className='w-full bg-white/10 h-1 rounded-full overflow-hidden'>
                  <div
                    className='bg-white h-full transition-all duration-1000'
                    style={{ width: `${v.prog}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECCIÓN FINAL DE SOPORTE: 1 col móvil, 3 col web */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
        <div className='space-y-4'>
          <div className='bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm'>
            <h4 className='font-black text-slate-800 text-[10px] uppercase tracking-widest mb-4'>
              16. RRHH y Entrenamiento
            </h4>
            <div className='p-3 bg-slate-50 rounded-xl flex justify-between items-center'>
              <span className='text-[10px] font-bold'>Certificación GMP</span>
              <span className='text-emerald-600 font-black text-xs'>98%</span>
            </div>
          </div>
          <div className='bg-rose-50 p-6 rounded-[2rem] border border-rose-100 shadow-sm'>
            <h4 className='font-black text-rose-900 text-[10px] uppercase tracking-widest mb-2'>
              17. EHS y Seguridad
            </h4>
            <div className='flex justify-between items-center text-[10px] font-black text-rose-700'>
              <span>Incidentes (45d)</span>
              <span>0</span>
            </div>
          </div>
        </div>

        <div
          onClick={() => setTab('validacionFDA')}
          className='bg-slate-900 p-8 rounded-[2rem] text-white cursor-pointer hover:ring-4 ring-slate-800 transition-all'
        >
          <h4 className='font-black text-indigo-400 text-[10px] uppercase tracking-widest mb-4'>
            19. Audit Trail
          </h4>
          <div className='p-4 bg-white/5 border border-white/10 rounded-2xl font-mono text-[8px] text-slate-400 space-y-2'>
            <p className='truncate'>[10:31] USR_ADMIN: Acceso Fórmulas</p>
            <p className='truncate'>[10:28] SYS: Backup Cloud OK</p>
          </div>
          <button className='w-full mt-4 py-3 bg-indigo-600 rounded-xl text-[9px] font-black uppercase hover:bg-indigo-500 transition-colors'>
            Gestionar Roles
          </button>
        </div>

        <div
          onClick={() => setTab('contabilidad')}
          className='bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm cursor-pointer hover:border-indigo-200 transition-all sm:col-span-2 lg:col-span-1'
        >
          <h4 className='font-black text-slate-400 text-[9px] uppercase tracking-widest mb-4 italic'>
            Integraciones
          </h4>
          <div className='flex flex-wrap gap-2 mb-6'>
            {['LIMS', 'SCADA', 'ERP Fin', 'GS1'].map((tag, i) => (
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
              { id: 'produccion', label: 'Produccion' },
              { id: 'contabilidad', label: 'Contabilidad' },
              { id: 'regulatorio', label: 'Regulatorio' },
              { id: 'soporte', label: 'Soporte' },
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
        {tab === 'contabilidad' && <Contabilidad setTab={setTab} />}
        {tab === 'produccion' && <ProduccionYCalidad setTab={setTab} />}
        {tab === 'regulatorio' && <GestionRegulatoria setTab={setTab} />}
        {tab === 'soporte' && <GestionSoporte setTab={setTab} />}
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
            { id: 'dashboard', icon: '💎', label: 'Nexus Hub' },
            { id: 'produccion', icon: '⚗️', label: 'Producción' },
            { id: 'contabilidad', icon: '🚛', label: 'Materiales' },
            { id: 'regulatorio', icon: '🛡️', label: 'Cumplimiento' },
            { id: 'soporte', icon: '📊', label: 'Estrategia' },
            { id: 'ebr', icon: '📑', label: 'eBR' },
            { id: 'qc', icon: '🔬', label: 'QC Lab' },
            { id: 'validacionFDA', icon: '✅', label: 'Validación' }
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
