import cv from "opencv-ts";

cv.onRuntimeInitialized = () => {
    let mat = new cv.Mat(2, 3, cv.CV_16UC1);
    console.log('cols =', mat.cols, '; rows =', mat.rows);
    console.log(mat.data16S);

    cv.transpose(mat, mat);
    console.log('cols =', mat.cols, '; rows =', mat.rows);
    console.log(mat.data16S);
}