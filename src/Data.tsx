// Data.js  

const navItems = [  
  { name: "Inicio", path: "/RIIBA/" },  
  { name: "La Red", path: "/RIIBA/Red" },  
  { name: "Actualidad", path: "#" },  
  { name: "Miembros", path: "/RIIBA/Miembros" },  
  { name: "Visibilidad", path: "#" },  
  { name: "Noticias", path: "#" },  
  { name: "Contacto", path: "#" },  
];  

const listaObjetivo = {  
    title: 'Objetivo',  
    subtitle: 'La Red Internacional de Investigación en Bienestar Animal (RED-RIIBA) tiene como objetivo principal promover y coordinar esfuerzos de investigación a nivel global para mejorar el bienestar de los animales en diversos sistemas de producción. A través de la colaboración interdisciplinaria y el intercambio de conocimientos, buscamos desarrollar soluciones innovadoras y sostenibles que contribuyan a la salud y el bienestar de los animales, así como a la seguridad alimentaria.',  
    listaItems: [],  
  };  
  
  const listaIntencion = {  
    title: 'Intención',  
    subtitle: 'La intención de la Red es crear un entorno colaborativo en el que investigadores, académicos, productores, legisladores y otras partes interesadas puedan trabajar juntos para:',  
    listaItems: [  
      { texto: (<span><strong>Desarrollar métodos diagnósticos avanzados:</strong> Mejorar las herramientas y técnicas para monitorear la salud animal, permitiendo diagnósticos precisos y rápidos.</span>) },  
      { texto: (<span><strong>Promover el uso de productos naturales:</strong> Investigar y validar alternativas naturales para el cuidado y bienestar animal, reduciendo la dependencia de productos sintéticos.</span>) },  
      { texto: (<span><strong>Implementar programas educativos:</strong> Fomentar la educación y la formación en bienestar animal, tanto de granjas como mascotas, y discutir temas relacionados con la seguridad alimentaria.</span>) },  
      { texto: (<span><strong>Garantizar la producción sostenible:</strong> Promover prácticas agrícolas sostenibles que mejoren la calidad e inocuidad de los alimentos.</span>) },  
      { texto: (<span><strong>Fomentar el mejoramiento genético:</strong> Crear sementales resistentes a infecciones gástricas para mejorar la salud y la productividad animal.</span>) },  
      { texto: (<span><strong>Establecer normativas claras y aplicables:</strong> Abogar por regulaciones efectivas que protejan el bienestar animal y aseguren la calidad de los productos alimenticios.</span>) },  
    ],  
  };  
  
  const listaAreaInvestigacion = {  
    title: 'Áreas de Investigación',  
    subtitle: 'La Red se centra en varias líneas de investigación clave:',  
    listaItems: [  
      { texto: (<span><strong>Diagnósticos fisiológicos:</strong> Desarrollo y/o empleo de dispositivos avanzados para la detección de parásitos gastrointestinales y otros indicadores de salud animal.</span>) },  
      { texto: (<span><strong>Salud y bienestar animal:</strong> Uso de productos naturales con el enfoque "Una Sola Salud-Un Bienestar” para la prevención y tratamiento de enfermedades.</span>) },  
      { texto: (<span><strong>Educación nutricional:</strong> Desarrollo de programas educativos sobre manejo y nutrición animal.</span>) },  
      { texto: (<span><strong>Sostenibilidad alimentaria:</strong> Estrategias para garantizar la producción de alimentos de alta calidad y seguros.</span>) },  
      { texto: (<span><strong>Mejoramiento genético:</strong> Investigación para el mejoramiento genético y creación de sementales resistentes a infecciones gástricas.</span>) },  
      { texto: (<span><strong>Gestión del agua para la producción animal:</strong> Diseñar y optimizar sistemas de abastecimiento y distribución de agua para los animales y la crianza de peces en granjas, asegurando un uso eficiente y sostenible de los recursos hídricos.</span>) },  
      { texto: (<span><strong>Control y manejo de aguas residuales:</strong> Implementar sistemas de tratamiento de aguas residuales en granjas para reducir la contaminación y proteger los recursos hídricos.</span>) },  
      { texto: (<span><strong>Modelos predictivos y análisis de datos:</strong> Desarrollar modelos matemáticos y análisis de datos para predecir enfermedades y problemas de salud en animales, optimizando la producción.</span>) },  
      { texto: (<span><strong>Optimización de recursos:</strong> Crear algoritmos para la gestión eficiente de recursos en sistemas de producción, mejorando el bienestar animal y la productividad.</span>) },  
      { texto: (<span><strong>Diseño de infraestructura:</strong> Planificación y construcción de instalaciones adecuadas para el alojamiento y manejo de animales, garantizando condiciones óptimas de bienestar.</span>) },  
      { texto: (<span><strong>Construcción sostenible:</strong> Uso de materiales sostenibles y técnicas de construcción ecológicas compatibles en el desarrollo de infraestructuras para la producción animal.</span>) },  
      { texto: (<span><strong>Estudios de impacto social:</strong> Investigar cómo las prácticas inadecuadas de bienestar animal afectan a las comunidades locales y su economía, promoviendo cambios culturales y educativos.</span>) },  
      { texto: (<span><strong>Legislación y políticas:</strong> Investigación y promoción de leyes y políticas que mejoren el bienestar animal.</span>) },  
    ],  
  };  
  
  const listaBeneficios = {  
    title: 'Beneficios',  
    subtitle: 'Participar en RED-RIIBA ofrece varios beneficios, tales como:',  
    listaItems: [  
      { texto: (<span><strong>Colaboración internacional y acceso a investigaciones de vanguardia:</strong> Establecer relaciones con expertos de diferentes países y organizaciones afines, ampliando la red de contactos y colaboración. Tener acceso a las últimas investigaciones y tecnologías.</span>) },  
      { texto: (<span><strong>Formación y educación continua:</strong> Oportunidades de formación para mejorar las competencias en bienestar animal y seguridad alimentaria.</span>) },  
      { texto: (<span><strong>Desarrollo de soluciones:</strong> Contribuir al desarrollo de soluciones que mejoren la vida de los animales y la seguridad alimentaria a nivel global.</span>) },  
    ],  
  };  

  const listaBienvenido={
    title:'Bienvenido!!!',
    subtitle:'La Red Internacional de Investigación en Bienestar Animal es una plataforma dedicada a la mejora del bienestar animal y la seguridad alimentaria a través de la colaboración y la innovación. Invitamos a todos los interesados a unirse a nosotros en este proyecto global para crear un futuro más sostenible y saludable para los animales y las personas.',
    listaItems: []
  }
  
  
    
  const listaUnirse={
    title:'¿Cómo Unirse?',
    subtitle:' Para unirse a la Red Internacional de Investigación en Bienestar Animal (RED-RIIBA), los interesados pueden: ',
    listaItems: [  
      { texto: (<span><strong>Registrarse</strong> a través del formulario que aparece al final de esta página Web: Proporcionaremos detalles de contacto y formularios de inscripción.</span>) },  
      { texto: (<span> <strong>Participar en eventos y talleres</strong>: Ofrecemos eventos regulares y talleres para fomentar la colaboración y el intercambio de conocimientos.  
  </span>) },  
      { texto: (<span><strong>Contribuir con investigaciones</strong>: Invitamos a los investigadores a presentar sus trabajos y colaborar en proyectos conjuntos.  
  </span>) },  
    ]
  }
  

  const profiles = [  
    {  perfil: 'https://randomuser.me/api/portraits/men/32.jpg',
        name: "Iosvany Palmero Benegas",  
        position: "Investigador Principal",
        institution:'Universidad de Ciego de Avila',  
        country: "Cuba",  
        flagSrc: "https://flagcdn.com/w320/cu.png",  
        socialLinks: {  
            facebook: "https://facebook.com/juan",  
            twitter: "https://twitter.com/juan",  
            linkedin: "https://linkedin.com/in/juan",  
            github: "https://github.com/juan",  
        },  
    },  
    {  perfil: 'https://randomuser.me/api/portraits/men/32.jpg',
      name: "Angel Ramón Contrera Nápoles",  
        position: "Coordinador de Proyectos", 
        institution:'Universidad de Ciego de Avila',   
        country: "Cuba",  
        flagSrc: "https://flagcdn.com/w320/cu.png",  
         socialLinks: {  
            facebook: "https://facebook.com/ana",  
            twitter: "https://twitter.com/ana",  
            linkedin: "https://linkedin.com/in/ana",  
            github: "https://github.com/ana",  
        },  
    },  
    {  perfil: 'https://randomuser.me/api/portraits/men/77.jpg',
        name: " Ronney Soto Noguera",  
        position: "Coordinador de Proyectos",
        institution:'Universidad de Ciego de Avila',   
        country: "Cuba",  
        flagSrc: "https://flagcdn.com/w320/cu.png",  
     socialLinks: {  
            facebook: "https://facebook.com/carlos",  
            twitter: "https://twitter.com/carlos",  
            linkedin: "https://linkedin.com/in/carlos",  
            github: "https://github.com/carlos",  
        },  
    },
    {  perfil: 'https://randomuser.me/api/portraits/men/77.jpg',
        name: " Gerardo Martínez Jimenez",  
        position: "Coordinador de Proyectos", 
        institution:'Universidad de Ciego de Avila',   
        country: "Cuba",  
        flagSrc: "https://flagcdn.com/w320/cu.png",  
     socialLinks: {  
            facebook: "https://facebook.com/carlos",  
            twitter: "https://twitter.com/carlos",  
            linkedin: "https://linkedin.com/in/carlos",  
            github: "https://github.com/carlos",  
        },  
    },
        {  perfil: 'https://randomuser.me/api/portraits/men/77.jpg',
        name: " Jorge Daniel Hernández Cabrera",  
        position: "Coordinador de Proyectos", 
        institution:'Universidad de Ciego de Avila',   
        country: "Cuba",  
        flagSrc: "https://flagcdn.com/w320/cu.png",  
     socialLinks: {  
            facebook: "https://facebook.com/carlos",  
            twitter: "https://twitter.com/carlos",  
            linkedin: "https://linkedin.com/in/carlos",  
            github: "https://github.com/carlos",  
        },  
    },  
];  

let clases=['flex  justify-center w-full h-[36rem] relative overflow-hidden',
  ' h-full w-full object-container object-center shadow-xl shadow-blue-gray-900/50 rounded-b-3xl'
];

const ImagenInfo = [  
  { src: "https://cdn.pixabay.com/photo/2024/08/06/15/29/ai-generated-8949588_640.jpg",
     alt:"imgen 1", 
     ClassNameDiv: clases[0],
     ClassNameImag: clases[1]
    },  
  { src: "https://cdn.pixabay.com/photo/2024/06/28/09/45/veterinarian-8859098_640.jpg",
     alt:"imgen 2", 
     ClassNameDiv: clases[0],
     ClassNameImag: clases[1]
    },  
  { src: "https://cdn.pixabay.com/photo/2017/05/16/17/33/holstein-cattle-2318436_640.jpg",
     alt:"imgen 3",
     ClassNameDiv: clases[0],
     ClassNameImag: clases[1]
      },
  { src: "https://cdn.pixabay.com/photo/2024/07/31/12/53/horses-8934699_640.jpg",
     alt:"caballos",
     ClassNameDiv: clases[0],
     ClassNameImag: clases[1]
      },  
       { src: "https://cdn.pixabay.com/photo/2024/02/23/15/16/ai-generated-8592228_640.jpg",
     alt:"caballos poni",
     ClassNameDiv: clases[0],
     ClassNameImag: clases[1]
      },  
];

  
  export {navItems, ImagenInfo, listaObjetivo, listaIntencion, listaAreaInvestigacion, listaBeneficios, listaBienvenido, listaUnirse, profiles };