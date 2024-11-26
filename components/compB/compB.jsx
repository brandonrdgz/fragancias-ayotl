return ({ compC } , args) => {
  const [txt] = args;
  return (
    <>
      ${compC({TEXT: txt})}
    </>
  )
}