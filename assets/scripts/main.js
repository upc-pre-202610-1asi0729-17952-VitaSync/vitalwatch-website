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
            "features.f1.title": "Monitoreo Continuo",
            "features.f1.desc": "Supervise el estado del personal clínico durante sus turnos para identificar señales de agotamiento antes de que se conviertan en un riesgo.",
            "features.f2.title": "Alertas Preventivas",
            "features.f2.desc": "Reciba notificaciones cuando se detecten niveles de fatiga o riesgo que requieran atención inmediata.",
            "features.f3.title": "Coordinación Operativa",
            "features.f3.desc": "Visualice información clave para priorizar descansos, ajustar turnos y actuar con mayor seguridad.",

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
            "plans.basic.desc": "Ideal para clínicas pequeñas y centros de atención primaria.",
            "plans.basic.l1": "Monitoreo hasta 50 profesionales",
            "plans.basic.l2": "Alertas preventivas estándar",
            "plans.basic.l3": "Dashboard de nivel de riesgo",
            "plans.basic.l4": "Recomendaciones preventivas",
            "plans.basic.l5": "Soporte vía email",
            "plans.popular.badge": "Más recomendado",
            "plans.pro.name": "Professional",
            "plans.pro.desc": "Para clínicas medianas y hospitales que requieren supervisión más activa.",
            "plans.pro.l1": "Monitoreo hasta 200 profesionales",
            "plans.pro.l2": "Todo lo del plan Basic",
            "plans.pro.l3": "Alertas preventivas",
            "plans.pro.l4": "Seguimiento de personal en riesgo",
            "plans.pro.l5": "Gestión básica de incidentes",
            "plans.pro.l6": "Reportes y soporte prioritario",
            "plans.ent.name": "Enterprise",
            "plans.ent.desc": "Para hospitales o redes de salud que necesitan mayor control y trazabilidad.",
            "plans.ent.l1": "Monitoreo ilimitado",
            "plans.ent.l2": "Todo lo del plan Professional",
            "plans.ent.l3": "Reportes avanzados",
            "plans.ent.l4": "Auditoría y seguimiento institucional",
            "plans.ent.l5": "Escalamiento de incidentes",
            "plans.ent.l6": "Soporte e integración personalizada",
            "plans.cta": "Solicitar información",

            "contact.title": "Hablemos sobre la seguridad de su equipo",
            "contact.subtitle": "Solicite una demostración o información detallada sobre cómo implementar VitalWatch en su institución.",
            "contact.form.name": "Nombre completo *",
            "contact.form.name.ph": "Ej: Dra. María Gómez",
            "contact.form.email": "Correo institucional *",
            "contact.form.email.ph": "correo@hospital.com",
            "contact.form.inst": "Institución médica *",
            "contact.form.inst.ph": "Ej.: Clínica San José",
            "contact.form.role": "Cargo *",
            "contact.form.role.ph": "Ej: Director Médico",
            "contact.form.msg": "Mensaje o consulta",
            "contact.form.msg.ph": "Cuéntenos qué necesita o qué desea conocer sobre VitalWatch",
            "contact.form.submit": "Enviar solicitud",
            "contact.form.success": "¡Mensaje recibido! Nos contactaremos a la brevedad.",

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
            "features.f1.title": "Continuous Monitoring",
            "features.f1.desc": "Monitor the condition of clinical staff during their shifts to identify signs of burnout before they become a risk.",
            "features.f2.title": "Preventive Alerts",
            "features.f2.desc": "Receive notifications when fatigue or risk levels requiring immediate attention are detected.",
            "features.f3.title": "Operational Coordination",
            "features.f3.desc": "Visualize key information to prioritize breaks, adjust shifts, and act with greater safety.",

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
            "plans.basic.desc": "Ideal for small clinics and primary care centers.",
            "plans.basic.l1": "Monitor up to 50 professionals",
            "plans.basic.l2": "Standard preventive alerts",
            "plans.basic.l3": "Risk level dashboard",
            "plans.basic.l4": "Preventive recommendations",
            "plans.basic.l5": "Email support",
            "plans.popular.badge": "Most Recommended",
            "plans.pro.name": "Professional",
            "plans.pro.desc": "For medium clinics and hospitals requiring more active supervision.",
            "plans.pro.l1": "Monitor up to 200 professionals",
            "plans.pro.l2": "Everything in Basic plan",
            "plans.pro.l3": "Preventive alerts",
            "plans.pro.l4": "Tracking of at-risk staff",
            "plans.pro.l5": "Basic incident management",
            "plans.pro.l6": "Reports and priority support",
            "plans.ent.name": "Enterprise",
            "plans.ent.desc": "For hospitals or healthcare networks needing greater control and traceability.",
            "plans.ent.l1": "Unlimited monitoring",
            "plans.ent.l2": "Everything in Professional plan",
            "plans.ent.l3": "Advanced reports",
            "plans.ent.l4": "Institutional audit and tracking",
            "plans.ent.l5": "Incident escalation",
            "plans.ent.l6": "Custom support and integration",
            "plans.cta": "Request Information",

            "contact.title": "Let's talk about your team's safety",
            "contact.subtitle": "Request a demo or detailed information on how to implement VitalWatch in your institution.",
            "contact.form.name": "Full Name *",
            "contact.form.name.ph": "E.g., Dr. Mary Smith",
            "contact.form.email": "Institutional Email *",
            "contact.form.email.ph": "email@hospital.com",
            "contact.form.inst": "Medical Institution *",
            "contact.form.inst.ph": "E.g., St. Joseph Clinic",
            "contact.form.role": "Role *",
            "contact.form.role.ph": "E.g., Medical Director",
            "contact.form.msg": "Message or Inquiry",
            "contact.form.msg.ph": "Tell us what you need or what you'd like to know about VitalWatch",
            "contact.form.submit": "Submit Request",
            "contact.form.success": "Message received! We will contact you shortly.",

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
