const Header = (props) =>{
    return (
      <div>
        <h1>{props.name}</h1>
      </div>
    )
  }
  const Part = (props)=>{
    return (
    <div>
      <p>{props.part} has : {props.exercise}</p>
    </div>)
  }
  const Content = ({parts}) =>{
    return(
      <div>
      {parts.map(prt => <Part key={prt.id} part={prt.name} exercise={prt.exercises}/>)}
       </div>
    )
  }
  
  const Course =({course})=>{
    return (
      <div>
    <Header name={course.name}/>
    <Content parts={course.parts}/>
    <Total parts={course.parts}/>
    </div>
    )
  }
  const Total = ({parts}) =>{ 
    const total = 
  
    parts.reduce((s, p) => s + p.exercises,0)
    return (
    <div>
      <p>total exercises = {total}</p>
    </div>
    )
  }
  
export default Course   