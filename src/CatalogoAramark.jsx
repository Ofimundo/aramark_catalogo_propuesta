import { useState, useEffect } from 'react';
import {
  Printer,
  Zap,
  ShieldCheck,
  Cpu,
  Clock,
  Award,
  Search,
  X,
  CheckCircle2,
  DollarSign,
  Globe,
  Mail,
  ChevronRight,
  TrendingUp,
  FileText,
  Percent,
  MapPin,
  ChevronDown,
  ChevronUp,
  Minimize2,
  Maximize2,
} from 'lucide-react';

export default function CatalogoOfimundoAramark() {
  const today = 'Mayo 2026';

  const pricingByLocation = {
    SANTIAGO: {
      'Mono - A4 - Bajo':   { cf: '1,10', cvMono: '0,011842', cvColor: '0,000000' },
      'Mono - A4 - Medio':  { cf: '1,25', cvMono: '0,009947', cvColor: '0,000000' },
      'Mono - A4 - Alto':   { cf: '2,05', cvMono: '0,008526', cvColor: '0,000000' },
      'Mono - A3 - Medio':  { cf: '2,48', cvMono: '0,008053', cvColor: '0,000000' },
      'Mono - A3 - Alto':   { cf: '4,30', cvMono: '0,005684', cvColor: '0,000000' },
      'Color - A4 - Bajo':  { cf: '1,60', cvMono: '0,015063', cvColor: '0,062503' },
      'Color - A4 - Medio': { cf: '1,95', cvMono: '0,019421', cvColor: '0,051530' },
      'Color - A4 - Alto':  { cf: '2,40', cvMono: '0,016579', cvColor: '0,047048' },
      'Color - A3 - Medio': { cf: '2,54', cvMono: '0,012837', cvColor: '0,033724' },
      'Color - A3 - Alto':  { cf: '5,05', cvMono: '0,010895', cvColor: '0,027827' },
    },
    REGION: {
      'Mono - A4 - Bajo':   { cf: '1,25', cvMono: '0,012268', cvColor: '0,000000' },
      'Mono - A4 - Medio':  { cf: '1,30', cvMono: '0,010279', cvColor: '0,000000' },
      'Mono - A4 - Alto':   { cf: '2,20', cvMono: '0,009332', cvColor: '0,000000' },
      'Mono - A3 - Medio':  { cf: '2,58', cvMono: '0,008668', cvColor: '0,000000' },
      'Mono - A3 - Alto':   { cf: '4,85', cvMono: '0,006679', cvColor: '0,000000' },
      'Color - A4 - Bajo':  { cf: '1,65', cvMono: '0,022263', cvColor: '0,068567' },
      'Color - A4 - Medio': { cf: '2,10', cvMono: '0,020274', cvColor: '0,054299' },
      'Color - A4 - Alto':  { cf: '2,95', cvMono: '0,018028', cvColor: '0,048157' },
      'Color - A3 - Medio': { cf: '3,95', cvMono: '0,014021', cvColor: '0,041710' },
      'Color - A3 - Alto':  { cf: '5,65', cvMono: '0,012079', cvColor: '0,038136' },
    },
    FAENA: {
      'Mono - A4 - Bajo':   { cf: '1,40', cvMono: '0,013000', cvColor: '0,000000' },
      'Mono - A4 - Medio':  { cf: '1,60', cvMono: '0,011331', cvColor: '0,000000' },
      'Mono - A4 - Alto':   { cf: '2,60', cvMono: '0,009995', cvColor: '0,000000' },
      'Mono - A3 - Medio':  { cf: '4,30', cvMono: '0,009512', cvColor: '0,000000' },
      'Mono - A3 - Alto':   { cf: '5,28', cvMono: '0,007693', cvColor: '0,000000' },
      'Color - A4 - Bajo':  { cf: '2,00', cvMono: '0,024000', cvColor: '0,070000' },
      'Color - A4 - Medio': { cf: '2,25', cvMono: '0,021600', cvColor: '0,057261' },
      'Color - A4 - Alto':  { cf: '3,35', cvMono: '0,020368', cvColor: '0,051582' },
      'Color - A3 - Medio': { cf: '6,05', cvMono: '0,015584', cvColor: '0,047362' },
      'Color - A3 - Alto':  { cf: '7,04', cvMono: '0,012789', cvColor: '0,043265' },
    },
  };

  const baseCategories = [
    {
      title: 'MONOCROMÁTICO A4',
      subtitle: 'Equipos compactos y eficientes para oficinas administrativas',
      categoryKey: 'MONO_A4',
      models: [
        { name: 'HP LaserJet Enterprise M507dn', volume: 'Bajo Volumen', ppm: '45 ppm', pricingKey: 'Mono - A4 - Bajo' },
        { name: 'Lexmark MS621dn', volume: 'Medio Volumen', ppm: '50 ppm', pricingKey: 'Mono - A4 - Medio' },
        { name: 'Kyocera ECOSYS PA6000x', volume: 'Alto Volumen', ppm: '60 ppm', pricingKey: 'Mono - A4 - Alto' },
      ],
    },
    {
      title: 'MONOCROMÁTICO A3',
      subtitle: 'Multifuncionales corporativos para alta productividad',
      categoryKey: 'MONO_A3',
      models: [
        { name: 'Ricoh IM 5000', volume: 'Medio Volumen', ppm: '50 ppm', pricingKey: 'Mono - A3 - Medio' },
        { name: 'Xerox AltaLink B8170', volume: 'Alto Volumen', ppm: '70 ppm', pricingKey: 'Mono - A3 - Alto' },
      ],
    },
    {
      title: 'COLOR A4',
      subtitle: 'Impresión color profesional y conectividad avanzada',
      categoryKey: 'COLOR_A4',
      models: [
        { name: 'HP Color LaserJet M555dn', volume: 'Bajo Volumen', ppm: '40 ppm', pricingKey: 'Color - A4 - Bajo' },
        { name: 'Canon i-SENSYS X C1538P', volume: 'Medio Volumen', ppm: '38 ppm', pricingKey: 'Color - A4 - Medio' },
        { name: 'Lexmark CS730de', volume: 'Alto Volumen', ppm: '42 ppm', pricingKey: 'Color - A4 - Alto' },
      ],
    },
    {
      title: 'COLOR A3',
      subtitle: 'Producción color empresarial y escaneo inteligente',
      categoryKey: 'COLOR_A3',
      models: [
        { name: 'Ricoh IM C4500', volume: 'Medio Volumen', ppm: '45 ppm', pricingKey: 'Color - A3 - Medio' },
        { name: 'Konica Minolta Bizhub C650i', volume: 'Alto Volumen', ppm: '65 ppm', pricingKey: 'Color - A3 - Alto' },
      ],
    },
  ];

  const [selectedLocation, setSelectedLocation] = useState('');
  const [activeModalModel, setActiveModalModel] = useState(null);
  const [submittedRequest, setSubmittedRequest] = useState(false);
  const [clientEmail, setClientEmail] = useState('');
  const [collapsedCategories, setCollapsedCategories] = useState({});
  const [expandAll, setExpandAll] = useState(true);

  const toggleCategory = (categoryKey) => {
    setCollapsedCategories(prev => ({
      ...prev,
      [categoryKey]: !prev[categoryKey]
    }));
  };

  const expandAllCategories = () => {
    const allExpanded = {};
    categories.forEach(category => {
      allExpanded[category.categoryKey] = false;
    });
    setCollapsedCategories(allExpanded);
    setExpandAll(true);
  };

  const collapseAllCategories = () => {
    const allCollapsed = {};
    categories.forEach(category => {
      allCollapsed[category.categoryKey] = true;
    });
    setCollapsedCategories(allCollapsed);
    setExpandAll(false);
  };

  useEffect(() => {
    setCollapsedCategories({});
    setExpandAll(true);
  }, [selectedLocation]);

  const categories = selectedLocation ? baseCategories.map((category) => ({
    ...category,
    models: category.models
      .map((model) => {
        const pricing = pricingByLocation[selectedLocation][model.pricingKey];
        if (!pricing) return null;
        return {
          ...model,
          contract: `${pricing.cf} UF`,
          cvMono: `${pricing.cvMono} USD`,
          cvColor: pricing.cvColor !== '0,000000' ? `${pricing.cvColor} USD` : null,
        };
      })
      .filter(Boolean),
  })) : [];

  const handleEvaluationSubmit = (e) => {
    e.preventDefault();
    setSubmittedRequest(true);
    setTimeout(() => {
      setSubmittedRequest(false);
      setActiveModalModel(null);
      setClientEmail('');
    }, 2500);
  };

  const getLocationColor = () => {
    switch(selectedLocation) {
      case 'SANTIAGO': return 'from-pink-500 to-purple-600';
      case 'REGION': return 'from-pink-500 to-purple-600';
      case 'FAENA': return 'from-pink-500 to-purple-600';
      default: return 'from-pink-500 to-purple-600';
    }
  };

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-pink-500 selection:text-white">
      
      <nav className="bg-white text-slate-800 sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/V_PRINCIPAL_OFIMUNDO.png" alt="Logo Ofimundo" className="h-10 md:h-12 w-auto object-contain" />
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/10 to-purple-600/10 border border-pink-500/15 px-4 py-1.5 rounded-full text-xs font-bold text-pink-500 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Propuesta Corporativa
            </div>
            <a href="https://www.ofimundo.cl" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-slate-500 hover:text-pink-500 transition-colors">ofimundo.cl</a>
          </div>
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-pink-500 to-purple-600"></div>
      </nav>

      <section className="bg-white py-16 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-pink-500/5 to-purple-600/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-pink-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/10 to-purple-600/10 border border-pink-500/10 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest text-pink-500">Aramark Chile</div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none text-slate-900">Propuesta Ejecutiva <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">OFIMUNDO</span> para <span className="text-slate-700">Aramark</span></h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">Plataforma integral de impresión administrada (MPS) orientada a la eficiencia operacional, continuidad del servicio, seguridad documental avanzada y el control inteligente de costos.</p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-slate-50 border border-slate-200/80 px-3.5 py-2 rounded-xl font-bold text-slate-600">Cliente: Aramark</span>
              <span className="bg-slate-50 border border-slate-200/80 px-3.5 py-2 rounded-xl font-bold text-slate-600">Presentación Comercial: {today}</span>
              <span className="bg-slate-50 border border-slate-200/80 px-3.5 py-2 rounded-xl font-bold text-slate-600">Cobertura Nacional</span>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm transition-all duration-300 hover:border-pink-500/30 hover:shadow-md"><div className="text-2xl md:text-3xl font-black text-slate-900 flex items-center gap-1.5">24/7</div><div className="text-xs text-slate-500 font-semibold mt-1">Monitoreo remoto de red</div></div>
              <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm transition-all duration-300 hover:border-pink-500/30 hover:shadow-md"><div className="text-2xl md:text-3xl font-black text-slate-900 flex items-center gap-1.5">SLA</div><div className="text-xs text-slate-500 font-semibold mt-1">Soporte corporativo proactivo</div></div>
              <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm transition-all duration-300 hover:border-pink-500/30 hover:shadow-md"><div className="text-2xl md:text-3xl font-black text-slate-900 flex items-center gap-1.5">Cloud</div><div className="text-xs text-slate-500 font-semibold mt-1">Gestión y auditoría en la nube</div></div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-10 shadow-lg relative">
              <h2 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-2"><Award className="text-pink-500 w-5 h-5" /> Beneficios Clave del Servicio</h2>
              <div className="space-y-4">
                {['Reducción y optimización de costos de impresión.','Reposición automatizada y proactiva de consumibles.','Garantía total de continuidad operacional.','Políticas de impresión segura y auditoría centralizada.','Mantenimiento preventivo planificado y soporte correctivo.','Servicio técnico certificado con cobertura a nivel nacional.'].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white border border-slate-200/60 hover:border-pink-500/20 rounded-2xl p-4 transition-all duration-200 hover:shadow-sm"><CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" /><span className="text-slate-600 text-sm md:text-base leading-relaxed">{item}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900">Catálogo de Equipos</h2>
          <p className="text-slate-500 text-lg md:text-xl">Soluciones robustas y de alto rendimiento adaptadas para responder a tus niveles de demanda operacional.</p>
        </div>
        
        <div className="flex justify-center mb-8">
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="bg-white border border-slate-300 rounded-xl px-6 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 text-base font-medium"
          >
            <option value="" disabled>📌 Selecciona un sector</option>
            <option value="SANTIAGO">📍 Santiago</option>
            <option value="REGION">📍 Región</option>
            <option value="FAENA">⛏️ Faena</option>
          </select>
        </div>

        {selectedLocation && (
          <div className="flex justify-center mb-6">
            <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${getLocationColor()} text-white px-5 py-2 rounded-full text-sm font-bold shadow-md`}>
              <MapPin className="w-4 h-4" />
              Viendo catálogo para: {selectedLocation === 'SANTIAGO' ? 'Santiago' : selectedLocation === 'REGION' ? 'Región' : 'Faena'}
            </div>
          </div>
        )}

        {selectedLocation && (
          <div className="mb-10">
            {categories.length > 0 && (
              <div className="flex justify-end mb-4">
                <div className="flex gap-2 bg-slate-100 rounded-xl p-1">
                  <button onClick={expandAllCategories} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer ${expandAll ? `bg-gradient-to-r ${getLocationColor()} text-white shadow-sm` : 'text-slate-600 hover:bg-white hover:text-pink-500'}`}><Maximize2 className="w-4 h-4" /> Expandir Todo</button>
                  <button onClick={collapseAllCategories} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer ${!expandAll ? `bg-gradient-to-r ${getLocationColor()} text-white shadow-sm` : 'text-slate-600 hover:bg-white hover:text-pink-500'}`}><Minimize2 className="w-4 h-4" /> Minimizar Todo</button>
                </div>
              </div>
            )}
          </div>
        )}

        {selectedLocation ? (
          categories.length > 0 ? (
            <div className="space-y-6">
              {categories.map((category) => {
                const isCollapsed = collapsedCategories[category.categoryKey] || false;
                const modelCount = category.models.length;
                
                return (
                  <div key={category.title} className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                    <div onClick={() => toggleCategory(category.categoryKey)} className="cursor-pointer bg-gradient-to-r from-slate-50 to-white p-6 md:p-8 transition-all duration-200 hover:bg-gradient-to-r hover:from-slate-100 hover:to-slate-50">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 flex-wrap">
                            <h3 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900">{category.title}</h3>
                            <span className={`inline-flex items-center gap-1 bg-gradient-to-r ${getLocationColor()} text-white px-3 py-1 rounded-full text-xs font-bold`}>{modelCount} {modelCount === 1 ? 'equipo' : 'equipos'}</span>
                          </div>
                          <p className="text-slate-500 text-sm md:text-base mt-2">{category.subtitle}</p>
                        </div>
                        <div className="ml-4">
                          {isCollapsed ? <ChevronDown className="w-6 h-6 text-pink-500 transition-transform" /> : <ChevronUp className="w-6 h-6 text-pink-500 transition-transform" />}
                        </div>
                      </div>
                    </div>
                    {!isCollapsed && (
                      <div className="p-6 md:p-8 pt-0 border-t border-slate-100">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                          {category.models.map((model) => (
                            <div key={model.name} className="group bg-white border border-slate-200/80 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5">
                              <div>
                                <div className="bg-slate-50 border border-slate-200/50 rounded-2xl h-52 mb-6 flex flex-col items-center justify-center relative overflow-hidden transition-all group-hover:bg-slate-100/30">
                                  <img src="/printer.png" alt={model.name} className="h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-105" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
                                  <div className="hidden flex-col items-center justify-center text-slate-400"><Printer className="w-12 h-12 stroke-[1.25] mb-2" /><span className="text-xs font-medium">Fotografía Referencial</span></div>
                                  <div className="absolute top-3 left-3 bg-white/90 shadow-sm border border-slate-200 px-3 py-1 rounded-xl text-[10px] font-bold text-slate-700 uppercase">Premium Tech</div>
                                </div>
                              </div>
                              <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                  <span className="inline-block bg-slate-900 text-white font-bold px-3 py-1 rounded-lg text-[10px] uppercase tracking-wider">{model.volume}</span>
                                  <span className="inline-block bg-slate-100 border border-slate-200 text-slate-600 font-bold px-2.5 py-1 rounded-lg text-[10px] uppercase tracking-wider flex items-center gap-1"><Zap className="w-3 h-3 text-pink-500" /> {model.ppm}</span>
                                </div>
                                <h4 className="text-xl font-bold tracking-tight text-slate-900 leading-snug group-hover:text-pink-500 transition-colors min-h-[56px] flex items-center">{model.name}</h4>
                              </div>
                              <div className="space-y-2 mt-6">
                                <div className="flex justify-between items-center bg-slate-50 hover:bg-slate-100/50 rounded-xl p-3.5 border border-slate-200/60 transition-all"><span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Cargo Fijo Mensual</span><span className="font-extrabold text-slate-900 text-base">{model.contract}</span></div>
                                <div className="flex justify-between items-center bg-slate-50 hover:bg-slate-100/50 rounded-xl p-3.5 border border-slate-200/60 transition-all"><span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Costo Impresión Mono</span><span className="font-extrabold text-slate-900 text-base">{model.cvMono}</span></div>
                                {model.cvColor ? (
                                  <div className="flex justify-between items-center bg-slate-50 hover:bg-slate-100/50 rounded-xl p-3.5 border border-slate-200/60 transition-all"><span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Costo Impresión Color</span><span className="font-extrabold text-slate-900 text-base">{model.cvColor}</span></div>
                                ) : (
                                  <div className="flex justify-between items-center bg-slate-100/40 rounded-xl p-3.5 border border-slate-200/20 opacity-50"><span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Costo Impresión Color</span><span className="font-bold text-slate-400 text-xs uppercase tracking-widest">N/A</span></div>
                                )}
                              </div>
                              <button onClick={() => { setActiveModalModel(model); setSubmittedRequest(false); }} className={`w-full mt-6 bg-gradient-to-r ${getLocationColor()} text-white rounded-2xl py-3.5 font-bold hover:shadow-lg hover:opacity-95 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer`}>
                                <span>Solicitar Evaluación</span><ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-16 shadow-md border border-slate-200 text-center space-y-4">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400"><Search className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold text-slate-800">No se encontraron equipos</h3>
              <p className="text-slate-500 max-w-md mx-auto">No hay equipos disponibles para este sector.</p>
            </div>
          )
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-200">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm"><MapPin className="w-10 h-10 text-pink-500" /></div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Seleccione un sector para ver el catálogo</h2>
            <p className="text-slate-500">Elija Santiago, Región o Faena para visualizar los equipos disponibles</p>
          </div>
        )}
      </section>

      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="bg-gradient-to-br from-pink-500/5 via-white to-purple-600/5 border border-slate-200 rounded-[40px] p-8 md:p-16 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-6 space-y-6">
              <div className="uppercase tracking-[4px] text-xs font-bold text-pink-500">EFICIENCIA CORPORATIVA</div>
              <h3 className="text-3xl md:text-4xl font-black leading-tight text-slate-900">Una solución moderna diseñada para optimizar toda la operación documental de Aramark</h3>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">OFIMUNDO integra hardware de nivel empresarial con software de monitoreo de última generación, continuidad del servicio automatizada y un equipo técnico de soporte de primer nivel para brindar una experiencia estable.</p>
            </div>
            <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
              {[{ text: 'Reducción drástica de costos operacionales', icon: DollarSign }, { text: 'Consola web de administración centralizada', icon: Cpu }, { text: 'Logística de consumibles 100% automatizada', icon: Clock }, { text: 'Soporte técnico directo especializado', icon: ShieldCheck }, { text: 'Equipamiento robusto de alta durabilidad', icon: Printer }, { text: 'Escalabilidad comercial y cobertura país', icon: Globe }].map((item, idx) => {
                const IconComponent = item.icon;
                return (<div key={idx} className="bg-white border border-slate-200 hover:border-pink-500/30 rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between min-h-[120px] shadow-sm hover:shadow-md"><div className="bg-gradient-to-r from-pink-500/10 to-purple-600/10 w-8 h-8 rounded-lg flex items-center justify-center mb-3"><IconComponent className="w-4 h-4 text-pink-500" /></div><div className="font-bold text-slate-800 text-sm leading-snug">{item.text}</div></div>);
              })}
            </div>
          </div>
        </div>
      </section>


      <footer className="bg-white text-slate-800 py-16 px-6 relative border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="space-y-4"><div className="flex items-center"><img src="/V_PRINCIPAL_OFIMUNDO.png" alt="Logo Ofimundo Footer" className="h-10 w-auto object-contain" /></div><div className="text-slate-500 text-sm font-semibold">Soluciones Corporativas de Impresión y Gestión Documental</div></div>
          <div className="flex flex-col md:items-end gap-2 text-slate-600 text-sm font-bold"><a href="https://www.ofimundo.cl" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors flex items-center gap-1.5"><Globe className="w-4 h-4 text-pink-500" /> www.ofimundo.cl</a><a href="mailto:contacto@ofimundo.cl" className="hover:text-pink-500 transition-colors flex items-center gap-1.5"><Mail className="w-4 h-4 text-pink-500" /> contacto@ofimundo.cl</a><span className="text-slate-400 text-xs font-semibold mt-2">© {new Date().getFullYear()} OFIMUNDO. Todos los derechos reservados.</span></div>
        </div>
      </footer>

      {activeModalModel && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl overflow-hidden border border-slate-200 relative">
            <button onClick={() => setActiveModalModel(null)} className="absolute right-4 top-4 text-slate-500 hover:text-slate-700 bg-slate-100 p-2 rounded-full transition-all cursor-pointer z-10"><X className="w-4 h-4" /></button>
            <div className="bg-white p-6 pb-8 text-center flex flex-col items-center border-b border-slate-200 relative"><img src="/V_PRINCIPAL_OFIMUNDO.png" alt="Logo Ofimundo Modal" className="h-9 w-auto object-contain mb-3" /><span className="text-[10px] font-extrabold text-pink-500 uppercase tracking-widest">Evaluación Comercial</span></div>
            {submittedRequest ? (
              <div className="p-8 text-center space-y-6"><div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600 animate-bounce"><CheckCircle2 className="w-8 h-8" /></div><div className="space-y-2"><h3 className="text-2xl font-black text-slate-900">¡Solicitud Enviada!</h3><p className="text-slate-500 text-sm">Hemos registrado tu interés en el equipo <br /><strong>{activeModalModel.name}</strong>.</p></div><div className="text-xs bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-500 font-semibold">Un consultor comercial de OFIMUNDO se contactará al correo ingresado en breve para presentar la evaluación.</div></div>
            ) : (
              <form onSubmit={handleEvaluationSubmit} className="p-8 space-y-6">
                <div className="space-y-2"><h3 className="text-2xl font-black text-slate-900 leading-tight">Solicitar Propuesta</h3><p className="text-slate-500 text-xs leading-relaxed font-semibold">Obtén una propuesta de costo-beneficio personalizada para tu sucursal o centro de costos de Aramark.</p></div>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-center gap-3"><div className="bg-white border border-slate-200 p-1.5 rounded-xl"><img src="/printer.png" alt="Printer Brief" className="w-10 h-10 object-contain" /></div><div><h4 className="font-extrabold text-slate-900 text-sm">{activeModalModel.name}</h4><span className="text-[10px] bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold px-2.5 py-0.5 rounded-md uppercase mt-1 inline-block">{activeModalModel.volume}</span></div></div>
                <div className="space-y-4"><div><label className="block text-slate-500 font-bold text-[10px] uppercase tracking-wider mb-1.5">Correo Corporativo Aramark</label><input type="email" required placeholder="ejemplo@aramark.cl" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} className="w-full bg-slate-50 border border-slate-200 focus:border-pink-500 focus:bg-white focus:outline-none rounded-xl p-3.5 text-sm text-slate-700 font-medium placeholder-slate-400 transition-all shadow-xs" /></div><div><label className="block text-slate-500 font-bold text-[10px] uppercase tracking-wider mb-1.5">Centro de Costos / Proyecto (Opcional)</label><input type="text" placeholder="Ej: Sucursal Santiago Centro" className="w-full bg-slate-50 border border-slate-200 focus:border-pink-500 focus:bg-white focus:outline-none rounded-xl p-3.5 text-sm text-slate-700 font-medium placeholder-slate-400 transition-all shadow-xs" /></div></div>
                <button type="submit" className={`w-full bg-gradient-to-r ${selectedLocation ? getLocationColor() : 'from-pink-500 to-purple-600'} text-white rounded-2xl py-4 font-bold hover:shadow-lg hover:opacity-95 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer`}><TrendingUp className="w-4 h-4" /><span>Generar Solicitud</span></button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}