# Base de Datos - Sistema de Asistencia y Participación

## Estructura de Base de Datos (LocalStorage)

### 1. Tabla: students
```javascript
{
  id: "student_001",
  name: "Juan Pérez",
  email: "juan.perez@email.com",
  studentId: "2024001",
  classGroup: "10A",
  enrollmentDate: "2024-01-15",
  status: "active"
}
```

### 2. Tabla: classes
```javascript
{
  id: "class_001",
  name: "Matemáticas Avanzadas",
  subject: "MAT",
  teacherId: "teacher_001",
  schedule: "Lunes 8:00-10:00",
  semester: "2024-1",
  maxStudents: 30
}
```

### 3. Tabla: attendance_records
```javascript
{
  id: "att_001",
  studentId: "student_001",
  classId: "class_001",
  date: "2024-11-20",
  status: "present", // present, absent, late, excused
  checkInTime: "08:05",
  notes: "Llegó 5 minutos tarde"
}
```

### 4. Tabla: participation_records
```javascript
{
  id: "part_001",
  studentId: "student_001",
  classId: "class_001",
  date: "2024-11-20",
  score: 8, // 1-10 scale
  type: "respuesta", // respuesta, pregunta, participacion_activa, presentacion
  description: "Respondió correctamente sobre derivadas",
  teacherNotes: "Muy buena participación"
}
```

### 5. Tabla: class_sessions
```javascript
{
  id: "session_001",
  classId: "class_001",
  date: "2024-11-20",
  startTime: "08:00",
  endTime: "10:00",
  topic: "Derivadas parciales",
  status: "completed"
}
```

## Índices y Relaciones

- **students.classGroup** → class_groups.id
- **attendance_records.studentId** → students.id
- **attendance_records.classId** → classes.id
- **participation_records.studentId** → students.id
- **participation_records.classId** → classes.id
- **class_sessions.classId** → classes.id

## Funciones de Base de Datos

### Operaciones CRUD
1. **createStudent()** - Agregar nuevo estudiante
2. **createClass()** - Crear nueva clase
3. **recordAttendance()** - Registrar asistencia
4. **recordParticipation()** - Registrar participación
5. **getAttendanceReport()** - Obtener reporte de asistencia
6. **getParticipationReport()** - Obtener reporte de participación
7. **getStudentAnalytics()** - Análisis individual del estudiante
8. **getClassAnalytics()** - Análisis general de la clase

### Consultas Principales
1. Asistencia por fecha y clase
2. Participación acumulada por estudiante
3. Estadísticas de asistencia por período
4. Ranking de participación
5. Alertas de baja asistencia
6. Reportes de alerta temprana