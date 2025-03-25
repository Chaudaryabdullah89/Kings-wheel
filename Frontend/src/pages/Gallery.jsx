import React from 'react'
import Globalhero from '../components/Globalhero'
import KingDiffrence from '../components/KingDiffrence'
import Next from '../components/Next'
const Gallery = () => {
  return (
    <div>
        <Globalhero
          heading="Gallery"
          paragraph="They say a picture is worth a thousand PSI. Scroll through to see real-world installs, side-by-side project comparisons, and our product in action on sites across Texas."
          data-aos="fade-up"
        />
        <KingDiffrence />
        <div>
        </div>
        <Next />
    </div>
  )
}

export default Gallery
