const Flex = ({className, children}) => {
  return (
    <div className={`${className} flex items-center`}>{children}</div>
  )
}

export default Flex