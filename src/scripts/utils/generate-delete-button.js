const createDeleteSVG = () => {
  const commentDelete = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );

  commentDelete.setAttribute("fill", "none");
  commentDelete.setAttribute("viewBox", "0 0 512 512");
  commentDelete.setAttribute("stroke", "none");

  commentDelete.classList.add("comments__delete");

  const pathElement1 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  const pathElement2 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );

  const pathElement3 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  const pathElement4 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );

  const pathData1 = `M436,60h-75V45c0-24.813-20.187-45-45-45H196c-24.813,0-45,20.187-45,45v15H76c-24.813,0-45,20.187-45,45
  c0,19.928,13.025,36.861,31.005,42.761L88.76,470.736C90.687,493.875,110.385,512,133.604,512h244.792
  c23.22,0,42.918-18.125,44.846-41.271l26.753-322.969C467.975,141.861,481,124.928,481,105C481,80.187,460.813,60,436,60z M181,45
  c0-8.271,6.729-15,15-15h120c8.271,0,15,6.729,15,15v15H181V45z M393.344,468.246c-0.643,7.712-7.208,13.754-14.948,13.754
  H133.604c-7.739,0-14.305-6.042-14.946-13.747L92.294,150h327.412L393.344,468.246z M436,120H76c-8.271,0-15-6.729-15-15
  s6.729-15,15-15h360c8.271,0,15,6.729,15,15S444.271,120,436,120z`;
  const pathData2 = `M195.971,436.071l-15-242c-0.513-8.269-7.67-14.558-15.899-14.043c-8.269,0.513-14.556,7.631-14.044,15.899l15,242.001
  c0.493,7.953,7.097,14.072,14.957,14.072C189.672,452,196.504,444.684,195.971,436.071z`;
  const pathData3 = `M256,180c-8.284,0-15,6.716-15,15v242c0,8.284,6.716,15,15,15s15-6.716,15-15V195C271,186.716,264.284,180,256,180z`;
  const pathData4 = `M346.927,180.029c-8.25-0.513-15.387,5.774-15.899,14.043l-15,242c-0.511,8.268,5.776,15.386,14.044,15.899
  c8.273,0.512,15.387-5.778,15.899-14.043l15-242C361.483,187.659,355.196,180.541,346.927,180.029z`;

  pathElement1.setAttribute("d", pathData1);

  pathElement2.setAttribute("d", pathData2);

  pathElement3.setAttribute("d", pathData3);

  pathElement4.setAttribute("d", pathData4);

  commentDelete.append(pathElement1);
  commentDelete.append(pathElement2);
  commentDelete.append(pathElement3);
  commentDelete.append(pathElement4);

  return commentDelete;
};

export default createDeleteSVG;
