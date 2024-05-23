import { Routes } from 'react-router-dom'
import Navbar from '../Navbar'
import photo from './images/Preperation.png'
//import { ReactComponent as MathIcon } from "./mathicon.svg";
//import { ReactComponent as DiscreteMathIcon } from "./discretemath.svg";
//import { ReactComponent as LectureIcon } from "./lectureicon.svg";
//<MathIcon classname = "mathicon"/>
//<DiscreteMathIcon classname = "discretemathicon"/>
//<LectureIcon classname = "lectureicon"/>

//<img src={MathIcon} alt="PhotoMain"/>

export default function Main() {
  return (
    <div>
      <div>
        <h1 className="h1">
          {' '}
          Університетські тести. <br />
          Підготовка до іспитів
        </h1>
        <p className="p"> Навчання та підготовка до іспитів
        є важливими етапами у житті студента. 
        Підготовка включає в себе різні методи:
        вивчення матеріалу,
        вирішення завдань та тестів. 
        Успішна підготовка допомагає засвоїти матеріал, 
        збільшити рівень розуміння теми та
        забезпечити високі результати на іспитах.Сподіваємось, що наш сайт допоможе вам в цьому.
        Ми забеззпечимо вас лекціями і інформацією по певних дисциплінах, яку ви можете вивчити і пізніше закріпити проходженням тестів.  
       </p>
        <div className="green-circle">
          <div>
            <img src={photo} className="formatPhoto" />
          </div>
        </div>
      </div>
      <div>
        <h1 className="opportunies">Можливості для навчання</h1>
      </div>
      <div className="rectangle1">
        Вища математика
        <ul style={{ lineHeight: '2.0' }}>
          <li>Матриці; </li>
          <li>Аналітична геометрія;</li>
          <li>Функції;</li>
        </ul>
        <a href="http://localhost:5173/math">Докладніше</a>
      </div>

      <div className="rectangle2">
        Дискретна математика
        <ul style={{ lineHeight: '2.0' }}>
          <li>Множини; </li>
          <li>Дерева;</li>
          <li>Графи;</li>
        </ul>
        <a href="http://localhost:5173/discretemath">Докладніше</a>
      </div>

      <div className="rectangle3">
        Лекції
        <ul style={{ lineHeight: '2.0' }}>
          <li>Дискретна математика; </li>
          <li>Архітектура комп'ютерів;</li>
        </ul>
        <a href="http://localhost:5173/lectures">Докладніше</a>
      </div>
    </div>
  )
}
