import React from 'react';
import '../styles/doc.css'

const notes = `
interval : The amount of time (in seconds) to wait between each frame capture

number of Frames: The number of frames to use to create the animated GIF
Note: Each frame is captured every 100 milliseconds of a video and every ms for existing images

frame duration : The amount of time (10 = 1s) to stay on each frame

sample interval : how many pixels to skip when creating the palette. Default is 10. Less is better, but slower.
By adjusting the sample interval, you can either produce extremely high-quality images slowly, or produce good images in reasonable times.
With a sampleInterval of 1, the entire image is used in the learning phase, while with an interval of 10,
a pseudo-random subset of 1/10 of the pixels are used in the learning phase. A sampling factor of 10 gives a
substantial speed-up, with a small quality penalty.
`;


export default function Doc() {
  return (
    <div className="container py-5"><pre className="mb-3"><code>{notes}</code></pre></div>
  )
}
