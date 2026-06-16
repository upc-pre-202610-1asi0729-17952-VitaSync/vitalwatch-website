document.addEventListener('DOMContentLoaded', () => {
    const langSelectors = document.querySelectorAll('.lang-selector .lang');
    let currentLang = 'es'; // Idioma por defecto
    
    // Objeto con todas las traducciones
const translationsData = {
        es: {
            "nav.home": "Inicio",
            "nav.features": "Funcionalidades",
            "nav.benefits": "Beneficios",
            "nav.plans": "Planes",
            "nav.contact": "Contacto",
            "nav.terms": "Términos",
            "nav.login": "Acceder",

            "hero.badge": "Sistema clínico preventivo",
            "hero.title": "Monitoreo inteligente para una atención segura",
            "hero.subtitle": "VitalWatch ayuda a clínicas y hospitales a detectar señales de fatiga en el personal clínico, activar alertas preventivas y tomar decisiones oportunas para proteger a su equipo y a sus pacientes.",
            "hero.cta.demo": "Solicitar demo",
            "hero.cta.plans": "Ver planes",

            "mockup.title": "VitalWatch Dashboard",
            "mockup.risk.title": "Nivel de riesgo",
            "mockup.risk.status": "Elevado en UCI",
            "mockup.fatigue.title": "Fatiga detectada",
            "mockup.fatigue.status": "Dr. Silva - 14h turno",
            "mockup.stats.alerts": "Alertas preventivas",
            "mockup.stats.personnel": "Personal en monitoreo",

            "features.title": "Funcionalidades Principales",
            "features.subtitle": "Herramientas diseñadas para detectar riesgos a tiempo y apoyar decisiones clínicas más seguras.",
            "features.f1.title": "Monitoreo clínico",
            "features.f1.desc": "Visualiza signos vitales, fatiga, HRV, cortisol y estado del sensor.",
            "features.f2.title": "Gestión de riesgos",
            "features.f2.desc": "Clasifica al personal por nivel de riesgo y prioriza casos críticos.",
            "features.f3.title": "Alertas inteligentes",
            "features.f3.desc": "Detecta anomalías biométricas y genera alertas para supervisores.",
            "features.f4.title": "Turnos médicos",
            "features.f4.desc": "Organiza jornadas, asigna turnos y registra inicio y fin de actividades.",
            "features.f5.title": "Recuperación del personal",
            "features.f5.desc": "Asigna pausas, evaluaciones médicas y acciones preventivas.",
            "features.f6.title": "Administración hospitalaria",
            "features.f6.desc": "Gestiona usuarios, equipos, suscripciones, reportes y auditoría.",

            "benefits.title": "Valor Integral para toda la Institución",
            "benefits.subtitle": "Descubra cómo VitalWatch transforma el cuidado de quienes nos cuidan.",
            "benefits.b1.tag": "Para Gestión y Administración",
            "benefits.b1.title": "Más visibilidad para tomar mejores decisiones",
            "benefits.b1.desc": "VitalWatch ayuda a supervisores y responsables clínicos a identificar personal en riesgo, anticipar problemas operativos y actuar con información clara y oportuna.",
            "benefits.b1.l1": "<strong>Asignación más segura:</strong> Ajuste turnos y priorice descansos según señales de fatiga.",
            "benefits.b1.l2": "<strong>Prevención de riesgos:</strong> Reduzca la probabilidad de eventos adversos asociados al agotamiento.",
            "benefits.b1.l3": "<strong>Continuidad operativa:</strong> Mantenga una mejor cobertura del personal sin improvisar decisiones.",
            "benefits.b1.l4": "<strong>Mayor trazabilidad:</strong> Registre alertas y acciones para mejorar la supervisión institucional.",

            "benefits.b2.tag": "Para Personal Clínico",
            "benefits.b2.title": "Apoyo para cuidar su bienestar durante cada turno",
            "benefits.b2.desc": "VitalWatch ayuda al personal médico a reconocer señales de fatiga, recibir recomendaciones preventivas y trabajar con mayor seguridad en jornadas exigentes.",
            "benefits.b2.l1": "<strong>Detección temprana:</strong> Identifique señales de agotamiento antes de que afecten su desempeño.",
            "benefits.b2.l2": "<strong>Recomendaciones preventivas:</strong> Reciba apoyo para tomar descansos oportunos.",
            "benefits.b2.l3": "<strong>Mayor tranquilidad:</strong> Trabaje con la confianza de contar con monitoreo y seguimiento.",
            "benefits.b2.l4": "<strong>Bienestar visible:</strong> Consulte su estado general y comprenda mejor su nivel de riesgo.",

            "plans.title": "Planes de Suscripción",
            "plans.subtitle": "Opciones pensadas para instituciones con diferentes niveles de operación y supervisión.",
            "plans.basic.name": "Basic",
            "plans.basic.desc": "Plan esencial para clínicas pequeñas que necesitan monitoreo, gestión de personal y control básico de riesgos.",
            "plans.pro.name": "Professional",
            "plans.pro.desc": "Plan recomendado para clínicas medianas que necesitan operación completa, prevención clínica, auditoría y reportes administrativos.",
            "plans.ent.name": "Enterprise",
            "plans.ent.desc": "Plan avanzado para hospitales grandes, redes clínicas y organizaciones con múltiples sedes, integraciones y operación a gran escala.",
            "plans.popular.badge": "Más recomendado",
            "plans.cta.basic": "Elegir plan",
            "plans.cta.pro": "Elegir plan",
            "plans.cta.ent": "Elegir plan",
            "plans.footnote.invitations": "<strong>¿Cómo funciona el registro?</strong> Al suscribirse a cualquiera de nuestros planes, el Administrador del centro médico crea la cuenta de la institución y agrega al personal médico (tanto supervisores como personal clínico) enviándoles invitaciones por correo electrónico directamente desde la misma aplicación.",
            "mockup.clinical.title": "SIGNOS VITALES",
            "mockup.clinical.hr.lbl": "FC",
            "mockup.clinical.hrv.lbl": "HRV",
            "mockup.clinical.cortisol.lbl": "Cortisol",
            "mockup.clinical.sensor.lbl": "Sensor",
            "mockup.clinical.sensor.status": "ON",
            "mockup.risk.title": "NIVELES DE RIESGO",
            "mockup.risk.critical": "Crítico",
            "mockup.risk.medium": "Medio",
            "mockup.risk.stable": "Estable",
            "mockup.alerts.title_bar": "ALERTAS",
            "mockup.alerts.title": "Fatiga Crítica",
            "mockup.alerts.desc": "Dr. Silva - HRV disminuido 18%",
            "mockup.alerts.btn.notify": "Notificar",
            "mockup.alerts.btn.dismiss": "Ignorar",
            "mockup.shifts.title_bar": "TURNOS ACTIVOS",
            "mockup.shifts.title": "Guardia UCI",
            "mockup.shifts.status": "En curso",
            "mockup.shifts.worked": "Transcurrido: 9.5h",
            "mockup.recovery.title_bar": "GUÍA DE RECUPERACIÓN",
            "mockup.recovery.suggested": "Pausa recomendada",
            "mockup.recovery.active_break": "Activa (15 min)",
            "mockup.admin.title_bar": "ADMIN HOSPITALARIA",
            "mockup.admin.doctors": "Médicos activos",
            "mockup.admin.teams": "Equipos clínicos",
            "mockup.admin.audit": "Registro auditoría",

            // Table headers
            "table.header.features": "Características",
            
            // Categories
            "table.cat.capacity": "Límites de Capacidad",
            "table.cat.dashboard_mgmt": "Dashboard y Gestión",
            "table.cat.monitor_prev": "Monitoreo y Prevención",
            "table.cat.reports_history": "Reportes y Auditoría",
            "table.cat.integrations_config": "Integraciones y Configuración",
            "table.cat.support": "Soporte",

            // Features
            "table.feat.active_doctors": "Médicos activos",
            "table.feat.clinical_supervisors": "Supervisores clínicos",
            "table.feat.clinical_teams": "Equipos clínicos activos",
            "table.feat.work_areas": "Áreas de trabajo",
            "table.feat.monthly_invites": "Invitaciones mensuales",
            "table.feat.multisite": "Multi-sede",
            "table.feat.dashboard": "Dashboard administrativo",
            "table.feat.medical_mgmt": "Gestión de personal médico",
            "table.feat.teams_mgmt": "Gestión de equipos clínicos",
            "table.feat.email_invites": "Invitaciones por correo",
            "table.feat.vitals_monitor": "Monitoreo de signos vitales",
            "table.feat.shift_mgmt": "Gestión de turnos",
            "table.feat.risk_evaluation": "Evaluación de riesgo",
            "table.feat.alerts": "Alertas clínicas",
            "table.feat.anomaly_detection": "Detección de anomalías biométricas",
            "table.feat.prev_actions": "Acciones preventivas",
            "table.feat.recovery_tracking": "Seguimiento de recuperación médica",
            "table.feat.reports": "Reportes",
            "table.feat.audit": "Auditoría del sistema",
            "table.feat.history": "Historial de datos",
            "table.feat.api_integrations": "Integraciones externas y API",
            "table.feat.data_export": "Exportación avanzada de datos",
            "table.feat.custom_config": "Configuración personalizada",
            "table.feat.support": "Soporte técnico",

            // Values
            "table.val.basic_docs": "Hasta 30",
            "table.val.pro_docs": "Hasta 120",
            "table.val.unlimited": "Ilimitados",
            "table.val.basic_supers": "Hasta 6",
            "table.val.pro_supers": "Hasta 25",
            "table.val.basic_teams": "Hasta 6",
            "table.val.pro_teams": "Hasta 25",
            "table.val.basic_areas": "Hasta 6",
            "table.val.pro_areas": "Hasta 15",
            "table.val.unlimited_f": "Ilimitadas",
            "table.val.basic_invites": "Hasta 80",
            "table.val.pro_invites": "Hasta 350",
            "table.val.basic_dash": "Básico",
            "table.val.pro_dash": "Completo",
            "table.val.ent_dash": "Avanzado",
            "table.val.complete": "Completa",
            "table.val.advanced": "Avanzada",
            "table.val.complete_m": "Completo",
            "table.val.basic_f": "Básica",
            "table.val.essential_f": "Esenciales",
            "table.val.complete_f": "Completas",
            "table.val.basic_reports": "Básicos",
            "table.val.pro_reports": "Administrativos completos",
            "table.val.advanced_m": "Avanzados",
            "table.val.history_basic": "45 días",
            "table.val.history_pro": "180 días",
            "table.val.history_ent": "2 años",
            "table.val.support_basic": "Estándar",
            "table.val.support_pro": "Prioritario",
            "table.val.support_ent": "Dedicado",

            "terms.title": "Privacidad y Uso de Datos",
            "terms.summary": "En VitalWatch priorizamos la confidencialidad y el uso responsable de la información del personal clínico. Nuestra propuesta está orientada a apoyar la prevención de riesgos y la seguridad institucional.",
            "terms.btn.more": "Leer más información",
            "terms.btn.less": "Ocultar información",
            "terms.d1.title": "1. Confidencialidad de Datos",
            "terms.d1.desc": "Toda la información recolectada sobre fatiga y biometría es anonimizada y encriptada end-to-end. Los administradores solo ven datos agregados a menos que se configure una alerta crítica.",
            "terms.d2.title": "2. Uso Responsable",
            "terms.d2.desc": "Los datos son utilizados exclusivamente con fines de prevención de riesgos y mejora de las condiciones laborales. En ningún caso se usan para penalizaciones administrativas.",
            "terms.d3.title": "3. Cumplimiento Normativo",
            "terms.d3.desc": "VitalWatch promueve un uso ético de la información, enfocado en bienestar del personal y seguridad del paciente.",

            "footer.tagline": "Monitoreo preventivo para una atención más segura.",
            "footer.platform": "Plataforma",
            "footer.company": "Empresa",
            "footer.tos": "Términos de servicio",
            "footer.privacy": "Políticas de privacidad",
            "footer.follow": "Síguenos",
            "footer.copy": "&copy; 2026 VitaSync. Todos los derechos reservados.",

            "termsPage.badge": "Documento Legal",
            "termsPage.title": "Términos y Condiciones de Uso",
            "termsPage.subtitle": "Conozca las condiciones legales, éticas y de privacidad relacionadas con el uso de la plataforma VitalWatch.",
            "termsPage.version": "Versión: 1.0",
            "termsPage.date": "Fecha de vigencia: Mayo 2026",
            "termsPage.s1.title": "1. Aceptación de los Términos",
            "termsPage.s1.p1": "Al acceder y utilizar la plataforma web <strong>VitalWatch</strong>, desarrollada por el equipo de la startup <strong>VitaSync</strong> en el marco del curso <em>1ASI0729 – Desarrollo de Aplicaciones Open Source</em> de la Universidad Peruana de Ciencias Aplicadas (UPC), el usuario declara haber leído, comprendido y aceptado íntegramente los presentes Términos y Condiciones de Uso. Si no está de acuerdo con alguno de estos términos, le solicitamos abstenerse de utilizar el servicio.",
            "termsPage.s2.title": "2. Descripción del Servicio",
            "termsPage.s2.p1": "<strong>VitalWatch</strong> es una plataforma web de tipo SaaS (Software as a Service) orientada al monitoreo preventivo del nivel de fatiga del personal médico y clínico en hospitales y clínicas. La plataforma analiza datos biométricos y de carga laboral —incluyendo horas de sueño, frecuencia cardíaca, actividad física y turnos de trabajo— con el fin de calcular un puntaje de fatiga (<em>Fatigue Score</em>) y emitir alertas preventivas que apoyen la toma de decisiones del personal administrativo y clínico.",
            "termsPage.s2.l1": "<br><strong>Personal administrativo</strong>: directores, administradores, jefes de área y supervisores de turnos en instituciones de salud.",
            "termsPage.s2.l2": "<strong>Personal clínico</strong>: médicos, enfermeros y demás trabajadores de la salud en funciones asistenciales.",
            "termsPage.s2.warningTitle": "<strong>Aviso importante</strong>:",
            "termsPage.s2.warningText": "VitalWatch es un prototipo académico desarrollado con fines educativos y de investigación. No constituye un dispositivo médico certificado ni reemplaza el juicio clínico profesional. Las alertas generadas son de carácter preventivo y orientativo, y no deben interpretarse como diagnósticos médicos.",
            "termsPage.s3.title": "3. Registro y Acceso al Sistema",
            "termsPage.s3.l1": "El acceso a <strong>VitalWatch</strong> requiere el registro de una cuenta institucional mediante credenciales asignadas por el administrador de la institución de salud suscrita al servicio.",
            "termsPage.s3.l2": "Cada usuario es responsable de mantener la confidencialidad de sus credenciales de acceso. El equipo de <strong>VitaSync</strong> no se hace responsable por el uso no autorizado que derive de la negligencia del usuario en el resguardo de sus datos de acceso.",
            "termsPage.s3.l3": "Cada cuenta queda vinculada a una persona natural dentro de la institución. Está prohibida la cesión, el préstamo o el uso compartido de credenciales entre usuarios.",
            "termsPage.s3.l4": "La institución suscrita es responsable de gestionar correctamente los roles y permisos de acceso de su personal dentro de la plataforma.",
            "termsPage.s3.l5": "El administrador de la institución agregará al personal asistencial y de supervisión enviando invitaciones por correo electrónico desde el módulo de administración del mismo aplicativo.",

            "termsPage.s4.title": "4. Condiciones de Uso Aceptable",
            "termsPage.s4.p1": "El usuario se compromete a utilizar <strong>VitalWatch</strong> exclusivamente para los fines legítimos de monitoreo y prevención de fatiga laboral en entornos de salud para los cuales fue diseñado.",
            "termsPage.s4.l1": "Usar la plataforma con fines de vigilancia o control discriminatorio del personal.",
            "termsPage.s4.l2": "Compartir, distribuir o publicar los datos individuales de fatiga sin el consentimiento expreso del titular.",
            "termsPage.s4.l3": "Intentar acceder a datos de otros usuarios, instituciones o módulos sin autorización.",
            "termsPage.s4.l4": "Realizar ingeniería inversa, descompilar o modificar el software sin autorización del equipo de <strong>VitaSync</strong>.",
            "termsPage.s4.l5": "Utilizar la plataforma para actividades contrarias a la ética profesional, la ley o los derechos fundamentales de las personas.",
            "termsPage.s4.p2": "El uso de la plataforma implica el compromiso de respetar la dignidad, privacidad y bienestar del personal de salud cuyos datos son monitoreados.",

            "termsPage.s5.title": "5. Privacidad y Tratamiento de Datos Biométricos",
            "termsPage.s5.l1": "<strong>VitalWatch</strong> trata datos sensibles de carácter biométrico y laboral. El equipo de <strong>VitaSync</strong> se compromete a manejar dicha información con el más alto estándar de responsabilidad, confidencialidad y respeto a la privacidad de las personas.",
            "termsPage.s5.l2": "Los datos recopilados son utilizados exclusivamente para el cálculo del puntaje de fatiga y la generación de alertas preventivas. No serán vendidos, cedidos ni compartidos con terceros sin el consentimiento expreso del usuario o de la institución suscrita, salvo obligación legal.",
            "termsPage.s5.l3": "Los datos almacenados son accesibles únicamente por el personal autorizado de la institución y por el equipo técnico de <strong>VitaSync</strong> cuando sea estrictamente necesario para el soporte del servicio.",
            "termsPage.s5.l4": "La institución suscrita actúa como responsable del tratamiento de los datos de su personal, y el equipo de <strong>VitaSync</strong> como encargado del tratamiento. Ambas partes asumen la responsabilidad correspondiente según los roles establecidos.",
            "termsPage.s5.l5": "En concordancia con los principios éticos que rigen este proyecto, el equipo de <strong>VitaSync</strong> no utilizará los datos recopilados para investigación académica adicional sin previa notificación y consentimiento de la institución involucrada.",

            "termsPage.s6.title": "6. Responsabilidad Ética y Profesional",
            "termsPage.s6.p1": "El equipo de <strong>VitaSync</strong> asume el compromiso de desarrollar y mantener <strong>VitalWatch</strong> bajo los principios del <strong>Código de Ética de la Ingeniería de Software de ACM/IEEE</strong> y las directrices del <strong>Código de Ética del Colegio de Ingenieros del Perú (CIP)</strong>. A continuación se detalla cómo se aplican dichos principios al desarrollo y operación del producto:",

            "termsPage.s6.sb1.title": "6.1 Principio de Interés Público",
            "termsPage.s6.sb1.desc": "<strong>VitalWatch</strong> ha sido concebido para contribuir al bienestar colectivo: proteger la salud del personal médico y, por extensión, garantizar una atención de mayor calidad y seguridad para los pacientes. Toda decisión de diseño prioriza el impacto positivo en la sociedad por encima de intereses particulares.",

            "termsPage.s6.sb2.title": "6.2 Principio de Calidad del Producto",
            "termsPage.s6.sb2.desc": "El equipo se compromete a aplicar buenas prácticas de ingeniería de software durante todo el ciclo de vida del producto: levantamiento de requerimientos, diseño orientado a dominio (DDD), implementación limpia, pruebas y despliegue. Se emplean convenciones de código documentadas y herramientas estándar de la industria para garantizar un producto confiable y mantenible.",

            "termsPage.s6.sb3.title": "6.3 Principio de Juicio Profesional",
            "termsPage.s6.sb3.desc": "Los miembros del equipo se comprometen a no distorsionar ni omitir información relevante sobre las capacidades, limitaciones o riesgos del sistema. <strong>VitalWatch</strong> es presentado con total transparencia en cuanto a su naturaleza académica y sus restricciones técnicas actuales.",

            "termsPage.s6.sb4.title": "6.4 Principio de Gestión Ética",
            "termsPage.s6.sb4.desc": "El desarrollo del proyecto sigue una metodología estructurada que incorpora planificación de sprints, revisiones continuas y distribución equitativa de responsabilidades entre los integrantes del equipo. El proceso busca promover un entorno colaborativo, justo y técnicamente riguroso.",

            "termsPage.s6.sb5.title": "6.5 Principio de Honestidad y Transparencia",
            "termsPage.s6.sb5.desc": "El equipo se compromete a comunicar con veracidad el estado del producto, sus alcances y sus limitaciones a los usuarios, docentes y cualquier parte interesada. No se harán afirmaciones falsas sobre las capacidades del sistema.",

            "termsPage.s6.sb6.title": "6.6 Principio de Respeto a los Colegas",
            "termsPage.s6.sb6.desc": "El trabajo en equipo se rige por relaciones de respeto mutuo, reconocimiento de contribuciones individuales y comunicación abierta. Se fomenta la colaboración activa mediante herramientas como WhatsApp, Discord y Google Meet para garantizar la participación equitativa de todos los integrantes.",
            "termsPage.s7.title": "7. Transparencia en el Proceso de Desarrollo",
            "termsPage.s7.p1": "El equipo de <strong>VitaSync</strong> desarrolla <strong>VitalWatch</strong> bajo un proceso de ingeniería de software documentado y trazable, en coherencia con el principio de transparencia profesional exigido por los estándares ACM/IEEE y el CIP.",

            "termsPage.s7.sb1.title": "7.1 Control de Versiones con GitHub",
            "termsPage.s7.sb1.desc": "Todo el código fuente del proyecto, incluyendo el reporte del informe, la Landing Page y las aplicaciones web, es gestionado mediante <strong>control de versiones Git</strong> a través de la organización en GitHub:",
            "termsPage.s7.sb1.repo1": "Organización GitHub: https://github.com/upc-pre-202610-1asi0729-17952-VitaSync",
            "termsPage.s7.sb1.repo2": "Repositorio del Informe: https://github.com/upc-pre-202610-1asi0729-17952-VitaSync/vitalwatch-report",

            "termsPage.s7.sb2.title": "7.2 Metodología de Trabajo",
            "termsPage.s7.sb2.desc": "El equipo sigue una metodología ágil basada en sprints, con backlog definido, planificación de sprints, revisiones periódicas y retrospectivas. Cada entrega está documentada en el informe del proyecto e incluye evidencia de ejecución, despliegue y colaboración en equipo.",

            "termsPage.s7.sb3.title": "7.3 Evidencia del Proceso",
            "termsPage.s7.sb3.l1": "Registro escrito en el informe del trabajo final.",
            "termsPage.s7.sb3.l2": "Capturas de pantalla del estado de la plataforma en cada sprint.",
            "termsPage.s7.sb3.l3": "Videos de demostración funcional del producto en cada entrega.",
            "termsPage.s7.sb3.l4": "Historial de commits y <em>Collaboration Insights</em> de GitHub, que registran las contribuciones de cada integrante.",

            "termsPage.s8.title": "8. Propiedad Intelectual",
            "termsPage.s8.l1": "El diseño, código fuente, algoritmos, interfaces y documentación de <strong>VitalWatch</strong> son propiedad intelectual del equipo de <strong>VitaSync</strong>, desarrollados en el contexto del curso 1ASI0729 de la Universidad Peruana de Ciencias Aplicadas.",
            "termsPage.s8.l2": "El uso del servicio no transfiere al usuario ningún derecho de propiedad sobre el software ni sobre sus componentes.",
            "termsPage.s8.l3": "El equipo de <strong>VitaSync</strong> reconoce y respeta los derechos de propiedad intelectual de las herramientas, librerías y servicios de terceros utilizados en el desarrollo del producto, conforme a sus respectivas licencias.",

            "termsPage.s9.title": "9. Limitación de Responsabilidad",
            "termsPage.s9.l1": "<strong>VitalWatch</strong> es una herramienta de apoyo a la decisión, no un sistema de diagnóstico médico ni un sustituto del criterio profesional clínico o administrativo.",
            "termsPage.s9.l2": "El equipo de <strong>VitaSync</strong> no será responsable por decisiones adoptadas por las instituciones o el personal basándose exclusivamente en los datos o alertas generadas por la plataforma, especialmente aquellas que deriven en consecuencias clínicas, laborales o legales.",
            "termsPage.s9.l3": "El equipo se compromete a informar oportunamente de cualquier fallo crítico, limitación técnica o vulnerabilidad identificada que pueda afectar la integridad de los datos o la correcta operación del sistema.",
            "termsPage.s9.l4": "El servicio se brinda en su estado actual (<em>as is</em>), propio de un proyecto académico en desarrollo, sin garantía de disponibilidad continua del 100%.",

            "termsPage.s10.title": "10. Modificaciones al Servicio y a los Términos",
            "termsPage.s10.l1": "El equipo de <strong>VitaSync</strong> se reserva el derecho de modificar, actualizar o discontinuar el servicio o cualquier parte de él, así como los presentes Términos y Condiciones, notificando previamente a los usuarios con un plazo razonable.",
            "termsPage.s10.l2": "Las modificaciones a los presentes términos serán publicadas en la plataforma y entrarán en vigencia a partir de la fecha de publicación indicada. El uso continuado del servicio tras la notificación implica la aceptación de los nuevos términos.",

            "termsPage.s11.title": "11. Contacto",
            "termsPage.s11.p1": "Para consultas, reportes de incidencias, solicitudes de información sobre el tratamiento de datos o cualquier comunicación relacionada con estos Términos y Condiciones, el usuario puede contactar al equipo de <strong>VitaSync</strong> a través de los canales habilitados en la plataforma o mediante los repositorios oficiales del proyecto en GitHub.",

            "termsPage.s12.title": "12. Marco Legal Aplicable",
            "termsPage.s12.p1": "Los presentes Términos y Condiciones se rigen por la legislación peruana vigente, incluyendo:",

            "termsPage.s12.l1": "<strong>Ley N.° 29733</strong> – Ley de Protección de Datos Personales del Perú y su reglamento.",
            "termsPage.s12.l2": "Los principios del <strong>Código de Ética del Colegio de Ingenieros del Perú (CIP)</strong>.",
            "termsPage.s12.l3": "Los principios del <strong>Código de Ética de Ingeniería de Software de ACM/IEEE</strong> (versión vigente).",

            "termsPage.s12.p2": "Cualquier controversia derivada del uso de la plataforma que no pueda resolverse de mutuo acuerdo será sometida a la jurisdicción de los tribunales competentes de la ciudad de Lima, Perú.",

            "termsPage.footer": "Documento elaborado por el equipo <strong>VitaSync</strong> — Universidad Peruana de Ciencias Aplicadas (UPC), Ciclo 2026-10.<br><br>Desarrollado en el marco del curso <em>1ASI0729 – Desarrollo de Aplicaciones Open Source</em>, bajo la supervisión del docente Ivan Robles Fernández."
        },
        en: {
            "nav.home": "Home",
            "nav.features": "Features",
            "nav.benefits": "Benefits",
            "nav.plans": "Plans",
            "nav.contact": "Contact",
            "nav.terms": "Terms",
            "nav.login": "Login",

            "hero.badge": "Preventive Clinical System",
            "hero.title": "Intelligent monitoring for safe care",
            "hero.subtitle": "VitalWatch helps clinics and hospitals detect signs of fatigue in clinical staff, trigger preventive alerts, and make timely decisions to protect both your team and your patients.",
            "hero.cta.demo": "Request Demo",
            "hero.cta.plans": "View Plans",

            "mockup.title": "VitalWatch Dashboard",
            "mockup.risk.title": "Risk Level",
            "mockup.risk.status": "High in ICU",
            "mockup.fatigue.title": "Fatigue Detected",
            "mockup.fatigue.status": "Dr. Silva - 14h shift",
            "mockup.stats.alerts": "Preventive Alerts",
            "mockup.stats.personnel": "Staff Monitored",

            "features.title": "Key Features",
            "features.subtitle": "Tools designed to detect risks early and support safer clinical decisions.",
            "features.f1.title": "Clinical Monitoring",
            "features.f1.desc": "Visualize vital signs, fatigue, HRV, cortisol, and sensor status.",
            "features.f2.title": "Risk Management",
            "features.f2.desc": "Classify staff by risk level and prioritize critical cases.",
            "features.f3.title": "Intelligent Alerts",
            "features.f3.desc": "Detect biometric anomalies and generate alerts for supervisors.",
            "features.f4.title": "Medical Shifts",
            "features.f4.desc": "Organize shifts, assign duties, and log clock-ins and clock-outs.",
            "features.f5.title": "Staff Recovery",
            "features.f5.desc": "Assign rest breaks, medical evaluations, and preventive actions.",
            "features.f6.title": "Hospital Administration",
            "features.f6.desc": "Manage users, clinical teams, subscriptions, reports, and system audits.",

            "benefits.title": "Comprehensive Value for the Entire Institution",
            "benefits.subtitle": "Discover how VitalWatch transforms the care of those who care for us.",
            "benefits.b1.tag": "For Management and Administration",
            "benefits.b1.title": "More visibility to make better decisions",
            "benefits.b1.desc": "VitalWatch helps supervisors and clinical managers identify staff at risk, anticipate operational issues, and act with clear, timely information.",
            "benefits.b1.l1": "<strong>Safer assignment:</strong> Adjust shifts and prioritize breaks based on fatigue signs.",
            "benefits.b1.l2": "<strong>Risk prevention:</strong> Reduce the likelihood of adverse events associated with exhaustion.",
            "benefits.b1.l3": "<strong>Operational continuity:</strong> Maintain better staff coverage without improvising decisions.",
            "benefits.b1.l4": "<strong>Greater traceability:</strong> Log alerts and actions to improve institutional supervision.",

            "benefits.b2.tag": "For Clinical Staff",
            "benefits.b2.title": "Support to take care of your well-being during every shift",
            "benefits.b2.desc": "VitalWatch helps medical staff recognize signs of fatigue, receive preventive recommendations, and work more safely during demanding shifts.",
            "benefits.b2.l1": "<strong>Early detection:</strong> Identify signs of burnout before they affect your performance.",
            "benefits.b2.l2": "<strong>Preventive recommendations:</strong> Receive support to take timely breaks.",
            "benefits.b2.l3": "<strong>Greater peace of mind:</strong> Work with the confidence of having monitoring and follow-up.",
            "benefits.b2.l4": "<strong>Visible well-being:</strong> Check your overall condition and better understand your risk level.",

            "plans.title": "Subscription Plans",
            "plans.subtitle": "Options designed for institutions with different levels of operation and supervision.",
            "plans.basic.name": "Basic",
            "plans.basic.desc": "Essential plan for small clinics needing monitoring, staff management, and basic risk control.",
            "plans.pro.name": "Professional",
            "plans.pro.desc": "Recommended plan for medium clinics needing full operation, clinical prevention, audits, and administrative reports.",
            "plans.ent.name": "Enterprise",
            "plans.ent.desc": "Advanced plan for large hospitals, clinical networks, and multi-site organizations with integrations and large-scale operations.",
            "plans.popular.badge": "Most Recommended",
            "plans.cta.basic": "Choose plan",
            "plans.cta.pro": "Choose plan",
            "plans.cta.ent": "Choose plan",
            "plans.footnote.invitations": "<strong>How does registration work?</strong> Upon subscribing to any of our plans, the medical center Administrator creates the institutional account and adds the medical staff (both supervisors and clinical staff) by sending them email invitations directly from within the application.",
            "mockup.clinical.title": "VITAL SIGNS",
            "mockup.clinical.hr.lbl": "HR",
            "mockup.clinical.hrv.lbl": "HRV",
            "mockup.clinical.cortisol.lbl": "Cortisol",
            "mockup.clinical.sensor.lbl": "Sensor",
            "mockup.clinical.sensor.status": "ON",
            "mockup.risk.title": "RISK LEVELS",
            "mockup.risk.critical": "Critical",
            "mockup.risk.medium": "Medium",
            "mockup.risk.stable": "Stable",
            "mockup.alerts.title_bar": "ALERTS",
            "mockup.alerts.title": "Critical Fatigue",
            "mockup.alerts.desc": "Dr. Silva - HRV decreased 18%",
            "mockup.alerts.btn.notify": "Notify",
            "mockup.alerts.btn.dismiss": "Dismiss",
            "mockup.shifts.title_bar": "ACTIVE SHIFTS",
            "mockup.shifts.title": "ICU Shift",
            "mockup.shifts.status": "In progress",
            "mockup.shifts.worked": "Elapsed: 9.5h",
            "mockup.recovery.title_bar": "RECOVERY GUIDE",
            "mockup.recovery.suggested": "Suggested break",
            "mockup.recovery.active_break": "Active (15 min)",
            "mockup.admin.title_bar": "HOSPITAL ADMIN",
            "mockup.admin.doctors": "Active doctors",
            "mockup.admin.teams": "Clinical teams",
            "mockup.admin.audit": "Audit registry",

            // Table headers
            "table.header.features": "Features",
            
            // Categories
            "table.cat.capacity": "Capacity Limits",
            "table.cat.dashboard_mgmt": "Dashboard & Management",
            "table.cat.monitor_prev": "Monitoring & Prevention",
            "table.cat.reports_history": "Reports & Audits",
            "table.cat.integrations_config": "Integrations & Configuration",
            "table.cat.support": "Support",

            // Features
            "table.feat.active_doctors": "Active doctors",
            "table.feat.clinical_supervisors": "Clinical supervisors",
            "table.feat.clinical_teams": "Active clinical teams",
            "table.feat.work_areas": "Work areas",
            "table.feat.monthly_invites": "Monthly invitations",
            "table.feat.multisite": "Multi-site",
            "table.feat.dashboard": "Administrative dashboard",
            "table.feat.medical_mgmt": "Medical staff management",
            "table.feat.teams_mgmt": "Clinical teams management",
            "table.feat.email_invites": "Email invitations",
            "table.feat.vitals_monitor": "Vital signs monitoring",
            "table.feat.shift_mgmt": "Shift management",
            "table.feat.risk_evaluation": "Risk evaluation",
            "table.feat.alerts": "Clinical alerts",
            "table.feat.anomaly_detection": "Biometric anomaly detection",
            "table.feat.prev_actions": "Preventive actions",
            "table.feat.recovery_tracking": "Doctor recovery tracking",
            "table.feat.reports": "Reports",
            "table.feat.audit": "System audit",
            "table.feat.history": "Data history",
            "table.feat.api_integrations": "External integrations & API",
            "table.feat.data_export": "Advanced data export",
            "table.feat.custom_config": "Custom configuration",
            "table.feat.support": "Technical support",

            // Values
            "table.val.basic_docs": "Up to 30",
            "table.val.pro_docs": "Up to 120",
            "table.val.unlimited": "Unlimited",
            "table.val.basic_supers": "Up to 6",
            "table.val.pro_supers": "Up to 25",
            "table.val.basic_teams": "Up to 6",
            "table.val.pro_teams": "Up to 25",
            "table.val.basic_areas": "Up to 6",
            "table.val.pro_areas": "Up to 15",
            "table.val.unlimited_f": "Unlimited",
            "table.val.basic_invites": "Up to 80",
            "table.val.pro_invites": "Up to 350",
            "table.val.basic_dash": "Basic",
            "table.val.pro_dash": "Complete",
            "table.val.ent_dash": "Advanced",
            "table.val.complete": "Complete",
            "table.val.advanced": "Advanced",
            "table.val.complete_m": "Complete",
            "table.val.basic_f": "Basic",
            "table.val.essential_f": "Essential",
            "table.val.complete_f": "Complete",
            "table.val.basic_reports": "Basic",
            "table.val.pro_reports": "Complete administrative",
            "table.val.advanced_m": "Advanced",
            "table.val.history_basic": "45 days",
            "table.val.history_pro": "180 days",
            "table.val.history_ent": "2 years",
            "table.val.support_basic": "Standard",
            "table.val.support_pro": "Priority",
            "table.val.support_ent": "Dedicated",

            "terms.title": "Privacy and Data Use",
            "terms.summary": "At VitalWatch, we prioritize the confidentiality and responsible use of clinical staff information. Our proposal is aimed at supporting risk prevention and institutional safety.",
            "terms.btn.more": "Read more information",
            "terms.btn.less": "Hide information",
            "terms.d1.title": "1. Data Confidentiality",
            "terms.d1.desc": "All information collected regarding fatigue and biometrics is anonymized and end-to-end encrypted. Administrators only see aggregated data unless a critical alert is triggered.",
            "terms.d2.title": "2. Responsible Use",
            "terms.d2.desc": "Data is used exclusively for risk prevention and improving working conditions. Under no circumstances is it used for administrative penalties.",
            "terms.d3.title": "3. Regulatory Compliance",
            "terms.d3.desc": "VitalWatch promotes the ethical use of information, focused on staff well-being and patient safety.",

            "footer.tagline": "Preventive monitoring for safer care.",
            "footer.platform": "Platform",
            "footer.company": "Company",
            "footer.tos": "Terms of Service",
            "footer.privacy": "Privacy Policy",
            "footer.follow": "Follow Us",
            "footer.copy": "&copy; 2026 VitaSync. All rights reserved.",








            "termsPage.badge": "Legal Document",
            "termsPage.title": "Terms and Conditions of Use",
            "termsPage.subtitle": "Learn about the legal, ethical, and privacy conditions related to the use of the VitalWatch platform.",
            "termsPage.version": "Version: 1.0",
            "termsPage.date": "Effective Date: May 2026",
            "termsPage.s1.title": "1. Acceptance of the Terms",
            "termsPage.s1.p1": "By accessing and using the <strong>VitalWatch</strong> web platform, developed by the <strong>VitaSync</strong> startup team within the framework of the <em>1ASI0729 – Open Source Application Development</em> course at the Universidad Peruana de Ciencias Aplicadas (UPC), the user declares that they have read, understood, and fully accepted these Terms and Conditions of Use. If you do not agree with any of these terms, we kindly ask you to refrain from using the service.",
            "termsPage.s2.title": "2. Service Description",
            "termsPage.s2.p1": "<strong>VitalWatch</strong> is a SaaS (Software as a Service) web platform focused on the preventive monitoring of fatigue levels among medical and clinical staff in hospitals and clinics. The platform analyzes biometric and workload data — including sleep hours, heart rate, physical activity, and work shifts — in order to calculate a fatigue score (<em>Fatigue Score</em>) and issue preventive alerts that support decision-making for administrative and clinical personnel.",
            "termsPage.s2.l1": "<br><strong>Administrative staff</strong>: directors, administrators, department heads, and shift supervisors in healthcare institutions.",
            "termsPage.s2.l2": "<strong>Clinical staff</strong>: doctors, nurses, and other healthcare workers performing care-related duties.",
            "termsPage.s2.warningTitle": "<strong>Important Notice</strong>:",
            "termsPage.s2.warningText": "VitalWatch is an academic prototype developed for educational and research purposes. It is not a certified medical device and does not replace professional clinical judgment. The alerts generated are preventive and informational in nature and should not be interpreted as medical diagnoses.",

            "termsPage.s3.title": "3. Registration and System Access",
            "termsPage.s3.l1": "Access to <strong>VitalWatch</strong> requires the registration of an institutional account using credentials assigned by the administrator of the healthcare institution subscribed to the service.",
            "termsPage.s3.l2": "Each user is responsible for maintaining the confidentiality of their access credentials. The <strong>VitaSync</strong> team is not responsible for unauthorized use resulting from the user's negligence in protecting their access information.",
            "termsPage.s3.l3": "Each account is linked to a natural person within the institution. The transfer, lending, or shared use of credentials between users is strictly prohibited.",
            "termsPage.s3.l4": "The subscribed institution is responsible for properly managing the access roles and permissions of its staff within the platform.",
            "termsPage.s3.l5": "The institution administrator will add clinical and supervisory staff by sending email invitations from the administration module within the application.",

            "termsPage.s4.title": "4. Acceptable Use Conditions",
            "termsPage.s4.p1": "The user agrees to use <strong>VitalWatch</strong> exclusively for legitimate purposes related to the monitoring and prevention of workplace fatigue in healthcare environments for which it was designed.",
            "termsPage.s4.l1": "Using the platform for surveillance or discriminatory control of personnel.",
            "termsPage.s4.l2": "Sharing, distributing, or publishing individual fatigue data without the explicit consent of the data owner.",
            "termsPage.s4.l3": "Attempting to access data from other users, institutions, or modules without authorization.",
            "termsPage.s4.l4": "Performing reverse engineering, decompiling, or modifying the software without authorization from the <strong>VitaSync</strong> team.",
            "termsPage.s4.l5": "Using the platform for activities contrary to professional ethics, the law, or the fundamental rights of individuals.",
            "termsPage.s4.p2": "The use of the platform implies a commitment to respect the dignity, privacy, and well-being of healthcare personnel whose data is being monitored.",

            "termsPage.s5.title": "5. Privacy and Processing of Biometric Data",
            "termsPage.s5.l1": "<strong>VitalWatch</strong> processes sensitive biometric and workplace-related data. The <strong>VitaSync</strong> team is committed to handling such information with the highest standards of responsibility, confidentiality, and respect for individual privacy.",
            "termsPage.s5.l2": "The collected data is used exclusively for calculating the fatigue score and generating preventive alerts. It will not be sold, transferred, or shared with third parties without the explicit consent of the user or the subscribed institution, except where legally required.",
            "termsPage.s5.l3": "Stored data is accessible only to authorized personnel of the institution and to the technical team of <strong>VitaSync</strong> when strictly necessary for service support.",
            "termsPage.s5.l4": "The subscribed institution acts as the data controller for its staff's information, while the <strong>VitaSync</strong> team acts as the data processor. Both parties assume the corresponding responsibilities according to their established roles.",
            "termsPage.s5.l5": "In accordance with the ethical principles governing this project, the <strong>VitaSync</strong> team will not use the collected data for additional academic research without prior notification and consent from the involved institution.",

            "termsPage.s6.title": "6. Ethical and Professional Responsibility",
            "termsPage.s6.p1": "The <strong>VitaSync</strong> team is committed to developing and maintaining <strong>VitalWatch</strong> under the principles of the <strong>ACM/IEEE Software Engineering Code of Ethics</strong> and the guidelines of the <strong>Code of Ethics of the Peruvian College of Engineers (CIP)</strong>. The following explains how these principles are applied to the development and operation of the product:",

            "termsPage.s6.sb1.title": "6.1 Public Interest Principle",
            "termsPage.s6.sb1.desc": "<strong>VitalWatch</strong> was conceived to contribute to collective well-being: protecting the health of medical staff and, consequently, ensuring higher-quality and safer care for patients. Every design decision prioritizes positive social impact over particular interests.",

            "termsPage.s6.sb2.title": "6.2 Product Quality Principle",
            "termsPage.s6.sb2.desc": "The team is committed to applying software engineering best practices throughout the entire product lifecycle: requirements gathering, domain-driven design (DDD), clean implementation, testing, and deployment. Documented coding conventions and industry-standard tools are used to ensure a reliable and maintainable product.",

            "termsPage.s6.sb3.title": "6.3 Professional Judgment Principle",
            "termsPage.s6.sb3.desc": "Team members commit to not distorting or omitting relevant information regarding the system’s capabilities, limitations, or risks. <strong>VitalWatch</strong> is presented with complete transparency regarding its academic nature and current technical restrictions.",

            "termsPage.s6.sb4.title": "6.4 Ethical Management Principle",
            "termsPage.s6.sb4.desc": "Project development follows a structured methodology that incorporates sprint planning, continuous reviews, and equitable distribution of responsibilities among team members. The process seeks to promote a collaborative, fair, and technically rigorous environment.",

            "termsPage.s6.sb5.title": "6.5 Honesty and Transparency Principle",
            "termsPage.s6.sb5.desc": "The team is committed to truthfully communicating the product’s status, scope, and limitations to users, professors, and any interested parties. No false claims will be made regarding the system’s capabilities.",

            "termsPage.s6.sb6.title": "6.6 Respect for Colleagues Principle",
            "termsPage.s6.sb6.desc": "Teamwork is governed by relationships of mutual respect, recognition of individual contributions, and open communication. Active collaboration is encouraged through tools such as WhatsApp, Discord, and Google Meet to ensure equitable participation among all team members.",
            "termsPage.s7.title": "7. Transparency in the Development Process",
            "termsPage.s7.p1": "The <strong>VitaSync</strong> team develops <strong>VitalWatch</strong> under a documented and traceable software engineering process, consistent with the principle of professional transparency required by ACM/IEEE standards and the CIP.",

            "termsPage.s7.sb1.title": "7.1 Version Control with GitHub",
            "termsPage.s7.sb1.desc": "All project source code, including the report documentation, Landing Page, and web applications, is managed through <strong>Git version control</strong> using the GitHub organization:",
            "termsPage.s7.sb1.repo1": "GitHub Organization: https://github.com/upc-pre-202610-1asi0729-17952-VitaSync",
            "termsPage.s7.sb1.repo2": "Report Repository: https://github.com/upc-pre-202610-1asi0729-17952-VitaSync/vitalwatch-report",

            "termsPage.s7.sb2.title": "7.2 Work Methodology",
            "termsPage.s7.sb2.desc": "The team follows an agile methodology based on sprints, with a defined backlog, sprint planning, periodic reviews, and retrospectives. Each deliverable is documented in the project report and includes evidence of execution, deployment, and team collaboration.",

            "termsPage.s7.sb3.title": "7.3 Process Evidence",
            "termsPage.s7.sb3.l1": "Written records in the final project report.",
            "termsPage.s7.sb3.l2": "Screenshots showing the platform status during each sprint.",
            "termsPage.s7.sb3.l3": "Functional product demonstration videos for each delivery.",
            "termsPage.s7.sb3.l4": "GitHub commit history and <em>Collaboration Insights</em>, which record the contributions of each team member.",

            "termsPage.s8.title": "8. Intellectual Property",
            "termsPage.s8.l1": "The design, source code, algorithms, interfaces, and documentation of <strong>VitalWatch</strong> are the intellectual property of the <strong>VitaSync</strong> team, developed within the context of course 1ASI0729 at the Universidad Peruana de Ciencias Aplicadas.",
            "termsPage.s8.l2": "Use of the service does not transfer to the user any ownership rights over the software or its components.",
            "termsPage.s8.l3": "The <strong>VitaSync</strong> team recognizes and respects the intellectual property rights of third-party tools, libraries, and services used in the development of the product, in accordance with their respective licenses.",

            "termsPage.s9.title": "9. Limitation of Liability",
            "termsPage.s9.l1": "<strong>VitalWatch</strong> is a decision-support tool, not a medical diagnostic system or a substitute for professional clinical or administrative judgment.",
            "termsPage.s9.l2": "The <strong>VitaSync</strong> team shall not be held responsible for decisions made by institutions or personnel based exclusively on the data or alerts generated by the platform, especially those resulting in clinical, labor, or legal consequences.",
            "termsPage.s9.l3": "The team is committed to promptly informing users of any critical failures, technical limitations, or identified vulnerabilities that may affect data integrity or the proper operation of the system.",
            "termsPage.s9.l4": "The service is provided in its current state (<em>as is</em>), as part of an academic project under development, without a guarantee of 100% continuous availability.",

            "termsPage.s10.title": "10. Modifications to the Service and Terms",
            "termsPage.s10.l1": "The <strong>VitaSync</strong> team reserves the right to modify, update, or discontinue the service or any part of it, as well as these Terms and Conditions, by notifying users in advance within a reasonable timeframe.",
            "termsPage.s10.l2": "Any modifications to these terms will be published on the platform and will take effect from the indicated publication date. Continued use of the service after notification implies acceptance of the updated terms.",

            "termsPage.s11.title": "11. Contact",
            "termsPage.s11.p1": "For inquiries, incident reports, requests for information regarding data processing, or any communication related to these Terms and Conditions, users may contact the <strong>VitaSync</strong> team through the channels enabled on the platform or through the official project repositories on GitHub.",

            "termsPage.s12.title": "12. Applicable Legal Framework",
            "termsPage.s12.p1": "These Terms and Conditions are governed by current Peruvian legislation, including:",

            "termsPage.s12.l1": "<strong>Law No. 29733</strong> – Peru’s Personal Data Protection Law and its regulations.",
            "termsPage.s12.l2": "The principles of the <strong>Code of Ethics of the Peruvian College of Engineers (CIP)</strong>.",
            "termsPage.s12.l3": "The principles of the <strong>ACM/IEEE Software Engineering Code of Ethics</strong> (current version).",

            "termsPage.s12.p2": "Any dispute arising from the use of the platform that cannot be resolved by mutual agreement shall be submitted to the jurisdiction of the competent courts of the city of Lima, Peru.",

            "termsPage.footer": "Document prepared by the <strong>VitaSync</strong> team — Universidad Peruana de Ciencias Aplicadas (UPC), 2026-10 Academic Term.<br><br>Developed within the framework of the course <em>1ASI0729 – Open Source Application Development</em>, under the supervision of Professor Ivan Robles Fernández."
        }
    };

    // Función para cambiar el idioma
    const changeLanguage = (lang) => {
        if (!translationsData[lang]) return;
        
        currentLang = lang;
        const translations = translationsData[lang];
        
        // Actualizar DOM
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    if (key.endsWith('.ph')) {
                        element.placeholder = translations[key];
                    } else {
                        element.value = translations[key];
                    }
                } else {
                    element.innerHTML = translations[key];
                }
            }
        });

        // Actualizar visualmente el selector
        langSelectors.forEach(selector => {
            if (selector.textContent.trim().toLowerCase() === lang.toLowerCase()) {
                selector.classList.add('active');
            } else {
                selector.classList.remove('active');
            }
        });
        
        // Actualizar el atributo lang del HTML
        document.documentElement.lang = lang;
    };

    // Agregar eventos a los botones
    langSelectors.forEach(selector => {
        selector.addEventListener('click', (e) => {
            const selectedLang = e.target.textContent.trim().toLowerCase();
            if (selectedLang !== currentLang) {
                changeLanguage(selectedLang);
            }
        });
    });

    // Cargar traducción inicial
    changeLanguage(currentLang);
});
