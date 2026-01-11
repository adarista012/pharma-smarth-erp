import React, { useState } from 'react'

interface VerificacionProps {
  setTab: (tab: string) => void
}

const VerificacionIQ: React.FC<VerificacionProps> = ({ setTab }) => {
  const [activeForm, setActiveForm] = useState('IQ-001')

  // Componente para las celdas de Checkbox estilo "☐ Sí ☐ No"
  const GxPCheck = ({ label }: { label?: string }) => (
    <div className='flex items-center gap-2'>
      <div className='flex items-center gap-1'>
        <div className='w-3 h-3 border border-slate-400 bg-white flex items-center justify-center text-[8px] text-indigo-600 font-black italic'>
          ✓
        </div>
        <span className='text-[7px] font-bold text-slate-500'>SÍ</span>
      </div>
      <div className='flex items-center gap-1'>
        <div className='w-3 h-3 border border-slate-400 bg-white'></div>
        <span className='text-[7px] font-bold text-slate-500'>NO</span>
      </div>
    </div>
  )

  const FormContainer = ({
    children,
    title,
    id
  }: {
    children: React.ReactNode
    title: string
    id: string
  }) => (
    <div className='bg-white rounded-[2rem] border-2 border-slate-900 overflow-hidden shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] animate-in zoom-in-95 duration-300'>
      {/* Encabezado Estilo Tabla */}
      <div className='border-b-2 border-slate-900'>
        <div className='grid grid-cols-1 md:grid-cols-2 bg-slate-900 p-4 text-white'>
          <h3 className='font-black text-[10px] uppercase tracking-widest'>
            FORMULARIO {id}: {title}
          </h3>
          <p className='text-[8px] font-mono text-slate-400 md:text-right'>
            NEXUS_VALIDATION_SYSTEM_v1.0
          </p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-slate-50 font-mono text-[8px] text-slate-600 uppercase'>
          <div className='border-r border-slate-200'>
            Sistema:{' '}
            <span className='font-black text-slate-900'>Nexus ERP</span>
          </div>
          <div className='border-r border-slate-200'>
            Versión: <span className='font-black text-slate-900'>1.0.4</span>
          </div>
          <div className='border-r border-slate-200'>
            Fecha: <span className='font-black text-slate-900'>11-ENE-26</span>
          </div>
          <div>
            Ejecutor:{' '}
            <span className='font-black text-slate-900'>J. Validator</span>
          </div>
        </div>
      </div>

      <div className='p-6'>{children}</div>

      {/* Footer de Firmas Técnico */}
      <div className='bg-slate-50 border-t-2 border-slate-900 p-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div className='space-y-2'>
            <div className='border-b border-slate-400 h-8 flex items-end pb-1 italic font-mono text-[10px] text-indigo-700'>
              J. Validator (E-Sign)
            </div>
            <p className='text-[7px] font-black text-slate-500 uppercase tracking-tighter'>
              Ejecutado por / Fecha / Firma
            </p>
          </div>
          <div className='space-y-2 opacity-40'>
            <div className='border-b border-slate-400 h-8'></div>
            <p className='text-[7px] font-black text-slate-500 uppercase tracking-tighter'>
              Revisado por (QA) / Fecha / Firma
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className='animate-in fade-in duration-500 max-w-6xl mx-auto pb-20'>
      <div className='flex flex-col lg:flex-row gap-6'>
        {/* Selector de Pestañas Estilo Módulos */}
        <div className='lg:w-72 flex lg:flex-col gap-2 overflow-x-auto pb-4'>
          <button
            onClick={() => setTab('fase-iq')}
            className='p-4 bg-white border border-slate-200 rounded-2xl text-[9px] font-black uppercase text-slate-400 hover:text-indigo-600 mb-4 whitespace-nowrap'
          >
            ← Volver
          </button>
          {[
            { id: 'IQ-001', label: 'Documentación' },
            { id: 'IQ-002', label: 'Infraestructura' },
            { id: 'IQ-003', label: 'Instalación' },
            { id: 'IQ-004', label: 'Seguridad' }
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveForm(f.id)}
              className={`p-4 rounded-2xl text-left border-2 transition-all flex-1 lg:flex-none whitespace-nowrap ${
                activeForm === f.id
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg'
                  : 'bg-white border-transparent text-slate-500 hover:border-slate-200'
              }`}
            >
              <p className='text-[7px] font-black opacity-70 uppercase'>
                {f.id}
              </p>
              <p className='text-[10px] font-black uppercase'>{f.label}</p>
            </button>
          ))}
        </div>

        {/* CONTENIDO DEL FORMULARIO */}
        <div className='flex-1'>
          {activeForm === 'IQ-001' && (
            <FormContainer title='VERIFICACIÓN DE DOCUMENTACIÓN' id='IQ-001'>
              <div className='overflow-x-auto'>
                <table className='w-full border-collapse border border-slate-300 text-[9px]'>
                  <thead>
                    <tr className='bg-slate-100 uppercase font-black text-slate-600'>
                      <th className='border border-slate-300 p-2 text-left w-8'>
                        N°
                      </th>
                      <th className='border border-slate-300 p-2 text-left'>
                        DOCUMENTO
                      </th>
                      <th className='border border-slate-300 p-2 text-center'>
                        DISPONIBLE
                      </th>
                      <th className='border border-slate-300 p-2 text-center'>
                        VERSIÓN
                      </th>
                      <th className='border border-slate-300 p-2 text-center'>
                        CONFORME
                      </th>
                    </tr>
                  </thead>
                  <tbody className='font-bold text-slate-700'>
                    {[
                      ['01', 'Manual de Instalación', 'v1.0'],
                      ['02', 'Licencias de Software', 'OEM'],
                      ['03', 'Certificados SSL/TLS', '2048-bit'],
                      ['04', 'Especificaciones Técnicas', 'v2.1'],
                      ['05', 'Lista de Componentes', 'v1.0.4'],
                      ['06', 'Requerimientos Hardware', 'v1.1'],
                      ['07', 'Matriz Trazabilidad', 'v1.4'],
                      ['08', 'Procedimientos Proveedor', 'v3.0']
                    ].map((row, i) => (
                      <tr key={i} className='hover:bg-slate-50'>
                        <td className='border border-slate-300 p-2'>
                          {row[0]}
                        </td>
                        <td className='border border-slate-300 p-2'>
                          {row[1]}
                        </td>
                        <td className='border border-slate-300 p-2'>
                          <div className='flex justify-center'>
                            <GxPCheck />
                          </div>
                        </td>
                        <td className='border border-slate-300 p-2 text-center text-slate-400'>
                          {row[2]}
                        </td>
                        <td className='border border-slate-300 p-2'>
                          <div className='flex justify-center'>
                            <GxPCheck />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className='mt-6 p-4 border border-slate-200 rounded-xl bg-slate-50'>
                <p className='text-[8px] font-black text-slate-400 uppercase mb-2'>
                  Observaciones:
                </p>
                <div className='h-8 border-b border-slate-300 text-[9px] font-mono italic text-slate-500'>
                  Toda la documentación coincide con el Plan Maestro de
                  Validación.
                </div>
              </div>
            </FormContainer>
          )}

          {activeForm === 'IQ-002' && (
            <FormContainer title='VERIFICACIÓN DE INFRAESTRUCTURA' id='IQ-002'>
              <div className='space-y-6'>
                <h4 className='text-[9px] font-black bg-slate-900 text-white px-3 py-1 inline-block uppercase'>
                  A. HARDWARE DEL SERVIDOR
                </h4>
                <table className='w-full border-collapse border border-slate-300 text-[9px]'>
                  <thead>
                    <tr className='bg-slate-100 uppercase font-black text-slate-600'>
                      <th className='border border-slate-300 p-2 text-left w-8'>
                        N°
                      </th>
                      <th className='border border-slate-300 p-2 text-left'>
                        COMPONENTE
                      </th>
                      <th className='border border-slate-300 p-2 text-left'>
                        ESPECIFICADO
                      </th>
                      <th className='border border-slate-300 p-2 text-left'>
                        INSTALADO
                      </th>
                      <th className='border border-slate-300 p-2 text-center'>
                        C/N
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['01', 'Procesador', 'Xeon 3.5GHz', 'Xeon 3.5GHz'],
                      ['02', 'Memoria RAM', '64GB DDR4', '64GB DDR4'],
                      ['03', 'Disco Duro', '1TB SSD', '1TB SSD RAID']
                    ].map((row, i) => (
                      <tr key={i} className='font-bold text-slate-700'>
                        <td className='border border-slate-300 p-2'>
                          {row[0]}
                        </td>
                        <td className='border border-slate-300 p-2'>
                          {row[1]}
                        </td>
                        <td className='border border-slate-300 p-2 text-slate-400'>
                          {row[2]}
                        </td>
                        <td className='border border-slate-300 p-2'>
                          {row[3]}
                        </td>
                        <td className='border border-slate-300 p-2'>
                          <div className='flex justify-center'>
                            <GxPCheck />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <h4 className='text-[9px] font-black bg-slate-900 text-white px-3 py-1 inline-block uppercase mt-4'>
                  C. RED Y CONECTIVIDAD
                </h4>
                <table className='w-full border-collapse border border-slate-300 text-[9px]'>
                  <thead>
                    <tr className='bg-slate-100 uppercase font-black text-slate-600'>
                      <th className='border border-slate-300 p-2 text-left w-8'>
                        N°
                      </th>
                      <th className='border border-slate-300 p-2 text-left'>
                        VERIFICACIÓN
                      </th>
                      <th className='border border-slate-300 p-2 text-left'>
                        RESULTADO
                      </th>
                      <th className='border border-slate-300 p-2 text-center'>
                        C/N
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['01', 'Dirección IP', '192.168.1.100'],
                      ['06', 'SSL Válido', 'Certificado DigiCert']
                    ].map((row, i) => (
                      <tr key={i} className='font-bold text-slate-700'>
                        <td className='border border-slate-300 p-2'>
                          {row[0]}
                        </td>
                        <td className='border border-slate-300 p-2'>
                          {row[1]}
                        </td>
                        <td className='border border-slate-300 p-2'>
                          {row[2]}
                        </td>
                        <td className='border border-slate-300 p-2'>
                          <div className='flex justify-center'>
                            <GxPCheck />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FormContainer>
          )}

          {activeForm === 'IQ-004' && (
            <FormContainer
              title='CONFIGURACIÓN DE SEGURIDAD (21 CFR 11)'
              id='IQ-004'
            >
              <div className='space-y-6'>
                <h4 className='text-[9px] font-black bg-slate-900 text-white px-3 py-1 inline-block uppercase'>
                  A. POLÍTICAS DE CONTRASEÑA
                </h4>
                <table className='w-full border-collapse border border-slate-300 text-[9px]'>
                  <thead>
                    <tr className='bg-slate-100 font-black text-slate-600'>
                      <th className='border border-slate-300 p-2 text-left w-8'>
                        N°
                      </th>
                      <th className='border border-slate-300 p-2 text-left'>
                        PARÁMETRO
                      </th>
                      <th className='border border-slate-300 p-2 text-center'>
                        REQUERIDO
                      </th>
                      <th className='border border-slate-300 p-2 text-center'>
                        CONFIGURADO
                      </th>
                      <th className='border border-slate-300 p-2 text-center'>
                        ✓/✗
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['01', 'Longitud mínima', '8 char', '12 char'],
                      ['03', 'Caducidad (días)', '90', '90'],
                      ['07', 'Timeout (min)', '15-30', '15']
                    ].map((row, i) => (
                      <tr key={i} className='font-bold text-slate-700'>
                        <td className='border border-slate-300 p-2'>
                          {row[0]}
                        </td>
                        <td className='border border-slate-300 p-2 text-left uppercase'>
                          {row[1]}
                        </td>
                        <td className='border border-slate-300 p-2 text-center'>
                          {row[2]}
                        </td>
                        <td className='border border-slate-300 p-2 text-center'>
                          {row[3]}
                        </td>
                        <td className='border border-slate-300 p-2 text-center italic text-indigo-600 font-black'>
                          ✓
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <h4 className='text-[9px] font-black bg-rose-600 text-white px-3 py-1 inline-block uppercase mt-4'>
                  B. AUDIT TRAIL (CRÍTICO)
                </h4>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-300 border border-slate-300'>
                  {[
                    'Audit trail habilitado',
                    'No editable / No eliminable',
                    'Captura fecha y hora local',
                    'Captura valores anterior/nuevo'
                  ].map((text, i) => (
                    <div
                      key={i}
                      className='bg-white p-3 flex justify-between items-center'
                    >
                      <span className='text-[8px] font-black uppercase text-slate-600'>
                        {text}
                      </span>
                      <GxPCheck />
                    </div>
                  ))}
                </div>
              </div>
            </FormContainer>
          )}

          {/* Fallback para módulos no detallados visualmente en esta muestra */}
          {activeForm === 'IQ-003' && (
            <FormContainer title='INSTALACIÓN DEL SOFTWARE' id='IQ-003'>
              <p className='text-[10px] text-slate-400 italic text-center py-20 uppercase font-black tracking-widest'>
                Módulo de Verificación de Binarios y Base de Datos
              </p>
            </FormContainer>
          )}
        </div>
      </div>
    </div>
  )
}

export default VerificacionIQ
