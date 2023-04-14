import React from 'react'

const style = {
  rodape: {
    width: '100%'
  }
}

const Rodape = () => {
  return (

    <div style={style.rodape}className='bg-secondary text-white text-center position-fixed bottom-0'>
      <p>Rodapé</p>
    </div>

  )
}

export default Rodape