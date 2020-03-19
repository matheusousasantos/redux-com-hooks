import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function CourseList() {

//  - Quantidade de cursos que eu quero retornar
    const qty = 3;

//  - Recebo como parâmetro todo o estado da minha aplicação.
    const courses = useSelector( 
            state => state.data.slice(0, qty),

//          Toda vez que essa variável alterar seu valor atualize a lista.
            [qty]
        );

    const dispatch = useDispatch();

    function addCourseAction( title ) {

//      A action é um objeto por isso o uso do ' {} '.
        return { type: 'ADD_COURSE', title }
    }

    function addCourse() {
        dispatch(addCourseAction("Sublime"));
    }

    return(

        <>
            <ul>
            { courses.map( course => (
                <li key={ course }>{ course }</li>
            ))}
            </ul>
            <button type="button" onClick={ addCourse }>Adicionar curso</button>
        </>
    );

}

//A forma que fizemos antes:
//export default connect()(CourseList);