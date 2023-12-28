import './index.scss'

export default function Modal({ isOpen, isClose, titulo, descricao } ) {

  if(isOpen){
    return (
      <>
        <div className="modal">
          <div className="modal__content">
            <h1>{titulo}</h1>
            <p>{descricao}</p>
            <div className="modal__content--btnYN">
              <button onClick={() => isClose()} className='btn'>não</button>
              <button disabled onClick={() => isClose()} className='btn btnDisabled'>sim</button>
            </div>
          </div>
        </div>
      </>
    )
  }else{
    return null;
  }
}