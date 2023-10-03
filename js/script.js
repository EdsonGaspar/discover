function toggleMode(){
  const html = document.documentElement
  /** 
   * Está logica pode ser substituida pelo (toggle)
  if(html.classList.contains('light')){
    html.classList.remove('light')
  }else{
    html.classList.add('light')
  }
  */
 html.classList.toggle('light')
}
