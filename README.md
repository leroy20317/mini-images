# mini-images

基于gulp的压缩图片

总共有三种方式  `imagemin`  `tinypng`  `tinypng-nokey`

|组件名称	|组件功能	|图片压缩比例	|优势	|劣势|
|  ----  | ----  | ----  | ----  | ----  |
|gulp-imagemin	|压缩png、jpg、gif和svg	|各种格式压缩比例大概在10%-20%,有些小图有时不能压缩	|可以压缩的常用格式多，结合imagemin-pngquant 可以提升总体压缩比	|总体压缩比例适中，压缩速度快|
|gulp-tinypng	|压缩png，jpg	|jpg压缩比在10%-20%， png50%以上	|png压缩比例高	|每个月限制500张，不能压缩gif，压缩过程整体速度取决于网速，慢|
|gulp-tinypng-nokey	|压缩png，jpg	|jpg压缩比在10%-20%， png50%以上	|png压缩比例高，并且没有限制张数	|不能压缩gif，压缩过程整体速度取决于网速，慢|