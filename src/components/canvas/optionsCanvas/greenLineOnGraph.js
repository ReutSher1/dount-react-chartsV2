
export const line = (ctx, height) => {

  ctx.beginPath();
  ctx.moveTo(height / 2, height / 5);   //draw line
  ctx.lineTo(height / 1.73, height / 3.8);
  ctx.strokeStyle = '#019b64';        //color line
  ctx.lineWidth = height / 50;                    //bold line
  ctx.stroke();
  ctx.arc(height / 2, height / 5, height / 100, 0, 2 * Math.PI); //dot on line
  ctx.arc(height / 1.73, height / 3.8, height / 100, 0, 2 * Math.PI);
  ctx.fillStyle = '#019b64'                                     //dot color
  ctx.fill();

}