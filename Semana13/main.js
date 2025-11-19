// EduTrack - Sistema de Asistencia y Participación
// Base de datos y funcionalidad principal

class EduTrackSystem {
    constructor() {
        this.students = [];
        this.classes = [];
        this.attendanceRecords = [];
        this.participationRecords = [];
        this.classSessions = [];
        this.currentAttendanceSession = null;
        
        this.initializeData();
        this.initializeEventListeners();
        this.updateDashboard();
        this.loadRecentActivity();
    }

    // Inicialización de datos de ejemplo
    initializeData() {
        // Estudiantes de ejemplo
        this.students = [
            {
                id: "student_001",
                name: "Ana García López",
                email: "ana.garcia@email.com",
                studentId: "2024001",
                classGroup: "10A",
                enrollmentDate: "2024-01-15",
                status: "active"
            },
            {
                id: "student_002",
                name: "Carlos Rodríguez Martínez",
                email: "carlos.rodriguez@email.com",
                studentId: "2024002",
                classGroup: "10A",
                enrollmentDate: "2024-01-15",
                status: "active"
            },
            {
                id: "student_003",
                name: "María Fernández González",
                email: "maria.fernandez@email.com",
                studentId: "2024003",
                classGroup: "10A",
                enrollmentDate: "2024-01-15",
                status: "active"
            },
            {
                id: "student_004",
                name: "José Luis Pérez Sánchez",
                email: "jose.perez@email.com",
                studentId: "2024004",
                classGroup: "10A",
                enrollmentDate: "2024-01-15",
                status: "active"
            },
            {
                id: "student_005",
                name: "Lucía Martínez Díaz",
                email: "lucia.martinez@email.com",
                studentId: "2024005",
                classGroup: "10A",
                enrollmentDate: "2024-01-15",
                status: "active"
            },
            {
                id: "student_006",
                name: "Diego Hernández Ruiz",
                email: "diego.hernandez@email.com",
                studentId: "2024006",
                classGroup: "10B",
                enrollmentDate: "2024-01-15",
                status: "active"
            },
            {
                id: "student_007",
                name: "Sofía López García",
                email: "sofia.lopez@email.com",
                studentId: "2024007",
                classGroup: "10B",
                enrollmentDate: "2024-01-15",
                status: "active"
            },
            {
                id: "student_008",
                name: "Alejandro González Fernández",
                email: "alejandro.gonzalez@email.com",
                studentId: "2024008",
                classGroup: "10B",
                enrollmentDate: "2024-01-15",
                status: "active"
            },
            {
                id: "student_009",
                name: "Valentina Sánchez Pérez",
                email: "valentina.sanchez@email.com",
                studentId: "2024009",
                classGroup: "10B",
                enrollmentDate: "2024-01-15",
                status: "active"
            },
            {
                id: "student_010",
                name: "Daniel Ruiz Martínez",
                email: "daniel.ruiz@email.com",
                studentId: "2024010",
                classGroup: "10B",
                enrollmentDate: "2024-01-15",
                status: "active"
            }
        ];

        // Clases de ejemplo
        this.classes = [
            {
                id: "class_001",
                name: "Matemáticas Avanzadas",
                subject: "MAT",
                teacherId: "teacher_001",
                schedule: "Lunes 8:00-10:00",
                semester: "2024-1",
                maxStudents: 30
            },
            {
                id: "class_002",
                name: "Ciencias Naturales",
                subject: "SCI",
                teacherId: "teacher_001",
                schedule: "Martes 10:00-12:00",
                semester: "2024-1",
                maxStudents: 25
            },
            {
                id: "class_003",
                name: "Historia Universal",
                subject: "HIS",
                teacherId: "teacher_001",
                schedule: "Miércoles 14:00-16:00",
                semester: "2024-1",
                maxStudents: 28
            }
        ];

        // Cargar datos desde localStorage si existen
        this.loadFromStorage();
    }

    // Sistema de almacenamiento local
    saveToStorage() {
        localStorage.setItem('edutrack_students', JSON.stringify(this.students));
        localStorage.setItem('edutrack_classes', JSON.stringify(this.classes));
        localStorage.setItem('edutrack_attendance', JSON.stringify(this.attendanceRecords));
        localStorage.setItem('edutrack_participation', JSON.stringify(this.participationRecords));
        localStorage.setItem('edutrack_sessions', JSON.stringify(this.classSessions));
    }

    loadFromStorage() {
        const students = localStorage.getItem('edutrack_students');
        const classes = localStorage.getItem('edutrack_classes');
        const attendance = localStorage.getItem('edutrack_attendance');
        const participation = localStorage.getItem('edutrack_participation');
        const sessions = localStorage.getItem('edutrack_sessions');

        if (students) this.students = JSON.parse(students);
        if (classes) this.classes = JSON.parse(classes);
        if (attendance) this.attendanceRecords = JSON.parse(attendance);
        if (participation) this.participationRecords = JSON.parse(participation);
        if (sessions) this.classSessions = JSON.parse(sessions);
    }

    // Inicialización de event listeners
    initializeEventListeners() {
        // Asistencia
        document.getElementById('takeAttendanceBtn').addEventListener('click', () => this.openAttendanceModal());
        document.getElementById('closeAttendanceModal').addEventListener('click', () => this.closeAttendanceModal());
        document.getElementById('cancelAttendance').addEventListener('click', () => this.closeAttendanceModal());
        document.getElementById('saveAttendance').addEventListener('click', () => this.saveAttendance());
        document.getElementById('markAllPresent').addEventListener('click', () => this.markAllAttendance('present'));
        document.getElementById('markAllAbsent').addEventListener('click', () => this.markAllAttendance('absent'));

        // Participación
        document.getElementById('recordParticipationBtn').addEventListener('click', () => this.recordParticipation());
        document.getElementById('participationScore').addEventListener('input', (e) => {
            document.getElementById('scoreValue').textContent = e.target.value;
        });

        // Reportes
        document.getElementById('attendanceReportBtn').addEventListener('click', () => this.generateAttendanceReport());
        document.getElementById('participationReportBtn').addEventListener('click', () => this.generateParticipationReport());
        document.getElementById('studentAnalyticsBtn').addEventListener('click', () => this.generateStudentAnalytics());
        document.getElementById('classOverviewBtn').addEventListener('click', () => this.generateClassOverview());
        document.getElementById('closeReportModal').addEventListener('click', () => this.closeReportModal());

        // Exportar datos
        document.getElementById('exportBtn').addEventListener('click', () => this.exportData());

        // Actualizar selects
        this.populateClassSelect();
        this.populateStudentSelect();
        this.setDefaultDate();
    }

    // Funciones de asistencia
    openAttendanceModal() {
        const classId = document.getElementById('classSelect').value;
        const date = document.getElementById('attendanceDate').value;

        if (!classId || !date) {
            this.showNotification('Por favor selecciona una clase y fecha', 'warning');
            return;
        }

        this.currentAttendanceSession = {
            classId: classId,
            date: date,
            records: {}
        };

        this.renderAttendanceList();
        document.getElementById('attendanceModal').classList.remove('hidden');
        this.animateModal('attendanceModal');
    }

    closeAttendanceModal() {
        document.getElementById('attendanceModal').classList.add('hidden');
        this.currentAttendanceSession = null;
    }

    renderAttendanceList() {
        const container = document.getElementById('attendanceList');
        const studentsInClass = this.students.filter(s => 
            this.getClassGroupFromClassId(this.currentAttendanceSession.classId) === s.classGroup
        );

        container.innerHTML = studentsInClass.map(student => `
            <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div class="flex items-center">
                    <div class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                        <span class="text-sm font-medium text-gray-600">${student.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                        <p class="font-medium text-gray-900">${student.name}</p>
                        <p class="text-sm text-gray-500">${student.studentId}</p>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <button onclick="eduTrack.setAttendanceStatus('${student.id}', 'present')" 
                            class="attendance-btn-present-${student.id} px-3 py-1 rounded-md text-sm border border-green-300 text-green-600 hover:bg-green-50">
                        Presente
                    </button>
                    <button onclick="eduTrack.setAttendanceStatus('${student.id}', 'absent')" 
                            class="attendance-btn-absent-${student.id} px-3 py-1 rounded-md text-sm border border-red-300 text-red-600 hover:bg-red-50">
                        Ausente
                    </button>
                    <button onclick="eduTrack.setAttendanceStatus('${student.id}', 'late')" 
                            class="attendance-btn-late-${student.id} px-3 py-1 rounded-md text-sm border border-amber-300 text-amber-600 hover:bg-amber-50">
                        Tarde
                    </button>
                </div>
            </div>
        `).join('');
    }

    setAttendanceStatus(studentId, status) {
        this.currentAttendanceSession.records[studentId] = {
            status: status,
            checkInTime: status === 'present' ? new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }) : null
        };

        // Update button styles
        const buttons = document.querySelectorAll(`[class*="attendance-btn-${studentId}"]`);
        buttons.forEach(btn => {
            btn.classList.remove('bg-green-100', 'bg-red-100', 'bg-amber-100');
            btn.classList.add('bg-gray-100');
        });

        const activeButton = document.querySelector(`.attendance-btn-${status}-${studentId}`);
        if (activeButton) {
            activeButton.classList.remove('bg-gray-100');
            activeButton.classList.add(`bg-${status === 'present' ? 'green' : status === 'absent' ? 'red' : 'amber'}-100`);
        }

        this.animateElement(`attendance-btn-${status}-${studentId}`, 'pulse');
    }

    markAllAttendance(status) {
        const studentsInClass = this.students.filter(s => 
            this.getClassGroupFromClassId(this.currentAttendanceSession.classId) === s.classGroup
        );

        studentsInClass.forEach(student => {
            this.setAttendanceStatus(student.id, status);
        });
    }

    saveAttendance() {
        const studentsInClass = this.students.filter(s => 
            this.getClassGroupFromClassId(this.currentAttendanceSession.classId) === s.classGroup
        );

        studentsInClass.forEach(student => {
            const record = this.currentAttendanceSession.records[student.id];
            if (record) {
                this.attendanceRecords.push({
                    id: `att_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
                    studentId: student.id,
                    classId: this.currentAttendanceSession.classId,
                    date: this.currentAttendanceSession.date,
                    status: record.status,
                    checkInTime: record.checkInTime,
                    notes: record.status === 'late' ? 'Llegó tarde' : ''
                });
            }
        });

        this.saveToStorage();
        this.closeAttendanceModal();
        this.updateDashboard();
        this.loadRecentActivity();
        this.showNotification('Asistencia guardada exitosamente', 'success');
    }

    // Funciones de participación
    recordParticipation() {
        const studentId = document.getElementById('studentSelect').value;
        const type = document.getElementById('participationType').value;
        const score = parseInt(document.getElementById('participationScore').value);
        const classId = document.getElementById('classSelect').value;
        const date = document.getElementById('attendanceDate').value;

        if (!studentId || !classId || !date) {
            this.showNotification('Por favor completa todos los campos', 'warning');
            return;
        }

        const student = this.students.find(s => s.id === studentId);
        
        this.participationRecords.push({
            id: `part_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            studentId: studentId,
            classId: classId,
            date: date,
            score: score,
            type: type,
            description: `Participación en ${this.getClassNameById(classId)}`,
            teacherNotes: `Puntaje registrado: ${score}/10`
        });

        this.saveToStorage();
        this.updateDashboard();
        this.loadRecentActivity();
        this.showNotification(`Participación registrada para ${student.name}`, 'success');
        
        // Reset form
        document.getElementById('studentSelect').value = '';
        document.getElementById('participationScore').value = 5;
        document.getElementById('scoreValue').textContent = '5';
    }

    // Funciones de reportes
    generateAttendanceReport() {
        const reportData = this.calculateAttendanceStats();
        this.showReportModal('Reporte de Asistencia', this.renderAttendanceReport(reportData));
    }

    generateParticipationReport() {
        const reportData = this.calculateParticipationStats();
        this.showReportModal('Reporte de Participación', this.renderParticipationReport(reportData));
    }

    generateStudentAnalytics() {
        const reportData = this.calculateStudentAnalytics();
        this.showReportModal('Análisis Individual', this.renderStudentAnalytics(reportData));
    }

    generateClassOverview() {
        const reportData = this.calculateClassOverview();
        this.showReportModal('Vista General de Clase', this.renderClassOverview(reportData));
    }

    showReportModal(title, content) {
        document.getElementById('reportTitle').textContent = title;
        document.getElementById('reportContent').innerHTML = content;
        document.getElementById('reportModal').classList.remove('hidden');
        this.animateModal('reportModal');
    }

    closeReportModal() {
        document.getElementById('reportModal').classList.add('hidden');
    }

    // Funciones auxiliares
    getClassGroupFromClassId(classId) {
        const classMap = {
            'math-10a': '10A',
            'science-10b': '10B',
            'history-9a': '9A'
        };
        return classMap[classId] || '10A';
    }

    getClassNameById(classId) {
        const classMap = {
            'math-10a': 'Matemáticas Avanzadas',
            'science-10b': 'Ciencias Naturales',
            'history-9a': 'Historia Universal'
        };
        return classMap[classId] || 'Clase no encontrada';
    }

    populateClassSelect() {
        const select = document.getElementById('classSelect');
        select.innerHTML = '<option value="">Seleccionar clase</option>' +
            this.classes.map(cls => `<option value="${cls.id}">${cls.name}</option>`).join('');
    }

    populateStudentSelect() {
        const select = document.getElementById('studentSelect');
        select.innerHTML = '<option value="">Seleccionar estudiante</option>' +
            this.students.map(student => `<option value="${student.id}">${student.name}</option>`).join('');
    }

    setDefaultDate() {
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('attendanceDate').value = today;
    }

    updateDashboard() {
        const today = new Date().toISOString().split('T')[0];
        const todayAttendance = this.attendanceRecords.filter(r => r.date === today);
        
        // Total estudiantes
        document.getElementById('totalStudents').textContent = this.students.length;
        
        // Asistencia hoy
        const presentToday = todayAttendance.filter(r => r.status === 'present').length;
        const attendancePercentage = todayAttendance.length > 0 ? 
            Math.round((presentToday / todayAttendance.length) * 100) : 0;
        document.getElementById('attendanceToday').textContent = `${attendancePercentage}%`;
        
        // Participación promedio
        const avgParticipation = this.calculateAverageParticipation();
        document.getElementById('avgParticipation').textContent = avgParticipation.toFixed(1);
        
        // Clases hoy
        const classesToday = new Set(todayAttendance.map(r => r.classId)).size;
        document.getElementById('classesToday').textContent = classesToday;
    }

    calculateAverageParticipation() {
        if (this.participationRecords.length === 0) return 0;
        const totalScore = this.participationRecords.reduce((sum, record) => sum + record.score, 0);
        return totalScore / this.participationRecords.length;
    }

    loadRecentActivity() {
        const container = document.getElementById('recentActivity');
        const recentRecords = [
            ...this.attendanceRecords.slice(-5).map(r => ({...r, type: 'attendance'})),
            ...this.participationRecords.slice(-5).map(r => ({...r, type: 'participation'}))
        ].sort((a, b) => new Date(b.date + ' ' + (b.checkInTime || '00:00')) - new Date(a.date + ' ' + (a.checkInTime || '00:00'))).slice(0, 10);

        if (recentRecords.length === 0) {
            container.innerHTML = '<p class="text-gray-500 text-center py-4">No hay actividad reciente</p>';
            return;
        }

        container.innerHTML = recentRecords.map(record => {
            const student = this.students.find(s => s.id === record.studentId);
            if (!student) return '';

            if (record.type === 'attendance') {
                const statusColors = {
                    present: 'text-green-600 bg-green-100',
                    absent: 'text-red-600 bg-red-100',
                    late: 'text-amber-600 bg-amber-100'
                };
                const statusLabels = {
                    present: 'Presente',
                    absent: 'Ausente',
                    late: 'Tarde'
                };

                return `
                    <div class="flex items-center p-4 bg-gray-50 rounded-lg">
                        <div class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                            <span class="text-sm font-medium text-gray-600">${student.name.split(' ').map(n => n[0]).join('')}</span>
                        </div>
                        <div class="flex-1">
                            <p class="font-medium text-gray-900">${student.name}</p>
                            <p class="text-sm text-gray-500">Asistencia • ${this.getClassNameById(record.classId)}</p>
                        </div>
                        <div class="px-3 py-1 rounded-full text-sm font-medium ${statusColors[record.status]}">
                            ${statusLabels[record.status]}
                        </div>
                        <div class="ml-4 text-sm text-gray-500">
                            ${record.checkInTime || '--:--'}
                        </div>
                    </div>
                `;
            } else {
                return `
                    <div class="flex items-center p-4 bg-gray-50 rounded-lg">
                        <div class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                            <span class="text-sm font-medium text-gray-600">${student.name.split(' ').map(n => n[0]).join('')}</span>
                        </div>
                        <div class="flex-1">
                            <p class="font-medium text-gray-900">${student.name}</p>
                            <p class="text-sm text-gray-500">Participación • ${this.getClassNameById(record.classId)}</p>
                        </div>
                        <div class="px-3 py-1 rounded-full text-sm font-medium text-purple-600 bg-purple-100">
                            ${record.score}/10
                        </div>
                        <div class="ml-4 text-sm text-gray-500">
                            ${record.type === 'respuesta' ? 'Respuesta' : record.type === 'pregunta' ? 'Pregunta' : 'Participación'}
                        </div>
                    </div>
                `;
            }
        }).join('');
    }

    // Funciones de cálculo para reportes
    calculateAttendanceStats() {
        const stats = {};
        this.students.forEach(student => {
            const studentAttendance = this.attendanceRecords.filter(r => r.studentId === student.id);
            const totalClasses = studentAttendance.length;
            const presentClasses = studentAttendance.filter(r => r.status === 'present').length;
            const attendanceRate = totalClasses > 0 ? (presentClasses / totalClasses) * 100 : 0;
            
            stats[student.id] = {
                student,
                totalClasses,
                presentClasses,
                attendanceRate,
                recentAbsences: studentAttendance.filter(r => r.status === 'absent').slice(-5)
            };
        });
        return stats;
    }

    calculateParticipationStats() {
        const stats = {};
        this.students.forEach(student => {
            const studentParticipation = this.participationRecords.filter(r => r.studentId === student.id);
            const totalParticipations = studentParticipation.length;
            const averageScore = totalParticipations > 0 ? 
                studentParticipation.reduce((sum, r) => sum + r.score, 0) / totalParticipations : 0;
            
            const participationByType = {};
            studentParticipation.forEach(r => {
                participationByType[r.type] = (participationByType[r.type] || 0) + 1;
            });
            
            stats[student.id] = {
                student,
                totalParticipations,
                averageScore,
                participationByType
            };
        });
        return stats;
    }

    calculateStudentAnalytics() {
        return this.students.map(student => {
            const attendanceStats = this.calculateAttendanceStats()[student.id];
            const participationStats = this.calculateParticipationStats()[student.id];
            
            return {
                student,
                attendanceRate: attendanceStats.attendanceRate,
                totalParticipations: participationStats.totalParticipations,
                averageParticipationScore: participationStats.averageScore,
                overallPerformance: (attendanceStats.attendanceRate + (participationStats.averageScore * 10)) / 2
            };
        }).sort((a, b) => b.overallPerformance - a.overallPerformance);
    }

    calculateClassOverview() {
        const overview = {};
        this.classes.forEach(cls => {
            const classAttendance = this.attendanceRecords.filter(r => r.classId === cls.id);
            const classParticipation = this.participationRecords.filter(r => r.classId === cls.id);
            
            const totalSessions = new Set(classAttendance.map(r => r.date)).size;
            const averageAttendance = totalSessions > 0 ? 
                classAttendance.filter(r => r.status === 'present').length / totalSessions : 0;
            
            const averageParticipation = classParticipation.length > 0 ?
                classParticipation.reduce((sum, r) => sum + r.score, 0) / classParticipation.length : 0;
            
            overview[cls.id] = {
                class: cls,
                totalSessions,
                averageAttendance: (averageAttendance / cls.maxStudents) * 100,
                averageParticipation,
                totalStudents: this.students.filter(s => s.classGroup === this.getClassGroupFromClassId(cls.id)).length
            };
        });
        return overview;
    }

    // Funciones de renderizado de reportes
    renderAttendanceReport(stats) {
        const students = Object.values(stats).sort((a, b) => b.attendanceRate - a.attendanceRate);
        
        return `
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-4">Estadísticas de Asistencia</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    ${students.map(stat => `
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <div class="flex items-center mb-2">
                                <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                                    <span class="text-xs font-medium">${stat.student.name.split(' ').map(n => n[0]).join('')}</span>
                                </div>
                                <h5 class="font-medium">${stat.student.name}</h5>
                            </div>
                            <div class="space-y-1 text-sm">
                                <div class="flex justify-between">
                                    <span>Tasa de asistencia:</span>
                                    <span class="font-medium ${stat.attendanceRate >= 80 ? 'text-green-600' : stat.attendanceRate >= 60 ? 'text-amber-600' : 'text-red-600'}">
                                        ${stat.attendanceRate.toFixed(1)}%
                                    </span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Clases presente:</span>
                                    <span class="font-medium">${stat.presentClasses}/${stat.totalClasses}</span>
                                </div>
                                ${stat.recentAbsences.length > 0 ? `
                                    <div class="mt-2 text-xs text-red-600">
                                        Últimas ausencias: ${stat.recentAbsences.length}
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderParticipationReport(stats) {
        const students = Object.values(stats).sort((a, b) => b.averageScore - a.averageScore);
        
        return `
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-4">Estadísticas de Participación</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    ${students.map(stat => `
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <div class="flex items-center mb-2">
                                <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                                    <span class="text-xs font-medium">${stat.student.name.split(' ').map(n => n[0]).join('')}</span>
                                </div>
                                <h5 class="font-medium">${stat.student.name}</h5>
                            </div>
                            <div class="space-y-1 text-sm">
                                <div class="flex justify-between">
                                    <span>Promedio de participación:</span>
                                    <span class="font-medium ${stat.averageScore >= 8 ? 'text-green-600' : stat.averageScore >= 6 ? 'text-amber-600' : 'text-red-600'}">
                                        ${stat.averageScore.toFixed(1)}/10
                                    </span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Total participaciones:</span>
                                    <span class="font-medium">${stat.totalParticipations}</span>
                                </div>
                                ${Object.entries(stat.participationByType).length > 0 ? `
                                    <div class="mt-2">
                                        <p class="text-xs text-gray-600 mb-1">Tipos de participación:</p>
                                        ${Object.entries(stat.participationByType).map(([type, count]) => `
                                            <span class="inline-block bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded mr-1 mb-1">
                                                ${type}: ${count}
                                            </span>
                                        `).join('')}
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderStudentAnalytics(analytics) {
        return `
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-4">Ranking de Rendimiento General</h4>
                <div class="overflow-x-auto">
                    <table class="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estudiante</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asistencia</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Participación</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rendimiento</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            ${analytics.map((student, index) => `
                                <tr class="${index < 3 ? 'bg-green-50' : ''}">
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                                                <span class="text-xs font-medium">${student.student.name.split(' ').map(n => n[0]).join('')}</span>
                                            </div>
                                            <div>
                                                <div class="text-sm font-medium text-gray-900">${student.student.name}</div>
                                                <div class="text-sm text-gray-500">${student.student.studentId}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="text-sm font-medium ${student.attendanceRate >= 80 ? 'text-green-600' : student.attendanceRate >= 60 ? 'text-amber-600' : 'text-red-600'}">
                                            ${student.attendanceRate.toFixed(1)}%
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="text-sm font-medium text-purple-600">
                                            ${student.averageParticipationScore.toFixed(1)}/10
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <div class="w-16 bg-gray-200 rounded-full h-2 mr-2">
                                                <div class="bg-blue-600 h-2 rounded-full" style="width: ${student.overallPerformance}%"></div>
                                            </div>
                                            <span class="text-sm font-medium text-gray-900">
                                                ${student.overallPerformance.toFixed(1)}
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }

    renderClassOverview(overview) {
        return `
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-4">Resumen por Clase</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${Object.values(overview).map(classData => `
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <h5 class="font-semibold text-lg mb-4">${classData.class.name}</h5>
                            <div class="space-y-3">
                                <div class="flex justify-between">
                                    <span class="text-sm text-gray-600">Total estudiantes:</span>
                                    <span class="font-medium">${classData.totalStudents}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-sm text-gray-600">Sesiones registradas:</span>
                                    <span class="font-medium">${classData.totalSessions}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-sm text-gray-600">Asistencia promedio:</span>
                                    <span class="font-medium text-green-600">${classData.averageAttendance.toFixed(1)}%</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-sm text-gray-600">Participación promedio:</span>
                                    <span class="font-medium text-purple-600">${classData.averageParticipation.toFixed(1)}/10</span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Funciones de utilidad
    exportData() {
        const data = {
            students: this.students,
            classes: this.classes,
            attendanceRecords: this.attendanceRecords,
            participationRecords: this.participationRecords,
            classSessions: this.classSessions,
            exportDate: new Date().toISOString()
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `edutrack-data-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        this.showNotification('Datos exportados exitosamente', 'success');
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg text-white slide-in ${
            type === 'success' ? 'bg-green-600' : 
            type === 'warning' ? 'bg-amber-600' : 
            type === 'error' ? 'bg-red-600' : 'bg-blue-600'
        }`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    animateElement(elementId, animation) {
        const element = document.getElementById(elementId) || document.querySelector(`.${elementId}`);
        if (element) {
            element.classList.add(animation);
            setTimeout(() => element.classList.remove(animation), 1000);
        }
    }

    animateModal(modalId) {
        const modal = document.getElementById(modalId);
        const content = modal.querySelector('.bg-white');
        
        anime({
            targets: content,
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutCubic'
        });
    }
}

// Inicializar el sistema cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    window.eduTrack = new EduTrackSystem();
    
    // Agregar efectos visuales adicionales
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach((card, index) => {
        anime({
            targets: card,
            translateY: [20, 0],
            opacity: [0, 1],
            duration: 600,
            delay: index * 100,
            easing: 'easeOutCubic'
        });
    });
    
    // Efecto de escritura para el título
    const title = document.querySelector('h1');
    if (title) {
        title.style.opacity = '0';
        anime({
            targets: title,
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutCubic'
        });
    }
});