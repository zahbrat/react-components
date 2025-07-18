import { Greeting } from './Greeting'
import { Message } from './Message'
import {Button} from './Button'

const App = () => {
  return (
    <>
      <Greeting name="Мстислав" />
      <Message text="A B C D E F G H I J K L M N O P Q R S T U V W X Y Z" />
      <Button onClick={() => console.log('=)')} />
    </>
  )
}

export default App;