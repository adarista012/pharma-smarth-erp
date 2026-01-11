import React, { useState } from 'react'

interface OQProps {
  setTab: (tab: string) => void
}

const VerificacionOQ: React.FC<OQProps> = ({ setTab }) => {
  const [activeForm, setActiveForm] = useState('OQ-001')

  const FormHeader = ({ id, title }: { id: string; title: string }) => (
    <div className='border-2 border-slate-900 overflow-hidden rounded-t-[2rem]'>
      <div className='bg-slate-900 p-4 text-white flex justify-between items-center'>
        <h3 className='font-black text-[10px] uppercase tracking-[0.2em]'>
          FASE 2: CALIFICACIÓN OPERACIONAL (OQ)
        </h3>
        <span className='bg-indigo-500 px-3 py-1 rounded-full text-[8px] font-black'>
          {id}
        </span>
      </div>
      <div className='p-4 bg-white border-b-2 border-slate-900'>
        <h4 className='font-black text-slate-900 text-xs uppercase'>{title}</h4>
      </div>
    </div>
  )

  const SignatureBlock = () => (
    <div className='grid grid-cols-2 gap-8 mt-8 pt-6 border-t-2 border-slate-900'>
      <div className='space-y-3'>
        <div className='h-8 border-b border-slate-400 italic font-mono text-[10px] flex items-end'>
          J. Validator
        </div>
        <p className='text-[7px] font-black text-slate-500 uppercase'>
          Ejecutado por / Fecha / Firma
        </p>
      </div>
      <div className='space-y-3 opacity-30'>
        <div className='h-8 border-b border-slate-400'></div>
        <p className='text-[7px] font-black text-slate-500 uppercase'>
          Revisado por (QA) / Fecha / Firma
        </p>
      </div>
    </div>
  )

  const StatusBox = () => (
    <div className='mt-6 flex gap-4 items-center p-4 bg-slate-50 border-2 border-slate-900 rounded-2xl'>
      <span className='text-[9px] font-black uppercase text-slate-700'>
        RESULTADO FINAL:
      </span>
      <div className='flex gap-4'>
        <label className='flex items-center gap-2 cursor-pointer'>
          <div className='w-4 h-4 border-2 border-slate-900 rounded-sm bg-indigo-600 flex items-center justify-center text-white text-[8px]'>
            ✓
          </div>
          <span className='text-[9px] font-black text-slate-900'>PASA</span>
        </label>
        <label className='flex items-center gap-2 opacity-30'>
          <div className='w-4 h-4 border-2 border-slate-900 rounded-sm'></div>
          <span className='text-[9px] font-black text-slate-900'>FALLA</span>
        </label>
      </div>
    </div>
  )

  return (
    <div className='animate-in fade-in duration-500 max-w-6xl mx-auto pb-20'>
      <div className='flex flex-col lg:flex-row gap-6'>
        {/* Selector Lateral */}
        <div className='lg:w-72 space-y-2'>
          <button
            onClick={() => setTab('cumplimiento')}
            className='w-full p-4 bg-white border-2 border-slate-900 rounded-2xl text-[9px] font-black uppercase text-slate-900 hover:bg-slate-50 mb-4 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]'
          >
            ← Volver al Marco
          </button>
          {[
            { id: 'OQ-001', label: 'Gestión Usuarios' },
            { id: 'OQ-002', label: 'Firmas Electrónicas' },
            { id: 'OQ-003', label: 'Audit Trail' }
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveForm(f.id)}
              className={`w-full p-5 rounded-2xl text-left border-2 transition-all shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] ${
                activeForm === f.id
                  ? 'bg-indigo-600 border-slate-900 text-white translate-x-1'
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

        {/* Área de Formulario */}
        <div className='flex-1'>
          {/* OQ-001: GESTIÓN DE USUARIOS */}
          {activeForm === 'OQ-001' && (
            <div className='animate-in slide-in-from-right-4 duration-300'>
              <FormHeader id='OQ-001' title='GESTIÓN DE USUARIOS' />
              <div className='bg-white border-2 border-t-0 border-slate-900 p-8 rounded-b-[2rem] shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]'>
                {/* Caso 01 */}
                <div className='mb-10'>
                  <div className='bg-slate-100 p-3 mb-4 rounded-lg'>
                    <h5 className='text-[10px] font-black text-slate-800 uppercase'>
                      CASO DE PRUEBA OQ-001-01: CREACIÓN DE USUARIO
                    </h5>
                    <p className='text-[8px] text-slate-500 mt-1 uppercase'>
                      Prerrequisito: Acceso Administrador | Datos: "TEST001"
                    </p>
                  </div>
                  <table className='w-full border-collapse border border-slate-300 text-[9px]'>
                    <thead className='bg-slate-50'>
                      <tr className='text-left uppercase font-black text-slate-500'>
                        <th className='border border-slate-300 p-2 w-8'>N°</th>
                        <th className='border border-slate-300 p-2'>ACCIÓN</th>
                        <th className='border border-slate-300 p-2'>
                          RESULTADO ESPERADO
                        </th>
                        <th className='border border-slate-300 p-2 text-center w-12'>
                          ✓/✗
                        </th>
                      </tr>
                    </thead>
                    <tbody className='font-bold text-slate-700'>
                      {[
                        [
                          '1',
                          'Navegar a menú Usuarios',
                          'Pantalla carga correctamente'
                        ],
                        [
                          '2',
                          'Clic en "Nuevo Usuario"',
                          'Formulario de creación aparece'
                        ],
                        [
                          '3',
                          'Ingresar datos (ID, Rol, etc.)',
                          'Campos aceptan información'
                        ],
                        [
                          '4',
                          'Clic en "Guardar"',
                          'Usuario creado exitosamente'
                        ],
                        [
                          '6',
                          'Revisar Audit Trail',
                          'Registro de creación generado'
                        ]
                      ].map((row, i) => (
                        <tr key={i}>
                          <td className='border border-slate-300 p-2 text-center'>
                            {row[0]}
                          </td>
                          <td className='border border-slate-300 p-2 uppercase'>
                            {row[1]}
                          </td>
                          <td className='border border-slate-300 p-2 text-slate-500'>
                            {row[2]}
                          </td>
                          <td className='border border-slate-300 p-2 text-center text-indigo-600 font-black'>
                            ✓
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Caso 02 */}
                <div className='mb-6'>
                  <div className='bg-slate-100 p-3 mb-4 rounded-lg'>
                    <h5 className='text-[10px] font-black text-slate-800 uppercase'>
                      CASO DE PRUEBA OQ-001-02: VALIDACIÓN DE CONTRASEÑA
                    </h5>
                  </div>
                  <table className='w-full border-collapse border border-slate-300 text-[9px]'>
                    <thead className='bg-slate-50 font-black text-slate-500 uppercase'>
                      <tr>
                        <th className='border border-slate-300 p-2'>N°</th>
                        <th className='border border-slate-300 p-2'>
                          CONTRASEÑA A PROBAR
                        </th>
                        <th className='border border-slate-300 p-2'>
                          RESULTADO ESPERADO
                        </th>
                        <th className='border border-slate-300 p-2 text-center w-12'>
                          ✓/✗
                        </th>
                      </tr>
                    </thead>
                    <tbody className='font-bold text-slate-700 uppercase'>
                      {[
                        ['1', '"1234"', 'Rechazada (< 8 char)'],
                        ['2', '"password"', 'Rechazada (sin may/num)'],
                        ['3', '"Password123!"', 'Aceptada'],
                        ['4', '"Password123!"', 'Rechazada (historial)']
                      ].map((row, i) => (
                        <tr key={i}>
                          <td className='border border-slate-300 p-2 text-center'>
                            {row[0]}
                          </td>
                          <td className='border border-slate-300 p-2 font-mono'>
                            {row[1]}
                          </td>
                          <td className='border border-slate-300 p-2 text-slate-500'>
                            {row[2]}
                          </td>
                          <td className='border border-slate-300 p-2 text-center text-indigo-600 font-black'>
                            ✓
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <StatusBox />
                <SignatureBlock />
              </div>
            </div>
          )}

          {/* OQ-002: FIRMAS ELECTRÓNICAS */}
          {activeForm === 'OQ-002' && (
            <div className='animate-in slide-in-from-right-4 duration-300'>
              <FormHeader
                id='OQ-002'
                title='FIRMAS ELECTRÓNICAS (21 CFR Part 11)'
              />
              <div className='bg-white border-2 border-t-0 border-slate-900 p-8 rounded-b-[2rem] shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]'>
                <div className='mb-6 p-4 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 text-center'>
                  <p className='text-[10px] font-black text-slate-400 uppercase tracking-widest'>
                    CAPTURA DE PANTALLA DE LA FIRMA
                  </p>
                  <div className='mt-4 h-32 bg-white border border-slate-200 rounded flex items-center justify-center'>
                    <span className='text-[20px]'>📄🖋️</span>
                  </div>
                  <p className='mt-2 text-[8px] font-mono text-slate-400'>
                    [Firma verificada: Operador01 - 11-ENE-2026 14:30:05]
                  </p>
                </div>
                <table className='w-full border-collapse border border-slate-300 text-[9px]'>
                  <tbody className='font-bold text-slate-700 uppercase'>
                    {[
                      [
                        '5',
                        'Ingresar contraseña incorrecta',
                        'Mensaje error - No firma',
                        '✓'
                      ],
                      [
                        '6',
                        'Ingresar contraseña correcta',
                        'Firma se aplica exitosamente',
                        '✓'
                      ],
                      [
                        '7',
                        'Manifestación de firma',
                        'Nombre, Fecha, Significado OK',
                        '✓'
                      ],
                      [
                        '8',
                        'Intentar modificar registro',
                        'Requiere nueva firma / Bloqueo',
                        '✓'
                      ]
                    ].map((row, i) => (
                      <tr key={i}>
                        <td className='border border-slate-300 p-2 text-center'>
                          {row[0]}
                        </td>
                        <td className='border border-slate-300 p-2'>
                          {row[1]}
                        </td>
                        <td className='border border-slate-300 p-2 text-slate-500'>
                          {row[2]}
                        </td>
                        <td className='border border-slate-300 p-2 text-center text-indigo-600 font-black'>
                          {row[3]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <StatusBox />
                <SignatureBlock />
              </div>
            </div>
          )}

          {/* OQ-003: AUDIT TRAIL */}
          {activeForm === 'OQ-003' && (
            <div className='animate-in slide-in-from-right-4 duration-300'>
              <FormHeader id='OQ-003' title='VERIFICACIÓN DE AUDIT TRAIL' />
              <div className='bg-white border-2 border-t-0 border-slate-900 p-8 rounded-b-[2rem] shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]'>
                <h5 className='text-[9px] font-black mb-4 uppercase text-indigo-600'>
                  Verificación de Integridad de Datos
                </h5>
                <div className='grid grid-cols-1 gap-2'>
                  {[
                    'Secuencia cronológica correcta',
                    'Timestamps con zona horaria configurada',
                    'No hay gaps (huecos) en la secuencia de IDs',
                    'Filtros de auditoría funcionan correctamente'
                  ].map((text, i) => (
                    <div
                      key={i}
                      className='flex justify-between items-center p-3 border border-slate-200 rounded-lg font-black text-[9px] uppercase text-slate-600'
                    >
                      {text}
                      <span className='text-indigo-600 italic'>✓ CONFORME</span>
                    </div>
                  ))}
                </div>
                <div className='mt-8 p-4 bg-slate-900 text-emerald-400 font-mono text-[8px] rounded-lg'>
                  {'>'} AUDIT_TRAIL_DUMP: EVENT_0492 - USER_ADMIN -
                  ACTION_UPDATE - TABLE_PRODUCTS - OLD_VAL:"400mg" -
                  NEW_VAL:"400mg Tab" - TIMESTAMP:2026-01-11T14:35:00Z
                </div>
                <StatusBox />
                <SignatureBlock />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default VerificacionOQ
