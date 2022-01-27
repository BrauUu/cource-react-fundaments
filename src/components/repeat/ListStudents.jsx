import React from 'react'

import studentsList from '../../data/students'

export default props => {

  return (
    <div>
      <ul style={{"listStyle": "none"}}>
        {
          studentsList.map((student) => {
            return <li key={student.id}>{student.id}) {student.name} - {student.grade}</li>
          })
        }
      </ul>
    </div>
  )
}