import { Model, Table, Column, DataType, ForeignKey, Default } from 'sequelize-typescript'
// import { Lesson, Student } from './index.js'
import models from './index.js'
import type { InferAttributes } from 'sequelize'

@Table({ tableName: 'lesson_students', timestamps: false })
export class LessonStudent extends Model<InferAttributes<LessonStudent>> {
  // @ForeignKey(() => Lesson)
  // @Column(DataType.INTEGER)
  // declare lessonId: number

  // @ForeignKey(() => Student)
  // @Column(DataType.INTEGER)
  // declare studentId: number

  @ForeignKey(() => models.Lesson)
  @Column({ field: 'lesson_id', type: DataType.INTEGER })
  declare lessonId: number

  @ForeignKey(() => models.Student)
  @Column({ field: 'student_id', type: DataType.INTEGER })
  declare studentId: number

  @Default(false)
  @Column(DataType.BOOLEAN)
  declare visit: boolean
}
