import React, { Suspense } from 'react'

function Loadable(Component) {
  return function (props){
    return (
      <Suspense fallback={<div>loading...</div>}>
        <Component {...props}>  </Component>
      </Suspense>
      )
  }

}

export default Loadable