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
              <th className='border border-slate-300 p-2 text-left w-10'>N°</th>
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

export default SeccionValidacionFDA
