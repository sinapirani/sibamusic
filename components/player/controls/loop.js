import { useState } from "react"


const PlayerLoop = ({music}) => {

    const [isLoop, setLoop] = useState(false)

    const click = () => {
        if(music?.current){
            if(isLoop){
                music.current.loop = false
            }else{
                music.current.loop = true;
            }
            setLoop(!isLoop);
        }
    }

    return(
        <img onClick={click} style={{opacity: isLoop? '1' : '0.2' }} src="/player/loop.png" height={30} width={30} alt="" />
    )

}
export default PlayerLoop