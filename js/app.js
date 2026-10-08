'use strict';

/* ============================================================
   LOCALES  (T04)
   ============================================================ */

const LOCALES = {
  es: {
    // Navegación
    'nav.dashboard':        'Inicio',
    'nav.movimientos':      'Consumos',
    'nav.beneficios':       'Beneficios',
    'nav.resumen':          'Resumen',
    'nav.configuracion':    'Configuración',
    // Topbar
    'topbar.notifications': 'Notificaciones',
    'topbar.search':        'Búsqueda',
    // Sidebar
    'sidebar.principal':    'Principal',
    'sidebar.cuenta':       'Cuenta',
    'sidebar.collapse':     'Ocultar menú',
    'sidebar.expand':       'Mostrar menú',
    // Usuario
    'user.role':            'Caja de ahorro',
    // Dashboard
    'dashboard.greeting':         'Buenos días, Diego 👋',
    'dashboard.balance_label':    'Saldo disponible · Caja de ahorro ARS',
    'dashboard.last_movement':    'Último movimiento:',
    'dashboard.recent_movements': 'Últimos movimientos',
    'dashboard.see_all':          'Ver todos →',
    'dashboard.my_card':          'Mi tarjeta',
    'dashboard.card_limit':       'Límite disponible',
    'dashboard.card_status':      'Al día',
    'dashboard.active_promos':    'Promos activas',
    // Acciones rápidas
    'qa.consumos':    'Mis consumos',
    'qa.descargar':   'Descargar resumen',
    'qa.beneficios':  'Beneficios',
    'qa.transferir':  'Transferir',
    // Botones hero
    'hero.ver_consumos':      'Ver consumos',
    'hero.descargar_resumen': 'Descargar resumen',
    'hero.ver_beneficios':    'Ver beneficios',
    // Movimientos
    'mov.title':              'Consumos',
    'mov.subtitle':           'Historial de movimientos de tu cuenta',
    'mov.expenses':           'Gastos este mes',
    'mov.income':             'Ingresos este mes',
    'mov.count':              'Movimientos',
    'mov.search_placeholder': '🔍  Buscar transacción...',
    'mov.all_categories':     'Todas las categorías',
    'mov.download':           'Descargar resumen',
    'mov.col_description':    'Descripción',
    'mov.col_category':       'Categoría',
    'mov.col_date':           'Fecha',
    'mov.col_amount':         'Monto',
    'mov.col_status':         'Estado',
    'mov.empty':              'No se encontraron movimientos.',
    'mov.status_credited':    'Acreditado',
    // Categorías
    'cat.comidas':         'Comidas',
    'cat.supermercado':    'Supermercado',
    'cat.entretenimiento': 'Entretenimiento',
    'cat.transporte':      'Transporte',
    'cat.sueldo':          'Sueldo',
    'cat.tecnologia':      'Tecnología',
    // Beneficios
    'ben.title':                  'Beneficios exclusivos',
    'ben.subtitle':               'Descuentos y promos para vos por ser cliente NovaBanco',
    'ben.filter_todos':           'Todos',
    'ben.filter_gastronomia':     '🍔 Gastronomía',
    'ben.filter_viajes':          '✈️ Viajes',
    'ben.filter_tech':            '💻 Tecnología',
    'ben.filter_salud':           '🏥 Salud',
    'ben.filter_entretenimiento': '🎬 Entretenimiento',
    'ben.empty':                  'No hay beneficios en esta categoría.',
    // Modal
    'modal.title':           'Descargar resumen',
    'modal.desc':            'Seleccioná el período y el formato que querés descargar.',
    'modal.junio_label':     'Junio 2026',
    'modal.junio_sub':       'Del 1 al 22 de junio',
    'modal.mayo_label':      'Mayo 2026',
    'modal.mayo_sub':        'Mes completo — 38 movimientos',
    'modal.q2_label':        '2do trimestre 2026',
    'modal.q2_sub':          'Abril, Mayo y Junio',
    'modal.cancel':          'Cancelar',
    'modal.download_btn':    'Descargar PDF',
    'modal.generating':      'Generando tu resumen',
    'modal.generating_desc': 'Esto tarda unos segundos...',
    'modal.done_title':      '¡Listo!',
    'modal.done_desc':       'Tu resumen fue descargado correctamente. Lo podés encontrar en tu carpeta de Descargas.',
    'modal.close':           'Cerrar',
    // Pasos de descarga
    'dl.step1': 'Obteniendo movimientos...',
    'dl.step2': 'Aplicando formato...',
    'dl.step3': 'Generando PDF...',
    'dl.step4': 'Verificando documento...',
    'dl.step5': '¡Listo!',
    // Balance toggle
    'balance.toggle_visible': 'Mostrar saldo',
    'balance.toggle_hidden': 'Ocultar saldo',
    // NovaPoints
    'pts.title': 'NovaPoints',
    'pts.subtitle': 'Acumulá puntos con tus consumos y canjealos por beneficios',
    'pts.balance_label': 'Tu saldo de puntos',
    'pts.unit': 'puntos',
    'pts.rule': '1 punto cada $100 de consumo',
    'pts.catalog_title': 'Canjeá tus puntos',
    'pts.history_title': 'Historial de puntos',
    'pts.history_empty': 'Todavía no tenés movimientos de puntos.',
    'pts.redeem_btn': 'Canjear',
    'pts.insufficient': 'Puntos insuficientes',
    'pts.confirm_title': 'Confirmar canje',
    'pts.confirm_desc': 'Vas a canjear {title} por {cost} puntos.',
    'pts.confirm_btn': 'Confirmar canje',
    'pts.cancel': 'Cancelar',
    'pts.earn_label': 'Compra en {name}',
    'pts.redeem_label': 'Canje: {title}',
    'pts.type_discount': 'Descuento',
    'pts.type_cashback': 'Cashback',
    'pts.type_miles': 'Millas',
    'pts.dash_link': 'Ver NovaPoints',
    'pts.r1.title': '5% de descuento en Rappi',
    'pts.r1.desc': 'Descuento en tu próximo pedido.',
    'pts.r2.title': '10% de descuento en supermercados',
    'pts.r2.desc': 'Válido en comercios adheridos.',
    'pts.r3.title': '$2.000 de cashback',
    'pts.r3.desc': 'Se registra como canje de cashback.',
    'pts.r4.title': '2x1 en Cinemark',
    'pts.r4.desc': 'Dos entradas al precio de una.',
    'pts.r5.title': '$10.000 de cashback',
    'pts.r5.desc': 'Se registra como canje de cashback.',
    'pts.r6.title': '6.000 millas aéreas',
    'pts.r6.desc': 'Sumalas a tu programa de millas.',
  },

  en: {
    // Navigation
    'nav.dashboard':        'Home',
    'nav.movimientos':      'Expenses',
    'nav.beneficios':       'Benefits',
    'nav.resumen':          'Summary',
    'nav.configuracion':    'Settings',
    // Topbar
    'topbar.notifications': 'Notifications',
    'topbar.search':        'Search',
    // Sidebar
    'sidebar.principal':    'Main',
    'sidebar.cuenta':       'Account',
    'sidebar.collapse':     'Hide menu',
    'sidebar.expand':       'Show menu',
    // User
    'user.role':            'Savings account',
    // Dashboard
    'dashboard.greeting':         'Good morning, Diego 👋',
    'dashboard.balance_label':    'Available balance · Savings account ARS',
    'dashboard.last_movement':    'Last transaction:',
    'dashboard.recent_movements': 'Recent transactions',
    'dashboard.see_all':          'See all →',
    'dashboard.my_card':          'My card',
    'dashboard.card_limit':       'Available limit',
    'dashboard.card_status':      'Up to date',
    'dashboard.active_promos':    'Active promos',
    // Quick actions
    'qa.consumos':    'My expenses',
    'qa.descargar':   'Download summary',
    'qa.beneficios':  'Benefits',
    'qa.transferir':  'Transfer',
    // Hero buttons
    'hero.ver_consumos':      'View expenses',
    'hero.descargar_resumen': 'Download summary',
    'hero.ver_beneficios':    'View benefits',
    // Movements
    'mov.title':              'Expenses',
    'mov.subtitle':           'Your account transaction history',
    'mov.expenses':           'Expenses this month',
    'mov.income':             'Income this month',
    'mov.count':              'Transactions',
    'mov.search_placeholder': '🔍  Search transaction...',
    'mov.all_categories':     'All categories',
    'mov.download':           'Download summary',
    'mov.col_description':    'Description',
    'mov.col_category':       'Category',
    'mov.col_date':           'Date',
    'mov.col_amount':         'Amount',
    'mov.col_status':         'Status',
    'mov.empty':              'No transactions found.',
    'mov.status_credited':    'Credited',
    // Categories
    'cat.comidas':         'Food',
    'cat.supermercado':    'Grocery',
    'cat.entretenimiento': 'Entertainment',
    'cat.transporte':      'Transport',
    'cat.sueldo':          'Salary',
    'cat.tecnologia':      'Technology',
    // Benefits
    'ben.title':                  'Exclusive benefits',
    'ben.subtitle':               'Discounts and promos for you as a NovaBanco customer',
    'ben.filter_todos':           'All',
    'ben.filter_gastronomia':     '🍔 Dining',
    'ben.filter_viajes':          '✈️ Travel',
    'ben.filter_tech':            '💻 Technology',
    'ben.filter_salud':           '🏥 Health',
    'ben.filter_entretenimiento': '🎬 Entertainment',
    'ben.empty':                  'No benefits in this category.',
    // Modal
    'modal.title':           'Download summary',
    'modal.desc':            'Select the period and format you want to download.',
    'modal.junio_label':     'June 2026',
    'modal.junio_sub':       'June 1 to 22',
    'modal.mayo_label':      'May 2026',
    'modal.mayo_sub':        'Full month — 38 transactions',
    'modal.q2_label':        'Q2 2026',
    'modal.q2_sub':          'April, May and June',
    'modal.cancel':          'Cancel',
    'modal.download_btn':    'Download PDF',
    'modal.generating':      'Generating your summary',
    'modal.generating_desc': 'This takes a few seconds...',
    'modal.done_title':      'Done!',
    'modal.done_desc':       'Your summary was downloaded successfully. You can find it in your Downloads folder.',
    'modal.close':           'Close',
    // Download steps
    'dl.step1': 'Fetching transactions...',
    'dl.step2': 'Applying format...',
    'dl.step3': 'Generating PDF...',
    'dl.step4': 'Verifying document...',
    'dl.step5': 'Done!',
    // Balance toggle
    'balance.toggle_visible': 'Show balance',
    'balance.toggle_hidden': 'Hide balance',
    // NovaPoints
    'pts.title': 'NovaPoints',
    'pts.subtitle': 'Earn points with your purchases and redeem them for benefits',
    'pts.balance_label': 'Your points balance',
    'pts.unit': 'points',
    'pts.rule': '1 point for every $100 spent',
    'pts.catalog_title': 'Redeem your points',
    'pts.history_title': 'Points history',
    'pts.history_empty': 'You don\'t have any points activity yet.',
    'pts.redeem_btn': 'Redeem',
    'pts.insufficient': 'Not enough points',
    'pts.confirm_title': 'Confirm redemption',
    'pts.confirm_desc': 'You are about to redeem {title} for {cost} points.',
    'pts.confirm_btn': 'Confirm redemption',
    'pts.cancel': 'Cancel',
    'pts.earn_label': 'Purchase at {name}',
    'pts.redeem_label': 'Redemption: {title}',
    'pts.type_discount': 'Discount',
    'pts.type_cashback': 'Cashback',
    'pts.type_miles': 'Miles',
    'pts.dash_link': 'View NovaPoints',
    'pts.r1.title': '5% off at Rappi',
    'pts.r1.desc': 'Discount on your next order.',
    'pts.r2.title': '10% off at supermarkets',
    'pts.r2.desc': 'Valid at participating stores.',
    'pts.r3.title': '$2,000 cashback',
    'pts.r3.desc': 'Recorded as a cashback redemption.',
    'pts.r4.title': '2-for-1 at Cinemark',
    'pts.r4.desc': 'Two tickets for the price of one.',
    'pts.r5.title': '$10,000 cashback',
    'pts.r5.desc': 'Recorded as a cashback redemption.',
    'pts.r6.title': '6,000 air miles',
    'pts.r6.desc': 'Add them to your miles program.',
  },

  pt: {
    // Navegação
    'nav.dashboard':        'Início',
    'nav.movimientos':      'Despesas',
    'nav.beneficios':       'Benefícios',
    'nav.resumen':          'Resumo',
    'nav.configuracion':    'Configurações',
    // Topbar
    'topbar.notifications': 'Notificações',
    'topbar.search':        'Busca',
    // Sidebar
    'sidebar.principal':    'Principal',
    'sidebar.cuenta':       'Conta',
    'sidebar.collapse':     'Ocultar menu',
    'sidebar.expand':       'Mostrar menu',
    // Usuário
    'user.role':            'Conta poupança',
    // Dashboard
    'dashboard.greeting':         'Bom dia, Diego 👋',
    'dashboard.balance_label':    'Saldo disponível · Conta poupança ARS',
    'dashboard.last_movement':    'Última movimentação:',
    'dashboard.recent_movements': 'Últimas movimentações',
    'dashboard.see_all':          'Ver todas →',
    'dashboard.my_card':          'Meu cartão',
    'dashboard.card_limit':       'Limite disponível',
    'dashboard.card_status':      'Em dia',
    'dashboard.active_promos':    'Promoções ativas',
    // Ações rápidas
    'qa.consumos':    'Minhas despesas',
    'qa.descargar':   'Baixar resumo',
    'qa.beneficios':  'Benefícios',
    'qa.transferir':  'Transferir',
    // Botões hero
    'hero.ver_consumos':      'Ver despesas',
    'hero.descargar_resumen': 'Baixar resumo',
    'hero.ver_beneficios':    'Ver benefícios',
    // Movimentações
    'mov.title':              'Despesas',
    'mov.subtitle':           'Histórico de movimentações da sua conta',
    'mov.expenses':           'Gastos este mês',
    'mov.income':             'Receitas este mês',
    'mov.count':              'Movimentações',
    'mov.search_placeholder': '🔍  Buscar transação...',
    'mov.all_categories':     'Todas as categorias',
    'mov.download':           'Baixar resumo',
    'mov.col_description':    'Descrição',
    'mov.col_category':       'Categoria',
    'mov.col_date':           'Data',
    'mov.col_amount':         'Valor',
    'mov.col_status':         'Status',
    'mov.empty':              'Nenhuma movimentação encontrada.',
    'mov.status_credited':    'Creditado',
    // Categorias
    'cat.comidas':         'Alimentação',
    'cat.supermercado':    'Supermercado',
    'cat.entretenimiento': 'Entretenimento',
    'cat.transporte':      'Transporte',
    'cat.sueldo':          'Salário',
    'cat.tecnologia':      'Tecnologia',
    // Benefícios
    'ben.title':                  'Benefícios exclusivos',
    'ben.subtitle':               'Descontos e promoções para você por ser cliente NovaBanco',
    'ben.filter_todos':           'Todos',
    'ben.filter_gastronomia':     '🍔 Gastronomia',
    'ben.filter_viajes':          '✈️ Viagens',
    'ben.filter_tech':            '💻 Tecnologia',
    'ben.filter_salud':           '🏥 Saúde',
    'ben.filter_entretenimiento': '🎬 Entretenimento',
    'ben.empty':                  'Não há benefícios nesta categoria.',
    // Modal
    'modal.title':           'Baixar resumo',
    'modal.desc':            'Selecione o período e o formato que deseja baixar.',
    'modal.junio_label':     'Junho 2026',
    'modal.junio_sub':       'De 1 a 22 de junho',
    'modal.mayo_label':      'Maio 2026',
    'modal.mayo_sub':        'Mês completo — 38 movimentações',
    'modal.q2_label':        '2º trimestre 2026',
    'modal.q2_sub':          'Abril, maio e junho',
    'modal.cancel':          'Cancelar',
    'modal.download_btn':    'Baixar PDF',
    'modal.generating':      'Gerando seu resumo',
    'modal.generating_desc': 'Isso leva alguns segundos...',
    'modal.done_title':      'Pronto!',
    'modal.done_desc':       'Seu resumo foi baixado com sucesso. Você pode encontrá-lo na sua pasta de Downloads.',
    'modal.close':           'Fechar',
    // Etapas do download
    'dl.step1': 'Obtendo movimentações...',
    'dl.step2': 'Aplicando formato...',
    'dl.step3': 'Gerando PDF...',
    'dl.step4': 'Verificando documento...',
    'dl.step5': 'Pronto!',
    // Balance toggle
    'balance.toggle_visible': 'Mostrar saldo',
    'balance.toggle_hidden': 'Ocultar saldo',
    // NovaPoints
    'pts.title': 'NovaPoints',
    'pts.subtitle': 'Acumule pontos com suas compras e troque por benefícios',
    'pts.balance_label': 'Seu saldo de pontos',
    'pts.unit': 'pontos',
    'pts.rule': '1 ponto a cada $100 em compras',
    'pts.catalog_title': 'Troque seus pontos',
    'pts.history_title': 'Histórico de pontos',
    'pts.history_empty': 'Você ainda não tem movimentações de pontos.',
    'pts.redeem_btn': 'Trocar',
    'pts.insufficient': 'Pontos insuficientes',
    'pts.confirm_title': 'Confirmar troca',
    'pts.confirm_desc': 'Você vai trocar {title} por {cost} pontos.',
    'pts.confirm_btn': 'Confirmar troca',
    'pts.cancel': 'Cancelar',
    'pts.earn_label': 'Compra em {name}',
    'pts.redeem_label': 'Troca: {title}',
    'pts.type_discount': 'Desconto',
    'pts.type_cashback': 'Cashback',
    'pts.type_miles': 'Milhas',
    'pts.dash_link': 'Ver NovaPoints',
    'pts.r1.title': '5% de desconto no Rappi',
    'pts.r1.desc': 'Desconto no seu próximo pedido.',
    'pts.r2.title': '10% de desconto em supermercados',
    'pts.r2.desc': 'Válido em lojas participantes.',
    'pts.r3.title': '$2.000 de cashback',
    'pts.r3.desc': 'Registrado como troca de cashback.',
    'pts.r4.title': '2x1 no Cinemark',
    'pts.r4.desc': 'Dois ingressos pelo preço de um.',
    'pts.r5.title': '$10.000 de cashback',
    'pts.r5.desc': 'Registrado como troca de cashback.',
    'pts.r6.title': '6.000 milhas aéreas',
    'pts.r6.desc': 'Some ao seu programa de milhas.',
  },
};


/* ============================================================
   I18n  (T05)
   ============================================================ */

const I18n = (() => {

  let activeLocale = 'es';

  function t(key) {
    return (LOCALES[activeLocale] && LOCALES[activeLocale][key]) ||
           LOCALES.es[key] ||
           key;
  }

  function getLocale() { return activeLocale; }

  function applyToDOM() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = t(el.dataset.i18nPlaceholder);
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      el.title = t(el.dataset.i18nTitle);
    });
  }

  function setLocale(lang) {
    if (!LOCALES[lang]) return;
    activeLocale = lang;
    try { localStorage.setItem('novabanco-locale', lang); } catch(e) {}

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    applyToDOM();
    Dashboard.render();
    Movements.render();
    Beneficios.filter(Beneficios.getActiveCategory());
    NovaPoints.render();
    Router.refreshTitle();
    SidebarToggle.updateUI();
  }

  function init() {
    try {
      const saved = localStorage.getItem('novabanco-locale');
      if (saved && LOCALES[saved]) activeLocale = saved;
    } catch(e) {}
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === activeLocale);
    });
    applyToDOM();
  }

  return { t, getLocale, setLocale, applyToDOM, init };

})();


/* ============================================================
   DATA
   En un proyecto real esto vendría de una API REST.
   ============================================================ */

const DATA = {

  user: {
    name:    'Diego García',
    initials:'DG',
    account: 'Caja de ahorro',
    balance: 1247890.32,
    card: {
      last4:  '4821',
      holder: 'DIEGO GARCÍA',
      expiry: '09/28',
      brand:  'VISA',
      limit:  850000,
    },
  },

  movements: [
    { id:1,  name:'Mercado Pago',    category:'Comidas',         date:'22 jun', amount: -12500,  icon:'🛵', color:'#00B4D8' },
    { id:2,  name:'Sueldo NovaTech', category:'Sueldo',          date:'21 jun', amount:+450000,  icon:'💼', color:'#34C759' },
    { id:3,  name:'Coto Digital',    category:'Supermercado',    date:'20 jun', amount: -8940,   icon:'🛒', color:'#FF9500' },
    { id:4,  name:'Netflix',         category:'Entretenimiento', date:'18 jun', amount: -3200,   icon:'🎬', color:'#E50914' },
    { id:5,  name:'Uber',            category:'Transporte',      date:'17 jun', amount: -1850,   icon:'🚗', color:'#333333' },
    { id:6,  name:'Steam',           category:'Tecnología',      date:'15 jun', amount: -22000,  icon:'🎮', color:'#1b2838' },
    { id:7,  name:'Farmacity',       category:'Supermercado',    date:'14 jun', amount: -4320,   icon:'💊', color:'#009688' },
    { id:8,  name:'Rappi',           category:'Comidas',         date:'13 jun', amount: -7600,   icon:'🍔', color:'#FF441A' },
    { id:9,  name:'Spotify',         category:'Entretenimiento', date:'11 jun', amount: -1790,   icon:'🎵', color:'#1DB954' },
    { id:10, name:'YPF Combustible', category:'Transporte',      date:'10 jun', amount: -25200,  icon:'⛽', color:'#0066B3' },
    { id:11, name:'Personal Flow',   category:'Entretenimiento', date:'08 jun', amount: -4200,   icon:'📺', color:'#E91E8C' },
    { id:12, name:'La Anónima',      category:'Supermercado',    date:'05 jun', amount: -11300,  icon:'🛒', color:'#FF6B35' },
  ],

  beneficios: [
    {
      id:1, title:'30% OFF todos los pedidos',
      desc:'Descuento exclusivo para clientes NovaBanco pagando con tu tarjeta Visa.',
      tag:'Gastronomía', emoji:'🍔', bg:'#1a0a00', vto:'Vence 30 jun',
      category:'gastronomia', badge:'badge-success', badgeText:'Activo',
    },
    {
      id:2, title:'Puntos dobles en vuelos',
      desc:'Acumulá el doble de puntos en todas tus compras de vuelos durante julio.',
      tag:'Viajes', emoji:'✈️', bg:'#000a1a', vto:'Todo julio',
      category:'viajes', badge:'badge-info', badgeText:'Nuevo',
    },
    {
      id:3, title:'15% OFF en Frávega',
      desc:'Comprá electrónica y electrodomésticos con descuento directo.',
      tag:'Tecnología', emoji:'💻', bg:'#0a0a1a', vto:'Vence 15 jul',
      category:'tech', badge:'badge-success', badgeText:'Activo',
    },
    {
      id:4, title:'2x1 en Cinemark',
      desc:'Llevate dos entradas al precio de una los días martes y miércoles.',
      tag:'Entretenimiento', emoji:'🎬', bg:'#1a000a', vto:'Permanente',
      category:'entretenimiento', badge:'badge-success', badgeText:'Activo',
    },
    {
      id:5, title:'Consultas médicas sin costo',
      desc:'Accedé a teleconsultas ilimitadas con médicos clínicos y especialistas.',
      tag:'Salud', emoji:'🏥', bg:'#001a0a', vto:'Incluido en tu cuenta',
      category:'salud', badge:'badge-success', badgeText:'Activo',
    },
    {
      id:6, title:'20% en restaurantes adheridos',
      desc:'Más de 500 restaurantes en todo el país con descuento directo.',
      tag:'Gastronomía', emoji:'🍽️', bg:'#1a0a00', vto:'Vence 31 jul',
      category:'gastronomia', badge:'badge-warning', badgeText:'Por vencer',
    },
    {
      id:7, title:'Seguro de viaje gratis',
      desc:'Cobertura internacional sin costo adicional al comprar tu pasaje con tu tarjeta.',
      tag:'Viajes', emoji:'🌎', bg:'#000a1a', vto:'Siempre activo',
      category:'viajes', badge:'badge-success', badgeText:'Activo',
    },
    {
      id:8, title:'HBO Max incluido',
      desc:'3 meses de HBO Max sin costo al activar tu tarjeta NovaBanco Black.',
      tag:'Entretenimiento', emoji:'📱', bg:'#0a001a', vto:'Oferta limitada',
      category:'entretenimiento', badge:'badge-danger', badgeText:'Últimas unidades',
    },
  ],

  rewards: [
    { id:1, emoji:'🍔', bg:'#1a0a00', cost:100,  type:'discount', titleKey:'pts.r1.title', descKey:'pts.r1.desc' },
    { id:2, emoji:'🛒', bg:'#001a0a', cost:300,  type:'discount', titleKey:'pts.r2.title', descKey:'pts.r2.desc' },
    { id:3, emoji:'💵', bg:'#0a1a00', cost:500,  type:'cashback', titleKey:'pts.r3.title', descKey:'pts.r3.desc' },
    { id:4, emoji:'🎬', bg:'#1a000a', cost:1000, type:'discount', titleKey:'pts.r4.title', descKey:'pts.r4.desc' },
    { id:5, emoji:'💰', bg:'#0a1a00', cost:2500, type:'cashback', titleKey:'pts.r5.title', descKey:'pts.r5.desc' },
    { id:6, emoji:'✈️', bg:'#000a1a', cost:5000, type:'miles',    titleKey:'pts.r6.title', descKey:'pts.r6.desc' },
  ],

};


/* ============================================================
   UTILS
   ============================================================ */

function formatARS(amount) {
  return '$' + Math.abs(amount).toLocaleString('es-AR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

function formatAmountSigned(amount) {
  return (amount < 0 ? '-' : '+') + formatARS(amount);
}

function getTodayLabel() {
  return new Date().toLocaleDateString('es-AR', {
    weekday: 'long',
    day:     'numeric',
    month:   'long',
    year:    'numeric',
  });
}


/* ============================================================
   ROUTER  (T09 — usa I18n.t() para títulos)
   ============================================================ */

const Router = (() => {

  const VIEW_TITLE_KEYS = {
    dashboard:   'nav.dashboard',
    movimientos: 'nav.movimientos',
    beneficios:  'nav.beneficios',
  };

  let currentView = 'dashboard';

  function navigate(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-item[data-view]').forEach(n => n.classList.remove('active'));

    const view = document.getElementById('view-' + viewId);
    if (!view) { console.warn(`Router: vista "${viewId}" no encontrada`); return; }
    view.classList.add('active');

    const navItem = document.querySelector(`.nav-item[data-view="${viewId}"]`);
    if (navItem) navItem.classList.add('active');

    currentView = viewId;
    const titleEl = document.getElementById('topbar-title');
    if (titleEl) titleEl.textContent = I18n.t(VIEW_TITLE_KEYS[viewId] || viewId);
  }

  function refreshTitle() {
    const titleEl = document.getElementById('topbar-title');
    if (titleEl) titleEl.textContent = I18n.t(VIEW_TITLE_KEYS[currentView] || currentView);
  }

  return { navigate, refreshTitle };

})();


/* ============================================================
   THEME  (T02)
   ============================================================ */

const Theme = (() => {

  const MOON_SVG = `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>`;

  const SUN_SVG = `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>`;

  function getTheme() {
    return document.documentElement.dataset.theme || 'dark';
  }

  function updateIcon() {
    const btn = document.getElementById('theme-toggle-btn');
    if (!btn) return;
    btn.innerHTML = getTheme() === 'dark' ? MOON_SVG : SUN_SVG;
  }

  function toggle() {
    const next = getTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('novabanco-theme', next); } catch(e) {}
    updateIcon();
  }

  function init() {
    updateIcon();
  }

  return { init, toggle };

})();


/* ============================================================
   SIDEBAR TOGGLE
   ============================================================ */

const SidebarToggle = (() => {

  function isCollapsed() {
    return document.documentElement.dataset.sidebarCollapsed === 'true';
  }

  function updateUI() {
    const btn = document.getElementById('sidebar-toggle-btn');
    if (!btn) return;
    const collapsed = isCollapsed();
    const label = I18n.t(collapsed ? 'sidebar.expand' : 'sidebar.collapse');
    btn.setAttribute('aria-expanded', String(!collapsed));
    btn.setAttribute('title', label);
    btn.setAttribute('aria-label', label);
  }

  function apply(collapsed) {
    document.documentElement.dataset.sidebarCollapsed = collapsed ? 'true' : 'false';
    try { localStorage.setItem('novabanco-sidebar-collapsed', collapsed ? 'true' : 'false'); } catch(e) {}
    updateUI();
  }

  function toggle() {
    apply(!isCollapsed());
  }

  function init() {
    updateUI();
  }

  return { init, toggle, updateUI };

})();


/* ============================================================
   DASHBOARD MODULE  (Balance toggle + rendering)
   ============================================================ */

const Dashboard = (() => {

  let balanceVisible = true;

  // Initialize balanceVisible from localStorage
  function initBalanceVisibility() {
    try {
      const saved = localStorage.getItem('novabanco-balance-visible');
      if (saved !== null) {
        balanceVisible = JSON.parse(saved);
      }
    } catch(e) {
      console.warn('Failed to read balance visibility from localStorage');
    }
  }

  // Toggle and persist balance visibility
  function toggleBalanceVisibility() {
    balanceVisible = !balanceVisible;
    try {
      localStorage.setItem('novabanco-balance-visible', JSON.stringify(balanceVisible));
    } catch(e) {
      console.warn('Failed to persist balance visibility to localStorage');
    }
    renderBalance();
    updateBalanceToggleUI();
    updateBalanceSensitiveElements();
    NovaPoints.render();
  }

  function isBalanceVisible() { return balanceVisible; }

  // Render balance with mask if hidden
  function renderBalance() {
    const el = document.getElementById('balance-amount');
    if (!el) return;

    let html;
    if (balanceVisible) {
      // Show actual balance
      const [int, dec] = DATA.user.balance.toLocaleString('es-AR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).split(',');
      html = `<span class="balance-currency">$</span>${int}<span style="font-size:24px;opacity:.5">,${dec}</span>`;
    } else {
      // Show masked balance (8 bullets)
      html = `<span class="balance-currency">$</span><span class="balance-masked">••••••••</span>`;
    }

    el.innerHTML = html;
  }

  // Update toggle button icon and tooltip
  function updateBalanceToggleUI() {
    const btn = document.getElementById('balance-toggle-btn');
    if (!btn) return;

    const visibleIcon = btn.querySelector('.balance-toggle-icon.visible');
    const hiddenIcon = btn.querySelector('.balance-toggle-icon.hidden');
    
    if (visibleIcon) visibleIcon.style.display = balanceVisible ? 'block' : 'none';
    if (hiddenIcon) hiddenIcon.style.display = balanceVisible ? 'none' : 'block';

    // Update tooltip and aria-label
    const tooltipKey = balanceVisible ? 'balance.toggle_hidden' : 'balance.toggle_visible';
    const tooltipText = I18n.t(tooltipKey);
    btn.setAttribute('title', tooltipText);
    btn.setAttribute('aria-label', tooltipText);
  }

  // Hide/show balance-sensitive elements (amounts, limits)
  function updateBalanceSensitiveElements() {
    const sensitiveElements = document.querySelectorAll('[data-balance-sensitive]');
    sensitiveElements.forEach(el => {
      el.style.visibility = balanceVisible ? 'visible' : 'hidden';
      el.style.opacity = balanceVisible ? '1' : '0';
      el.style.transition = 'opacity 0.2s ease';
    });
  }

  function renderTarjeta() {
    const el = document.getElementById('tarjeta-limit');
    if (el) {
      el.textContent = formatARS(DATA.user.card.limit);
      el.setAttribute('data-balance-sensitive', '');
    }
  }

  function renderRecentMovements() {
    const container = document.getElementById('recent-movements');
    if (!container) return;

    container.innerHTML = DATA.movements.slice(0, 5).map(m => `
      <div class="movement-item">
        <div class="movement-icon" style="background:${m.color}22">${m.icon}</div>
        <div class="movement-info">
          <div class="movement-name">${m.name}</div>
          <div class="movement-date">${m.category} · ${m.date}</div>
        </div>
        <div class="movement-amount ${m.amount < 0 ? 'debit' : 'credit'}" data-balance-sensitive>
          ${formatAmountSigned(m.amount)}
        </div>
      </div>
    `).join('');
  }

  function render() {
    const subtitleEl = document.getElementById('dashboard-date');
    if (subtitleEl) subtitleEl.textContent = getTodayLabel();
    renderBalance();
    renderTarjeta();
    renderRecentMovements();
    updateBalanceToggleUI();
    updateBalanceSensitiveElements();
  }

  return { render, toggleBalanceVisibility, initBalanceVisibility, isBalanceVisible };

})();


/* ============================================================
   MOVEMENTS MODULE  (T09 — renderTable/renderStats usan I18n.t())
   ============================================================ */

const Movements = (() => {

  let filterText     = '';
  let filterCategory = '';

  function getFiltered() {
    return DATA.movements.filter(m => {
      const matchText = !filterText ||
        m.name.toLowerCase().includes(filterText.toLowerCase()) ||
        m.category.toLowerCase().includes(filterText.toLowerCase());
      const matchCat = !filterCategory || m.category === filterCategory;
      return matchText && matchCat;
    });
  }

  function renderTable(data) {
    const tbody = document.getElementById('movements-tbody');
    if (!tbody) return;

    if (data.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="6" style="text-align:center;padding:40px;color:var(--text-muted)">
            ${I18n.t('mov.empty')}
          </td>
        </tr>`;
      return;
    }

    tbody.innerHTML = data.map(m => `
      <tr>
        <td class="tx-icon-cell">
          <div class="tx-icon" style="background:${m.color}22">${m.icon}</div>
        </td>
        <td><div class="tx-name">${m.name}</div></td>
        <td><span class="badge badge-info">${m.category}</span></td>
        <td class="tx-date">${m.date}</td>
        <td style="text-align:right">
          <span class="tx-amount ${m.amount < 0 ? 'debit' : 'credit'}">
            ${formatAmountSigned(m.amount)}
          </span>
        </td>
        <td style="text-align:center">
          <span class="badge badge-success">${I18n.t('mov.status_credited')}</span>
        </td>
      </tr>
    `).join('');
  }

  function renderStats() {
    const debits  = DATA.movements.filter(m => m.amount < 0).reduce((s, m) => s + m.amount, 0);
    const credits = DATA.movements.filter(m => m.amount > 0).reduce((s, m) => s + m.amount, 0);

    const debitsEl  = document.getElementById('stats-debits');
    const creditsEl = document.getElementById('stats-credits');
    const countEl   = document.getElementById('stats-count');

    if (debitsEl)  debitsEl.textContent  = formatAmountSigned(debits);
    if (creditsEl) creditsEl.textContent = formatAmountSigned(credits);
    if (countEl)   countEl.textContent   = DATA.movements.length;
  }

  function onSearchInput(value) {
    filterText = value;
    renderTable(getFiltered());
  }

  function onCategoryChange(value) {
    filterCategory = value;
    renderTable(getFiltered());
  }

  function render() {
    renderStats();
    renderTable(getFiltered());
  }

  return { render, onSearchInput, onCategoryChange };

})();


/* ============================================================
   BENEFICIOS MODULE  (T09 — empty state usa I18n.t(); expone getActiveCategory)
   ============================================================ */

const Beneficios = (() => {

  let activeCategory = 'todos';

  function renderGrid(cat) {
    const grid = document.getElementById('beneficios-grid');
    if (!grid) return;

    const data = (cat === 'todos')
      ? DATA.beneficios
      : DATA.beneficios.filter(b => b.category === cat);

    if (data.length === 0) {
      grid.innerHTML = `<p style="color:var(--text-muted);padding:20px 0">${I18n.t('ben.empty')}</p>`;
      return;
    }

    grid.innerHTML = data.map(b => `
      <div class="beneficio-card">
        <div class="beneficio-img" style="background:${b.bg}">${b.emoji}</div>
        <div class="beneficio-body">
          <div class="beneficio-tag">${b.tag}</div>
          <div class="beneficio-title">${b.title}</div>
          <div class="beneficio-desc">${b.desc}</div>
          <div class="beneficio-footer">
            <span class="beneficio-vto">⏱ ${b.vto}</span>
            <span class="badge ${b.badge}">${b.badgeText}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  function filter(cat) {
    activeCategory = cat;

    document.querySelectorAll('.beneficios-filter-bar .btn').forEach(btn => {
      btn.className = 'btn btn-secondary';
    });
    const activeBtn = document.getElementById('filter-' + cat);
    if (activeBtn) activeBtn.className = 'btn btn-primary';

    renderGrid(cat);
  }

  function getActiveCategory() { return activeCategory; }

  function init() {
    renderGrid('todos');
  }

  return { init, filter, getActiveCategory };

})();


/* ============================================================
   NOVAPOINTS MODULE  (puntos de fidelidad — acumulación derivada de DATA.movements, canjes persistidos)
   ============================================================ */

const NovaPoints = (() => {

  const POINTS_RULE = { perAmount: 100 };
  const STORAGE_KEY = 'novabanco-points-redeemed';

  let redemptions = [];   // [{ rewardId, cost, ts }]
  let pendingReward = null;

  function earnFor(movement) {
    const amount = movement && movement.amount;
    if (typeof amount !== 'number' || !isFinite(amount) || amount >= 0) return 0;
    return Math.floor(Math.abs(amount) / POINTS_RULE.perAmount);
  }

  function findReward(id) { return DATA.rewards.find(r => r.id === id); }

  function loadRedemptions() {
    try {
      const raw = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (Array.isArray(raw)) {
        redemptions = raw.filter(r => r && findReward(r.rewardId) &&
          typeof r.cost === 'number' && isFinite(r.cost) && r.cost > 0 &&
          typeof r.ts === 'number');
      }
    } catch(e) {
      redemptions = [];
    }
  }

  function saveRedemptions() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(redemptions)); } catch(e) {}
  }

  // Historial: canjes (más recientes primero) y luego acumulaciones en el orden de DATA.movements (más reciente primero)
  function getHistory() {
    const locale = I18n.getLocale();
    const redeems = redemptions.slice().sort((a, b) => b.ts - a.ts).map(r => ({
      kind: 'redeem',
      label: I18n.t('pts.redeem_label').replace('{title}', I18n.t(findReward(r.rewardId).titleKey)),
      date: new Date(r.ts).toLocaleDateString(locale, { day: '2-digit', month: 'short' }),
      points: -r.cost,
    }));
    const earns = DATA.movements
      .map(m => ({ m, pts: earnFor(m) }))
      .filter(e => e.pts > 0)
      .map(e => ({
        kind: 'earn',
        label: I18n.t('pts.earn_label').replace('{name}', e.m.name),
        date: e.m.date,
        points: e.pts,
      }));
    return redeems.concat(earns);
  }

  function getBalance() {
    return getHistory().reduce((sum, h) => sum + h.points, 0);
  }

  function fmt(n) { return n.toLocaleString(I18n.getLocale()); }

  function pointsText(n) {
    return Dashboard.isBalanceVisible() ? fmt(n) : '••••';
  }

  function renderBalanceCards() {
    const bal = getBalance();
    const main = document.getElementById('points-balance');
    if (main) main.textContent = pointsText(bal);
    const dash = document.getElementById('dash-points-balance');
    if (dash) dash.textContent = pointsText(bal);
  }

  function renderCatalog() {
    const grid = document.getElementById('points-catalog');
    if (!grid) return;
    const bal = getBalance();
    grid.innerHTML = DATA.rewards.map(r => {
      const ok = r.cost <= bal;
      return `
      <div class="beneficio-card points-reward">
        <div class="beneficio-img" style="background:${r.bg}">${r.emoji}</div>
        <div class="beneficio-body">
          <div class="beneficio-tag">${I18n.t('pts.type_' + r.type)}</div>
          <div class="beneficio-title">${I18n.t(r.titleKey)}</div>
          <div class="beneficio-desc">${I18n.t(r.descKey)}</div>
          <div class="beneficio-footer">
            <span class="points-cost">${fmt(r.cost)} ${I18n.t('pts.unit')}</span>
            <button class="btn ${ok ? 'btn-primary' : 'btn-secondary'}" ${ok ? '' : 'disabled'}
                    onclick="openPointsRedeem(${r.id})">${ok ? I18n.t('pts.redeem_btn') : I18n.t('pts.insufficient')}</button>
          </div>
        </div>
      </div>`;
    }).join('');
  }

  function renderHistory() {
    const list = document.getElementById('points-history');
    if (!list) return;
    const items = getHistory();
    if (items.length === 0) {
      list.innerHTML = `<p style="color:var(--text-muted);padding:20px 0">${I18n.t('pts.history_empty')}</p>`;
      return;
    }
    list.innerHTML = items.map(h => `
      <div class="movement-item">
        <div class="movement-icon" style="background:${h.kind === 'earn' ? 'var(--accent-dim)' : 'rgba(255,59,48,0.15)'}">${h.kind === 'earn' ? '⭐' : '🎁'}</div>
        <div class="movement-info">
          <div class="movement-name">${h.label}</div>
          <div class="movement-date">${h.date}</div>
        </div>
        <div class="movement-amount ${h.points < 0 ? 'debit' : 'credit'}">
          ${h.points < 0 ? '-' : '+'}${fmt(Math.abs(h.points))} ${I18n.t('pts.unit')}
        </div>
      </div>
    `).join('');
  }

  function render() {
    renderBalanceCards();
    renderCatalog();
    renderHistory();
    const rule = document.getElementById('points-rule');
    if (rule) rule.textContent = I18n.t('pts.rule');
  }

  function openRedeem(rewardId) {
    const r = findReward(rewardId);
    if (!r || r.cost > getBalance()) return;
    pendingReward = r;
    const desc = document.getElementById('points-modal-desc');
    if (desc) {
      desc.textContent = I18n.t('pts.confirm_desc')
        .replace('{title}', I18n.t(r.titleKey))
        .replace('{cost}', fmt(r.cost));
    }
    const btn = document.getElementById('points-confirm-btn');
    if (btn) btn.disabled = false;
    document.getElementById('points-modal-overlay').classList.add('open');
  }

  function closeRedeem() {
    pendingReward = null;
    document.getElementById('points-modal-overlay').classList.remove('open');
  }

  function confirmRedeem() {
    const r = pendingReward;
    pendingReward = null;                      // evita doble canje por doble clic
    document.getElementById('points-modal-overlay').classList.remove('open');
    if (!r || r.cost > getBalance()) return;   // saldo insuficiente: sin cambios
    redemptions.push({ rewardId: r.id, cost: r.cost, ts: Date.now() });
    saveRedemptions();
    render();
  }

  function closeOnOverlayClick(event) {
    if (event.target === document.getElementById('points-modal-overlay')) closeRedeem();
  }

  function init() {
    loadRedemptions();
    render();
  }

  return { init, render, earnFor, getBalance, openRedeem, closeRedeem, confirmRedeem, closeOnOverlayClick };

})();


/* ============================================================
   MODAL MODULE  (T09 — pasos de descarga usan I18n.t() en tiempo de ejecución)
   ============================================================ */

const Modal = (() => {

  function getDownloadSteps() {
    return [
      { pct: 15,  text: I18n.t('dl.step1') },
      { pct: 40,  text: I18n.t('dl.step2') },
      { pct: 65,  text: I18n.t('dl.step3') },
      { pct: 85,  text: I18n.t('dl.step4') },
      { pct: 100, text: I18n.t('dl.step5') },
    ];
  }

  function open() {
    showSection('modal-form-content');
    document.getElementById('modal-overlay').classList.add('open');
  }

  function close() {
    document.getElementById('modal-overlay').classList.remove('open');
  }

  function closeOnOverlayClick(event) {
    if (event.target === document.getElementById('modal-overlay')) close();
  }

  function showSection(id) {
    ['modal-form-content', 'modal-download-content', 'modal-done-content']
      .forEach(sId => {
        const el = document.getElementById(sId);
        if (el) el.style.display = (sId === id ? 'block' : 'none');
      });
  }

  function startDownload() {
    showSection('modal-download-content');

    const fill  = document.getElementById('progress-fill');
    const label = document.getElementById('progress-label');
    const steps = getDownloadSteps();
    let step    = 0;

    fill.style.width = '0%';

    function tick() {
      if (step >= steps.length) {
        setTimeout(() => showSection('modal-done-content'), 400);
        return;
      }
      fill.style.width  = steps[step].pct + '%';
      label.textContent = steps[step].text;
      step++;
      setTimeout(tick, 600);
    }

    setTimeout(tick, 200);
  }

  return { open, close, closeOnOverlayClick, startDownload };

})();


/* ============================================================
   INIT  (T10 — incluye I18n.init(), Theme.init(), window.toggleTheme, window.switchLocale)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  I18n.init();
  Theme.init();
  SidebarToggle.init();
  Dashboard.initBalanceVisibility();
  Dashboard.render();
  Movements.render();
  Beneficios.init();
  NovaPoints.init();

  window.navigate          = (v)   => Router.navigate(v);
  window.openModal         = ()    => Modal.open();
  window.closeModal        = ()    => Modal.close();
  window.closeModalOutside = (e)   => Modal.closeOnOverlayClick(e);
  window.startDownload     = ()    => Modal.startDownload();
  window.filterMovements   = (v)   => Movements.onSearchInput(v);
  window.filterByCategory  = (v)   => Movements.onCategoryChange(v);
  window.filterBeneficios  = (cat) => Beneficios.filter(cat);
  window.openPointsRedeem  = (id)  => NovaPoints.openRedeem(id);
  window.closePointsRedeem = ()    => NovaPoints.closeRedeem();
  window.confirmPointsRedeem = ()  => NovaPoints.confirmRedeem();
  window.closePointsModalOutside = (e) => NovaPoints.closeOnOverlayClick(e);
  window.toggleTheme       = ()    => Theme.toggle();
  window.switchLocale      = (l)   => I18n.setLocale(l);
  window.toggleSidebar     = ()    => SidebarToggle.toggle();
  window.toggleBalanceVisibility = () => Dashboard.toggleBalanceVisibility();

});
