export const drawTriangle=(context, left_padding, top_padding, height, width)=> {
    context.beginPath();
    context.moveTo(0 + left_padding, 0 + height + top_padding);
    context.lineTo(width / 2 + left_padding, 0 + top_padding);
    context.lineTo(width + left_padding, 0 + height + top_padding);
    context.lineTo(0 + left_padding, 0 + height + top_padding);
  context.fill()
}