'use client'

import Link from "next/link";
import { useParams } from "next/navigation";

export default function CourseDetails(){
    const params = useParams();
    const courseId = params.coursesId;

    return(
        <div>
            <h1> Curso: {courseId} </h1>
            <p> Detalhes sobre o curso {courseId} </p>
            <Link href={`/courses/${courseId}/modules}`}> Ver módulos do curso </Link>
        </div>
    )
}