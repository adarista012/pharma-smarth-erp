import React, { useState } from 'react'

interface PQProps {
  setTab: (tab: string) => void
}

const VerificacionPQ: React.FC<PQProps> = ({ setTab }) => {
  const [activeForm, setActiveForm] = useState('PQ-001')

  const FormHeader = ({ id, title }: { id: string; title: string }) => (
    <div className='border-2 border-slate-900 overflow-hidden rounded-t-[2rem] shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]'>
      <div className='bg-emerald-600 p-4 text-white flex justify-between items-center'>
        <h3 className='font-black text-[10px] uppercase tracking-widest'>
          FASE 3: CALIFICACIÓN DE DESEMPEÑO (PQ)
        </h3>
        <span className='bg-white text-emerald-600 px-3 py-1 rounded-full text-[8px] font-black'>
          {id}
        </span>
      </div>
      <div className='p-5 bg-white border-b-2 border-slate-900'>
        <h4 className='font-black text-slate-900 text-xs uppercase'>{title}</h4>
      </div>
    </div>
  )

  const SignatureBlockPQ = ({ includeQA = false }: { includeQA?: boolean }) => (
    <div
      className={`grid grid-cols-1 ${
        includeQA ? 'md:grid-cols-3' : 'md:grid-cols-2'
      } gap-8 mt-10 pt-6 border-t-2 border-slate-900`}
    >
      <div className='space-y-2'>
        <div className='h-8 border-b border-slate-300 italic font-mono text-[9px] flex items-end'>
          J. Validator
        </div>
        <p className='text-[7px] font-black text-slate-500 uppercase'>
          Ejecutado por / Fecha
        </p>
      </div>
      <div className='space-y-2 opacity-40'>
        <div className='h-8 border-b border-slate-300'></div>
        <p className='text-[7px] font-black text-slate-500 uppercase'>
          Revisado por / Fecha
        </p>
      </div>
      {includeQA && (
        <div className='space-y-2'>
          <div className='h-8 border-b border-slate-300 flex items-end pb-1 text-emerald-600 font-black text-[8px] uppercase tracking-tighter'>
            Aprobado por QA 11-ENE-26
          </div>
          <p className='text-[7px] font-black text-slate-500 uppercase'>
            Garantía de Calidad (QA)
          </p>
        </div>
      )}
    </div>
  )

  return (
    <div className='animate-in fade-in duration-500 max-w-6xl mx-auto pb-20'>
      <div className='flex flex-col lg:flex-row gap-6'>
        {/* Navegación Lateral */}
        <div className='lg:w-72 space-y-2'>
          <button
            onClick={() => setTab('cumplimiento')}
            className='w-full p-4 bg-white border-2 border-slate-900 rounded-2xl text-[9px] font-black uppercase hover:bg-slate-50 mb-4 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]'
          >
            ← Volver al Marco
          </button>

          {[
            { id: 'PQ-001', label: 'Escenario End-to-End' },
            { id: 'PQ-002', label: 'Carga y Concurrencia' }
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveForm(f.id)}
              className={`w-full p-5 rounded-2xl text-left border-2 transition-all shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] ${
                activeForm === f.id
                  ? 'bg-emerald-600 border-slate-900 text-white translate-x-1'
                  : 'bg-white border-slate-900 text-slate-900 hover:bg-slate-50'
              }`}
            >
              <p className='text-[7px] font-black opacity-70 uppercase'>
                {f.id}
              </p>
              <p className='text-[10px] font-black uppercase'>{f.label}</p>
            </button>
          ))}
        </div>

        {/* Contenido Formulario */}
        <div className='flex-1'>
          {/* PQ-001: PROCESO COMPLETO */}
          {activeForm === 'PQ-001' && (
            <div className='animate-in slide-in-from-right-4 duration-300'>
              <FormHeader
                id='PQ-001'
                title='ESCENARIO DE NEGOCIO: PROCESO COMPLETO DE FABRICACIÓN'
              />
              <div className='bg-white border-2 border-t-0 border-slate-900 p-8 rounded-b-[2rem] shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-4 bg-emerald-50 rounded-xl border border-emerald-100 uppercase font-mono text-[8px]'>
                  <div>
                    Producto:{' '}
                    <span className='font-black block text-[9px]'>
                      Ibuprofeno 400mg
                    </span>
                  </div>
                  <div>
                    Lote:{' '}
                    <span className='font-black block text-[9px]'>2026001</span>
                  </div>
                  <div>
                    Cantidad:{' '}
                    <span className='font-black block text-[9px]'>
                      10,000 TAB.
                    </span>
                  </div>
                  <div>
                    Fecha:{' '}
                    <span className='font-black block text-[9px]'>
                      11-ENE-2026
                    </span>
                  </div>
                </div>

                <table className='w-full border-collapse border border-slate-300 text-[9px]'>
                  <thead className='bg-slate-100 uppercase font-black'>
                    <tr>
                      <th className='border border-slate-300 p-2 w-8'>N°</th>
                      <th className='border border-slate-300 p-2 text-left'>
                        ETAPA DEL PROCESO
                      </th>
                      <th className='border border-slate-300 p-2 text-left'>
                        RESULTADO ESPERADO
                      </th>
                      <th className='border border-slate-300 p-2 text-center w-8'>
                        ✓/✗
                      </th>
                    </tr>
                  </thead>
                  <tbody className='font-bold text-slate-700'>
                    {[
                      ['1', 'PLANIFICACIÓN', 'OP Creada y Programada'],
                      [
                        '2',
                        'RESERVA MATERIALES',
                        'Stock verificado y Picking list emitido'
                      ],
                      [
                        '3',
                        'DISPENSACIÓN',
                        'Pesadas registradas con doble firma'
                      ],
                      [
                        '4',
                        'MANUFACTURA',
                        'EBR iniciado y pasos IPC registrados'
                      ],
                      [
                        '6',
                        'CONTROL DE CALIDAD',
                        'COA generado cumpliendo especificaciones'
                      ],
                      ['7', 'LIBERACIÓN', 'Status cambiado a LIBERADO por QA'],
                      [
                        '8',
                        'TRAZABILIDAD',
                        'Genealogía completa y Audit Trail OK'
                      ]
                    ].map((row, i) => (
                      <tr key={i} className='hover:bg-emerald-50/30'>
                        <td className='border border-slate-300 p-2 text-center'>
                          {row[0]}
                        </td>
                        <td className='border border-slate-300 p-2 uppercase text-slate-900'>
                          {row[1]}
                        </td>
                        <td className='border border-slate-300 p-2 text-slate-500 font-normal'>
                          {row[2]}
                        </td>
                        <td className='border border-slate-300 p-2 text-center text-emerald-600 font-black'>
                          ✓
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-200'>
                  <div className='space-y-2'>
                    <p className='text-[8px] font-black text-slate-400 uppercase'>
                      Documentación Generada:
                    </p>
                    {[
                      'Electronic Batch Record completo',
                      'Certificado de Análisis (COA)',
                      'Registro de liberación'
                    ].map((t, i) => (
                      <div
                        key={i}
                        className='flex items-center gap-2 text-[9px] font-bold text-slate-600 uppercase'
                      >
                        <div className='w-3 h-3 bg-white border border-slate-300 flex items-center justify-center text-[7px] text-emerald-600'>
                          ✓
                        </div>{' '}
                        {t}
                      </div>
                    ))}
                  </div>
                  <div className='space-y-2'>
                    <p className='text-[8px] font-black text-slate-400 uppercase'>
                      Trazabilidad Verificada:
                    </p>
                    {[
                      'Trazabilidad materiales (Back)',
                      'Firmas electrónicas íntegras',
                      'Audit Trail coherente'
                    ].map((t, i) => (
                      <div
                        key={i}
                        className='flex items-center gap-2 text-[9px] font-bold text-slate-600 uppercase'
                      >
                        <div className='w-3 h-3 bg-white border border-slate-300 flex items-center justify-center text-[7px] text-emerald-600'>
                          ✓
                        </div>{' '}
                        {t}
                      </div>
                    ))}
                  </div>
                </div>

                <SignatureBlockPQ includeQA={true} />
              </div>
            </div>
          )}

          {/* PQ-002: RENDIMIENTO */}
          {activeForm === 'PQ-002' && (
            <div className='animate-in slide-in-from-right-4 duration-300'>
              <FormHeader
                id='PQ-002'
                title='PRUEBAS DE RENDIMIENTO Y CONCURRENCIA'
              />
              <div className='bg-white border-2 border-t-0 border-slate-900 p-8 rounded-b-[2rem] shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  <div>
                    <h5 className='text-[9px] font-black mb-4 bg-slate-900 text-white px-3 py-1 inline-block uppercase'>
                      Métricas de Concurrencia (20 Users)
                    </h5>
                    <table className='w-full border-collapse border border-slate-300 text-[9px]'>
                      <thead className='bg-slate-100 uppercase text-slate-500 font-black'>
                        <tr>
                          <th className='border border-slate-300 p-2 text-left'>
                            MÉTRICA
                          </th>
                          <th className='border border-slate-300 p-2 text-center'>
                            OBTENIDO
                          </th>
                        </tr>
                      </thead>
                      <tbody className='font-bold uppercase text-slate-700'>
                        {[
                          ['Tiempo respuesta Prom.', '1.2 seg'],
                          ['Tiempo respuesta Máx.', '4.5 seg'],
                          ['Transacciones Exitosas', '99.9%'],
                          ['Errores críticos', '0']
                        ].map((r, i) => (
                          <tr key={i}>
                            <td className='border border-slate-300 p-2 text-slate-600'>
                              {r[0]}
                            </td>
                            <td className='border border-slate-300 p-2 text-center text-emerald-600'>
                              {r[1]}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div>
                    <h5 className='text-[9px] font-black mb-4 bg-slate-900 text-white px-3 py-1 inline-block uppercase'>
                      Operaciones Críticas (Stress)
                    </h5>
                    <table className='w-full border-collapse border border-slate-300 text-[9px]'>
                      <thead className='bg-slate-100 uppercase text-slate-500 font-black'>
                        <tr>
                          <th className='border border-slate-300 p-2 text-left'>
                            OPERACIÓN
                          </th>
                          <th className='border border-slate-300 p-2 text-center'>
                            TIEMPO
                          </th>
                        </tr>
                      </thead>
                      <tbody className='font-bold uppercase text-slate-700'>
                        {[
                          ['Crear Orden Prod.', '2.1 seg'],
                          ['Aplicar Firma Electr.', '0.8 seg'],
                          ['Consulta Audit Trail', '3.2 seg'],
                          ['Generar Reporte COA', '5.5 seg']
                        ].map((r, i) => (
                          <tr key={i}>
                            <td className='border border-slate-300 p-2 text-slate-600'>
                              {r[0]}
                            </td>
                            <td className='border border-slate-300 p-2 text-center text-emerald-600'>
                              {r[1]}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className='mt-8 p-4 bg-slate-50 border-2 border-slate-900 rounded-2xl flex justify-between items-center'>
                  <span className='text-[10px] font-black uppercase text-slate-700'>
                    Criterio de Aceptación: Cumple especificaciones de carga.
                  </span>
                  <div className='flex gap-2 items-center'>
                    <div className='w-4 h-4 rounded-full bg-emerald-500 animate-pulse'></div>
                    <span className='text-[9px] font-black text-emerald-600 uppercase'>
                      SISTEMA ESTABLE
                    </span>
                  </div>
                </div>
                <SignatureBlockPQ />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default VerificacionPQ
