export default {
  global: {
    componenteFormativo: 'Monitoreo en la gestión integral de residuos',
    descripcionCurso:
      'En este componente formativo, partiendo de una base teórica-conceptual, se realizará la explicación de la gestión externa en la empresa con relación al plan de gestión integral de residuos y el monitoreo de la gestión integral de residuos, necesarios en los procesos de mejora continua de las organizaciones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    // imagenesDecorativasBanner: [
    //   {
    //     clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
    //     imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
    //   },
    //   {
    //     clases: ['banner-principal-decorativo-2'],
    //     imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
    //   },
    // ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptos Generales ',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Gestión Externa de la gestión integral de los residuos sólidos ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Transporte externo de residuos sólidos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Empresas gestoras de los residuos sólidos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Monitoreo de la gestión integral de los residuos sólidos ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Elaboración de un plan de seguimiento ',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Indicadores',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Hoja de vida del indicador',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Solicitud de certificados',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/222319_CF14_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar HTML',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '2.2 Empresas gestoras de los residuos sólidos',
      referencia:
        'Gómez, P. (2017). <em>Plan de negocio de empresa de reciclaje </em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=T1TZ2OpdC1w',
    },
    {
      tema: '2.2 Empresas gestoras de los residuos sólidos',
      referencia: 'Lito S.A.S. (2014).  <em>Video Institucional Lito SAS</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=wZv_ofWIRUQ',
    },
    {
      tema: '2.2 Empresas gestoras de los residuos sólidos',
      referencia:
        'Transporte residuos peligrosos soluciones de saneamiento ambiental. (2013). <em>Transporte residuos peligrosos</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PjUOEpTLbBg',
    },
  ],
  glosario: [
    {
      termino: 'Aprovechamiento y/o valorización',
      significado:
        '“es el proceso de recuperar el valor remanente o el poder calorífico de los materiales que componen los residuos o desechos peligrosos, por medio de la recuperación, el reciclado o la regeneración”. (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2015). ',
    },
    {
      termino: 'Disposición final',
      significado:
        '“es el proceso de aislar y confinar los residuos o desechos peligrosos, en especial los no aprovechables, en lugares especialmente seleccionados, diseñados y debidamente autorizados, para evitar la contaminación y los daños o riesgos a la salud humana y al ambiente.” (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2015). ',
    },
    {
      termino: 'Gestión Interna de residuos',
      significado:
        '“son las operaciones de manipulación, clasificación, envasado, etiquetado y traslado al almacén temporal dentro del propio lugar u organización. <br> 1) Dotación de contenedores donde depositar los residuos. 2) Clasificación de estos residuos en grupos en función de su peligrosidad o posibilidad de reciclaje.  <br> 3) Transporte de los residuos al almacén central de residuos sanitarios del centro.”  (Área de salud de Cáceres, 2015). ',
    },
    {
      termino: 'Gestión Externa de residuos',
      significado:
        '“son las operaciones realizadas fuera del centro productor; recogida, traslado al centro de tratamiento y eliminación. 4) Recogida y transporte a Plantas de Transferencia o Tratamiento. 5) Tratamiento y eliminación. Desde un punto de vista general, los residuos que sufren una mala gestión, ya sea en su recogida, tratamiento o eliminación final, provocan una degradación del Medio Ambiente, por lo que resulta imprescindible un adecuado tratamiento de estos desde el momento de su generación hasta que son eliminados.”  (Área de salud de Cáceres, 2015). ',
    },
    {
      termino: 'Indicador',
      significado:
        '“un indicador es una comparación entre dos o más tipos de datos que sirve para elaborar una medida cuantitativa o una observación cualitativa. Esta comparación arroja un valor, una magnitud o un criterio, que tiene significado para quien lo analiza.” (OIT, 2011). ',
    },
    {
      termino: 'Manejo integral de residuos',
      significado:
        '“es el conjunto de actividades que se realizan desde la generación hasta la eliminación del residuo o desecho sólido. Comprende las actividades de separación en la fuente, presentación, recolección, transporte, almacenamiento, tratamiento y/o la eliminación de los residuos o desechos sólidos.” (Ministerio de Ambiente Vivienda y Desarrollo Territorial, 2002). ',
    },
    {
      termino: 'Residuo sólido o desecho',
      significado:
        '“es cualquier objeto, material, sustancia o elemento sólido resultante del consumo o uso de un bien en actividades domésticas, industriales, comerciales, institucionales, de servicios, que el generador abandona, rechaza o entrega y que es susceptible de aprovechamiento o transformación en un nuevo bien, con valor económico o de disposición final. Los residuos sólidos se dividen en aprovechables y no aprovechables. Igualmente, se consideran como residuos sólidos aquellos provenientes del barrido de áreas públicas.” (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2002). ',
    },
    {
      termino: 'Residuo peligroso',
      significado:
        '“es aquel que por sus características infecciosas, tóxicas, explosivas, corrosivas, inflamables, volátiles, combustibles, radiactivas o reactivas puedan causar riesgo a la salud humana o deteriorar la calidad ambiental hasta niveles que causen riesgo a la salud humana. También son residuos peligrosos aquellos que sin serlo en su forma original, se transforman por procesos naturales en residuos peligrosos. Así mismo, se consideran residuos peligrosos los envases, empaques y embalajes que hayan estado en contacto con ellos.” (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2002). ',
    },
    {
      termino: 'Residuos Especiales',
      significado:
        '“son aquellos residuos que por su naturaleza, composición, tamaño, volumen y peso no puedan ser recolectados, manejados, tratados o dispuestos normalmente por la persona prestadora del servicio. Incluye los residuos producto de las actividades de corte de césped y poda de árboles ubicados en las vías y áreas públicas; aquellos provenientes del barrido y limpieza de vías y áreas públicas, y los residuos provenientes de actividades de construcción y demás obras civiles.” (Área metropolitana del Valle de Aburrá, 2016). ',
    },
    {
      termino: 'Reciclaje',
      significado:
        '“es el proceso mediante el cual se aprovechan y transforman los residuos sólidos recuperados y se devuelve a los materiales su potencialidad de reincorporación como materia prima para la fabricación de nuevos productos. El reciclaje puede constar de varias etapas: procesos de tecnologías limpias.” (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2002). ',
    },
    {
      termino: 'Reutilización',
      significado:
        '“es la prolongación y adecuación de la vida útil de los residuos sólidos recuperados y que mediante procesos, operaciones o técnicas devuelven a los materiales su posibilidad de utilización en su función original o en alguna relacionada, sin que para ello requieran procesos adicionales de transformación.” (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2002). ',
    },
  ],
  referencias: [
    {
      referencia:
        'Área de Salud de Cáceres. (2015). <em>Manual de gestión interna y externa de residuos.</em>  ',
      link: 'https://www.areasaludcaceres.es/docs/files/1195img.pdf ',
    },
    {
      referencia:
        'Área metropolitana del Valle de Aburrá (2016). <em>Manual para el manejo integral de residuos sólidos en el Valle de Aburrá.</em> ',
      link: '',
    },
    {
      referencia:
        'Área Metropolitana Valle de Aburrá. (2013). <em>Plan de gestión integral de desechos o residuos peligrosos.</em>  ',
      link:
        'https://www.metropol.gov.co/ambiental/residuos-solidos/GestionRespel/FORMATOS%20GUIA%20RESPEL.pdf  ',
    },
    {
      referencia:
        'Creos Ltda (2016) <em>Indicadores tablas unificadas de mando.</em>',
      link: 'https://www.creosltda.com/creos2/index.php/sogc/indicadores.html',
    },
    {
      referencia:
        'Decreto 1713 de 2002. [Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por el cual se reglamenta la Ley 142 de 1994, la Ley 632 de 2000 y la Ley 689 de 2001, en relación con la prestación del servicio público de aseo, y el Decreto Ley 2811 de 1974 y la Ley 99 de 1993 en relación con la Gestión Integral de Residuos Sólidos". Agosto 6 de 2002. ',
      link:
        'https://corponarino.gov.co/expedientes/juridica/2002decreto1713.pdf ',
    },
    {
      referencia:
        'Decreto 1076 de 2015. [Ministerio de Ambiente y Desarrollo Sostenible]. Por medio del cual se expide el Decreto Único Reglamentario del sector Ambiente y Desarrollo Sostenible. Mayo 26 de 2015.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78153',
    },
    {
      referencia:
        'Ministerio de Minas y Energía. (2010). <em>Indicadores de gestión.</em>',
      link: 'https://es.slideshare.net/albacora_48/indicadores-de-gestion-mme',
    },
    {
      referencia:
        'OIT. (2011) ¿Qué son y cómo se construyen los indicadores en la evaluación de impacto?',
      link:
        'https://guia.oitcinterfor.org/como-evaluar/como-se-construyen-indicadores',
    },
    {
      referencia:
        'Universidad Pontificia Bolivariana. (2011). <em>Guía para la gestión de residuos peligrosos.</em> ',
      link:
        'https://www.metropol.gov.co/ambiental/residuos-solidos/GestionRespel/GUIA_RESPEL.pdf  ',
    },
    {
      referencia:
        'Universidad Pontificia Bolivariana y Área Metropolitana del Valle de Aburrá. (2008). <em>Guía para el manejo integral de residuos.</em>  ',
      link:
        'https://www.sabaneta.gov.co/files/doc_varios/Gu%C3%ADa%20para%20el%20Manejo%20Integral%20de%20Residuos-%20Subsector%20instituciones%20educativas.pdf ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes ',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Santander Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Diana Carolina Triana Guarnizo',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Industrial - Distrito Capital',
        },
        {
          nombre: 'Juan Carlos Cárdenas Sánchez',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Industrial - Distrito Capital',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Centro agropecuario La Granja - Regional Tolima',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Gestión Industrial',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñador y evaluador instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez',
          cargo: 'Diseñador web',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andres Bolaño Rey',
          cargo: 'Desarrollador Fullstack Junior',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta ',
          cargo: 'Actividad didáctica  ',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander ',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres ',
          cargo: 'Validación audiovisual ',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander ',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey ',
          cargo: 'Locución ',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander ',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada ',
          cargo: 'Producción audiovisual ',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta ',
          cargo: 'Validación Contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Mutis',
          cargo: 'Validación de contenidos accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
