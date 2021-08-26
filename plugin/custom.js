$(document).ready(function(){

  $("#myMenu a").click(function () {
    const theid = $(this).attr("href");
    const val = $(theid).offset().top - $("#myMenu").innerHeight() + 1;
    // const val = $(theid).offset().top;
    $("html").animate(
      { scrollTop: val }, 1000, "swing"
    );
  });

  function spy() { //檢查目前滾動位置與對應MENU之ACTIVE
    const nowat = $(document).scrollTop();
    $("section").each(function () {
      const
        id = $(this).attr('id'), // id = this.id,
        offset = $(this).offset().top - $("#myMenu").innerHeight(),
        height = $(this).innerHeight();

      if (offset <= nowat && nowat < offset + height) { //目前高度落於該section內
        $('#myMenu a').not(`a[href='#${id}']`).removeClass('active');
        $(`#myMenu a[href='#${id}']`).addClass('active');
      }
    });
  }
  spy();

  $(document).scroll(function(){
    spy();
  });

  $(window).resize();
  spy();

// nav
// ?.classList.remove('Show');
    let p = document.querySelector('.parent');
    p.addEventListener('mouseover',function(){
      let pc = document.querySelector('.productChild');
      pc.style.display = 'block';
      pc.addEventListener('mouseover',function(){
        pc.style.display = 'block';
      })
    })
    p.addEventListener('mouseout',function(){
      let pc = document.querySelector('.productChild');
      pc.style.display = 'none';
      pc.addEventListener('mouseout',function(){
        pc.style.display = 'none';
      })
    })












})