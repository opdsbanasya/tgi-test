import { GALLERY_DATA } from "../utils/constants"
import Facility from "./Facility"

const Gallery = () => {
  return (
    <div className="flex items-center justify-start xl:gap-5 lg:gap-10 md:gap-8 gap-5 flex-wrap">
        {GALLERY_DATA.map((item, index) => (
            <Facility key={index} item={item} gallery={true} />
        ))}
    </div>
  )
}

export default Gallery
