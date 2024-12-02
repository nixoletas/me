const Shadown = () => {
    return (
        <div
    className="grid-mask"
    style={{
        border: '1px solid black',
        boxShadow: '0 40px 1000px rgba(0, 0, 0, 0.5)',
      filter: 'blur(4px)',
      width: '100%',
      backgroundColor: 'black',
      position: 'absolute',
      bottom: '0',
      justifyContent: 'center',
      zIndex: '1',
      // boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)', // Adiciona a sombra
    }}
  ></div>
    )
}

export default Shadown;