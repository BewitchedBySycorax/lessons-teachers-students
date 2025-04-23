import { Model, Table, Column, DataType, ForeignKey } from 'sequelize-typescript'
// import { Lesson, Teacher } from './index.js'
import models from './index.js'
import type { InferAttributes } from 'sequelize'

@Table({ tableName: 'lesson_teachers', timestamps: false })
export class LessonTeacher extends Model<InferAttributes<LessonTeacher>> {
  // @ForeignKey(() => Lesson)
  // @Column(DataType.INTEGER)
  // declare lessonId: number

  // @ForeignKey(() => Teacher)
  // @Column(DataType.INTEGER)
  // declare teacherId: number

  @ForeignKey(() => models.Lesson)
  @Column({ field: 'lesson_id', type: DataType.INTEGER })
  declare lessonId: number

  @ForeignKey(() => models.Teacher)
  @Column({ field: 'teacher_id', type: DataType.INTEGER })
  declare teacherId: number
}
