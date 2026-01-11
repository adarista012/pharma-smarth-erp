interface DashboardProps {
  setTab: (tab: string) => void
}

const Dashboard: React.FC<DashboardProps> = ({ setTab }) => {
  return (
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
      <div
        onClick={() => setTab('cumplimiento')}
        className='lg:col-span-1 bg-slate-50 p-8 rounded-[2.5rem] border-2 border-dashed border-slate-200 cursor-pointer hover:border-indigo-400 hover:bg-white transition-all group'
      >
        <div className='flex flex-col h-full'>
          <div className='flex justify-between items-start mb-4'>
            <span className='bg-slate-900 text-white text-[8px] font-black px-2 py-0.5 rounded-full uppercase'>
              Compliance Core
            </span>
            <span className='text-2xl group-hover:scale-110 transition-transform'>
              📑
            </span>
          </div>
          <h4 className='font-black text-slate-800 text-xs uppercase tracking-widest mt-2'>
            CONSIDERACIONES CRÍTICAS
          </h4>
          <p className='text-[9px] text-slate-400 font-bold mt-2 italic'>
            Validación GAMP 5, 21 CFR Part 11 & ALCOA+
          </p>

          <div className='mt-6 flex gap-1'>
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className='h-1 flex-1 bg-slate-200 rounded-full group-hover:bg-indigo-400 transition-colors'
              ></div>
            ))}
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
}

export default Dashboard
