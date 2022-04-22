import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Course from "App/Models/Course"

export default class CoursesController {
    public async index(){
        const courses = [
            {
              id:1,
              courseName: 'Mathematics',
              duration : 120,
              price: 10
            },
            {
              id:1,
              courseName: 'Physics',
              duration : 120,
              price: 10
            }
          ]
          return {courses}
    }
    public async store({request, response}: HttpContextContract ) {
        const data = request.only(['course_name', 'duration', 'price'])
        const course = await Course.create (data)
        return response.status(200).json(course)

        await course.save()
        console.log(course.$isPersisted)


    }
}
