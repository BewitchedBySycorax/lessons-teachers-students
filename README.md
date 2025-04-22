npm ci --prefer-offline
pg_dump -U postgres -h localhost -p 5432 lessons_teachers_students_db
