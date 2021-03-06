import React from 'react';

const notes = `how many pixels to skip when creating the palette. Default is 10. Less is better, but slower.
By adjusting the sample interval, you can either produce extremely high-quality images slowly, or produce good images in reasonable times.
With a sampleInterval of 1, the entire image is used in the learning phase, while with an interval of 10,
a pseudo-random subset of 1/10 of the pixels are used in the learning phase. A sampling factor of 10 gives a
substantial speed-up, with a small quality penalty.
`;


export default function Doc () {
  return (<div className="alert alert-success mt-5" role="alert">
    <h4 className="alert-heading"><i className="fas fa-info"></i> Settings</h4>
    <hr />
    <p className="mt-0"><strong>Interval: </strong>The amount of time (in seconds) to wait between each frame capture.</p>
    <p className="m-0"><strong>Number of Frames: </strong>The number of frames to use to create the animated GIF.</p>
    <p className="mt-0 text-muted fs-12">Note: Each frame is captured every 100 milliseconds of a video and every ms for existing images</p>
    <p className="mt-0"><strong>Frame duration: </strong>The amount of time (10 = 1s) to stay on each frame.</p>
    <p className="m-0"><strong>Sample interval: </strong>{notes}</p>
  </div>
  )
}
