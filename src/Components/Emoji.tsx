import bullseye from "../assets/bullseye_emoji.png"
import thumbsUp from "../assets/thumbs-up_emoji.png"
import meh from "../assets/meh_emoji.png"
import { ImageProps, Image } from "@chakra-ui/react"

interface Props{
    rating:number;
}

const Emoji = ({rating}: Props) => {
    if (rating < 3) return null;

    const emojiMap: {[key: number]: ImageProps} = {
        3: {src: meh, alt: `meh`, boxSize: `25px`},
        4: {src: thumbsUp, alt: "reccommended", boxSize: `25px`},
        5: {src: bullseye, alt: "exceptional", boxSize: `25px`}
    }

  return (
   <Image {...emojiMap[rating]} marginTop={1}/>
  )
}

export default Emoji