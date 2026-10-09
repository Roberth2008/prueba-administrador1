/* ==========================================================================
           FIREBASE FIRESTORE & CATALOG SIMULATOR (DRE CAÑAS FEA 2026)
           ========================================================================== */

        // Catalog definitions
        const CATALOGOS = {
            circuitos: [
                { id: "01", nombre: "Circuito 01 (Cañas)" },
                { id: "02", nombre: "Circuito 02 (Abangares)" },
                { id: "03", nombre: "Circuito 03 (Tilarán)" },
                { id: "04", nombre: "Circuito 04 (Colorado)" },
                { id: "05", nombre: "Circuito 05 (Altura)" }
            ],
            instituciones: {
                "01": [
  "Escuela Agua Caliente",
  "Escuela Cedros",
  "Escuela Paso Lajas",
  "Escuela El Vergel",
  "Escuela Higuerón",
  "Escuela San Isidro",
  "Escuela San Juan",
  "Escuela Sandial",
  "Escuela Buenos Aires",
  "Escuela Río Corobicí",
  "Escuela IDA San Luis",
  "Escuela Corobicí Palmira",
  "Escuela Jerónimo Fernández",
  "Escuela Bello Horizonte",
  "Escuela Hacienda Taboga",
  "Escuela San Luis",
  "Escuela San Antonio",
  "Escuela Nueva Guatemala",
  "Escuela Lajas",
  "Jardín de Niños Monseñor Luis Leipold",
  "Escuela Las Palmas",
  "Escuela Antonio Obando",
  "Escuela Bebedero",
  "Escuela Monseñor Luis Leipold",
  "Escuela INVU Las Cañas",
  "Escuela San Cristobal",
  "Escuela San Miguel",
  "Liceo Miguel Araya Venegas",
  "Liceo Nocturno Juan Santamaría",
  "IPEC",
  "Liceo Bebedero",
  "Liceo Rural Nueva Guatemala",
  "C.T.P Cañas",
  "CINDEA Bebedero",
  "CECELO",
  "Saint Timothy School",
  "CENIT"
],
                "02": [
  "Arizona",
  "Santa Lucía",
  "Concepción",
  "Los Ángeles",
  "Tres Amigos",
  "Lourdes",
  "Pozo Azul",
  "San Juan Grande",
  "San Juan Chiquito",
  "San Francisco",
  "Matapalo",
  "Limonal",
  "Delia Oviedo de Acuña",
  "CTP de Abangares",
  "CINDEA de Abangares"
],
                "03": [
  "Esc. Viejo Arenal",
  "Esc. Asentamiento IDA Nuevo Arenal",
  "Esc. La Palma",
  "Esc. Paraíso",
  "Esc. El Aguacate",
  "Cerro San José",
  "Esc. El Silencio",
  "Esc. La Unión",
  "Esc. Ranchitos",
  "Esc. Mata de Caña",
  "Esc. Río Chiquito",
  "Esc. Sabalito",
  "Esc. Las Parcelas",
  "Esc. Solania",
  "Esc. La Maravilla",
  "Esc. El Roble",
  "Esc. Asentamiento Monseñor Morera Vega",
  "Esc. San Luis",
  "Esc. Rosita Chaves",
  "Esc. Los Ángeles",
  "Esc. Quebrada Grande",
  "Esc. Río Piedras",
  "Esc. Linda Vista",
  "Esc. Jaime Gutiérrez Braun",
  "Esc. Arenal",
  "Esc. Tronadora",
  "Esc. Líder el Carmen",
  "Esc. José María Calderón Mayorga",
  "Liceo Experimental Bilingüe Arenal",
  "Colegio Noct. Maurilio Alvarado Vargas",
  "CINDEA (Tilarán- Arenal)",
  "Liceo Maurilio Alvarado Vargas",
  "CTP Tronadora",
  "Jardín de Niños Tilarán",
  "Querubín"
],
                "04": [
  "El Níspero",
  "Concepción",
  "Barrio Jesús",
  "Raizal",
  "María Raffols",
  "Barbudal",
  "Higuerillas",
  "Tiquiruzas",
  "Peñas Blancas",
  "San Joaquín",
  "Las Brisas",
  "Piedra Verde",
  "Porozal",
  "Pueblo Nuevo",
  "Santa Lucía",
  "Joaquín Arroyo",
  "Colorado",
  "San Buenaventura",
  "Liceo de Colorado",
  "CINDEA La Palma"
],
                "05": [
  "Escuela Altos de Cebadilla",
  "Escuela Los Tornos",
  "Escuela Pueblo Nuevo",
  "Escuela Campos de Oro",
  "Escuela El Dos de Abangares",
  "Escuela Monte Los Olivos",
  "Escuela La Cruz",
  "Escuela Las Nubes",
  "Escuela Los Patios",
  "Escuela La Esperanza",
  "Escuela Candelaria",
  "Escuela Turín",
  "Escuela Tres Hermanos",
  "Escuela La Plaza",
  "Escuela Las Brisas",
  "Escuela El Dos de Tilarán",
  "Escuela San Miguel",
  "Escuela San Rafael",
  "Escuela Cañitas",
  "Escuela Cabeceras de Cañas",
  "Colegio San Rafael",
  "Liceo Rural Cabeceras"
]
            },
            disciplinas: {
                "Escénicas": ["Coreografía de baile", "Coreografía conceptual", "Coreografía de proyección folclórica costarricense", "Coreografía de proyección folclórica internacional", "Danza cultural indígena costarricense", "Danza cultural indígena internacional", "Cuentacuentos", "Narración o relato oral indígena original", "Narración o relato oral indígena de tradición ancestral", "Poesía coral", "Retahílas", "Teatro - extracto de obra teatral", "Teatro de muñecos o títeres", "Teatro indígena - extracto de obra teatral", "Teatro de niños y niñas - extracto de obra teatral", "Teatro de niños y niñas indígena - extracto de obra teatral"],
                "Literarias": ["Canto poético indígena", "Cuento", "Cuento ilustrado", "Fotonovela", "Microrrelato", "Novela gráfica", "Poesía", "Poesía indígena", "Relato escrito indígena original", "Relato escrito indígena tradicional o ancestral"],
                "Musicales": ["Banda de garaje", "Canción original", "Canción original de niños y niñas", "Canción popular", "Canción popular de niños y niñas", "Canción típica original costarricense", "Canción típica popular costarricense", "Cantautor/a", "Canto indígena original", "Canto indígena tradicional o ancestral", "Canto indígena original de niños y niñas", "Canto indígena de niños y niñas: tradicional o ancestral", "Cimarrona", "Coro", "Ensamble de flautas dulces", "Ensamble instrumental con materiales reciclables o reutilizables", "Estudiantina", "Grupo instrumental experimental", "Grupo instrumental", "Grupo musical cultural instrumental indígena", "Grupo musical cultural indígena", "Marimba", "Percusión corporal", "Rap"],
                "Visuales": ["Collage", "Dibujo", "Dibujo indígena", "Diseño de objeto", "Escultura", "Escultura indígena", "Esculturas vivientes", "Fotografía", "Grabado", "Instalación artística", "Máscara indígena", "Máscara o careta", "Mascarada tradicional costarricense (payasos, mantudos, gigantes, cabezudos, aparatos)", "Mural", "Mural indígena", "Objeto cultural indígena", "Pintura", "Pintura indígena", "Pintura corporal", "Producción audiovisual", "Teñido textil"]
            }
        };

        // ==================== FIREBASE / FIRESTORE ====================
        const firebaseConfig = {
            apiKey: "AIzaSyC0uI5zvisuBT5GmvP6rgpYtE5fLU-DSoc",
            authDomain: "base-de-datos-fea-2026.firebaseapp.com",
            projectId: "base-de-datos-fea-2026",
            storageBucket: "base-de-datos-fea-2026.firebasestorage.app",
            messagingSenderId: "231707148771",
            appId: "1:231707148771:web:37a5eb6f1c38da03a620d6",
            measurementId: "G-G4XXLBTKWF"
        };

        let firebaseDB = null;
        let firebaseReady = false;

        function iniciarFirebase() {
            try {
                const configValido = firebaseConfig.apiKey &&
                    !firebaseConfig.apiKey.startsWith("PEGA_AQUI") &&
                    firebaseConfig.projectId &&
                    !firebaseConfig.projectId.startsWith("PEGA_AQUI") &&
                    firebaseConfig.appId &&
                    !firebaseConfig.appId.startsWith("PEGA_AQUI");

                if (!configValido) {
                    console.warn("Firebase aún no está configurado. Pega tu firebaseConfig en este archivo.");
                    return false;
                }

                if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
                firebaseDB = firebase.firestore();
                firebaseReady = true;
                return true;
            } catch (error) {
                console.error("Error iniciando Firebase:", error);
                firebaseReady = false;
                return false;
            }
        }

        // ==================== ESTADO DE LA APLICACIÓN ====================
        let currentRole = "admin"; // "admin" | "asesor"
        let activeTab = "dashboard";
        let currentStep = 1;
        let pendingStudentChips = [];
        let pendingFuzzyData = null;

        // Colecciones locales sincronizadas con Firestore
        let dbEstudiantes = {};
        let dbInscripciones = [];
        let dbEventos = [];

        // ==================== ARRANQUE ====================
        window.addEventListener('DOMContentLoaded', async () => {
            lucide.createIcons();
            iniciarFirebase();
            const status = document.getElementById("firebaseStatus");
            if (status) {
                status.textContent = firebaseReady ? "Firebase: conectado" : "Firebase: configurar";
                status.className = firebaseReady
                    ? "bg-emerald-900/60 text-emerald-200 text-[10px] px-2 py-0.5 rounded border border-emerald-700"
                    : "bg-amber-900/60 text-amber-200 text-[10px] px-2 py-0.5 rounded border border-amber-700";
            }
            await initApp();
        });

        async function initApp() {
            try {
                if (firebaseReady) {
                    await loadFromFirebase();

                    if (Object.keys(dbEstudiantes).length === 0 && dbInscripciones.length === 0 && dbEventos.length === 0) {
                        seedDemoData();
                        await saveToFirebase();
                    }
                } else {
                    loadFromLocalStorageFallback();
                    if (Object.keys(dbEstudiantes).length === 0) seedDemoData();
                }

                if (limpiarInscripcionesHuerfanas() > 0) {
                    await saveToFirebase();
                }

                updateDashboardMetrics();
                updateBadges();
                renderEstudiantesTabla();
                renderEventosCards();
                renderPolifaceticosDashboard();
                renderAreaStatsCharts();
                lucide.createIcons();
            } catch (error) {
                console.error("Error inicializando la aplicación:", error);
                showToast("No se pudieron cargar los datos de Firebase.", "danger");
            }
        }

        // ==================== LECTURA DESDE FIRESTORE ====================
        async function loadFromFirebase() {
            if (!firebaseReady || !firebaseDB) return;

            const [estudiantesSnap, inscripcionesSnap, eventosSnap] = await Promise.all([
                firebaseDB.collection('estudiantes').get(),
                firebaseDB.collection('inscripciones').get(),
                firebaseDB.collection('eventos').get()
            ]);

            dbEstudiantes = {};
            estudiantesSnap.forEach(doc => {
                const data = doc.data();
                dbEstudiantes[doc.id] = data;
            });

            dbInscripciones = [];
            inscripcionesSnap.forEach(doc => {
                dbInscripciones.push({ id: doc.id, ...doc.data() });
            });

            dbEventos = [];
            eventosSnap.forEach(doc => {
                dbEventos.push({ id: doc.id, ...doc.data() });
            });

            dbInscripciones.sort((a, b) => String(a.id).localeCompare(String(b.id)));
            dbEventos.sort((a, b) => String(a.fecha || '').localeCompare(String(b.fecha || '')));

            guardarCacheLocal();
        }

        // ==================== ESCRITURA COMPLETA A FIRESTORE ====================
        async function saveToFirebase() {
            updateDashboardMetrics();
            updateBadges();
            guardarCacheLocal();

            if (!firebaseReady || !firebaseDB) {
                showToast("Firebase no está configurado. Los datos quedaron solo en este navegador.", "warning");
                return false;
            }

            try {
                const batch = firebaseDB.batch();

                Object.entries(dbEstudiantes).forEach(([cedula, estudiante]) => {
                    const ref = firebaseDB.collection('estudiantes').doc(String(cedula));
                    batch.set(ref, estudiante);
                });

                dbInscripciones.forEach(inscripcion => {
                    const id = String(inscripcion.id);
                    const { id: _id, ...data } = inscripcion;
                    const ref = firebaseDB.collection('inscripciones').doc(id);
                    batch.set(ref, data);
                });

                dbEventos.forEach(evento => {
                    const id = String(evento.id);
                    const { id: _id, ...data } = evento;
                    const ref = firebaseDB.collection('eventos').doc(id);
                    batch.set(ref, data);
                });

                await sincronizarEliminadosFirestore('estudiantes', Object.keys(dbEstudiantes), batch);
                await sincronizarEliminadosFirestore('inscripciones', dbInscripciones.map(x => String(x.id)), batch);
                await sincronizarEliminadosFirestore('eventos', dbEventos.map(x => String(x.id)), batch);

                await batch.commit();
                return true;
            } catch (error) {
                console.error("Error guardando en Firestore:", error);
                showToast("No se pudo sincronizar con Firebase. Revise su conexión y las reglas de Firestore.", "danger");
                return false;
            }
        }

        async function sincronizarEliminadosFirestore(nombreColeccion, idsActuales, batch) {
            const actuales = new Set(idsActuales.map(String));
            const snapshot = await firebaseDB.collection(nombreColeccion).get();
            snapshot.forEach(doc => {
                if (!actuales.has(doc.id)) batch.delete(doc.ref);
            });
        }

        function saveToLocalStorage() {
            saveToFirebase();
        }

        function guardarCacheLocal() {
            try {
                localStorage.setItem('fea_2026_estudiantes', JSON.stringify(dbEstudiantes));
                localStorage.setItem('fea_2026_inscripciones', JSON.stringify(dbInscripciones));
                localStorage.setItem('fea_2026_eventos', JSON.stringify(dbEventos));
            } catch (e) {
                console.warn("No se pudo guardar la caché local:", e);
            }
        }

        function loadFromLocalStorageFallback() {
            try {
                const est = localStorage.getItem('fea_2026_estudiantes');
                const ins = localStorage.getItem('fea_2026_inscripciones');
                const evt = localStorage.getItem('fea_2026_eventos');
                if (est) dbEstudiantes = JSON.parse(est);
                if (ins) dbInscripciones = JSON.parse(ins);
                if (evt) dbEventos = JSON.parse(evt);
            } catch (e) {
                console.error("Error cargando respaldo local:", e);
            }
        }

      

        function resetDataModal() {
            if (confirm("¿Desea restaurar la base de datos a los valores de prueba originales del FEA 2026?")) {
                localStorage.clear();
                seedDemoData();
                initApp();
                showToast("Base de datos reiniciada con éxito", "success");
            }
        }

        function switchTab(tabId) {
            activeTab = tabId;
            const views = ['dashboard', 'registro', 'estudiantes', 'importador', 'eventos'];
            views.forEach(v => {
                const el = document.getElementById(`view-${v}`);
                const tabBtn = document.getElementById(`tab-${v}`);
                if (v === tabId) {
                    if (el) el.classList.remove('hidden');
                    if (tabBtn) {
                        tabBtn.classList.add('border-amber-400', 'text-amber-400', 'font-bold');
                        tabBtn.classList.remove('border-transparent', 'text-slate-300');
                    }
                } else {
                    if (el) el.classList.add('hidden');
                    if (tabBtn) {
                        tabBtn.classList.remove('border-amber-400', 'text-amber-400', 'font-bold');
                        tabBtn.classList.add('border-transparent', 'text-slate-300');
                    }
                }
            });
            lucide.createIcons();
        }

        function toggleRole(role) {
            currentRole = role;
            document.getElementById('roleBadge').innerText = role === 'admin' ? "Rol: Administrador" : "Rol: Asesor (Enmascarado)";
            renderEstudiantesTabla();
            showToast(`Modo cambiado a: ${role.toUpperCase()}`, "info");
        }

        function normalizeCedula(val) {
            if (!val) return "";
            return val.toString().replace(/\D/g, '');
        }

        const IDENTITY_CONFIG = {
            cedula: {
                label: "Número de cédula",
                placeholder: "Ej: 1-2345-6789",
                hint: "9 dígitos · Ejemplo: 1-2345-6789"
            },
            dimex: {
                label: "Número DIMEX",
                placeholder: "Ej: 1558-2026-0001",
                hint: "11 o 12 dígitos · Ejemplo: 1558-2026-0001"
            },
            yisro: {
                label: "Identificador YIS RÓ",
                placeholder: "Ej: YRO-2026-0017",
                hint: "Alfanumérico · Ejemplo: YRO-2026-0017"
            }
        };

        function normalizeIdentidad(tipo, val) {
            if (!val) return "";
            const raw = val.toString().trim();

            if (tipo === "yisro") {
                return raw.toUpperCase().replace(/[^A-Z0-9]/g, "");
            }

            return raw.replace(/\D/g, "");
        }

        function getTipoIdentidadActual() {
            return document.getElementById("inputTipoIdentidad")?.value || "cedula";
        }

        function onTipoIdentidadChange(tipo) {
            const config = IDENTITY_CONFIG[tipo] || IDENTITY_CONFIG.cedula;
            const input = document.getElementById("inputCedula");
            const label = document.getElementById("inputIdentidadLabel");
            const hint = document.getElementById("inputIdentidadHint");
            const alertBox = document.getElementById("studentLiveAlert");

            if (label) label.textContent = `${config.label} *`;
            if (input) {
                input.placeholder = config.placeholder;
                input.value = "";
                input.inputMode = tipo === "yisro" ? "text" : "numeric";
            }
            if (hint) hint.textContent = config.hint;
            if (alertBox) alertBox.classList.add("hidden");
        }

        function validarIdentidad(tipo, valor) {
            const clean = normalizeIdentidad(tipo, valor);

            if (tipo === "cedula") {
                return {
                    clean,
                    valido: /^\d{9}$/.test(clean),
                    mensaje: "La cédula costarricense debe tener exactamente 9 dígitos."
                };
            }

            if (tipo === "dimex") {
                return {
                    clean,
                    valido: /^(?:\d{11}|\d{12})$/.test(clean),
                    mensaje: "El DIMEX debe tener 11 o 12 dígitos."
                };
            }

            return {
                clean,
                valido: /^[A-Z0-9]+$/.test(clean) && clean.length >= 3,
                mensaje: "El identificador YIS RÓ debe contener letras y/o números."
            };
        }

        function normalizeText(text) {
            if (!text) return "";
            return text.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
        }

        function maskCedula(cedula) {
            if (!cedula) return "";
            if (currentRole === "admin") return cedula;
            if (cedula.length >= 7) {
                return cedula.substring(0, 3) + "-****-" + cedula.substring(cedula.length - 2);
            }
            return cedula.substring(0, 2) + "***";
        }

        function showToast(msg, type = "info") {
            const container = document.getElementById('toastContainer');
            const toast = document.createElement('div');
            const bgClass = type === 'success' ? 'bg-emerald-600' : type === 'warning' ? 'bg-amber-600' : type === 'danger' ? 'bg-mep-red' : 'bg-mep-blue';
            toast.className = `${bgClass} text-white px-4 py-3 rounded-xl shadow-xl text-xs font-bold flex items-center gap-2 pointer-events-auto transition-all duration-300 transform translate-y-2 opacity-0`;
            toast.innerHTML = `<span>${msg}</span>`;
            container.appendChild(toast);
            
            setTimeout(() => {
                toast.classList.remove('translate-y-2', 'opacity-0');
            }, 10);

            setTimeout(() => {
                toast.classList.add('opacity-0');
                setTimeout(() => toast.remove(), 300);
            }, 3500);
        }

        function closeModal(id) {
            document.getElementById(id).classList.add('hidden');
        }

        function onCircuitoChange(circuitoId) {
            const instSelect = document.getElementById('regInstitucion');
            instSelect.innerHTML = '<option value="">-- Seleccione Institución --</option>';
            if (circuitoId && CATALOGOS.instituciones[circuitoId]) {
                instSelect.disabled = false;
                CATALOGOS.instituciones[circuitoId].forEach(inst => {
                    instSelect.innerHTML += `<option value="${inst}">${inst}</option>`;
                });
            } else {
                instSelect.disabled = true;
            }
        }

        function onAreaChange(areaNombre) {
            const discSelect = document.getElementById('regDisciplina');
            discSelect.innerHTML = '<option value="">-- Seleccione Disciplina --</option>';
            if (areaNombre && CATALOGOS.disciplinas[areaNombre]) {
                discSelect.disabled = false;
                CATALOGOS.disciplinas[areaNombre].forEach(disc => {
                    discSelect.innerHTML += `<option value="${disc}">${disc}</option>`;
                });
            } else {
                discSelect.disabled = true;
            }
        }

        function goToStep(stepNumber) {
            if (stepNumber > 1 && currentStep === 1) {
                const c = document.getElementById('regCircuito').value;
                const i = document.getElementById('regInstitucion').value;
                const a = document.getElementById('regArea').value;
                const d = document.getElementById('regDisciplina').value;
                if (!c || !i || !a || !d) {
                    showToast("Por favor complete Circuito, Institución, Área y Disciplina.", "warning");
                    return;
                }
            }
            if (stepNumber > 2 && currentStep === 2) {
                const obra = document.getElementById('regObra').value.trim();
                if (!obra) {
                    showToast("Ingrese el nombre de la obra o presentación.", "warning");
                    return;
                }
            }
            if (stepNumber > 3 && currentStep === 3) {
                if (pendingStudentChips.length === 0) {
                    showToast("Debe agregar al menos 1 estudiante para esta inscripción.", "warning");
                    return;
                }
                prepareStep4Summary();
            }

            currentStep = stepNumber;
            for (let s = 1; s <= 4; s++) {
                const stepEl = document.getElementById(`formStep-${s}`);
                const dot = document.getElementById(`stepDot-${s}`);
                if (s === stepNumber) {
                    stepEl.classList.remove('hidden');
                    dot.className = "w-10 h-10 rounded-full bg-mep-blue text-white font-bold flex items-center justify-center shadow-md transition-all";
                } else {
                    stepEl.classList.add('hidden');
                    dot.className = "w-10 h-10 rounded-full bg-slate-200 text-slate-600 font-bold flex items-center justify-center transition-all";
                }
            }
            document.getElementById('stepperLine').style.width = `${((stepNumber - 1) / 3) * 100}%`;
            lucide.createIcons();
        }

        function liveCheckCedula(rawVal) {
            const tipoIdentidad = getTipoIdentidadActual();
            const validation = validarIdentidad(tipoIdentidad, rawVal);
            const cleanIdentidad = validation.clean;
            const alertBox = document.getElementById('studentLiveAlert');
            const alertMsg = document.getElementById('studentLiveAlertMsg');
            const inputNombre = document.getElementById('inputNombre');

            if (!cleanIdentidad || !validation.valido) {
                if (alertBox) alertBox.classList.add('hidden');
                return;
            }

            const existing = dbEstudiantes[cleanIdentidad];
            if (existing) {
                inputNombre.value = existing.nombreCompleto;
                if (alertBox) {
                    alertBox.classList.remove('hidden');
                    alertMsg.innerHTML = `
                        <span class="font-extrabold uppercase">¡ESTUDIANTE YA REGISTRADO!</span><br>
                        <strong>${existing.nombreCompleto}</strong> ya tiene un registro con esta identidad.
                        ${existing.areas?.length ? `<span class="block mt-1">Participa en: <strong>${existing.areas.join(' y ')}</strong>.</span>` : ''}
                        <span class="block mt-1 text-slate-800 font-bold">✓ Se unificará su registro. Recibirá SOLO 1 BOLSITA DE REFRIGERIO.</span>
                    `;
                }
            } else {
                if (alertBox) alertBox.classList.add('hidden');
            }
        }

        function agregarEstudianteChip() {
            const tipoIdentidad = getTipoIdentidadActual();
            const rawCedula = document.getElementById('inputCedula').value.trim();
            const rawNombre = document.getElementById('inputNombre').value.trim();

            if (!rawNombre) {
                showToast("Ingrese el nombre completo del estudiante.", "warning");
                return;
            }

            if (!rawCedula) {
                showToast("Ingrese el número o identificador de identidad.", "warning");
                return;
            }

            const validation = validarIdentidad(tipoIdentidad, rawCedula);

            if (!validation.valido) {
                showToast(validation.mensaje, "warning");
                return;
            }

            pushStudentToChips(validation.clean, rawNombre, tipoIdentidad);
        }

        function confirmFuzzyMatch(isSamePerson) {
            document.getElementById('modalFuzzyConfirm').classList.add('hidden');
            if (!pendingFuzzyData) return;

            if (isSamePerson) {
                pushStudentToChips(
                    pendingFuzzyData.student.cedula,
                    pendingFuzzyData.student.nombreCompleto,
                    pendingFuzzyData.student.tipoIdentidad || pendingFuzzyData.tipoIdentidad || "cedula"
                );
                showToast("Estudiante unificado con registro existente.", "success");
            } else {
                pushStudentToChips(
                    pendingFuzzyData.newCedula,
                    pendingFuzzyData.newNombre,
                    pendingFuzzyData.tipoIdentidad || "cedula"
                );
            }
            pendingFuzzyData = null;
        }

        function pushStudentToChips(cedula, nombre, tipoIdentidad = "cedula") {
            if (pendingStudentChips.some(c => c.cedula === cedula)) {
                showToast("Este estudiante ya fue añadido a la lista actual.", "warning");
                return;
            }

            pendingStudentChips.push({ cedula, nombre, tipoIdentidad });
            renderChipsUI();

            document.getElementById('inputCedula').value = '';
            document.getElementById('inputNombre').value = '';
            const alertBox = document.getElementById('studentLiveAlert');
            if (alertBox) alertBox.classList.add('hidden');
        }

        function removeChip(cedula) {
            pendingStudentChips = pendingStudentChips.filter(c => c.cedula !== cedula);
            renderChipsUI();
        }

        function renderChipsUI() {
            const container = document.getElementById('chipsContainer');
            document.getElementById('chipCount').innerText = pendingStudentChips.length;

            if (pendingStudentChips.length === 0) {
                container.innerHTML = `
                    <p id="emptyChipsText" class="text-xs text-slate-400 font-medium italic">
                        Aún no ha agregado estudiantes. Ingrese la cédula o nombre arriba y presione "Agregar".
                    </p>`;
                return;
            }

            container.innerHTML = pendingStudentChips.map(c => {
                const isPoly = dbEstudiantes[c.cedula] && dbEstudiantes[c.cedula].cantidadAreas > 0;
                return `
                    <div class="bg-white border ${isPoly ? 'border-red-300 bg-red-50/50' : 'border-slate-200'} shadow-sm rounded-xl px-3 py-1.5 flex items-center gap-2 text-xs">
                        <div>
                            <span class="font-bold text-slate-800">${c.nombre}</span>
                            <span class="text-[10px] text-slate-400 ml-1">(${maskCedula(c.cedula)})</span>
                            <span class="text-[9px] font-bold text-mep-blue bg-blue-50 px-1 rounded ml-1">${(IDENTITY_CONFIG[c.tipoIdentidad] || {label: "Identidad"}).label}</span>
                            ${isPoly ? '<span class="text-[10px] font-bold text-mep-red bg-red-100 px-1 rounded ml-1">POLIFACÉTICO</span>' : ''}
                        </div>
                        <button type="button" onclick="removeChip('${c.cedula}')" class="text-slate-400 hover:text-mep-red p-0.5 rounded">
                            <i data-lucide="x" class="w-3.5 h-3.5"></i>
                        </button>
                    </div>
                `;
            }).join('');
            lucide.createIcons();
        }

        function prepareStep4Summary() {
            document.getElementById('summaryCircuito').innerText = document.getElementById('regCircuito').value;
            document.getElementById('summaryInstitucion').innerText = document.getElementById('regInstitucion').value;
            document.getElementById('summaryAreaDisc').innerText = `${document.getElementById('regArea').value} - ${document.getElementById('regDisciplina').value}`;
            document.getElementById('summaryNivel').innerText = document.querySelector('input[name="regNivel"]:checked').value;
            document.getElementById('summaryObra').innerText = document.getElementById('regObra').value;
            document.getElementById('summaryStudentCount').innerText = pendingStudentChips.length;

            document.getElementById('summaryStudentsList').innerHTML = pendingStudentChips.map(c => `
                <span class="bg-blue-100 text-mep-navy px-2.5 py-1 rounded-lg text-xs font-semibold">
                    ${c.nombre} (${maskCedula(c.cedula)})
                </span>
            `).join('');
        }

        function guardarInscripcionFinal() {
            const circuito = document.getElementById('regCircuito').value;
            const institucion = document.getElementById('regInstitucion').value;
            const area = document.getElementById('regArea').value;
            const disciplina = document.getElementById('regDisciplina').value;
            const nivel = document.querySelector('input[name="regNivel"]:checked').value;
            const obra = document.getElementById('regObra').value.trim();
            const duracion = parseInt(document.getElementById('regDuracion').value) || 10;

            const newInscripcionId = "INS-" + Math.floor(10000 + Math.random() * 90000);
            const studentIdsArray = pendingStudentChips.map(c => c.cedula);

            const newInscripcion = {
                id: newInscripcionId,
                area,
                disciplina,
                nivel,
                circuito,
                institucion,
                obra,
                studentIds: studentIdsArray,
                duracion,
                boletaInscripcion: document.getElementById('boletaInscripcion').checked ? "SI" : "NO",
                boletaResultados: document.getElementById('boletaResultados').checked ? "SI" : "NO",
                boletaObservaciones: document.getElementById('boletaObservaciones').checked ? "SI" : "NO",
                creadoPor: "funcionario_mep",
                fecha: new Date().toISOString().split('T')[0]
            };

            dbInscripciones.push(newInscripcion);

            pendingStudentChips.forEach(c => {
                if (!dbEstudiantes[c.cedula]) {
                    dbEstudiantes[c.cedula] = {
                        cedula: c.cedula,
                        tipoIdentidad: c.tipoIdentidad || "cedula",
                        nombreCompleto: c.nombre,
                        nombreNormalizado: normalizeText(c.nombre),
                        institucion: institucion,
                        circuito: circuito,
                        areas: [area],
                        inscripcionesIds: [newInscripcionId],
                        cantidadAreas: 1
                    };
                } else {
                    const st = dbEstudiantes[c.cedula];
                    if (!st.areas.includes(area)) st.areas.push(area);
                    if (!st.inscripcionesIds.includes(newInscripcionId)) st.inscripcionesIds.push(newInscripcionId);
                    st.cantidadAreas = st.areas.length;
                }
            });

            saveToLocalStorage();

            confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });

            showToast("¡Inscripción FEA 2026 guardada exitosamente!", "success");

            document.getElementById('formInscripcion').reset();
            onTipoIdentidadChange("cedula");
            pendingStudentChips = [];
            renderChipsUI();
            goToStep(1);
            switchTab('dashboard');
        }

        function updateDashboardMetrics() {
            const totalInscripciones = dbInscripciones.length;
            const estudiantesUnicosCount = Object.keys(dbEstudiantes).length;
            
            const polifaceticos = Object.values(dbEstudiantes).filter(e => e.cantidadAreas > 1);

            document.getElementById('statTotalInscripciones').innerText = totalInscripciones;
            document.getElementById('statEstudiantesUnicos').innerText = estudiantesUnicosCount;
            document.getElementById('statPolifaceticos').innerText = polifaceticos.length;
            document.getElementById('statAhorroRefrigerios').innerText = polifaceticos.length;

            updateBadges();
            renderPolifaceticosDashboard();
            renderAreaStatsCharts();
        }

        function updateBadges() {
            const unicos = Object.keys(dbEstudiantes).length;
            document.getElementById('tabBadgeUnique').innerText = unicos;
        }

        function renderPolifaceticosDashboard() {
            const container = document.getElementById('listPolifaceticosContainer');
            const polifaceticos = Object.values(dbEstudiantes).filter(e => e.cantidadAreas > 1);

            if (polifaceticos.length === 0) {
                container.innerHTML = `<p class="text-xs text-slate-400 italic p-4 text-center">No hay estudiantes polifacéticos detectados hasta el momento.</p>`;
                return;
            }

            container.innerHTML = polifaceticos.map(p => {
                const inscs = dbInscripciones.filter(i => i.studentIds.includes(p.cedula));
                return `
                    <div class="bg-red-50/60 border border-red-200 rounded-xl p-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                        <div>
                            <div class="flex items-center gap-2">
                                <span class="font-extrabold text-sm text-mep-navy">${p.nombreCompleto}</span>
                                <span class="bg-mep-red text-white text-[10px] font-bold px-1.5 py-0.5 rounded">1 Refrigerio Único</span>
                            </div>
                            <p class="text-xs text-slate-500">${p.institucion} • Cédula: ${maskCedula(p.cedula)}</p>
                            <div class="flex flex-wrap gap-1 mt-1">
                                ${inscs.map(i => `
                                    <span class="bg-white border border-red-200 text-mep-red text-[11px] font-semibold px-2 py-0.5 rounded-full">
                                        ${i.area}: ${i.disciplina}
                                    </span>
                                `).join('')}
                            </div>
                        </div>
                        <button onclick="verDetalleEstudiante('${p.cedula}')" class="text-xs font-bold text-mep-blue hover:underline whitespace-nowrap">
                            Ver Detalle &rarr;
                        </button>
                    </div>
                `;
            }).join('');
        }

        function renderAreaStatsCharts() {
            const counts = { Escénicas: 0, Literarias: 0, Musicales: 0, Visuales: 0 };
            dbInscripciones.forEach(i => { if (counts[i.area] !== undefined) counts[i.area]++; });

            const total = dbInscripciones.length || 1;
            const container = document.getElementById('chartAreasContainer');

            const areaColors = {
                "Escénicas": "bg-blue-600",
                "Literarias": "bg-amber-500",
                "Musicales": "bg-emerald-600",
                "Visuales": "bg-purple-600"
            };

            container.innerHTML = Object.keys(counts).map(area => {
                const pct = Math.round((counts[area] / total) * 100);
                return `
                    <div>
                        <div class="flex justify-between text-xs font-bold text-slate-700 mb-1">
                            <span>${area}</span>
                            <span>${counts[area]} obras (${pct}%)</span>
                        </div>
                        <div class="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                            <div class="h-full ${areaColors[area]} transition-all duration-500" style="width: ${pct}%"></div>
                        </div>
                    </div>
                `;
            }).join('');

            const circCounts = { "01": 0, "02": 0, "03": 0, "04": 0, "05": 0 };
            dbInscripciones.forEach(i => { if (circCounts[i.circuito] !== undefined) circCounts[i.circuito]++; });

            document.getElementById('circuitoStatsContainer').innerHTML = Object.keys(circCounts).map(c => `
                <div class="bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <span class="text-[10px] font-bold text-slate-400 block">C-${c}</span>
                    <span class="text-sm font-extrabold text-mep-navy">${circCounts[c]}</span>
                </div>
            `).join('');
        }

        function renderEstudiantesTabla() {
            const tbody = document.getElementById('tableEstudiantesBody');
            const query = normalizeText(document.getElementById('searchEstudiantes').value);
            const circuitoFilter = document.getElementById('filterCircuito').value;
            const tipoFilter = document.getElementById('filterTipoEstudiante').value;

            let estudiantes = Object.values(dbEstudiantes);

            estudiantes = estudiantes.filter(e => {
                const matchQuery = !query || normalizeText(e.nombreCompleto).includes(query) || e.cedula.includes(query);
                const matchCircuito = circuitoFilter === "TODOS" || e.circuito === circuitoFilter;
                
                let matchTipo = true;
                if (tipoFilter === "POLIFACETICO") matchTipo = e.cantidadAreas > 1;
                if (tipoFilter === "UNICA") matchTipo = e.cantidadAreas === 1;

                return matchQuery && matchCircuito && matchTipo;
            });

            document.getElementById('countEstudiantesFiltrados').innerText = estudiantes.length;

            if (estudiantes.length === 0) {
                tbody.innerHTML = `<tr><td colspan="7" class="p-6 text-center text-slate-400 text-xs italic">No se encontraron estudiantes únicos con los filtros seleccionados.</td></tr>`;
                return;
            }

            tbody.innerHTML = estudiantes.map(e => `
                <tr class="hover:bg-slate-50/80 transition">
                    <td class="p-3.5 font-mono text-slate-600 font-bold">${maskCedula(e.cedula)}</td>
                    <td class="p-3.5 font-bold text-mep-navy">
                        ${e.nombreCompleto}
                    </td>
                    <td class="p-3.5 font-bold text-slate-600">Circuito ${e.circuito}</td>
                    <td class="p-3.5 text-slate-600">${e.institucion}</td>
                    <td class="p-3.5 text-center">
                        <span class="${e.cantidadAreas > 1 ? 'badge-poly font-extrabold px-2 py-0.5 rounded-full' : 'bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full'} text-xs">
                            ${e.cantidadAreas} ${e.cantidadAreas > 1 ? 'Disciplinas (Polifacético)' : 'Disciplina'}
                        </span>
                    </td>
                    <td class="p-3.5 text-center">
                        <span class="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-xl text-[11px]">
                            <i data-lucide="check" class="w-3.5 h-3.5"></i> 1 Bolsita
                        </span>
                    </td>
                    <td class="p-3.5 text-right">
                        <div class="flex justify-end gap-1.5">
                            <button onclick="editarEstudianteModal('${e.cedula}')" class="bg-amber-500 hover:bg-amber-600 text-white text-[11px] font-bold px-2.5 py-1.5 rounded-lg flex items-center gap-1" title="Editar estudiante">
                                <i data-lucide="pencil" class="w-3.5 h-3.5"></i> Editar
                            </button>
                            <button onclick="verDetalleEstudiante('${e.cedula}')" class="btn-mep-primary text-[11px] font-bold px-2.5 py-1.5 rounded-lg">
                                Detalle
                            </button>
                            <button onclick="eliminarEstudiante('${e.cedula}')" class="btn-mep-danger text-[11px] font-bold px-2.5 py-1.5 rounded-lg flex items-center gap-1" title="Eliminar estudiante">
                                <i data-lucide="trash-2" class="w-3.5 h-3.5"></i> Eliminar
                            </button>
                        </div>
                    </td>
                </tr>
            `).join('');
            lucide.createIcons();
        }

        function editarEstudianteModal(cedula) {
            const st = dbEstudiantes[cedula];
            if (!st) return;

            document.getElementById('editEstudianteOriginalCedula').value = cedula;
            document.getElementById('editEstudianteTipoIdentidad').value = st.tipoIdentidad || "cedula";
            document.getElementById('editEstudianteCedula').value = st.cedula;
            document.getElementById('editEstudianteNombre').value = st.nombreCompleto;

            const circuitoSelect = document.getElementById('editEstudianteCircuito');
            circuitoSelect.innerHTML = CATALOGOS.circuitos.map(c =>
                `<option value="${c.id}" ${c.id === st.circuito ? 'selected' : ''}>${c.nombre}</option>`
            ).join('');

            cargarInstitucionesEdicion(st.circuito, st.institucion);
            document.getElementById('modalEditarEstudiante').classList.remove('hidden');
        }

        function cargarInstitucionesEdicion(circuitoId, selectedInst = '') {
            const instSelect = document.getElementById('editEstudianteInstitucion');
            const lista = CATALOGOS.instituciones[circuitoId] || [];
            instSelect.innerHTML = lista.map(i => `<option value="${i}" ${i === selectedInst ? 'selected' : ''}>${i}</option>`).join('');
        }

        function guardarEdicionEstudiante() {
            const oldCedula = document.getElementById('editEstudianteOriginalCedula').value;
            const tipoIdentidad = document.getElementById('editEstudianteTipoIdentidad').value;
            const newCedulaInput = document.getElementById('editEstudianteCedula').value.trim();
            const newNombre = document.getElementById('editEstudianteNombre').value.trim();
            const newCircuito = document.getElementById('editEstudianteCircuito').value;
            const newInstitucion = document.getElementById('editEstudianteInstitucion').value;

            if (!newNombre) {
                showToast("El nombre completo es requerido.", "warning");
                return;
            }

            const val = validarIdentidad(tipoIdentidad, newCedulaInput);
            if (!val.valido) {
                showToast(val.mensaje, "warning");
                return;
            }

            const newCedula = val.clean;

            if (newCedula !== oldCedula && dbEstudiantes[newCedula]) {
                showToast("Ya existe otro estudiante registrado con ese número de identificación.", "warning");
                return;
            }

            const st = dbEstudiantes[oldCedula];
            if (!st) return;

            st.nombreCompleto = newNombre;
            st.nombreNormalizado = normalizeText(newNombre);
            st.circuito = newCircuito;
            st.institucion = newInstitucion;
            st.tipoIdentidad = tipoIdentidad;

            if (newCedula !== oldCedula) {
                st.cedula = newCedula;
                delete dbEstudiantes[oldCedula];
                dbEstudiantes[newCedula] = st;

                dbInscripciones.forEach(ins => {
                    const idx = ins.studentIds.indexOf(oldCedula);
                    if (idx !== -1) ins.studentIds[idx] = newCedula;
                });
            }

            saveToLocalStorage();
            closeModal('modalEditarEstudiante');
            renderEstudiantesTabla();
            showToast("Datos del estudiante actualizados correctamente.", "success");
        }

        function verDetalleEstudiante(cedula) {
            const st = dbEstudiantes[cedula];
            if (!st) return;

            document.getElementById('modalEstCedula').innerText = maskCedula(st.cedula);
            document.getElementById('modalEstNombre').innerText = st.nombreCompleto;
            document.getElementById('modalEstInst').innerText = `${st.institucion} (Circuito ${st.circuito})`;

            const inscs = dbInscripciones.filter(i => i.studentIds.includes(cedula));
            document.getElementById('modalEstCount').innerText = inscs.length;

            document.getElementById('modalEstInscripcionesList').innerHTML = inscs.map(i => `
                <div class="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs flex justify-between items-center">
                    <div>
                        <span class="font-bold text-mep-blue block">${i.area} - ${i.disciplina}</span>
                        <span class="text-slate-600">Obra: <strong>${i.obra}</strong></span>
                    </div>
                    <span class="text-[10px] bg-slate-200 px-2 py-0.5 rounded font-mono">${i.id}</span>
                </div>
            `).join('');

            document.getElementById('modalDetalleEstudiante').classList.remove('hidden');
            lucide.createIcons();
        }

        // Elimina inscripciones que quedaron sin estudiantes y limpia sus referencias en eventos.
        // Devuelve la cantidad de inscripciones eliminadas.
        function limpiarInscripcionesHuerfanas() {
            const huerfanas = dbInscripciones.filter(ins => !ins.studentIds || ins.studentIds.length === 0);
            if (huerfanas.length === 0) return 0;

            const idsEliminar = new Set(huerfanas.map(ins => String(ins.id)));

            dbInscripciones = dbInscripciones.filter(ins => !idsEliminar.has(String(ins.id)));

            dbEventos.forEach(evt => {
                if (Array.isArray(evt.listaInscripcionesIds)) {
                    evt.listaInscripcionesIds = evt.listaInscripcionesIds.filter(id => !idsEliminar.has(String(id)));
                }
            });

            Object.values(dbEstudiantes).forEach(st => {
                if (Array.isArray(st.inscripcionesIds)) {
                    st.inscripcionesIds = st.inscripcionesIds.filter(id => !idsEliminar.has(String(id)));
                }
            });

            return huerfanas.length;
        }

        function eliminarEstudiante(cedula) {
            const inscsAfectadas = dbInscripciones.filter(i => i.studentIds.includes(cedula));
            const seranEliminadas = inscsAfectadas.filter(i => i.studentIds.length === 1).length;

            let mensajeConfirm = "¿Está seguro de que desea eliminar a este estudiante?";
            if (seranEliminadas > 0) {
                mensajeConfirm += `\n\nSe eliminarán también ${seranEliminadas} inscripción(es) que quedarían sin estudiantes.`;
            }
            if (!confirm(mensajeConfirm)) return;

            delete dbEstudiantes[cedula];

            // Quitar al estudiante de todas las inscripciones
            dbInscripciones.forEach(ins => {
                ins.studentIds = ins.studentIds.filter(id => id !== cedula);
            });

            // Eliminar inscripciones individuales o que quedaron sin ningún estudiante
            const eliminadas = limpiarInscripcionesHuerfanas();

            saveToLocalStorage();
            renderEstudiantesTabla();
            renderEventosCards();
            renderPolifaceticosDashboard();
            renderAreaStatsCharts();
            lucide.createIcons();

            showToast(
                eliminadas > 0
                    ? `Estudiante eliminado. También se eliminaron ${eliminadas} inscripción(es) sin estudiantes.`
                    : "Estudiante eliminado del sistema.",
                "info"
            );
        }

       function exportarExcelBolsitas() {
    const estudiantes = Object.values(dbEstudiantes).map(e => ({
        "Identificación": e.cedula,
        "Nombre Completo": e.nombreCompleto,
        "Circuito": e.circuito,
        "Institución Educativa": e.institucion,
        "Cantidad Áreas": e.cantidadAreas,
        "Áreas Inscritas": (e.areas || []).join(", "),
        "Bolsitas a Entregar": 1
    }));

    // ====== Hoja 1: BOLSITAS (más profesional) ======
    const wsBase = XLSX.utils.json_to_sheet(estudiantes, { skipHeader: false });
    wsBase["!freeze"] = { ySplit: 1 };
    wsBase["!cols"] = [
        { wch: 14 },
        { wch: 32 },
        { wch: 10 },
        { wch: 26 },
        { wch: 14 },
        { wch: 30 },
        { wch: 18 }
    ];

    const headerLabels = Object.keys(estudiantes[0] || {});
    const colCount = headerLabels.length;

    const title = "FEA 2027";

    // Construimos una hoja con título + encabezados + datos con estilo
    const ws1 = {};
    ws1["!cols"] = wsBase["!cols"];
    ws1["!freeze"] = { ySplit: 2 };

    const style = {
        headerFill: "1F4E79",
        headerFontColor: "FFFFFF",
        thinBorder: { style: "thin", color: { rgb: "D9D9D9" } }
    };

    ws1["A1"] = { t: "s", v: title, s: {
        font: { bold: true, color: { rgb: style.headerFontColor }, sz: 14 },
        fill: { fgColor: { rgb: "D9E1F2" } },
        alignment: { horizontal: "center", vertical: "center" }
    }};

    for (let c = 0; c < colCount; c++) {
        const cellAddr = XLSX.utils.encode_cell({ r: 1, c });
        const key = headerLabels[c];
        ws1[cellAddr] = {
            t: "s",
            v: key,
            s: {
                font: { bold: true, color: { rgb: style.headerFontColor }, sz: 11 },
                fill: { fgColor: { rgb: style.headerFill } },
                alignment: { horizontal: "center", vertical: "center", wrapText: true },
                border: {
                    top: style.thinBorder, bottom: style.thinBorder,
                    left: style.thinBorder, right: style.thinBorder
                }
            }
        };
    }

    const range = XLSX.utils.decode_range(wsBase["!ref"] || "A1");
    const headerRow = range.s.r; // normalmente 0
    const firstDataRow = headerRow + 1;
    const dataRowCount = estudiantes.length;

    for (let r = 0; r < dataRowCount; r++) {
        const srcRow = firstDataRow + r;
        const dstRow = 2 + r;

        const stripe = (r % 2 === 0);
        const bg = stripe ? "F7FBFF" : "FFFFFF";

        for (let c = 0; c < colCount; c++) {
            const srcAddr = XLSX.utils.encode_cell({ r: srcRow, c });
            const dstAddr = XLSX.utils.encode_cell({ r: dstRow, c });

            const srcCell = wsBase[srcAddr];
            const key = headerLabels[c];

            const isNum = (key === "Cantidad Áreas" || key === "Bolsitas a Entregar");
            const v = srcCell ? srcCell.v : "";

            ws1[dstAddr] = {
                t: isNum ? "n" : "s",
                v: isNum ? Number(v || 0) : (v ?? ""),
                s: {
                    font: { color: { rgb: "1F2937" }, sz: 10, bold: false },
                    fill: { fgColor: { rgb: bg } },
                    alignment: {
                        horizontal: isNum ? "center" : "left",
                        vertical: "center",
                        wrapText: true
                    },
                    border: {
                        top: style.thinBorder, bottom: style.thinBorder,
                        left: style.thinBorder, right: style.thinBorder
                    }
                }
            };
        }
    }

    ws1["!ref"] = XLSX.utils.encode_range({
        s: { r: 0, c: 0 },
        e: { r: 2 + dataRowCount - 1, c: colCount - 1 }
    });

    // ====== Hoja 2: PARTICIPACIONES POR PRESENTACIÓN / OBRA ======
    // Una fila por inscripción/presentación (dbInscripciones)
    const participaciones = dbInscripciones.map(ins => {
        const ids = ins.studentIds || [];
        const tipo = ids.length > 1 ? "Agrupación" : "Individual";

        const integrantes = ids.map(ced => {
            const st = dbEstudiantes[ced];
            const nombre = st?.nombreCompleto || "(Nombre no encontrado)";
            return `${nombre} (${maskCedula(ced)})`;
        });

        const integrantesIdent = ids.map(ced => maskCedula(ced)).join(" | ");

        return {
            "ID Presentación": ins.id,
            "Fecha": ins.fecha || "",
            "Circuito": ins.circuito || "",
            "Institución Educativa": ins.institucion || "",
            "Área": ins.area || "",
            "Disciplina / Modalidad": ins.disciplina || "",
            "Nivel": ins.nivel || "",
            "Obra / Presentación": ins.obra || "",
            "Duración (min)": Number(ins.duracion || 0),
            "Tipo": tipo,
            "Cantidad Integrantes": ids.length,
            "Integrantes (Identidades)": integrantesIdent,
            "Integrantes (Nombres)": integrantes.join(" | "),
            "Boleta Inscripción": ins.boletaInscripcion || "",
            "Boleta Resultados": ins.boletaResultados || "",
            "Boleta Observaciones": ins.boletaObservaciones || ""
        };
    });

    // Encabezados
    const ws2Base = XLSX.utils.json_to_sheet(participaciones, { skipHeader: false });
    ws2Base["!freeze"] = { ySplit: 1 };
    ws2Base["!cols"] = [
        { wch: 18 }, // ID
        { wch: 12 }, // fecha
        { wch: 10 }, // circuito
        { wch: 26 }, // institución
        { wch: 10 }, // área
        { wch: 26 }, // disciplina
        { wch: 14 }, // nivel
        { wch: 26 }, // obra
        { wch: 12 }, // duración
        { wch: 12 }, // tipo
        { wch: 18 }, // cantidad
        { wch: 28 }, // identidades
        { wch: 34 }, // nombres
        { wch: 18 }, // boletas 1
        { wch: 18 }, // boletas 2
        { wch: 22 }  // boletas 3
    ];

    const headerLabels2 = Object.keys(participaciones[0] || {});
    const colCount2 = headerLabels2.length;

    const ws2 = {};
    ws2["!cols"] = ws2Base["!cols"];
    ws2["!freeze"] = { ySplit: 2 };

    const style2 = {
        headerFill: "0B3C8C",
        headerFontColor: "FFFFFF",
        thinBorder: { style: "thin", color: { rgb: "D9D9D9" } }
    };

    ws2["A1"] = { t: "s", v: "FEA 2027", s: {
        font: { bold: true, color: { rgb: style2.headerFontColor }, sz: 14 },
        fill: { fgColor: { rgb: "D9E1F2" } },
        alignment: { horizontal: "center", vertical: "center" }
    }};

    for (let c = 0; c < colCount2; c++) {
        const cellAddr = XLSX.utils.encode_cell({ r: 1, c });
        const key = headerLabels2[c];
        ws2[cellAddr] = {
            t: "s",
            v: key,
            s: {
                font: { bold: true, color: { rgb: style2.headerFontColor }, sz: 10 },
                fill: { fgColor: { rgb: style2.headerFill } },
                alignment: { horizontal: "center", vertical: "center", wrapText: true },
                border: {
                    top: style2.thinBorder, bottom: style2.thinBorder,
                    left: style2.thinBorder, right: style2.thinBorder
                }
            }
        };
    }

    const range2 = XLSX.utils.decode_range(ws2Base["!ref"] || "A1");
    const headerRow2 = range2.s.r; // usually 0
    const firstDataRow2 = headerRow2 + 1;
    const dataRowCount2 = participaciones.length;

    for (let r = 0; r < dataRowCount2; r++) {
        const srcRow = firstDataRow2 + r;
        const dstRow = 2 + r;

        const stripe = (r % 2 === 0);
        const bg = stripe ? "F7FBFF" : "FFFFFF";

        for (let c = 0; c < colCount2; c++) {
            const srcAddr = XLSX.utils.encode_cell({ r: srcRow, c });
            const dstAddr = XLSX.utils.encode_cell({ r: dstRow, c });

            const srcCell = ws2Base[srcAddr];
            const key = headerLabels2[c];
            const v = srcCell ? srcCell.v : "";

            const isNum = (key === "Duración (aprox)" || key === "Cantidad Integrantes");
            ws2[dstAddr] = {
                t: isNum ? "n" : "s",
                v: isNum ? Number(v || 0) : (v ?? ""),
                s: {
                    font: { color: { rgb: "1F2937" }, sz: 10, bold: false },
                    fill: { fgColor: { rgb: bg } },
                    alignment: {
                        horizontal: (key === "Duración (aprox)" || key === "Cantidad Integrantes") ? "center" : "left",
                        vertical: "center",
                        wrapText: true
                    },
                    border: {
                        top: style2.thinBorder, bottom: style2.thinBorder,
                        left: style2.thinBorder, right: style2.thinBorder
                    }
                }
            };
        }
    }

    ws2["!ref"] = XLSX.utils.encode_range({
        s: { r: 0, c: 0 },
        e: { r: 2 + dataRowCount2 - 1, c: colCount2 - 1 }
    });

    // ====== Workbook final con 2 hojas ======
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws1, "Estudiantes Participantes");
    XLSX.utils.book_append_sheet(wb, ws2, "Participaciones por Obra");

    XLSX.writeFile(wb, "FEA_2027.xlsx");
}


       function exportarPolifaceticos() {
    const polifaceticos = Object.values(dbEstudiantes).filter(e => e.cantidadAreas > 1);

    const data = polifaceticos.map(e => ({
        "Identificación": e.cedula,
        "Nombre Completo": e.nombreCompleto,
        "Circuito": e.circuito,
        "Institución Educativa": e.institucion,
        "Total Áreas": e.cantidadAreas,
        "Áreas (Disciplinas)": e.areas.join(" | ")
    }));

    const ws = XLSX.utils.json_to_sheet(data, { skipHeader: false });
    ws["!freeze"] = { ySplit: 1 };

    ws["!cols"] = [
        { wch: 14 }, // Identificación
        { wch: 32 }, // Nombre Completo
        { wch: 10 }, // Circuito
        { wch: 26 }, // Institución
        { wch: 14 }, // Total Áreas
        { wch: 34 }  // Áreas
    ];

    const headerLabels = Object.keys(data[0] || {});
    const colCount = headerLabels.length;

    const title = "FEA 2027";

    // Construir sheet con título + encabezados
    const ws2 = {};
    ws2["!cols"] = ws["!cols"];
    ws2["!freeze"] = { ySplit: 2 };

    // Colores/estilos
    const style = {
        headerFill: "C8102E", // rojo institucional
        headerFontColor: "FFFFFF",
        thinBorder: { style: "thin", color: { rgb: "D9D9D9" } }
    };

    ws2["A1"] = { t: "s", v: title, s: {
        font: { bold: true, color: { rgb: style.headerFontColor }, sz: 14 },
        fill: { fgColor: { rgb: "FADDE0" } },
        alignment: { horizontal: "center", vertical: "center" }
    }};

    // Encabezados fila 2
    for (let c = 0; c < colCount; c++) {
        const cellAddr = XLSX.utils.encode_cell({ r: 1, c });
        const key = headerLabels[c];
        ws2[cellAddr] = {
            t: "s",
            v: key,
            s: {
                font: { bold: true, color: { rgb: style.headerFontColor }, sz: 11 },
                fill: { fgColor: { rgb: style.headerFill } },
                alignment: { horizontal: "center", vertical: "center", wrapText: true },
                border: {
                    top: style.thinBorder,
                    bottom: style.thinBorder,
                    left: style.thinBorder,
                    right: style.thinBorder
                }
            }
        };
    }

    const range = XLSX.utils.decode_range(ws["!ref"]);
    const headerRow = range.s.r;
    const firstDataRow = headerRow + 1;

    const dataRowCount = data.length;

    for (let r = 0; r < dataRowCount; r++) {
        const srcRow = firstDataRow + r;
        const dstRow = 2 + r;

        const stripe = (r % 2 === 0);
        const bg = stripe ? "FFF7F8" : "FFFFFF";

        for (let c = 0; c < colCount; c++) {
            const srcAddr = XLSX.utils.encode_cell({ r: srcRow, c });
            const dstAddr = XLSX.utils.encode_cell({ r: dstRow, c });

            const srcCell = ws[srcAddr];
            const key = headerLabels[c];
            let v = srcCell ? srcCell.v : "";

            const isNum = key === "Total Áreas" || key === "Circuito";
            const cellType = isNum ? "n" : "s";

            ws2[dstAddr] = {
                t: cellType === "n" ? "n" : "s",
                v: cellType === "n" ? Number(v) : (v ?? ""),
                s: {
                    font: { color: { rgb: "1F2937" }, sz: 10, bold: false },
                    fill: { fgColor: { rgb: bg } },
                    alignment: {
                        horizontal: (key === "Total Áreas" || key === "Circuito") ? "center" : "left",
                        vertical: "center",
                        wrapText: true
                    },
                    border: {
                        top: style.thinBorder,
                        bottom: style.thinBorder,
                        left: style.thinBorder,
                        right: style.thinBorder
                    }
                }
            };
        }
    }

    ws2["!ref"] = XLSX.utils.encode_range({
        s: { r: 0, c: 0 },
        e: { r: 2 + dataRowCount - 1, c: colCount - 1 }
    });

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws2, "Polifacéticos");

    XLSX.writeFile(wb, "Estudiantes_Polifaceticos.xlsx");
}


        function guardarNuevoEvento() {
            const fecha = document.getElementById('evtFecha').value;
            const sede = document.getElementById('evtSede').value.trim();
            const animador = document.getElementById('evtAnimador').value.trim();

            if (!fecha || !sede || !animador) {
                showToast("Todos los campos del evento son requeridos.", "warning");
                return;
            }

            const newEvt = {
                id: "EVT-" + Math.floor(10 + Math.random() * 90),
                fecha,
                sede,
                animador,
                listaInscripcionesIds: []
            };

            dbEventos.push(newEvt);
            saveToLocalStorage();
            closeModal('modalNuevoEvento');
            renderEventosCards();
            showToast("Nuevo evento programado.", "success");
        }

        function renderEventosCards() {
            const container = document.getElementById('eventosListContainer');
            if (dbEventos.length === 0) {
                container.innerHTML = `<p class="text-xs text-slate-400 italic p-4 col-span-2 text-center">No hay eventos ni sedes programadas.</p>`;
                return;
            }

            container.innerHTML = dbEventos.map(evt => `
                <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3">
                    <div class="flex justify-between items-start">
                        <div>
                            <span class="text-[10px] font-bold text-mep-blue uppercase bg-blue-100 px-2 py-0.5 rounded">${evt.id}</span>
                            <h3 class="font-extrabold text-sm text-mep-navy mt-1">${evt.sede}</h3>
                        </div>
                        <span class="text-xs font-bold text-slate-600 bg-white border border-slate-200 px-2 py-1 rounded-lg">${evt.fecha}</span>
                    </div>
                    <div class="text-xs text-slate-600">
                        <span>Animador/Coordinador: <strong>${evt.animador}</strong></span>
                    </div>
                </div>
            `).join('');
            lucide.createIcons();
        }



// Variable para rastrear el modo de los campos (manual vs desplegable)
let modoManual = {
    Institucion: false,
    Disciplina: false
};

// Función para alternar entre el desplegable y el campo de texto manual
function toggleInputManual(campo) {
    const isManual = !modoManual[campo];
    modoManual[campo] = isManual;

    const selectEl = document.getElementById(`reg${campo}`);
    const inputEl = document.getElementById(`reg${campo}Manual`);
    const btnEl = document.getElementById(`btnToggle${campo === 'Institucion' ? 'Inst' : 'Disc'}`);

    if (isManual) {
        selectEl.classList.add('hidden');
        inputEl.classList.remove('hidden');
        inputEl.focus();
        btnEl.textContent = "← Seleccionar de la lista";
    } else {
        inputEl.classList.add('hidden');
        selectEl.classList.remove('hidden');
        btnEl.textContent = "+ Agregar manualmente";
    }
}

// Función auxiliar para obtener el valor activo del campo (desplegable o manual)
function getValorCampoFEA(campo) {
    if (modoManual[campo]) {
        return document.getElementById(`reg${campo}Manual`).value.trim();
    }
    return document.getElementById(`reg${campo}`).value;
}

// Actualización de goToStep para validar los campos manuales
function goToStep(stepNumber) {
    if (stepNumber > 1 && currentStep === 1) {
        const c = document.getElementById('regCircuito').value;
        const i = getValorCampoFEA('Institucion');
        const a = document.getElementById('regArea').value;
        const d = getValorCampoFEA('Disciplina');
        
        if (!c || !i || !a || !d) {
            showToast("Por favor complete Circuito, Institución, Área y Disciplina.", "warning");
            return;
        }
    }
    if (stepNumber > 2 && currentStep === 2) {
        const obra = document.getElementById('regObra').value.trim();
        if (!obra) {
            showToast("Ingrese el nombre de la obra o presentación.", "warning");
            return;
        }
    }
    if (stepNumber > 3 && currentStep === 3) {
        if (pendingStudentChips.length === 0) {
            showToast("Debe agregar al menos 1 estudiante para esta inscripción.", "warning");
            return;
        }
        prepareStep4Summary();
    }

    currentStep = stepNumber;
    for (let s = 1; s <= 4; s++) {
        const stepEl = document.getElementById(`formStep-${s}`);
        const dot = document.getElementById(`stepDot-${s}`);
        if (s === stepNumber) {
            stepEl.classList.remove('hidden');
            dot.className = "w-10 h-10 rounded-full bg-mep-blue text-white font-bold flex items-center justify-center shadow-md transition-all";
        } else {
            stepEl.classList.add('hidden');
            dot.className = "w-10 h-10 rounded-full bg-slate-200 text-slate-600 font-bold flex items-center justify-center transition-all";
        }
    }
    document.getElementById('stepperLine').style.width = `${((stepNumber - 1) / 3) * 100}%`;
    lucide.createIcons();
}

// Actualización de prepareStep4Summary para reflejar la institución y disciplina dinámicas
function prepareStep4Summary() {
    document.getElementById('summaryCircuito').innerText = document.getElementById('regCircuito').value;
    document.getElementById('summaryInstitucion').innerText = getValorCampoFEA('Institucion');
    document.getElementById('summaryAreaDisc').innerText = `${document.getElementById('regArea').value} - ${getValorCampoFEA('Disciplina')}`;
    document.getElementById('summaryNivel').innerText = document.querySelector('input[name="regNivel"]:checked').value;
    document.getElementById('summaryObra').innerText = document.getElementById('regObra').value;
    document.getElementById('summaryStudentCount').innerText = pendingStudentChips.length;

    document.getElementById('summaryStudentsList').innerHTML = pendingStudentChips.map(c => `
        <span class="bg-blue-100 text-mep-navy px-2.5 py-1 rounded-lg text-xs font-semibold">
            ${c.nombre} (${maskCedula(c.cedula)})
        </span>
    `).join('');
}

// Actualización de guardarInscripcionFinal para obtener correctamente los valores ingresados manualmente
function guardarInscripcionFinal() {
    const circuito = document.getElementById('regCircuito').value;
    const institucion = getValorCampoFEA('Institucion');
    const area = document.getElementById('regArea').value;
    const disciplina = getValorCampoFEA('Disciplina');
    const nivel = document.querySelector('input[name="regNivel"]:checked').value;
    const obra = document.getElementById('regObra').value.trim();
    const duracion = parseInt(document.getElementById('regDuracion').value) || 10;

    const newInscripcionId = "INS-" + Math.floor(10000 + Math.random() * 90000);
    const studentIdsArray = pendingStudentChips.map(c => c.cedula);

    const newInscripcion = {
        id: newInscripcionId,
        area,
        disciplina,
        nivel,
        circuito,
        institucion,
        obra,
        studentIds: studentIdsArray,
        duracion,
        boletaInscripcion: document.getElementById('boletaInscripcion').checked ? "SI" : "NO",
        boletaResultados: document.getElementById('boletaResultados').checked ? "SI" : "NO",
        boletaObservaciones: document.getElementById('boletaObservaciones').checked ? "SI" : "NO",
        creadoPor: "funcionario_mep",
        fecha: new Date().toISOString().split('T')[0]
    };

    dbInscripciones.push(newInscripcion);

    pendingStudentChips.forEach(c => {
        if (!dbEstudiantes[c.cedula]) {
            dbEstudiantes[c.cedula] = {
                cedula: c.cedula,
                tipoIdentidad: c.tipoIdentidad || "cedula",
                nombreCompleto: c.nombre,
                nombreNormalizado: normalizeText(c.nombre),
                institucion: institucion,
                circuito: circuito,
                areas: [area],
                inscripcionesIds: [newInscripcionId],
                cantidadAreas: 1
            };
        } else {
            const st = dbEstudiantes[c.cedula];
            if (!st.areas.includes(area)) st.areas.push(area);
            if (!st.inscripcionesIds.includes(newInscripcionId)) st.inscripcionesIds.push(newInscripcionId);
            st.cantidadAreas = st.areas.length;
        }
    });

    // Guardar también la nueva institución o disciplina de forma permanente si fue escrita a mano
    if (modoManual.Institucion && circuito && CATALOGOS.instituciones[circuito]) {
        if (!CATALOGOS.instituciones[circuito].includes(institucion)) {
            CATALOGOS.instituciones[circuito].push(institucion);
        }
    }
    if (modoManual.Disciplina && area && CATALOGOS.disciplinas[area]) {
        if (!CATALOGOS.disciplinas[area].includes(disciplina)) {
            CATALOGOS.disciplinas[area].push(disciplina);
        }
    }

    saveToLocalStorage();

    confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });

    showToast("¡Inscripción FEA 2027 guardada exitosamente!", "success");

    // Restablecer el formulario y los modos manuales
    document.getElementById('formInscripcion').reset();
    if (modoManual.Institucion) toggleInputManual('Institucion');
    if (modoManual.Disciplina) toggleInputManual('Disciplina');
    
    onTipoIdentidadChange("cedula");
    pendingStudentChips = [];
    renderChipsUI();
    goToStep(1);
    switchTab('dashboard');
}