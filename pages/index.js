import Code from './Code.mdx'
import Simple from './Simple.mdx'
function index(){
  const style = {width: '700px', margin:'auto '}
  return (
      <div  style={style}> 
      <Code/>
      <Simple/>
      </div>
  )
}
export default index;
