//加载界面时设置滑动条样式
window.onload = function(){
    let grade_slider = document.getElementById('GRADE_slider')
    let max = grade_slider.max
    let min = grade_slider.min
    let value = grade_slider.value
    grade_slider.style.background = 'linear-gradient(to right, #059CFA, #ebeff4 ' + (value - min) / ((max-min)/100) + '%, #ebeff4)'

    document.getElementById('grade').innerText = value


    let gpa_slider = document.getElementById('GPA_slider')
    max = gpa_slider.max
    min = gpa_slider.min
    value = gpa_slider.value
    gpa_slider.style.background = 'linear-gradient(to right, #059CFA, #ebeff4 ' + (value - min) / ((max-min)/100) + '%, #ebeff4)'

    document.getElementById('gpa').innerText = value
}


//滑动时动态更改滑动条样式
$.fn.RangeSlider = function(cfg){
    this.sliderCfg = {
        min: cfg && !isNaN(parseFloat(cfg.min)) ? Number(cfg.min) : null,
        max: cfg && !isNaN(parseFloat(cfg.max)) ? Number(cfg.max) : null,
        step: cfg && Number(cfg.step) ? cfg.step : 1,
        callback: cfg && cfg.callback ? cfg.callback : null,
        text: cfg && cfg.text? cfg.text:null
    };

    var $input = $(this);
    var min = this.sliderCfg.min;
    var max = this.sliderCfg.max;
    var step = this.sliderCfg.step;
    var callback = this.sliderCfg.callback;
    var text = this.sliderCfg.text;

    $input.attr('min', min)
        .attr('max', max)
        .attr('step', step)
        .attr('text',text);

    $input.bind("input", function(e){
        $input.attr('value', this.value);

        if(text!=null){
            $(text).text(this.value)  //动态更改文字
        }

        $input.css( 'background', 'linear-gradient(to right, #059CFA, #ebeff4 ' + (this.value - min) / ((max-min)/100) + '%, #ebeff4)' );
        if ($.isFunction(callback)) {
            callback(this);
        }
    });

};